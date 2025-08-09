"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const BallastlessTrackMainLinePage = () => {
  useScrollAnimation();

  return (
    <div>
      <Navbar />
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/train.png"
            alt="Train at a station"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-y-0 left-0 w-[45%] bg-black flex items-center">
          <div className="pl-16 md:pl-24">
            <h1 className="text-white text-6xl md:text-7xl font-bold font-clash leading-tight">
              Ballastless Track System <br /> for Main Line
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-2xl font-bold max-w-4xl scroll-animate">
            In main line applications such as tunnels, bridges, and station zones, ballastless track offers a durable, low-maintenance alternative to conventional systems. Our design accommodates high-speed movement, continuous loading, and complex terrain.
          </p>

          <div className="relative mt-24 scroll-animate">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="pt-16">
                <Image
                  src="/19_ballastless_mainline_banner.jpg"
                  alt="Ballastless main line banner"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
              <div className="bg-white text-black p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#8A393B] mb-4">
                  This system is currently in use in:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Jammu-Baramulla Line (Jammu & Kashmir)</li>
                  <li>Dedicated Freight Corridor sections</li>
                  <li>Northern Railways bridge zones</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-24 max-w-5xl scroll-animate">
            <p className="text-2xl font-bold text-[#F2913F]">
              Engineered for long operational life with minimal intervention, the system ensures stable geometry, reduced deflection, and consistent track performance under both freight and passenger traffic.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BallastlessTrackMainLinePage; 