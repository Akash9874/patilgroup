"use client";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import './IndiaMap.css';

type Pin = { x: number; y: number; label: string };

const IndiaMap: React.FC = () => {
  const [svgMarkup, setSvgMarkup] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null);
  const [pinCenter, setPinCenter] = useState<{ x: number; y: number } | null>(null);
  const [stateRectPct, setStateRectPct] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetch('/india.svg')
      .then((res) => res.text())
      .then((text) => {
        if (!isMounted) return;
        setSvgMarkup(text);
      })
      .catch(() => {
        // ignore; component will remain empty if fetch fails
      });
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const svgEl = containerRef.current.querySelector('svg');
    if (!svgEl) return;
    // Use pointerover (bubbling) to detect the closest parent state group/path with IN-XX id
    const onOver = (e: Event) => {
      const target = e.target as Element | null;
      if (!target) return;
      const stateEl = target.closest('[id^="IN-"]');
      const id = stateEl?.getAttribute('id');
      if (id) setHoveredStateId(id.toUpperCase());
    };
    const onLeave = () => {
      setHoveredStateId(null);
      setPinCenter(null);
    };
    svgEl.addEventListener('pointerover', onOver);
    svgEl.addEventListener('pointerleave', onLeave);
    return () => {
      svgEl.removeEventListener('pointerover', onOver);
      svgEl.removeEventListener('pointerleave', onLeave);
    };
  }, [svgMarkup]);

  // Labels per state (based on provided mapping). We compute positions dynamically at the hovered state's centroid.
  const labelsByState: Record<string, string[]> = useMemo(
    () => ({
      'IN-UT': ['Pathri'],
      'IN-AP': ['Bobbili', 'Kovvur'],
      'IN-BR': ['Gaya'],
      'IN-WB': ['Anara'],
      'IN-TG': ['Medchal', 'Kallakal', 'Wadiyaram'],
      'IN-OD': ['Kaipadar'],
      'IN-AS': ['Mirza', 'Bongaigaon'],
      'IN-UP': ['Burhwal'],
      'IN-RJ': ['Roopangarh'],
      'IN-CT': ['Kargi'],
      'IN-JH': ['Bokaro'],
      'IN-HR': ['Sholaka'],
      'IN-GJ': ['Udvada'],
      'IN-KA': ['Tumkur', 'Hubli'],
      'IN-TN': ['Tirumangalam'],
      'IN-DL': ['Delhi'],
      'IN-MP': ['Bhopal'],
      'IN-TR': [],
      'IN-MZ': [],
      'IN-NL': [],
      'IN-MN': [],
    }),
    []
  );

  // Optional per-state, per-label overrides: position as ratio within hovered state's bounding box
  const pinOverrides: Record<string, Record<string, { rx: number; ry: number }>> = useMemo(
    () => ({
      'IN-AP': {
        // Bobbili (Vizianagaram district, NE Andhra Pradesh) – near the top-right of the state
        Bobbili: { rx: 0.82, ry: 0.20 },
      },
    }),
    []
  );

  // When hovered state changes, compute the visual centroid to place pins
  useEffect(() => {
    if (!hoveredStateId) {
      setPinCenter(null);
      return;
    }
    if (!containerRef.current) return;
    const svgEl = containerRef.current.querySelector('svg') as SVGSVGElement | null;
    if (!svgEl) return;
    const stateEl = svgEl.querySelector(`#${hoveredStateId}`) as SVGGraphicsElement | null;
    if (!stateEl) return;
    // Compute center using DOMClientRect to avoid transform inconsistencies
    const stateRect = stateEl.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const cx = stateRect.left + stateRect.width / 2;
    const cy = stateRect.top + stateRect.height / 2;
    const cxPct = ((cx - containerRect.left) / containerRect.width) * 100;
    const cyPct = ((cy - containerRect.top) / containerRect.height) * 100;
    setPinCenter({ x: cxPct, y: cyPct });
    setStateRectPct({
      left: ((stateRect.left - containerRect.left) / containerRect.width) * 100,
      top: ((stateRect.top - containerRect.top) / containerRect.height) * 100,
      width: (stateRect.width / containerRect.width) * 100,
      height: (stateRect.height / containerRect.height) * 100,
    });
  }, [hoveredStateId]);

  const activePins: Pin[] = useMemo(() => {
    if (!hoveredStateId) return [];
    const labels = labelsByState[hoveredStateId] || [];
    if (labels.length === 0) return [];

    const overrides = pinOverrides[hoveredStateId] || {};
    const pins: Pin[] = [];
    labels.forEach((label, idx) => {
      const ov = overrides[label];
      if (ov && stateRectPct) {
        const x = stateRectPct.left + ov.rx * stateRectPct.width;
        const y = stateRectPct.top + ov.ry * stateRectPct.height;
        pins.push({ x, y, label });
      } else if (pinCenter) {
        const spacing = 2.5;
        const startY = pinCenter.y - ((labels.length - 1) * spacing) / 2;
        pins.push({ x: pinCenter.x, y: startY + idx * spacing, label });
      }
    });
    return pins;
  }, [hoveredStateId, labelsByState, pinOverrides, stateRectPct, pinCenter]);
  return (
    <div className="map-container" aria-label="India map" ref={containerRef}>
      {/* Inline the SVG so we can style paths and hover states */}
      {svgMarkup && (
        <div
          className="map-inline-svg"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: svgMarkup }}
        />
      )}
      {/* Pins overlay, shown only when hovering a state with configured pins */}
      {activePins.length > 0 && (
        <div className="pins-overlay">
          {activePins.map((pin, idx) => (
            <div
              key={`${pin.label}-${idx}`}
              className="pin"
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
            >
              <div className="dot" />
              <div className="label">{pin.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IndiaMap;
