"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { TypingAnimation } from '@/components/TypingAnimation';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PrecastPage = () => {
  useScrollAnimation();

  const typingSpeedMs = 70;
  const firstText = 'built for ';
  const secondText = 'speed, strength,';
  const thirdText = '\nand precision';
  const secondStart = firstText.length * typingSpeedMs + 150;
  const thirdStart = (firstText.length + secondText.length) * typingSpeedMs + 300;

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <div className="relative h-auto md:h-[600px]">
        {/* Background Image */}
        <Image
          src="/precast1.jpg"
          alt="Precast Solutions"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Left aligned content */}
        <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center">
          <div className="w-full md:w-1/2 p-8 md:p-12 fade-in-section animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Precast
              <br />
              Solutions
            </h1>
          </div>
        </div>
      </div>

      {/* Built for speed, strength, and precision Section */}
      <section className="bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 fade-in-section">
          {/* Left Image */}
          <div className="relative h-[380px] md:h-[520px] slide-in-left">
            <Image
              src="/precast2.jpg"
              alt="Precast manufacturing"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          {/* Right Content Panel */}
          <div className="bg-black text-white flex items-center slide-in-right">
            <div className="w-full p-8 md:p-12 xl:p-16">
              <h2 className="font-bold leading-[1.05] text-[56px] md:text-[72px] tracking-[-0.25px]">
                <TypingAnimation
                  text={firstText}
                  className="text-amber-500"
                  speed={typingSpeedMs}
                  showCursor={false}
                />
                <TypingAnimation
                  text={secondText}
                  className="text-[#8A393B]"
                  speed={typingSpeedMs}
                  startAfterMs={secondStart}
                  showCursor={false}
                />
                <TypingAnimation
                  text={thirdText}
                  className="text-[#8A393B]"
                  speed={typingSpeedMs}
                  startAfterMs={thirdStart}
                  showCursor={true}
                  cursorColor="#F2913F"
                />
              </h2>
              <div className="mt-6 border-t border-gray-300/60"></div>

              <div className="mt-6 space-y-4 text-lg md:text-xl text-gray-200 leading-relaxed">
                <p>
                  Patil Group operates 14 precast manufacturing facilities —
                  total capacity 3,410 cubic metres per day.
                </p>
                <p>
                  By March 2027 — capacity will increase by 2,120 cubic metres
                  per day through plant upgrades and four new facilities.
                </p>
                <p>
                  By August 2025 — supply will grow by 400 cubic metres per
                  day via four strategic partners.
                </p>
                <p>
                  A dedicated design centre advances precast technology —
                  delivering efficient, sustainable, and cost-optimised
                  solutions for diverse infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="bg-white text-black py-20 fade-in-section">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <h3 className="text-5xl md:text-6xl font-bold text-[#8A393B] mb-14">Product Portfolio</h3>

          {/* Single portfolio item */}
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-3xl md:text-4xl font-semibold text-amber-500">U Drains</h4>
              <p className="mt-4 text-base md:text-lg max-w-3xl">
                for rapid surface water management in urban
                <br className="hidden md:block" /> and highway projects
              </p>
              <div className="mt-8 h-1.5 w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
            </div>
            <ArrowRight className="mt-2 h-8 w-8 text-amber-500" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrecastPage;


