"use client";
import React from 'react';
import Image from 'next/image';
import ContentSlider from '@/components/ContentSlider';
import ExploreSolutions from '@/components/ExploreSolutions';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FlashButtWeldingOfRailsPage = () => {
  useScrollAnimation();

  const sliderData = [
    { image: '/21_flash_butt_equipment.jpg' },
    { image: '/18_flash_butt_banner.jpg' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-black">
        <div className="absolute inset-0 h-full w-full">
          <Image src="/flashbuttslider.jpeg" alt="Flash butt welding operation" width={1920} height={1080} className="h-full w-full object-cover" loading="eager" priority />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-start pl-4 sm:pl-8 md:pl-16 lg:pl-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-left leading-tight animate-fadeInUp px-4">
            Flash Butt<br />Welding
          </h1>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-black py-20 text-white fade-in-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl leading-relaxed">
            Our flash butt welding plants deliver factory-controlled, high-integrity welded rail panels. Using precision electrical resistance welding, each joint is formed without filler, reducing thermal distortion and improving fatigue resistance.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-black py-16 fade-in-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white text-black p-8 rounded-lg shadow-lg">
            <p className="text-2xl md:text-3xl leading-relaxed text-center">
              Patil Group operates India's largest Flash Butt Welding depots, equipped to weld 20-rail panels with advanced infrastructure. With mechanised rail handling systems, these facilities ensure efficiency, safety, and world-class precision for Indian Railways.
            </p>
          </div>
        </div>
      </section>

      {/* Locations and Applications Section */}
      <section className="bg-black text-white py-24 sm:py-32 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 fade-in-section">
            <div className="md:w-1/2">
              <Image src="/flashbutt2.webp" alt="Flash butt welding equipment" width={600} height={400} className="rounded-lg shadow-lg" loading="lazy" />
            </div>
            <div className="md:w-1/2 bg-white text-black p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-[#8A393B]">Patil Group's welding plants are located in:</h3>
              <ul className="mt-4 space-y-2 list-disc pl-6 text-lg">
                <li>New Bongaigaon, Assam</li>
                <li>Rangapani, West Bengal</li>
              </ul>
            </div>
          </div>
          <div className="mt-24 max-w-4xl fade-in-section">
            <p className="text-3xl md:text-4xl text-gray-300 leading-relaxed">
              These facilities support large-scale panel production and direct dispatch to project sites.
              <span className="block text-orange-400 font-semibold mt-2">This system has been integral to:</span>
            </p>
            <ul className="mt-6 space-y-3 list-disc pl-6 text-2xl md:text-3xl text-gray-400">
              <li>Northeast Frontier Railway projects</li>
              <li>Konkan Railway sections</li>
              <li>Bridge and tunnel approaches requiring jointless long panels</li>
            </ul>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default FlashButtWeldingOfRailsPage; 