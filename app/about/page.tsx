"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PlusCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/abouthero.JPG"
          alt="About Hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full px-6 sm:px-8 md:px-12">
            <h1 className="text-white font-bold leading-[0.95] text-6xl md:text-7xl lg:text-8xl">
              Through<br />the tracks<br />of time
            </h1>
          </div>
        </div>
      </section>

      {/* Intro Text Section (post-hero) */}
      <section className="bg-black py-20 fade-in-section">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center font-bold text-[#F2913F] leading-snug text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            We began in the 1960s  with a single<br className="hidden sm:block" />
            concrete sleeper plant .
          </p>
          <p className="mt-10 text-center font-bold text-[#8A393B] leading-snug text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Today, we supply track components to<br className="hidden sm:block" />
            railways and metros across India.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white relative overflow-hidden fade-in-section">
        <div 
          className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-90"
          style={{ backgroundImage: "url('/worldmap.png')" }}
        ></div>
        <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>

      {/* In Service Section */}
      <section className="py-24 bg-white text-center fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-7xl font-bold text-black">In service</h2>
          <p className="mt-8 text-5xl text-black">
            <span className="text-[#F2913F]">40,00,000 sleepers and counting</span> used in 14 railway zones
          </p>
          <p className="mt-4 text-5xl text-black">
            Over <span style={{
              background: 'linear-gradient(to right, #8A393B, #F2913F)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}>four hundred kilometres</span> delivered each year.
          </p>
        </div>
      </section>

      {/* Make in India Section */}
      <section className="py-24 bg-white text-center relative fade-in-section">
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
      </section>
      
      <div className="border-t border-gray-200"></div>

      {/* Clientele and Presence Section */}
      <section className="py-24 bg-white fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-center">
            <div>
              <h2 className="text-6xl font-bold">
                <span className="text-[#8A393B]">Our </span>
                <span className="text-[#F2913F]">Clientele</span>
              </h2>
              <Link href="/our-clientele" className="inline-flex items-center mt-6 text-2xl text-black group">
                View
                <span className="ml-3 flex items-center justify-center w-8 h-8 rounded-full border border-[#8A393B] text-[#8A393B] group-hover:bg-[#8A393B] group-hover:text-white transition-colors">
                  <ArrowRight size={20} />
                </span>
              </Link>
            </div>
            <div>
              <h2 className="text-6xl font-bold">
                <span className="text-[#8A393B]">Our </span>
                <span className="text-[#F2913F]">Presence</span>
              </h2>
              <Link href="/our-presence" className="inline-flex items-center mt-6 text-2xl text-black group">
                View
                <span className="ml-3 flex items-center justify-center w-8 h-8 rounded-full border border-[#8A393B] text-[#8A393B] group-hover:bg-[#8A393B] group-hover:text-white transition-colors">
                  <ArrowRight size={20} />
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
