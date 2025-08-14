"use client";
import React from 'react';
import { TypingAnimation } from '@/components/TypingAnimation';
import { ArrowRight } from 'lucide-react';
import ContentSlider from '@/components/ContentSlider';
import ExploreSolutions from '@/components/ExploreSolutions';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PrecastPlinthPage = () => {
  useScrollAnimation();

  const sliderData = [
    { image: '/23_precast_plinth_process.jpg' },
    { image: '/25_alternate_material_CMA.jpg' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-black">
        <div className="absolute inset-0 h-full w-full">
          <img src="/precast2.jpg" alt="Precast Plinth" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-start pl-4 sm:pl-8 md:pl-16 lg:pl-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-left leading-tight animate-fadeInUp px-4">
            Precast Plinth
          </h1>
        </div>
      </section>

      {/* Built for speed, strength, and precision Section with typing animation */}
      <section className="bg-black text-white py-20 fade-in-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold leading-[1.05] text-[56px] md:text-[72px] tracking-[-0.25px]">
            <TypingAnimation
              text={'built for '}
              className="text-amber-500"
              speed={70}
              showCursor={false}
            />
            <TypingAnimation
              text={'speed, strength,'}
              className="text-[#8A393B]"
              speed={70}
              startAfterMs={('built for '.length * 70) + 150}
              showCursor={false}
            />
            <TypingAnimation
              text={'\nand precision'}
              className="text-[#8A393B]"
              speed={70}
              startAfterMs={(('built for '.length + 'speed, strength,'.length) * 70) + 300}
              showCursor={true}
              cursorColor="#F2913F"
            />
          </h2>
          <div className="mt-6 border-t border-gray-700"></div>
          <div className="mt-6 space-y-4 text-lg md:text-xl text-gray-200 leading-relaxed">
            <p>Patil Group operates 14 precast manufacturing facilities — total capacity 3,410 cubic metres per day.</p>
            <p>By March 2027 — capacity will increase by 2,120 cubic metres per day through plant upgrades and four new facilities.</p>
            <p>By August 2025 — supply will grow by 400 cubic metres per day via four strategic partners.</p>
            <p>A dedicated design centre advances precast technology — delivering efficient, sustainable, and cost-optimised solutions for diverse infrastructure.</p>
          </div>
        </div>
      </section>


      {/* Used In Section */}
      <section className="bg-black text-white py-24 sm:py-32 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 fade-in-section">
            <div className="md:w-1/2">
              <img src="/engineering-infra.jpg" alt="Abstract technology background" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 bg-white text-black p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-[#8A393B]">This system has been used in:</h3>
              <ul className="mt-4 space-y-2 list-disc pl-6 text-lg">
                <li>Mumbai Metro Line 2A</li>
                <li>Bangalore Metro Reach 5</li>
                <li>Pune Metro</li>
                <li>Ahmedabad Metro</li>
              </ul>
            </div>
          </div>
          <div className="mt-24 max-w-4xl fade-in-section">
            <p className="text-2xl text-orange-400 leading-relaxed">
              Its modular nature enables speed of installation and minimal site disruption, while maintaining structural integrity and alignment across straight and curved sections.
            </p>
          </div>
        </div>
      </section>

      {/* Product Portfolio Section */}
      <section className="bg-white text-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#8A393B]">Product Portfolio</h2>

          <div className="mt-16">
            <a href="/precast" className="block group">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#F2913F]">U Drains</h3>
                  <p className="mt-4 text-lg md:text-xl max-w-3xl">
                    for rapid surface water management in urban and highway projects
                  </p>
                </div>
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-[#F2913F] text-[#F2913F] transition-all duration-300 group-hover:bg-[#F2913F] group-hover:text-white">
                  <ArrowRight size={20} />
                </span>
              </div>
              <div
                className="mt-8 h-1.5 w-80"
                style={{
                  background:
                    'linear-gradient(90deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)',
                }}
              />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PrecastPlinthPage;