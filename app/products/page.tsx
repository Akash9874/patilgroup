"use client";
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { AnimatedProductList } from '@/components/AnimatedProductList';
import { TypingAnimation } from '@/components/TypingAnimation';
import { GridLines } from '@/components/GridLines';

const products = [
    {
      name: "Sleepers",
      description: "Concrete units for mainlines, metros, and turnouts",
      link: "/sleepers"
    },
    {
      name: "Fasteners",
      description: "Clips, clamps, and insulators for securing rails",
      link: "/fasteners"
    },
    {
      name: "Wires",
      description: "Pre stressed steel strands for sleeper reinforcement",
      link: "/wires"
    },
    {
      name: "Inserts",
      description: "SGCI castings and base plates for fastening systems",
      link: "/inserts"
      },
      {
        name: "Precast",
        description: "Precast plinth units for rapid installation and uniform geometry",
        link: "/precast",
      },
  ];

const ProductsPage = () => {
  useScrollAnimation();

  return (
    <div className="bg-black text-white">
      <section className="relative h-screen">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            preload="metadata"
           
          >
            <source src="/productherovideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex items-end justify-start p-8 sm:p-12 lg:p-16">
          <h1 className="text-6xl md:text-8xl font-bold text-white animate-fadeInUp">
            Track<br/>Components
          </h1>
        </div>
      </section>

      {/* Unseen Unshifting Section - New Layout */}
      <section className="bg-[#F5F4F1] fade-in-section">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
          {/* Left side with full-height image */}
          <div className="h-full">
            <img src="/seework2.jpg" alt="Building by the sea" className="w-full h-full object-cover" />
          </div>

          {/* Right side with content */}
          <div className="flex flex-col justify-between">
            {/* Top content box */}
            <div className="bg-black p-12 lg:p-16 text-left text-white">
              <h2 className="text-7xl md:text-8xl font-bold text-amber-500 mb-8">
                Unseen<br/>
                <TypingAnimation text="Unshifting" showCursor={true} />
              </h2>
              <hr className="border-gray-600 mb-8" />
              <p className="text-xl text-gray-300 mb-6">
                Quietly engineered —<br />
                Built to endure what is never seen
              </p>
            </div>
            
            {/* Bottom-right image */}
            <div className="flex justify-end">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover"
                preload="metadata"
              >
                <source src="/productvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Get in touch Section */}
      <section className="bg-white text-black py-24 fade-in-section relative overflow-hidden">
        <GridLines />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          {/* Left side */}
          <div className="flex flex-col justify-between">
            <div>
              <img src="/engineproduct.png" alt="Engine blueprint" className="w-full h-auto object-contain" />
            </div>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-[#8A393B]">Get in touch for </span>
                <span className="text-amber-500">specifications or supply.</span>
              </h2>
              <div className="mt-6 h-1.5 w-full max-w-sm bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
            </div>
          </div>

          {/* Right side - Animated Product List */}
          <AnimatedProductList products={products} />
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
