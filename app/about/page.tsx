"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';
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

  useGSAPAnimations();

  return (
    <div className="bg-white">
      {/* New About - Track background header */}
      <section className="relative w-full bg-white overflow-hidden py-20 sm:py-24 md:py-28">
        {/* Left track image */}
        <div
          className="pointer-events-none absolute z-0 left-0 top-1/2 w-[120vw] h-72 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[36rem]"
          style={{ WebkitMaskImage: 'linear-gradient(to right, black 98%, transparent 100%)', maskImage: 'linear-gradient(to right, black 98%, transparent 100%)', transform: 'translate(-12vw, -50%)' }}
        >
          <Image
            src="/trackkkk.png"
            alt="Rail track left"
            fill
            sizes="(min-width: 1024px) 65vw, 90vw"
            priority
            className="object-contain object-left"
          />
        </div>

        {/* Right track image (mirrored) */}
        <div
          className="pointer-events-none absolute z-0 right-0 top-1/2 -translate-y-1/2 w-[120vw] h-72 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[36rem]"
          style={{ WebkitMaskImage: 'linear-gradient(to left, black 98%, transparent 100%)', maskImage: 'linear-gradient(to left, black 98%, transparent 100%)' }}
        >
          <Image
            src="/trackkkk.png"
            alt="Rail track right"
            fill
            sizes="(min-width: 1024px) 65vw, 90vw"
            priority
            className="object-contain object-right"
          />
        </div>

        {/* Centered heading */}
        <div className="relative z-10 flex items-center justify-center">
          <h1 className="text-[#8A393B] text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-center">
            <span className="block">Through</span>
            <span className="block">the tracks</span>
            <span className="block">of time</span>
          </h1>
        </div>
      </section>

      {/* Legacy blurb card */}
      <section className="bg-white py-6 sm:py-8 md:py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-2xl border border-gray-200 bg-[#F7F6F4] shadow-sm px-4 sm:px-8 py-6 sm:py-8 text-center">
            <p className="text-[#F2913F] font-bold text-lg sm:text-xl md:text-2xl">
              We began in the 1960s with a single concrete sleeper plant.
            </p>
            <p className="mt-2 text-[#8A393B] font-semibold text-xl sm:text-2xl md:text-3xl leading-snug">
              Today, we supply track components to railways and
              <br className="hidden sm:block" /> metros across India.
            </p>
          </div>
        </div>
      </section>

      {/* Zero Bad Section */}
      <section className="bg-white py-8 sm:py-10 md:py-12 relative fade-in-section" data-delay="0.1" data-duration="0.9">
        {/* Left Edge Gradient Line */}
        <div 
          className="absolute hidden lg:block reveal-line-left"
          style={{
            width: '364px',
            height: '28px',
            left: '0px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'linear-gradient(90deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)'
          }}
        />
        
        {/* Right Edge Gradient Line */}
        <div 
          className="absolute hidden lg:block reveal-line-right"
          style={{
            width: '364px',
            height: '28px',
            right: '0px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'linear-gradient(270deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)'
          }}
        />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section">
          {/* Title */}
          <div className="text-center mb-8 sm:mb-12 fade-heading" data-delay="0.15" data-duration="0.9">
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8A393B] to-[#F2913F]">
              Our Business Decision - Making Principles
            </h2>
          </div>
          
          {/* Three Boxes */}
          <div className="space-y-4 sm:space-y-6 max-w-2xl mx-auto stagger-children" data-stagger="0.15" data-duration="0.7">
            {/* Country 1st */}
            <div className="bg-[#8A393B] text-white py-4 sm:py-6 px-6 sm:px-8 rounded-2xl shadow-lg stagger-item">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                Country <span className="text-[#F2913F]">1<sup className="text-lg sm:text-xl">st</sup></span>
              </h3>
            </div>
            
            {/* Customer 2nd */}
            <div className="bg-[#F2913F] text-black py-4 sm:py-6 px-6 sm:px-8 rounded-2xl shadow-lg stagger-item">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                Customer <span className="text-[#8A393B]">2<sup className="text-lg sm:text-xl">nd</sup></span>
              </h3>
            </div>
            
            {/* Company & Employees 3rd */}
            <div className="bg-[#8A393B] text-white py-4 sm:py-6 px-6 sm:px-8 rounded-2xl shadow-lg stagger-item">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                Company & Employees <span className="text-[#F2913F]">3<sup className="text-lg sm:text-xl">rd</sup></span>
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Philosophy Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden fade-in-section" data-delay="0.1" data-duration="1">
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
                <div className="text-left stagger-container" data-stagger="0.2">
                    <h2 className="text-5xl lg:text-8xl font-bold text-[#8A393B]">
                      <span className="stagger-item inline-block">Built</span> <span className="stagger-item inline-block">for</span> <span className="stagger-item inline-block">long</span> <span className="stagger-item inline-block">life</span>
                    </h2>
                </div>
                <div className="text-center mt-4 stagger-container" data-stagger="0.2" data-delay="0.2">
                    <h2 className="text-5xl lg:text-8xl font-bold text-[#8A393B]">
                      <span className="stagger-item inline-block">Delivered</span> <span className="stagger-item inline-block">at</span> <span className="stagger-item inline-block">scale</span>
                    </h2>
                </div>
                <div className="text-right mt-4 stagger-container" data-stagger="0.2" data-delay="0.4">
                    <p className="text-3xl lg:text-5xl text-[#F2913F]">
                      <span className="stagger-item inline-block">Approved</span> <span className="stagger-item inline-block">across</span> <span className="stagger-item inline-block">systems</span>
                    </p>
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left stagger-container" data-stagger="0.15">
                  <h3 className="text-4xl lg:text-7xl font-semibold text-black">
                    <span className="stagger-item inline-block">The</span> <span className="stagger-item inline-block">work</span> <span className="stagger-item inline-block">has</span> <span className="stagger-item inline-block">changed.</span>
                  </h3>
                </div>
                <div 
                    className="h-7 mt-4 reveal-line-left" 
                    data-delay="0.4"
                    style={{ 
                      background: 'linear-gradient(to right, #8A393B, #1E3888, #F2913F, transparent)' 
                    }}
                ></div>
              </div>

              <div className="mt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right stagger-container" data-stagger="0.15">
                  <h3 className="text-4xl lg:text-7xl font-semibold text-black">
                    <span className="stagger-item inline-block">The</span> <span className="stagger-item inline-block">approach</span> <span className="stagger-item inline-block">has</span> <span className="stagger-item inline-block">not.</span>
                  </h3>
                </div>
                <div 
                    className="h-7 mt-4 ml-auto reveal-line-right"
                    data-delay="0.4"
                    style={{ 
                      background: 'linear-gradient(to left, #8A393B, #1E3888, #F2913F, transparent)' 
                    }}
                ></div>
              </div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section" data-delay="0.2">
                  <p className="mt-32 text-3xl lg:text-5xl font-semibold text-[#8A393B]">We build what holds.</p>
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
            <h2 className="text-5xl lg:text-7xl font-bold text-black">In service</h2>
            <p className="mt-8 text-3xl lg:text-5xl text-black">
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
            <p className="mt-4 text-3xl lg:text-5xl text-black">
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
          <div className="flex justify-center items-center max-w-7xl mx-auto max-w-full w-auto">
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
