"use client";
import React from 'react';
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
          <img src="/train 2.jpg" alt="Train at a station" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-start pl-16 md:pl-24">
          <h1 className="text-8xl font-bold text-white text-left leading-tight animate-fadeInUp">
            Precast Plinth
          </h1>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-black py-20 text-white fade-in-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl leading-relaxed">
            The precast plinth system offers an off-site solution for rapid deployment and uniform track geometry. Pre-manufactured units are transported to site and installed with controlled tolerances, making it ideal for corridors with tight deadlines and variable curves.
          </p>
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

    </div>
  );
};

export default PrecastPlinthPage;