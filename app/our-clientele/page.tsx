"use client";
import React from 'react';
import Image from 'next/image';

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
];

const logos2 = [
    '/client logos/client 12.png',
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
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src="/engineering-infra.jpg"
          alt="Architectural structure"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          loading="eager"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-8xl font-bold text-white text-center leading-tight">
            Our <br /> Clientele
          </h1>
        </div>
      </div>

      {/* Logos Section */}
      <section className="py-20">
        <div className="overflow-hidden">
          <div className="flex animate-scroll-slow">
            {logos1.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-64 mx-8 flex justify-center items-center p-4 bg-white rounded-lg">
                <Image src={logo} alt={`Client logo ${index + 1}`} width={150} height={96} className="max-h-24 w-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden mt-16">
          <div className="flex animate-scroll-slow-reverse">
            {logos2.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-64 mx-8 flex justify-center items-center p-4 bg-white rounded-lg">
                <Image src={logo} alt={`Client logo ${index + 12}`} width={150} height={96} className="max-h-24 w-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurClientelePage;
