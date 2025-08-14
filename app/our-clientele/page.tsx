"use client";
import React from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const logos1 = [
  '/client logos/client 1.png',
  '/client logos/client 2.png',
  '/client logos/client 3.png',
  '/client logos/client 4.png',
  '/client logos/client 5.png',
  '/client logos/client 6.png',
  '/client logos/client 7.png',
  '/client logos/client 8.png',
  '/client logos/client 9.png',
  '/client logos/client 10.png',
  '/client logos/client 11.png',
  '/client logos/client 12.png',
];

const logos2 = [
    '/client logos/client 13.png',
    '/client logos/client 14.png',
    '/client logos/client 15.png',
    '/client logos/client 16.png',
    '/client logos/client 17.png',
    '/client logos/client 18.png',
    '/client logos/client 19.png',
    '/client logos/client 20.png',
    '/client logos/client 21.png',
    '/client logos/client 22.png',
    '/client logos/client 23.png',
];

const OurClientelePage = () => {
  useScrollAnimation();

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src="/clientimage.jpg"
          alt="Architectural structure"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          loading="eager"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-center leading-tight px-4">
            Our <br /> Clientele
          </h1>
        </div>
      </div>

      {/* Two continuous marquee rows */}
      <section className="py-20 fade-in-section is-visible">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Row 1: first 12 logos */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee">
              <div className="flex gap-8 flex-none">
                {logos1.map((logo, index) => (
                  <div key={`row1-a-${index}`} className="flex-none w-44">
                    <div className="h-32 w-full flex justify-center items-center p-4 bg-white rounded-lg">
                      <Image src={logo} alt={`Client logo ${index + 1}`} width={160} height={96} className="max-h-24 w-auto object-contain" loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-8 flex-none" aria-hidden="true">
                {logos1.map((logo, index) => (
                  <div key={`row1-b-${index}`} className="flex-none w-44">
                    <div className="h-32 w-full flex justify-center items-center p-4 bg-white rounded-lg">
                      <Image src={logo} alt="" width={160} height={96} className="max-h-24 w-auto object-contain" loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: remaining 11 logos */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee-reverse">
              <div className="flex gap-8 flex-none">
                {logos2.map((logo, index) => (
                  <div key={`row2-a-${index}`} className="flex-none w-44">
                    <div className="h-32 w-full flex justify-center items-center p-4 bg-white rounded-lg">
                      <Image src={logo} alt={`Client logo ${index + 1}`} width={160} height={96} className="max-h-24 w-auto object-contain" loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-8 flex-none" aria-hidden="true">
                {logos2.map((logo, index) => (
                  <div key={`row2-b-${index}`} className="flex-none w-44">
                    <div className="h-32 w-full flex justify-center items-center p-4 bg-white rounded-lg">
                      <Image src={logo} alt="" width={160} height={96} className="max-h-24 w-auto object-contain" loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurClientelePage;
