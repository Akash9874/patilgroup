"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PlusCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatCounter = ({ end, duration, suffix = '', prefix = '', className = '' }: { 
  end: number; 
  duration: number; 
  suffix?: string; 
  prefix?: string; 
  className?: string;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px',
  });

  return (
    <span ref={ref} className={className}>
      <CountUp 
        start={0}
        end={inView ? end : 0} 
        duration={duration} 
        separator="," 
        suffix={suffix} 
        prefix={prefix}
        preserveValue={true}
      />
    </span>
  );
};

const AboutUsPage = () => {
  const [activeTab, setActiveTab] = useState('Sleepers');

  const tabs = [
    { name: 'Sleepers' },
    { name: 'Fastening systems' },
    { name: 'Turnout parts' },
    { name: 'Rubber elements' },
  ];

  useScrollAnimation();

  return (
    <div className="bg-white">
      {/* Fully Responsive Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Optimized Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/abouthero.JPG"
            alt="About Hero"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
        
        {/* Mobile Layout - Enhanced */}
        <div className="md:hidden absolute inset-0">
          {/* Enhanced Mobile Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          {/* Mobile Content Container */}
          <div className="relative z-10 h-full flex items-center justify-center px-4">
            <div className="w-full max-w-lg mx-auto text-center">
              {/* Title */}
              <h1 className="text-white font-bold leading-tight text-center drop-shadow-2xl">
                <span className="text-4xl sm:text-5xl block mb-3">Through the</span>
                <span className="text-4xl sm:text-5xl block">tracks of time</span>
              </h1>
              
              {/* Animated Accent Line */}
              <div className="flex justify-center mt-8 mb-8">
                <div className="w-24 h-1.5 bg-gradient-to-r from-[#F2913F] via-[#1E3888] to-[#8A393B] rounded-full animate-pulse shadow-lg"></div>
              </div>
              
              {/* Subtitle */}
              <p className="text-white text-center text-xl sm:text-2xl leading-relaxed drop-shadow-xl font-medium">
                Decades of expertise in railway engineering excellence
              </p>
              
              {/* Optional scroll hint */}
              <div className="text-center mt-8">
                <p className="text-white/80 text-sm font-medium animate-bounce drop-shadow-lg">
                  Scroll to explore ↓
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tablet Layout - Hybrid */}
        <div className="hidden md:block lg:hidden absolute inset-0">
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex items-center">
            <div className="w-full px-8">
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-2xl">
                <h1 className="text-white font-bold leading-tight text-5xl md:text-6xl">
                  Through<br />the tracks<br />of time
                </h1>
                <div className="w-24 h-1.5 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mt-6 rounded-full"></div>
                <p className="text-gray-200 text-lg mt-6 leading-relaxed max-w-lg">
                  Decades of expertise in railway engineering excellence
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout - Bottom Left Position */}
        <div className="hidden lg:block">
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-0 left-0 z-10">
            <div className="px-6 sm:px-8 md:px-12 pb-16">
              <h1 className="text-white font-bold leading-[0.95] text-6xl md:text-7xl lg:text-8xl">
                Through<br />the tracks<br />of time
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Intro Text Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20 fade-in-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-center font-bold text-[#F2913F] leading-snug text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            We began in the 1960s with a single<br className="hidden sm:block" />
            concrete sleeper plant.
          </p>
          <p className="mt-6 sm:mt-8 md:mt-10 text-center font-bold text-[#8A393B] leading-snug text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Today, we supply track components to<br className="hidden sm:block" />
            railways and metros across India.
          </p>
        </div>
      </section>

      {/* Country Customer Company Section */}
      <section className="bg-white py-8 sm:py-10 md:py-12 relative">
        {/* Left Edge Gradient Line */}
        <div 
          className="absolute hidden lg:block fade-in-section"
          style={{
            width: '564px',
            height: '28px',
            left: '0px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'linear-gradient(90deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)'
          }}
        />
        
        {/* Right Edge Gradient Line */}
        <div 
          className="absolute hidden lg:block fade-in-section"
          style={{
            width: '564px',
            height: '28px',
            right: '0px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'linear-gradient(270deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)'
          }}
        />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <div className="mb-2">
                <span className="text-[#8A393B]">Country </span>
                <span className="text-[#F2913F]">1<sup className="text-lg sm:text-xl md:text-2xl">st</sup></span>
                <span className="mx-4 sm:mx-6 md:mx-8 text-[#8A393B]">Customer </span>
                <span className="text-[#F2913F]">2<sup className="text-lg sm:text-xl md:text-2xl">nd</sup></span>
              </div>
              <div>
                <span className="text-[#8A393B]">Company & Employees </span>
                <span className="text-[#F2913F]">3<sup className="text-lg sm:text-xl md:text-2xl">rd</sup></span>
              </div>
            </h2>
          </div>
        </div>
      </section>

      {/* Responsive Philosophy Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden fade-in-section">
        <div 
          className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-90"
          style={{ backgroundImage: "url('/worldmap.png')" }}
        ></div>
        <div className="relative z-10">
            {/* Mobile Layout */}
            <div className="md:hidden max-w-4xl mx-auto px-4 space-y-8 text-center">
                <div className="fade-in-section" style={{ transitionDelay: '0ms' }}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#8A393B] leading-tight">Built for long life</h2>
                </div>
                <div className="fade-in-section" style={{ transitionDelay: '200ms' }}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#8A393B] leading-tight">Delivered at scale</h2>
                </div>
                <div className="fade-in-section" style={{ transitionDelay: '400ms' }}>
                    <p className="text-2xl sm:text-3xl font-semibold text-[#F2913F]">Approved across systems</p>
                </div>
            </div>
            
            {/* Desktop Layout - Original */}
            <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left fade-in-section" style={{ transitionDelay: '0ms' }}>
                    <h2 className="text-8xl font-bold text-[#8A393B]">Built for long life</h2>
                </div>
                <div className="text-center mt-4 fade-in-section" style={{ transitionDelay: '200ms' }}>
                    <h2 className="text-8xl font-bold text-[#8A393B]">Delivered at scale</h2>
                </div>
                <div className="text-right mt-4 fade-in-section" style={{ transitionDelay: '400ms' }}>
                    <p className="text-5xl text-[#F2913F]">Approved across systems</p>
                </div>
            </div>

            {/* Mobile Approach Section */}
            <div className="md:hidden mt-12 max-w-4xl mx-auto px-4 space-y-8 text-center">
              <div className="fade-in-section" style={{ transitionDelay: '0ms' }}>
                <h3 className="text-2xl sm:text-3xl font-bold text-black leading-tight">The work has changed.</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-[#8A393B] via-[#1E3888] to-[#F2913F] mx-auto mt-3 rounded-full"></div>
              </div>
              
              <div className="fade-in-section" style={{ transitionDelay: '200ms' }}>
                <h3 className="text-2xl sm:text-3xl font-bold text-black leading-tight">The approach has not.</h3>
                <div className="w-24 h-1 bg-gradient-to-l from-[#8A393B] via-[#1E3888] to-[#F2913F] mx-auto mt-3 rounded-full"></div>
              </div>
              
              <div className="fade-in-section" style={{ transitionDelay: '400ms' }}>
                <p className="text-xl sm:text-2xl font-bold text-[#8A393B] mt-8">We build what holds.</p>
              </div>
            </div>
            
            {/* Desktop Approach Section - Original */}
            <div className="hidden md:block">
              <div className="mt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left fade-in-section" style={{ transitionDelay: '0ms' }}>
                  <h3 className="text-7xl font-semibold text-black">The work has changed.</h3>
                </div>
                <div 
                    className="h-7 mt-4 fade-in-section" 
                    style={{ 
                      transitionDelay: '200ms',
                      width: '1102px',
                      background: 'linear-gradient(to right, #8A393B, #1E3888, #F2913F, transparent)' 
                    }}
                ></div>
              </div>

              <div className="mt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right fade-in-section" style={{ transitionDelay: '0ms' }}>
                  <h3 className="text-7xl font-semibold text-black">The approach has not.</h3>
                </div>
                <div 
                    className="h-7 mt-4 ml-auto fade-in-section"
                    style={{ 
                      transitionDelay: '200ms',
                      width: '1102px',
                      background: 'linear-gradient(to left, #8A393B, #1E3888, #F2913F, transparent)' 
                    }}
                ></div>
              </div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section" style={{ transitionDelay: '400ms' }}>
                  <p className="mt-32 text-5xl font-semibold text-[#8A393B]">We build what holds.</p>
              </div>
            </div>
        </div>
      </section>

      {/* Responsive In Service Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white text-center fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout */}
          <div className="md:hidden space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">In service</h2>
            <div className="space-y-4 text-lg sm:text-xl text-black leading-relaxed">
              <p>
                <StatCounter 
                  end={4000000} 
                  duration={2.5} 
                  suffix=" sleepers and counting" 
                  className="text-[#F2913F] font-bold"
                /> used in <StatCounter 
                  end={14} 
                  duration={2} 
                  suffix=" railway zones"
                  className="text-[#F2913F] font-bold"
                />
              </p>
              <p>
                Over <span style={{
                  background: 'linear-gradient(to right, #8A393B, #F2913F)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent'
                }} className="font-bold">4 Thousand kilometres</span> delivered each year.
              </p>
            </div>
          </div>
          
          {/* Desktop Layout - Original */}
          <div className="hidden md:block">
            <h2 className="text-7xl font-bold text-black">In service</h2>
            <p className="mt-8 text-5xl text-black">
              <StatCounter 
                end={4000000} 
                duration={2.5} 
                suffix=" sleepers and counting" 
                className="text-[#F2913F]"
              /> used in <StatCounter 
                end={14} 
                duration={2} 
                suffix=" railway zones"
                className="text-[#F2913F]"
              />
            </p>
            <p className="mt-4 text-5xl text-black">
              Over <span style={{
                background: 'linear-gradient(to right, #8A393B, #F2913F)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }}>4 Thousand kilometres</span> delivered each year.
            </p>
          </div>
        </div>
      </section>

      {/* Responsive Make in India Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white text-center relative fade-in-section">
        {/* Mobile Layout */}
        <div className="md:hidden px-4">
          <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-2xl p-6 mx-auto max-w-sm">
            <img src="/makeindia.png" alt="Make in India" className="h-20 sm:h-24 mx-auto mb-4" />
            <p className="text-xl sm:text-2xl font-bold text-black leading-tight">Installed across India</p>
            <div
              className="h-1.5 mt-3 mx-auto rounded-full"
              style={{
                width: '120px',
                background: 'linear-gradient(to right, #F2913F, #1E3888, #8A393B)',
              }}
            />
          </div>
        </div>
        
        {/* Desktop Layout - Original */}
        <div className="hidden md:block">
          <div className="flex justify-center items-center max-w-7xl mx-auto">
            <img src="/indiaflag.png" alt="Indian Flag" className="w-[636px] h-96" />
            <img src="/makeindia.png" alt="Make in India" className="h-56 mx-8" />
            <img src="/indiaflag.png" alt="Indian Flag" className="w-[636px] h-96 transform scale-x-[-1]" />
          </div>
          <div className="mt-12">
            <p className="text-5xl font-semibold text-black">Installed across India</p>
            <div
              className="h-2 mt-4 mx-auto"
              style={{
                width: '400px',
                background: 'linear-gradient(to right, #F2913F, #1E3888, #8A393B)',
              }}
            />
          </div>
        </div>
      </section>
      
      <div className="border-t border-gray-200"></div>

      {/* Responsive Clientele and Presence Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 text-center">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-[#8A393B]">Our </span>
                <span className="text-[#F2913F]">Clientele</span>
              </h2>
              <Link href="/our-clientele" className="inline-flex items-center text-lg sm:text-xl md:text-2xl text-black group">
                View
                <span className="ml-2 sm:ml-3 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#8A393B] text-[#8A393B] group-hover:bg-[#8A393B] group-hover:text-white transition-colors">
                  <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                </span>
              </Link>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-[#8A393B]">Our </span>
                <span className="text-[#F2913F]">Presence</span>
              </h2>
              <Link href="/our-presence" className="inline-flex items-center text-lg sm:text-xl md:text-2xl text-black group">
                View
                <span className="ml-2 sm:ml-3 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#8A393B] text-[#8A393B] group-hover:bg-[#8A393B] group-hover:text-white transition-colors">
                  <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
