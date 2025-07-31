"use client";

import React, { useState } from 'react';
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

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-32 sm:py-40" style={{ backgroundImage: "url('/05_sleepers_banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="font-clash font-medium text-[96px] leading-[64px] tracking-[-0.25px] text-[#F2913F]">
              Through the tracks of time
            </h1>
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <section className="py-24 overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8">
          <p className="text-5xl font-semibold text-[#8A393B] max-w-4xl">
            We began in the 1960s with a single concrete sleeper plant
          </p>
        </div>
        
        <div className="mt-12 flex items-center">
          <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="ml-48">
              <p className="text-5xl font-semibold text-[#8A393B] max-w-5xl">
                Today, we supply track components to railways and metros across India
              </p>
            </div>
          </div>
          <div 
            className="flex-shrink-0 w-96 h-24 bg-[#8A393B]"
            style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="flex justify-center">
            <div className="flex -space-x-16">
              {tabs.map((tab) => (
                <div
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`cursor-pointer text-2xl font-semibold whitespace-nowrap flex items-center justify-center text-center ${
                    activeTab === tab.name
                      ? 'bg-[#8A393B] text-[#F2913F]'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                  style={{ 
                    clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0% 100%)', 
                    width: '419px', 
                    height: '187px' 
                  }}
                >
                  {tab.name.includes(" ") ? (
                    <span>
                      {tab.name.split(" ")[0]}
                      <br />
                      {tab.name.split(" ")[1]}
                    </span>
                  ) : (
                    <span>{tab.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-16">
            <a href="#" className="inline-flex items-center text-lg text-[#8A393B] font-semibold">
              And more
              <PlusCircle size={20} className="ml-2" />
            </a>
            <div
              className="h-0.5 mt-2 mx-auto"
              style={{
                width: '100px',
                background: 'linear-gradient(90deg, #1E3888, #F2913F)',
              }}
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-90"
          style={{ backgroundImage: "url('/worldmap.png')" }}
        ></div>
        <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left">
                    <h2 className="text-8xl font-bold text-[#8A393B]">Built for long life</h2>
                </div>
                <div className="text-center mt-4">
                    <h2 className="text-8xl font-bold text-[#8A393B]">Delivered at scale</h2>
                </div>
                <div className="text-right mt-4">
                    <p className="text-5xl text-[#F2913F]">Approved across systems</p>
                </div>
            </div>

            <div className="mt-32">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
                <h3 className="text-7xl font-semibold text-black">The work has changed.</h3>
              </div>
              <div 
                  className="h-7 mt-4"
                  style={{ 
                    width: '1102px',
                    background: 'linear-gradient(to right, #8A393B, #1E3888, #F2913F, transparent)' 
                  }}
              ></div>
            </div>

            <div className="mt-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
                <h3 className="text-7xl font-semibold text-black">The approach has not.</h3>
              </div>
              <div 
                  className="h-7 mt-4 ml-auto"
                  style={{ 
                    width: '1102px',
                    background: 'linear-gradient(to left, #8A393B, #1E3888, #F2913F, transparent)' 
                  }}
              ></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="mt-32 text-5xl font-semibold text-[#8A393B]">We build what holds.</p>
            </div>
        </div>
      </section>

      {/* In Service Section */}
      <section className="py-24 bg-white text-center">
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
      <section className="py-24 bg-white text-center relative">
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
      <section className="py-24 bg-white">
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
