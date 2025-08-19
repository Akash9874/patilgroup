"use client";

import React, { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navbar from '@/components/Navbar';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const cards = [
  {
    image: '/21_flash_butt_equipment.jpg',
    title: 'Modern Fastening for high speed trains.',
    paragraphs: [
      "Under the Atmanirbhar Bharat initiative, Patil Group has developed a modern fastening system for Indian Railways' ballasted tracks, supporting semi-high-speed (200 kmph) and heavy axle load operations with ±1 mm gauge tolerance.",
    ],
    bullets: [
      'High-precision PSC sleeper manufacturing',
      'Specialized molds for accurate rail seat placement',
      'GFN liners with tight tolerance controls',
    ],
  },
  // Placeholder slots for 5 more cards; you can replace with your designs later
  {
    image: '/engineering-infra.jpg',
    title: 'India’s largest foundry opened in Bokaro by Patil group.',
    paragraphs: [
      'Established in 2020, Patil Foundry Bokaro is one of India’s largest manufacturers of ductile iron castings, serving global railways and general engineering sectors.',
      'With Indian Railways as a key customer, the foundry features a Disa high-pressure automatic molding line, auto pouring, and sand testing facilities. Focused on quality, it aims for global market leadership.',
    ],
    bullets: [],
  },
  {
    image: '/engineering-infra.jpg',
    title: 'Introducing the Whistleblower Policy',
    paragraphs: [
      "Patil Group’s Whistleblower Policy enables confidential, anonymous reporting of misconduct or policy violations without fear of retaliation. Aligned with our values of trust and accountability, it fosters a safe, ethical, and transparent work environment.",
    ],
    bullets: [
      'Anonymous & confidential reporting',
      'Zero retaliation',
      'Strong focus on integrity and fairness',
    ],
  },
  {
    image: '/engineering-infra.jpg',
    title: "Patil Group recently acquired 'ApnaTech'.",
    paragraphs: [
      'Patil Group has acquired Apna Technologies (ApnaTech), a market leader in railway track diagnosis systems. ApnaTech specializes in safety-enhancing solutions like Wheel Impact Load Detectors, Hot Box Detectors, and Onboard Systems. This strategic move strengthens Patil Group’s position in the growing railway infrastructure sector.',
    ],
    bullets: [],
  },
  {
    image: '/engineering-infra.jpg',
    title: "India's Longest Railway Tunnel opens to Traffic",
    paragraphs: [
      "Patil Group is proud to be part of Asia’s second-longest railway tunnel project, connecting Qazigund and Banihal through an 11 km stretch in Jammu & Kashmir. As a complete system solution provider, Patil supplies RHEDA® bi-block sleepers, Vossloh 300-1U fastenings, and offers design and technical support for ballastless track installation. The tunnel enables travel between the regions in just 6.6 minutes.",
    ],
    bullets: [],
  },
  {
    image: '/engineering-infra.jpg',
    title: 'India’s First Ever High-Speed Ballastless Track Rail Corridor',
    paragraphs: [
      "We are proud to announce the opening of India’s first ever high-speed ballastless track rail corridor, in the process turning a new chapter in high-speed railway by M/S PATIL RAIL INFRASTRUCTURE PVT Ltd., with a partnership of Delhi Airport Metro Express Link (DAMEL).",
    ],
    bullets: [],
  },
];

const NewsPage = () => {
  useScrollAnimation();
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % cards.length);
  const prev = () => setIndex((prev) => (prev - 1 + cards.length) % cards.length);

  const card = cards[index];

  return (
    <div className="bg-[#F1EFF0] text-gray-800 overflow-hidden">
      <Navbar />
      
      <section className="relative h-[60vh] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          preload="metadata"
        >
          <source src="/innews.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Bottom-left Overlay Text */}
        <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12 z-10">
          <h1 className="text-white font-bold leading-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            In News
          </h1>
        </div>
      </section>

      {/* Our Latest News Section */}
      <section className="relative py-16 sm:py-20">
        {/* Background grid lines for subtle framing */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-300/60" />
          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-300/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-clash font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#F2913F] to-[#8A393B]">
            Our Latest News
          </h2>

          {/* Content Card (carousel-like single card) */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start transition-all duration-300">
            {/* Left image */}
            <div>
              <img src={card.image} alt={card.title} className="rounded-lg w-full h-[360px] sm:h-[420px] object-cover" />
            </div>
            {/* Right content */}
            <div>
              <h3 className="text-4xl sm:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#8A393B] to-[#F2913F]">
                {card.title}
              </h3>
              {card.paragraphs.map((p, i) => (
                <p key={i} className={`mt-${i === 0 ? '6' : '4'} text-gray-700 text-lg`}>{p}</p>
              ))}
              {card.bullets.length > 0 && (
                <>
                  <p className="mt-6 text-gray-900 font-semibold text-lg">Key innovations include:</p>
                  <ul className="mt-3 space-y-4 text-gray-700 text-lg">
                    {card.bullets.map((b, i) => (
                      <li key={i} className="flex items-start"><span className="mt-2 mr-3 block h-2 w-2 rounded-full bg-[#F2913F]" />{b}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button onClick={prev} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500 text-white flex items-center justify-center hover:bg-amber-600 transition-colors">
              <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button onClick={next} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500 text-white flex items-center justify-center hover:bg-amber-600 transition-colors">
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
