"use client";
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import IndiaMap from '../../components/IndiaMap';

const OurPresencePage = () => {
  useScrollAnimation();
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          preload="metadata"
          poster="/worldmap.png"
        >
          <source src="/lppatil.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12">
          <h1 className="text-white font-bold leading-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Our Presence
          </h1>
        </div>
      </section>
      <div className="container mx-auto py-12 fade-in-section flex justify-center">
        <div className="w-full max-w-5xl">
          <IndiaMap />
        </div>
      </div>
    </div>
  );
};

export default OurPresencePage;
