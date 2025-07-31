"use client";
import React from 'react';

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
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-48" style={{ backgroundImage: "url('/05_sleepers_banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
          <h1 className="text-7xl font-bold text-orange-400">
            Our Clientele
          </h1>
          <p className="mt-6 text-2xl leading-relaxed">
            We've had the chance to work with some incredible companies over the years — brands that trusted us, challenged us, and grew with us.
          </p>
          <div
            className="h-1.5 mt-8 mx-auto"
            style={{
              width: '200px',
              background: 'linear-gradient(to right, #8A393B, #1E3888, #F2913F)',
            }}
          />
        </div>
      </div>

      {/* Logos Section */}
      <section className="py-20">
        <div className="overflow-hidden">
          <div className="flex animate-scroll-slow">
            {logos1.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-64 mx-8">
                <img src={logo} alt={`Client logo ${index + 1}`} className="h-42 object-contain" />
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden mt-16">
          <div className="flex animate-scroll-slow-reverse">
            {logos2.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-64 mx-8">
                <img src={logo} alt={`Client logo ${index + 12}`} className="h-42 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurClientelePage;
