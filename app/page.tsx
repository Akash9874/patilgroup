'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SolutionsCarousel from '@/components/SolutionsCarousel';

// Counter hook for animated counting
function useCounter(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * (end - start) + start));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start, isVisible]);

  return { count, setIsVisible };
}

const newsItems = [
  {
    title: "Patil Group recently acquired 'Apnatech'.",
    image: '/image.png',
  },
  {
    title: "India's largest foundry opened in Bokaro by Patil group.",
    image: '/train 2.jpg',
  },
  {
    title: "India's Longest Railway Tunnel opens to Traffic",
    image: '/mt train.jpg',
  },
];

export default function Home() {
  useScrollAnimation();
  // Counter hooks for each stat
  const sleepers = useCounter(40, 2500);
  const employees = useCounter(5000, 2000);
  const zones = useCounter(14, 1500);

  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger counter animations when stats section becomes visible
          if (entry.target.id === 'stats-section') {
            sleepers.setIsVisible(true);
            employees.setIsVisible(true);
            zones.setIsVisible(true);
          }
        }
      });
    }, observerOptions);

    // Also observe the stats section
    const statsSection = document.getElementById('stats-section');
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, [sleepers, employees, zones]);

  return (
    <div className="overflow-x-hidden" onMouseMove={handleMouseMove}>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/herovideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Diagonal Cut Overlays - Increased left cut width for text */}
        <div className="absolute inset-0">
          {/* Left diagonal cut with #1E1E1E color - increased width to fit text */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundColor: '#1E1E1E',
              clipPath: 'polygon(0% 0%, 35% 0%, 25% 100%, 0% 100%)'
            }}
          ></div>
          
          {/* Right diagonal cut with #1E1E1E color - kept narrow */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundColor: '#1E1E1E',
              clipPath: 'polygon(85% 100%, 90% 0%, 100% 0%, 100% 100%)'
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full">
            <div className="max-w-lg ml-4 sm:ml-6 lg:ml-12 xl:ml-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-2 sm:mb-4 animate-fadeInUp">
                Delivering
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight animate-fadeInUp animate-delay-300">
                Track solutions
              </h2>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animate-delay-500">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1 hover-glow cursor-pointer">
            <div className="w-1 h-3 bg-white/70 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Made in India Section 1 */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="slide-in-left">
              <h2
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-tight"
                style={{ color: '#8A393B' }}
              >
                Made in India
              </h2>
            </div>
            <div className="space-y-6 slide-in-right lg:mt-16">
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Patil Group is a trusted leader in railway infrastructure, delivering 
                high-quality track solutions for urban and interurban transport. 
                From design to execution, we provide innovative and sustainable 
                railway components that power seamless mobility.
              </p>
              <button className="inline-flex items-center gap-[13px] text-black font-clash font-bold text-2xl leading-[72px] group hover-lift transition-all duration-300">
                Read more 
                <span className="flex items-center justify-center w-7 h-7 rounded-full border border-[#8A393B] text-[#8A393B]">
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={16} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Made in India Section 2 */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 lg:col-span-2 fade-in-section">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 lg:pr-0">
                With over 50 years of legacy, Patil Group has been a key partner in India's railway 
                infrastructure, driving innovation from wooden to concrete to composite sleepers
              </h3>
              <div className="mt-16 lg:mt-24">
                <h4 className="text-3xl sm:text-4xl font-bold text-amber-800 mb-4 animate-gradient-shift bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text text-transparent">
                  Unmatched Expertise
                </h4>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-3 scale-in">
              <div className="relative hover-lift">
                <img
                  src="/02_railway_infra_symbol.jpg"
                  alt="Modern Train"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committed to Progress Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="slide-in-left lg:col-span-3 pl-4 sm:pl-6 lg:pl-8 xl:pl-16">
            <h2 
              className="text-left"
              style={{
                fontFamily: 'Clash Grotesk, Arial, sans-serif',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '86px',
                lineHeight: '1.1',
                color: '#8A393B'
              }}
            >
              <div>Committed to Progress,</div>
              <div>Driven by <span style={{ color: '#D97706' }}>Innovation</span></div>
            </h2>
          </div>
          <div className="space-y-6 slide-in-right lg:col-span-2 pt-16 lg:pt-32 pr-4 sm:pr-6 lg:pr-8 xl:pr-16">
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Patil Group has played a pivotal role in revolutionizing India's rail 
              infrastructure, consistently delivering exceptional results with a 
              focus on innovation, efficiency, and quality. From supplying over 
              40 million sleepers to Indian Railways and industrial giants, the 
              company has made significant contributions to the growth and 
              modernization of the rail sector.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-black text-lg group hover-lift transition-all duration-300">
              About us
              <span className="flex items-center justify-center w-6 h-6 rounded-full border border-[#8A393B] text-[#8A393B] group-hover:bg-[#8A393B] group-hover:text-white transition-colors">
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <SolutionsCarousel />

      {/* In News Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-800 mb-12 lg:mb-16 fade-in-section text-left">
            In News
          </h2>
          
          <div className="space-y-12">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="max-w-md lg:max-w-lg fade-in-section"
                style={{ marginLeft: index === 1 ? 'auto' : (index === 2 ? 'auto' : '0'), marginRight: index === 1 ? 'auto' : '0' }}
                onMouseEnter={() => setHoveredImage(item.image)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <h3 className="font-clash font-medium text-4xl leading-none text-[#F2913F] mb-4 lg:mb-6 transition-colors duration-300">
                  {item.title}
                </h3>
                <Link href="/news" className="inline-flex items-center gap-[13px] text-black font-clash font-medium text-2xl leading-[72px] group transition-all duration-300">
                  Read more
                  <span className="flex items-center justify-center w-7 h-7 rounded-full border border-[#8A393B] text-[#8A393B] transition-all duration-300 group-hover:bg-[#8A393B] group-hover:text-white">
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={16} />
                  </span>
                </Link>
                <div className="w-full h-1 bg-gradient-to-r from-amber-800 via-blue-600 to-orange-500 rounded-full animate-gradient-shift"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {hoveredImage && (
        <div
          className="pointer-events-none fixed z-50 transition-opacity duration-300"
          style={{
            left: cursorPos.x + 20,
            top: cursorPos.y,
            opacity: hoveredImage ? 1 : 0,
          }}
        >
          <Image
            src={hoveredImage}
            alt="Hovered News Image"
            width={300}
            height={200}
            className="rounded-lg shadow-2xl"
          />
        </div>
      )}

      {/* Numbers That Define Our Legacy Section */}
      <section id="stats-section" className="py-20 sm:py-24 lg:py-32 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#8A393B] mb-16 lg:mb-20 text-center">
            Numbers That Define Our Legacy
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 - Sleepers */}
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-[#8A393B] mb-2">
                +{sleepers.count} Million
              </p>
              <p className="text-lg text-black">
                Sleepers Supplied
              </p>
            </div>

            {/* Stat 2 - Employees */}
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-[#8A393B] mb-2">
                +{employees.count.toLocaleString()}
              </p>
              <p className="text-lg text-black">
                Employees
              </p>
            </div>

            {/* Stat 3 - Railway Zones */}
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-[#8A393B] mb-2">
                +{zones.count}
              </p>
              <p className="text-lg text-black">
                Railway Zones Served
              </p>
            </div>

            {/* Stat 4 - Largest */}
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-[#8A393B] mb-2">
                Largest
              </p>
              <p className="text-lg text-black">
                Rail Welding Depot in India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}