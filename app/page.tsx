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
    <div ref={ref} className="text-5xl font-bold text-black mb-2">
      {inView ? <CountUp end={end} duration={duration} separator="," suffix={suffix} prefix={prefix} /> : '0'}
    </div>
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
    <div className="overflow-x-hidden" style={{ zoom: zoomLevel, width: '100%', maxWidth: '100vw' }}>
      {/* Hero Section - Compact to content */}
      <section className="relative overflow-hidden bg-black" style={{ maxWidth: '100vw' }}>
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
        <div className={`relative z-10 flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 lg:py-28 text-center px-4 sm:px-6 lg:px-8`}>
          {/* Main Heading - First Animation */}
          <h1 className={`mb-6 sm:mb-8 md:mb-10 transition-all duration-1000 ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-1 sm:mb-2">
              WORLD'S
        </div>
            <div className="text-[#F2913F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-1 sm:mb-2">
              LARGEST RAILWAY
        </div>
            <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              MANUFACTURER
              </div>
          </h1>

          {/* Stats Section - Second Animation (after 800ms) */}
          <div 
            className={`grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-8 md:mb-12 max-w-5xl w-full transition-all duration-1000`}
            style={{
              opacity: showText ? 1 : 0,
              transform: showText ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: showText ? '800ms' : '0ms',
            }}
          >
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <div className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-1 sm:mb-2">
                {showText ? <CountUp end={50} duration={2} suffix="+" delay={0.8} /> : '0+'}
              </div>
              <div className="text-[#F2913F] text-sm sm:text-base md:text-lg font-medium">years on the job</div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center border-l border-r border-white/30 px-3 sm:px-4">
              <div className="text-[#F2913F] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">Uncompromising</div>
              <div className="text-[#F2913F] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">Quality Standards</div>
          </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <div className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-1 sm:mb-2">
                {showText ? <CountUp end={400000} duration={2} separator="," suffix="+" delay={0.8} /> : '0+'}
              </div>
              <div className="text-[#F2913F] text-sm sm:text-base md:text-lg font-medium">Safe Sleepers per year</div>
            </div>
          </div>

          {/* Tagline - Third Animation (after 1600ms) */}
          <div 
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight pb-4 sm:pb-6 md:pb-8 transition-all duration-1000`}
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
      <section className="bg-[#F5F4F1] py-12 sm:py-16 md:py-20 will-change-transform fade-in-section overflow-hidden" style={{ maxWidth: '100vw' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 will-change-transform">
              <div className="mb-4">
                <span className="text-[#8A393B] font-semibold text-lg sm:text-xl">Mar 2024</span>
              </div>
              <h3 className="text-gray-900 font-medium text-base sm:text-lg mb-6 leading-relaxed">
                Sleepers supplied for new Bullet trains
              </h3>
              <a 
                href="/news" 
                className="group inline-flex items-center text-[#F2913F] hover:text-[#D97706] font-medium text-sm sm:text-base transition-colors duration-200"
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

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 will-change-transform">
              <div className="mb-4">
                <span className="text-[#8A393B] font-semibold text-lg sm:text-xl">Dec 2020</span>
              </div>
              <h3 className="text-gray-900 font-medium text-base sm:text-lg mb-6 leading-relaxed">
                Acquired ApnaTech
              </h3>
              <a 
                href="/news" 
                className="group inline-flex items-center text-[#F2913F] hover:text-[#D97706] font-medium text-sm sm:text-base transition-colors duration-200"
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

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 will-change-transform">
              <div className="mb-4">
                <span className="text-[#8A393B] font-semibold text-lg sm:text-xl">Sep 2023</span>
              </div>
              <h3 className="text-gray-900 font-medium text-base sm:text-lg mb-6 leading-relaxed">
                Recognized by RDSO for product innovation
              </h3>
              <a 
                href="/news" 
                className="group inline-flex items-center text-[#F2913F] hover:text-[#D97706] font-medium text-sm sm:text-base transition-colors duration-200"
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
          <div 
            className="absolute right-0 h-7 will-change-transform"
            style={{
              top: '50%',
              transform: 'translateY(-50%)',
              width: '60%',
              maxWidth: 'calc(100vw - 350px)',
              background: 'linear-gradient(270deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)',
            }}
          />
        </div>
      </section>

      {/* Responsive Our Projects Section */}
      <section className="bg-white py-12 sm:py-16 md:py-24 will-change-transform fade-in-section overflow-hidden" style={{ maxWidth: '100vw' }}>
        <Carousel
          opts={{ align: "start", loop: true, skipSnaps: false, dragFree: false }}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Mobile-Optimized Header */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            {/* Mobile Layout */}
            <div className="md:hidden text-center mb-6">
              <h2 className="text-3xl font-bold text-[#8A393B] mb-8">Our Projects</h2>
              <div className="flex items-center justify-center">
                <CarouselPrevious className="relative w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 shadow-sm -mr-1" />
                <CarouselNext className="relative w-10 h-10 rounded-full bg-[#F2913F] text-white hover:bg-[#D97706] shadow-sm" />
              </div>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden md:flex justify-between items-end">
              <div>
                <h2 className="text-4xl font-bold text-[#8A393B] mb-2">Our Projects</h2>
              </div>
              <div className="flex items-center">
                <CarouselPrevious className="relative w-12 h-12 rounded-full border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 -mr-14" />
                <CarouselNext className="relative w-12 h-12 rounded-full bg-[#F2913F] text-white hover:bg-[#D97706]" />
              </div>
            </div>
          </div>
          
          {/* Responsive Carousel Content */}
          <CarouselContent className="-ml-2 sm:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 sm:pl-4 basis-4/5 sm:basis-3/5 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="group will-change-transform">
                  {/* Mobile-Optimized Image Container */}
                  <div className="mb-3 sm:mb-4 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100 will-change-transform">
                    <Image
                      src={project.image}
                      alt={project.city}
                      width={400}
                      height={500}
                      className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="eager"
                      priority={index < 2}
                      quality={85}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  
                  {/* Mobile-Optimized Text Content */}
                  <div className="px-1 sm:px-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-[#8A393B] transition-colors duration-300">{project.city}</h3>
                    <Link 
                      href={project.link} 
                      className="inline-flex items-center text-sm sm:text-base font-medium text-gray-700 hover:text-[#F2913F] border-b border-gray-300 hover:border-[#F2913F] transition-all duration-300 group-hover:translate-x-1"
                    >
                      View Project
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      
      {/* Nationwide Presence Section */}
      <section className="relative py-48 overflow-hidden fade-in-section" style={{ maxWidth: '100vw' }}>
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center fade-in-section">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-white px-4">
                <span
                    className="bg-clip-text text-transparent"
                    style={{
                        backgroundImage: 'linear-gradient(90deg, #F2913F, #ffcba4, #F2913F)',
                    }}
                >
                    Nationwide Presence.
                </span>
            </h2>
            <div
                className="h-1.5 w-96 mx-auto mb-10"
                style={{
                    background: 'linear-gradient(90deg, #F2913F 0%, #1E3888 50%, #8A393B 100%)',
                }}
            />
            <p className="text-4xl text-gray-200 font-medium mb-8">
                From city metros to national corridors
            </p>
            <p className="text-xl text-gray-300 max-w-lg mx-auto leading-relaxed">
                Our products run across India.
                <br />
                We support both new and upgrade projects at every scale.
            </p>
        </div>
      </section>
    </div>
  );
}
