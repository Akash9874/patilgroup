"use client";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import './IndiaMap.css';

type Pin = { x: number; y: number; label: string };

const IndiaMap: React.FC = () => {
  const [svgMarkup, setSvgMarkup] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null);

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
    // Attach pointer events directly to state groups/paths with IN-XX ids
    const stateNodes = Array.from(svgEl.querySelectorAll('[id^="IN-"]')) as Element[];
    const enter = (e: Event) => {
      const id = (e.currentTarget as Element).getAttribute('id');
      if (id) setHoveredStateId(id.toUpperCase());
    };
    const leave = () => setHoveredStateId(null);
    stateNodes.forEach((el) => {
      el.addEventListener('pointerenter', enter);
      el.addEventListener('pointerleave', leave);
    });
    return () => {
      stateNodes.forEach((el) => {
        el.removeEventListener('pointerenter', enter);
        el.removeEventListener('pointerleave', leave);
      });
    };
  }, [svgMarkup]);

  // Pins defined as absolute percentages of the full SVG/container
  const pinsByStateAbsolute: Record<string, Pin[]> = useMemo(
    () => ({
      'IN-PB': [ { x: 21, y: 12, label: 'RUPNAGAR' } ],
      'IN-HP': [
        { x: 29, y: 18, label: 'PATHRI' },
        { x: 31.5, y: 22, label: 'SHOLAKA' },
        { x: 29, y: 27, label: 'BHARATPUR' },
      ],
      'IN-UT': [ { x: 40, y: 27, label: 'BHURWAL' } ],
    }),
    []
  );

  const activePins: Pin[] = useMemo(() => {
    if (!hoveredStateId) return [];
    return pinsByStateAbsolute[hoveredStateId] || [];
  }, [hoveredStateId, pinsByStateAbsolute]);
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
