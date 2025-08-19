"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

const systemsData = [
  {
    title: 'Ballastless Track',
    description: 'Designed for high-availability metro corridors, these systems reduce downtime and structural fatigue in dense urban transit.',
    link: '/ballastless-track-urban-metro',
    image: '/ballasttrack.png'
  },

  {
    title: 'Patil RHEDA System',
    description: 'A specialized ballastless track system for viaducts and tunnels — developed in partnership with German engineering standards.',
    link: '/patil-rheda-system',
    image: '/26_mobile_RHEDA_plant.jpg'
  },
  {
    title: 'Precast Plinth',
    description: 'Factory-prepared plinth units that offer cleaner installation, reduced onsite time, and greater curve control.',
    link: '/precast-plinth',
    image: '/precast1.jpg'
  },
  
  {
    title: 'Flash Butt Welding of Rails',
    description: 'Our in-house welding plants handle high-precision rail panel fabrication using proven flash butt welding techniques.',
    link: '/flash-butt-welding-of-rails',
    image: '/flashbuttslider.jpeg'
  }
];

// Simple typewriter component that supports multiple colored segments and an optional line break
const TypewriterText: React.FC<{
  segments: { text: string; className?: string; lineBreakBefore?: boolean }[];
  typingSpeedMs?: number;
}> = ({ segments, typingSpeedMs = 40 }) => {
  const [segmentIndex, setSegmentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    const caretTimer = setInterval(() => setShowCaret((v) => !v), 500);
    return () => clearInterval(caretTimer);
  }, []);

  useEffect(() => {
    if (segmentIndex >= segments.length) return;
    const current = segments[segmentIndex].text;
    const timer = setTimeout(() => {
      if (charIndex < current.length) {
        setCharIndex((c) => c + 1);
      } else {
        setSegmentIndex((s) => s + 1);
        setCharIndex(0);
      }
    }, typingSpeedMs);
    return () => clearTimeout(timer);
  }, [charIndex, segmentIndex, segments, typingSpeedMs]);

  return (
    <span>
      {segments.map((seg, idx) => {
        const isCurrent = idx === segmentIndex;
        const isCompleted = idx < segmentIndex;
        const content = isCompleted
          ? seg.text
          : isCurrent
          ? seg.text.substring(0, charIndex)
          : '';
        return (
          <React.Fragment key={idx}>
            {seg.lineBreakBefore && <br />}
            <span className={seg.className}>{content}</span>
          </React.Fragment>
        );
      })}
      <span className="inline-block w-1 ml-1 align-baseline" style={{ opacity: showCaret ? 1 : 0, backgroundColor: '#ffffff', height: '1em' }}></span>
    </span>
  );
};

const SystemsContent = () => {
  useScrollAnimation();

  return (
    <>
      <section className="relative h-screen bg-black text-white">
        {/* Top half */}
        <div className="h-1/2 flex">
          {/* Left side */}
          <div className="w-1/2 flex items-center justify-center p-8">
            <h1 className="text-8xl font-bold animate-fadeInUp">Our Systems</h1>
          </div>
          {/* Right side */}
          <div className="w-1/2 relative">
            <Image src="/rndimage.JPG" alt="Systems" fill className="object-cover" sizes="50vw" priority />
          </div>
        </div>
        {/* Bottom half */}
        <div className="h-1/2 flex">
          {/* Left side */}
          <div className="w-1/2 relative">
            <Image src="/system23.jpg" alt="Engineering Excellence" fill className="object-cover" sizes="50vw" />
          </div>
          {/* Right side */}
          <div className="w-1/2 bg-[#1A1A1A] flex flex-col justify-center p-12 animate-fadeInUp">
            <h2 className="text-5xl font-bold leading-tight">
              <TypewriterText
                segments={[
                  { text: 'Engineering Excellence', className: 'text-[#F2913F]' },
                  { text: 'for a ', lineBreakBefore: true },
                  { text: 'Stronger Tomorrow.', className: 'text-[#8A393B]' },
                ]}
              />
            </h2>
            <div className="w-1/2 border-t border-gray-700 my-8"></div>
            <p className="text-lg">
              Track systems are where structural integrity meets engineering detail. Over the years, we've developed and implemented advanced rail systems across urban metros, mainlines, tunnels, and yards — engineered to last, with a focus on precision and long-term performance.
            </p>
          </div>
        </div>
      </section>

      {/* Systems Section */}
      <section className="bg-white text-gray-800 pb-24 overflow-hidden">
        <div className="space-y-24">
          {systemsData.map((system, index) => (
            <div key={index} className="relative group h-56 fade-in-section">
              <div 
                className="absolute top-0 left-0 h-full bg-gray-100 w-5/12 bg-cover bg-center"
                style={{ 
                  clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
                  backgroundImage: system.image ? `url(${system.image})` : 'none'
                }}
              ></div>
              <div className="relative max-w-screen-xl mx-auto h-full">
                <div className="absolute left-5 top-0 h-full flex items-center w-6/12 transform translate-x-[85%]">
                  <div className="pr-8">
                    <h3 className="text-3xl font-bold font-clash tracking-wide text-amber-600">{system.title}</h3>
                    <p className="mt-4 text-lg text-gray-600">{system.description}</p>
                    <a href={system.link} className="group/link inline-flex items-center mt-6 gap-[13px] font-clash font-medium text-2xl text-black" style={{ lineHeight: '72px' }}>
                      Read more
                      <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border border-gray-400 text-gray-600 transition-all duration-300 group-hover/link:bg-black group-hover/link:text-white group-hover/link:border-black">
                        <ArrowRight size={16} className="transform transition-transform group-hover/link:translate-x-1" />
                      </span>
                    </a>
                    <div 
                      className="mt-3 h-1.5 w-full max-w-sm" 
                      style={{ 
                        background: 'linear-gradient(90deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)' 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

const SystemsPage = () => {
  return (
    <div className="bg-[#1E1E1E] text-white">
      <SystemsContent />
    </div>
  );
}

export default SystemsPage; 