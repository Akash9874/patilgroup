"use client";

import React, { useState, useEffect } from 'react';
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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % cards.length);
    setProgress(0);
  };
  const prev = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setProgress(0);
  };

  // Progress bar and auto-advance
  useEffect(() => {
    if (!isAutoPlaying || isPaused || window.innerWidth >= 1024) {
      setProgress(0);
      return;
    }
    
    const duration = 2500; // 2.5 seconds
    const interval = 50; // Update every 50ms
    const increment = (interval / duration) * 100;
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIndex((current) => (current + 1) % cards.length);
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(progressInterval);
  }, [isAutoPlaying, isPaused, index]);

  const card = cards[index];

  return (
    <div className="bg-[#F1EFF0] text-gray-800 overflow-hidden">
      <Navbar />
      
      <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
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
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-12 lg:left-12 z-10">
          <h1 className="text-white font-bold leading-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            In News
          </h1>
        </div>
      </section>

      {/* Responsive Our Latest News Section */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Background grid lines for subtle framing - Desktop only */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-300/60" />
          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-300/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-clash font-bold mb-6 sm:mb-8 md:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#F2913F] to-[#8A393B] text-center lg:text-left">
            Our Latest News
          </h2>

          {/* Mobile Auto Carousel */}
          <div className="lg:hidden">
            <div 
              className="relative overflow-hidden rounded-2xl"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              {/* Enhanced Card Container with Key-based Re-rendering */}
              <div className="relative min-h-[600px] sm:min-h-[650px]">
                <div 
                  key={`card-${index}`}
                  className="carousel-card bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-500 ease-in-out"
                >
                  {/* Enhanced Mobile Image */}
                  <div className="mb-6 relative overflow-hidden rounded-lg group">
                    <img 
                      key={`image-${index}`}
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-48 sm:h-56 object-cover transition-all duration-500 group-hover:scale-105" 
                    />
                    {/* Image overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Image loading indicator */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-gray-600">{index + 1}/{cards.length}</span>
                    </div>
                  </div>
                  
                  {/* Enhanced Mobile Content with Key for Re-render */}
                  <div key={`content-${index}`} className="space-y-4 carousel-content-enter">
                    <h3 className="text-lg sm:text-xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#8A393B] to-[#F2913F]">
                      {card.title}
                    </h3>
                    
                    {/* Scrollable content area */}
                    <div className="max-h-36 sm:max-h-44 overflow-y-auto custom-scrollbar pr-2">
                      {card.paragraphs.map((p, i) => (
                        <p key={`para-${index}-${i}`} className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                          {p}
                        </p>
                      ))}
                      
                      {card.bullets.length > 0 && (
                        <div className="mt-4">
                          <p className="text-gray-900 font-semibold text-sm sm:text-base mb-3">Key innovations include:</p>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            {card.bullets.map((b, i) => (
                              <li key={`bullet-${index}-${i}`} className="flex items-start">
                                <span className="mt-1.5 mr-2 block h-1.5 w-1.5 rounded-full bg-[#F2913F] flex-shrink-0" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    {/* Enhanced Progress bar for current article */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-[#F2913F] rounded-full"></span>
                          Article {index + 1} of {cards.length}
                        </span>
                        <span className="flex items-center gap-1">
                          {isAutoPlaying && !isPaused ? (
                            <>
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                              Auto-advancing
                            </>
                          ) : (
                            <>
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                              Paused
                            </>
                          )}
                        </span>
                      </div>
                      
                      {/* Enhanced Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="progress-bar h-1.5 rounded-full transition-all duration-75 ease-linear"
                          style={{ 
                            width: `${progress}%`,
                            transform: `translateZ(0)` // GPU acceleration
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Auto Carousel Indicators */}
              <div className="flex justify-center items-center gap-2 mt-6">
                {cards.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setIndex(i);
                      setProgress(0);
                      setIsPaused(true);
                      setTimeout(() => setIsPaused(false), 3000);
                    }}
                    className={`carousel-indicator transition-all duration-300 rounded-full touch-manipulation ${
                      i === index 
                        ? 'w-8 h-2 bg-[#F2913F] active shadow-lg' 
                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400 hover:scale-125'
                    }`}
                    aria-label={`Go to article ${i + 1}: ${cards[i].title.substring(0, 30)}...`}
                  />
                ))}
              </div>
              
              {/* Enhanced Auto-play Control */}
              <div className="text-center mt-4">
                <div className="flex items-center justify-center gap-4">
                  {/* Manual navigation */}
                  <button
                    onClick={() => {
                      prev();
                      setIsPaused(true);
                      setTimeout(() => setIsPaused(false), 3000);
                    }}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors touch-manipulation"
                    aria-label="Previous article"
                  >
                    <ArrowLeft className="h-4 w-4 text-gray-600" />
                  </button>
                  
                  {/* Auto-play control */}
                  <button
                    onClick={() => {
                      setIsAutoPlaying(!isAutoPlaying);
                      setProgress(0);
                    }}
                    className="text-xs text-gray-500 hover:text-gray-700 transition-all duration-200 flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 touch-manipulation border border-gray-200"
                  >
                    <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
                    }`} />
                    <span className="font-medium">{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
                  </button>
                  
                  {/* Manual navigation */}
                  <button
                    onClick={() => {
                      next();
                      setIsPaused(true);
                      setTimeout(() => setIsPaused(false), 3000);
                    }}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors touch-manipulation"
                    aria-label="Next article"
                  >
                    <ArrowRight className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Original */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 md:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start transition-all duration-300">
              {/* Left image */}
              <div>
                <img src={card.image} alt={card.title} className="rounded-lg w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px] object-cover" />
              </div>
              {/* Right content */}
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#8A393B] to-[#F2913F]">
                  {card.title}
                </h3>
                {card.paragraphs.map((p, i) => (
                  <p key={i} className={`mt-${i === 0 ? '4 sm:mt-6' : '3 sm:mt-4'} text-gray-700 text-sm sm:text-base md:text-lg`}>{p}</p>
                ))}
                {card.bullets.length > 0 && (
                  <>
                    <p className="mt-4 sm:mt-6 text-gray-900 font-semibold text-base sm:text-lg">Key innovations include:</p>
                    <ul className="mt-2 sm:mt-3 space-y-2 sm:space-y-3 md:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg">
                      {card.bullets.map((b, i) => (
                        <li key={i} className="flex items-start"><span className="mt-1 sm:mt-2 mr-2 sm:mr-3 block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#F2913F]" />{b}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>

            {/* Desktop Navigation Arrows */}
            <div className="flex justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
              <button onClick={prev} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-amber-500 text-white flex items-center justify-center hover:bg-amber-600 transition-colors">
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </button>
              <button onClick={next} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-amber-500 text-white flex items-center justify-center hover:bg-amber-600 transition-colors">
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
