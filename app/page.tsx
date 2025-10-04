'use client';

import { useState, useEffect, useRef } from 'react';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';
import Image from 'next/image';
import Link from 'next/link';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import SwitchingText from '@/components/SwitchingText';
import HLSVideo from '@/components/HLSVideo';

const projects = [
  {
    city: "Bangalore Metro",
    image: "/bangaloremonu.webp",
    link: "/projects"
  },
  {
    city: "Delhi Phase III",
    image: "/delhimonu.jpg",
    link: "/projects"
  },
  {
    city: "Nagpur Metro",
    image: "/nagpurmetrohero.png",
    link: "/projects"
  },
  {
    city: "Mumbai Line 7B",
    image: "/mumbaimonu.jpeg",
    link: "/projects"
  },
  {
    city: "Kolkata Stretch",
    image: "/kolkatamonu.jpg",
    link: "/projects"
  },
    {
    city: "Ahmedabad Phase II",
    image: "/ahemdabadmonu.webp",
    link: "/projects"
  },
];

const StatCounter = ({ end, duration, suffix = '', prefix = '' }: { end: number; duration: number; suffix?: string; prefix?: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2">
      {inView ? <CountUp end={end} duration={duration} separator="," suffix={suffix} prefix={prefix} /> : '0'}
    </div>
  );
};

const NewsCard = ({ date, title, delay }: { date: string; title: string; delay: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div 
      ref={ref}
      className={`bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 will-change-transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: inView ? `${delay}ms` : '0ms',
        transitionDuration: '800ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div 
        className={`mb-4 transition-all duration-600 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{
          transitionDelay: inView ? `${delay + 100}ms` : '0ms',
        }}
      >
        <span className="text-[#8A393B] font-semibold text-base sm:text-lg">{date}</span>
      </div>
      <h3 
        className={`text-gray-900 font-medium text-sm sm:text-base mb-6 leading-relaxed transition-all duration-600 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{
          transitionDelay: inView ? `${delay + 200}ms` : '0ms',
        }}
      >
        {title}
      </h3>
      <a 
        href="/news" 
        className={`group inline-flex items-center text-[#F2913F] hover:text-[#D97706] font-medium text-sm sm:text-base transition-all duration-600 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{
          transitionDelay: inView ? `${delay + 300}ms` : '0ms',
        }}
      >
        <span className="relative">
          Read More
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F2913F] transition-all duration-300 ease-out group-hover:w-full"></span>
        </span>
        <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

const GradientLine = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div 
      ref={ref}
      className="absolute right-0 h-7 will-change-transform overflow-hidden"
      style={{
        top: '50%',
        transform: 'translateY(-50%)',
        left: 'calc(max(50% - 640px + 350px, 350px))',
      }}
    >
      <div 
        className={`h-full transition-all duration-1000 ease-out ${
          inView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}
        style={{
          background: 'linear-gradient(270deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)',
          transformOrigin: 'right',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

const OurProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="bg-white py-10 sm:py-12 md:py-16 will-change-transform">
      <Carousel
        opts={{ align: "start", loop: true, skipSnaps: false, dragFree: false }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header with fade-in */}
        <div 
          className={`mb-6 sm:mb-8 md:mb-10 transition-all duration-800 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Mobile Layout */}
          <div className="md:hidden text-center mb-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#8A393B] mb-6">Our Projects</h2>
            <div className="flex items-center justify-center">
              <CarouselPrevious className="relative w-9 h-9 rounded-full border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 shadow-sm -mr-1" />
              <CarouselNext className="relative w-9 h-9 rounded-full bg-[#F2913F] text-white hover:bg-[#D97706] shadow-sm" />
            </div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#8A393B]">Our Projects</h2>
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-300 bg-white hover:bg-gray-100 text-gray-700" />
              <CarouselNext className="static w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#F2913F] text-white hover:bg-[#D97706]" />
            </div>
          </div>
        </div>
        
        {/* Carousel Content with fade-in */}
        <CarouselContent className="-ml-2 sm:-ml-3">
          {projects.map((project, index) => (
            <CarouselItem key={index} className="pl-2 sm:pl-3 basis-4/5 sm:basis-3/5 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div 
                className={`group will-change-transform transition-all ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{
                  transitionDuration: '600ms',
                  transitionDelay: inView ? `${150 + index * 80}ms` : '0ms',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {/* Mobile-Optimized Image Container */}
                <div className="mb-2 sm:mb-3 overflow-hidden rounded-lg sm:rounded-xl bg-gray-100 will-change-transform">
                  <Image
                    src={project.image}
                    alt={project.city}
                    width={350}
                    height={400}
                    className="w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="eager"
                    priority={index < 2}
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                
                {/* Mobile-Optimized Text Content */}
                <div className="px-1 sm:px-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1.5 sm:mb-2 text-gray-900 group-hover:text-[#8A393B] transition-colors duration-300">{project.city}</h3>
                  <Link 
                    href={project.link} 
                    className="inline-flex items-center text-xs sm:text-sm font-medium text-gray-700 hover:text-[#F2913F] border-b border-gray-300 hover:border-[#F2913F] transition-all duration-300 group-hover:translate-x-1"
                  >
                    View Project
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

// Nationwide Presence Section Component
const NationwidePresenceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="relative py-32 sm:py-36 md:py-40 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <HLSVideo
          src="https://customer-5j20f6geb6l5wmm2.cloudflarestream.com/b8827e1671f7ff0a0f082f98ddd944c4/manifest/video.m3u8"
          fallbackSrc="/lppatil.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          preload="metadata"
        />
        {/* Add a dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Main Heading */}
        <h2 
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white px-4 transition-all duration-800 will-change-transform ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            transitionDelay: '200ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(90deg, #F2913F, #ffcba4, #F2913F)',
            }}
          >
            Nationwide Presence.
          </span>
        </h2>
        
        {/* Gradient Line */}
        <div
          className={`h-1.5 w-72 sm:w-96 mx-auto mb-8 transition-all duration-700 will-change-transform ${
            inView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{
            background: 'linear-gradient(90deg, #F2913F 0%, #1E3888 50%, #8A393B 100%)',
            transitionDelay: '500ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transformOrigin: 'center',
          }}
        />
        
        {/* Subtitle */}
        <p 
          className={`text-2xl sm:text-3xl md:text-4xl text-gray-200 font-medium mb-6 transition-all duration-700 will-change-transform ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: '700ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          From city metros to national corridors
        </p>
        
        {/* Description */}
        <p 
          className={`text-base sm:text-lg md:text-xl text-gray-300 max-w-lg mx-auto leading-relaxed transition-all duration-700 will-change-transform ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: '900ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          Our products run across India.
          <br />
          We support both new and upgrade projects at every scale.
        </p>
      </div>
    </section>
  );
};

export default function Home() {
  useGSAPAnimations();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showText, setShowText] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    // Set zoom based on screen size
    const updateZoom = () => {
      setZoomLevel(window.innerWidth >= 1024 ? 1.2 : 1);
    };
    
    updateZoom();
    window.addEventListener('resize', updateZoom);
    
    return () => window.removeEventListener('resize', updateZoom);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      // Play video once on mount
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
      });

      // Listen for video end event
      const handleVideoEnd = () => {
        setShowText(true);
      };

      videoRef.current.addEventListener('ended', handleVideoEnd);

      return () => {
        videoRef.current?.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, []);

  return (
    <div className="overflow-x-hidden" style={{ zoom: zoomLevel }}>
      {/* Hero Section - Compact to content */}
      <section className="relative overflow-hidden bg-black">
        {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            src="/heronewvideo.mp4"
            muted
            playsInline
            className="w-full h-full object-cover"
            preload="auto"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content Overlay - Compact spacing */}
        <div className={`relative z-10 flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 text-center px-4 sm:px-6 lg:px-8`}>
          {/* Main Heading - First Animation */}
          <h1 className={`mb-5 sm:mb-6 md:mb-8 transition-all duration-1000 ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2">
              WORLD'S
        </div>
            <div className="text-[#F2913F] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2">
              LARGEST RAILWAY
        </div>
            <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
              MANUFACTURER
              </div>
          </h1>

          {/* Stats Section - Second Animation (after 800ms) */}
          <div 
            className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-5 sm:mb-6 md:mb-8 max-w-5xl w-full transition-all duration-1000`}
            style={{
              opacity: showText ? 1 : 0,
              transform: showText ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: showText ? '800ms' : '0ms',
            }}
          >
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
                {showText ? <CountUp end={50} duration={2} suffix="+" delay={0.8} /> : '0+'}
              </div>
              <div className="text-[#F2913F] text-xs sm:text-sm md:text-base font-medium">years on the job</div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center border-l border-r border-white/30 px-3 sm:px-4">
              <div className="text-[#F2913F] text-base sm:text-lg md:text-xl lg:text-2xl font-bold">Uncompromising</div>
              <div className="text-[#F2913F] text-base sm:text-lg md:text-xl lg:text-2xl font-bold">Quality Standards</div>
          </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
                {showText ? <CountUp end={400000} duration={2} separator="," suffix="+" delay={0.8} /> : '0+'}
              </div>
              <div className="text-[#F2913F] text-xs sm:text-sm md:text-base font-medium">Safe Sleepers per year</div>
            </div>
          </div>

          {/* Tagline - Third Animation (after 1600ms) */}
          <div 
            className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight pb-3 sm:pb-4 md:pb-6 transition-all duration-1000`}
            style={{
              opacity: showText ? 1 : 0,
              transform: showText ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: showText ? '1600ms' : '0ms',
            }}
          >
            <span className="text-[#F2913F]">Built to Scale.</span>{' '}
            <span className="text-[#8A393B]">Built to Last.</span>
            <br className="hidden sm:block" />
            <span className="text-[#8A393B]">Built to Keep Moving.</span>
          </div>
        </div>
      </section>

      {/* Recent News and Updates Section */}
      <section className="bg-[#F5F4F1] py-12 sm:py-16 md:py-20 will-change-transform">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1 */}
            <NewsCard 
              date="Mar 2024"
              title="Sleepers supplied for new Bullet trains"
              delay={0}
            />

            {/* Card 2 */}
            <NewsCard 
              date="Dec 2020"
              title="Acquired ApnaTech"
              delay={150}
            />

            {/* Card 3 */}
            <NewsCard 
              date="Sep 2023"
              title="Recognized by RDSO for product innovation"
              delay={300}
            />
          </div>
        </div>
        
        {/* Button and Gradient Line Section - Full Width to Right Edge */}
        <div className="relative mt-12 sm:mt-16 md:mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              {/* Explore Precast Solution Button */}
            <Link 
              href="/precast" 
                className="group inline-flex items-center gap-3 bg-[#8A393B] hover:bg-[#F2913F] px-6 py-3 md:px-8 md:py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 ease-out text-base md:text-lg font-medium text-white whitespace-nowrap flex-shrink-0 z-10 will-change-transform"
            >
                Explore Precast Solution
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
        
          {/* Gradient Line extending to viewport right edge */}
          <GradientLine />
        </div>
      </section>

      {/* Responsive Our Projects Section */}
      <OurProjectsSection />
      
      {/* Nationwide Presence Section */}
      <NationwidePresenceSection />
    </div>
  );
}
