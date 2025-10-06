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
    // Use pointerover (bubbling) to detect the closest parent state group/path with IN-XX id
    const onOver = (e: Event) => {
      const target = e.target as Element | null;
      if (!target) return;
      const stateEl = target.closest('[id^="IN-"]');
      const id = stateEl?.getAttribute('id');
      if (id) setHoveredStateId(id);
    };
    const onLeave = () => {
      setHoveredStateId(null);
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



  // Compute all pins for all states at once
  const activePins: Pin[] = useMemo(() => {
    const pins: Pin[] = [];
    
    // Predefined positions for each state's pins (as percentage of container)
    // Adjusted to ensure pins stay within the map boundaries
    const statePositions: Record<string, { x: number; y: number }> = {
      'IN-UT': { x: 25, y: 25 },      // Uttarakhand - North
      'IN-AP': { x: 25, y: 77 },      // Andhra Pradesh - Southeast coast  
      'IN-BR': { x: 45, y: 40 },      // Bihar - East
      'IN-WB': { x: 48, y: 47 },      // West Bengal - East
      'IN-TG': { x: 27, y: 65 },      // Telangana - South-central
      'IN-OD': { x: 40, y: 56 },      // Odisha - East coast
      'IN-AS': { x: 55, y: 39 },      // Assam - Northeast (moved left from edge)
      'IN-UP': { x: 28, y: 33 },      // Uttar Pradesh - North-central
      'IN-RJ': { x: 15, y: 37 },      // Rajasthan - Northwest
      'IN-CT': { x: 35, y: 50 },      // Chhattisgarh - Central-east
      'IN-JH': { x: 42, y: 48 },      // Jharkhand - East
      'IN-HR': { x: 20, y: 28 },      // Haryana - North
      'IN-GJ': { x: 8, y: 50 },      // Gujarat - West
      'IN-KA': { x: 20, y: 80 },      // Karnataka - Southwest
      'IN-TN': { x: 24, y: 89 },      // Tamil Nadu - South
      'IN-DL': { x: 22, y: 32 },      // Delhi - North
      'IN-MP': { x: 25, y: 50 },      // Madhya Pradesh - Central
    };

    Object.entries(labelsByState).forEach(([stateId, labels]) => {
      const statePos = statePositions[stateId];
      if (!statePos || labels.length === 0) return;
      
      labels.forEach((label, idx) => {
        // For states with multiple locations, spread them horizontally and vertically
        let xOffset = 0;
        let yOffset = 0;
        
        // Special handling for states with multiple locations
        if (stateId === 'IN-TG' && labels.length > 1) {
          // Telangana - spread horizontally
          xOffset = (idx - 1) * 3;
          yOffset = idx * 1.5;
        } else if (stateId === 'IN-AP' && labels.length > 1) {
          // Andhra Pradesh - one north, one south
          if (label === 'Bobbili') {
            yOffset = -3; // Northern AP
          } else if (label === 'Kovvur') {
            yOffset = 2; // Southern AP
          }
        } else if (stateId === 'IN-AS' && labels.length > 1) {
          // Assam - spread horizontally
          xOffset = (idx - 0.5) * 4;
        } else if (stateId === 'IN-KA' && labels.length > 1) {
          // Karnataka - Tumkur near Bangalore, Hubli northwest
          if (label === 'Hubli') {
            xOffset = -3;
            yOffset = -2;
          }
        } else {
          // Default stacking for other states with multiple locations
          yOffset = idx * 2;
        }
        
        pins.push({
          x: statePos.x + xOffset,
          y: statePos.y + yOffset,
          label
        });
      });
    });
    
    return pins;
  }, [labelsByState]);
  return (
    <div className="map-container" aria-label="India map" ref={containerRef}>
      {/* Enhanced Mobile Instructions */}
      <div className="md:hidden text-center mb-4">
        <p className="text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1 inline-flex items-center gap-1">
          <div className="w-2 h-2 bg-[#F2913F] rounded-full animate-pulse"></div>
          Tap locations to explore
        </p>
      </div>
      
      {/* Inline the SVG so we can style paths and hover states */}
      {svgMarkup && (
        <div
          className="map-inline-svg"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: svgMarkup }}
        />
      )}
      
      {/* Enhanced Pins overlay */}
      <div className="pins-overlay">
        {activePins.map((pin, idx) => (
          <div
            key={`${pin.label}-${idx}`}
            className="pin group"
            style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
            role="button"
            tabIndex={0}
            aria-label={`Location: ${pin.label}`}
          >
            <div className="dot" />
            <div className="label group-hover:scale-110 transition-transform duration-300">{pin.label}</div>
          </div>
        ))}
      </div>
      
      {/* Mobile Map Legend */}
      <div className="md:hidden mt-6 flex justify-center">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#F2913F] rounded-full"></div>
            <span className="text-xs text-gray-600 font-medium">Manufacturing Hub</span>
          </div>
          <div className="w-px h-4 bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#8A393B] rounded-full"></div>
            <span className="text-xs text-gray-600 font-medium">Project Site</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;
