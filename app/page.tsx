'use client';

import { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
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
  useScrollAnimation();
  const [isHeroAnimated, setIsHeroAnimated] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsHeroAnimated(true);
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.error("Video play failed:", error);
        });
      }
    }, 500); // Start animation after 500ms

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-black">
        {/* Optimized Mobile Layout - Full Video with Text Overlay */}
        <div className="sm:hidden h-full relative">
          {/* Full-width Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <HLSVideo
              ref={videoRef}
              src="https://customer-5j20f6geb6l5wmm2.cloudflarestream.com/f322e306934e467e14d0ece7835151b7/manifest/video.m3u8"
              fallbackSrc="/herovideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              preload="metadata"
            />
          </div>
          
          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center z-20">
            <div className="px-6 py-6 w-full">
              <SwitchingText isMobile={true} isAnimated={isHeroAnimated} />
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original Design */}
        <div className="hidden sm:block h-full">
        {/* Video Background with Diagonal Cutout */}
        <div 
          className="absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out"
          style={{
            clipPath: isHeroAnimated 
              ? 'polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)' 
              : 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
          }}
        >
          <HLSVideo
            ref={videoRef}
            src="https://customer-5j20f6geb6l5wmm2.cloudflarestream.com/f322e306934e467e14d0ece7835151b7/manifest/video.m3u8"
            fallbackSrc="/herovideo.mp4"
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            preload="metadata"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <SwitchingText isMobile={false} isAnimated={isHeroAnimated} />
        </div>
        </div>
      </section>

      {/* Responsive Built to Section */}
      <section className="bg-black">
        {/* Mobile: Vertical Stack */}
        <div className="md:hidden">
          {/* Built to Scale - Mobile */}
          <div className="bg-black p-6 fade-in-section border-b border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#8A393B] mb-2">
                  Built to Scale.
                </h2>
                <p className="text-gray-400 text-xs mb-3">Mar 2024</p>
                <h3 className="text-white text-base font-medium mb-4 leading-tight">
                  Sleepers supplied for new Pune Metro Corridor
                </h3>
                <Link href="/news" className="text-[#F2913F] font-medium text-sm hover:text-[#D97706] transition-colors duration-300 flex items-center group">
                  Read More
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Built to Last - Mobile */}
          <div className="bg-black p-6 fade-in-section border-b border-gray-700" style={{ animationDelay: '200ms' }}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#F2913F] mb-2">
                  Built to Last.
                </h2>
                <p className="text-gray-400 text-xs mb-3">Dec 2023</p>
                <h3 className="text-white text-base font-medium mb-4 leading-tight">
                  Partnered on Mumbai-Ahmedabad bullet train trial track
                </h3>
                <Link href="/news" className="text-[#F2913F] font-medium text-sm hover:text-[#D97706] transition-colors duration-300 flex items-center group">
                  Read More
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Built to Keep Moving - Mobile */}
          <div className="bg-black p-6 fade-in-section" style={{ animationDelay: '400ms' }}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#F2913F] mb-2">
                  Built to Keep Moving.
                </h2>
                <p className="text-gray-400 text-xs mb-3">Sep 2023</p>
                <h3 className="text-white text-base font-medium mb-4 leading-tight">
                  Recognized by RDSO for product innovation
                </h3>
                <Link href="/news" className="text-[#F2913F] font-medium text-sm hover:text-[#D97706] transition-colors duration-300 flex items-center group">
                  Read More
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop: Original Horizontal Layout */}
        <div className="hidden md:flex h-96">
          {/* Built to Scale - Desktop */}
          <div className="flex-1 bg-black flex flex-col justify-between p-4 sm:p-6 lg:p-8 fade-in-section">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#8A393B] mb-3 sm:mb-4 lg:mb-6">
                Built to Scale.
              </h2>
              <div className="mb-4 lg:mb-6">
                <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-xs lg:text-sm mb-1">Mar 2024</p>
              <h3 className="text-white text-sm lg:text-base xl:text-lg font-medium mb-3 lg:mb-4 leading-tight">
                Sleepers supplied for new<br />
                Pune Metro Corridor
              </h3>
              <Link href="/news" className="text-[#F2913F] font-medium text-sm lg:text-base hover:text-[#D97706] transition-colors duration-300">
                Read More
              </Link>
            </div>
          </div>

          {/* Built to Last - Desktop */}
          <div className="flex-1 bg-black flex flex-col justify-between p-4 sm:p-6 lg:p-8 fade-in-section border-l border-gray-700" style={{ transitionDelay: '200ms' }}>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#F2913F] mb-3 sm:mb-4 lg:mb-6">
                Built to Last.
              </h2>
              <div className="mb-4 lg:mb-6">
                <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-xs lg:text-sm mb-1">Dec 2023</p>
              <h3 className="text-white text-sm lg:text-base xl:text-lg font-medium mb-3 lg:mb-4 leading-tight">
                Partnered on Mumbai-<br />
                Ahmedabad bullet train trial<br />
                track
              </h3>
              <Link href="/news" className="text-[#F2913F] font-medium text-sm lg:text-base hover:text-[#D97706] transition-colors duration-300">
                Read More
              </Link>
            </div>
          </div>

          {/* Built to Keep Moving - Desktop */}
          <div className="flex-1 bg-black flex flex-col justify-between p-4 sm:p-6 lg:p-8 fade-in-section border-l border-gray-700" style={{ transitionDelay: '400ms' }}>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#F2913F] mb-3 sm:mb-4 lg:mb-6">
                Built to Keep Moving.
              </h2>
              <div className="mb-4 lg:mb-6">
                <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-xs lg:text-sm mb-1">Sep 2023</p>
              <h3 className="text-white text-sm lg:text-base xl:text-lg font-medium mb-3 lg:mb-4 leading-tight">
                Recognized by RDSO for<br />
                product innovation
              </h3>
              <Link href="/news" className="text-[#F2913F] font-medium text-sm lg:text-base hover:text-[#D97706] transition-colors duration-300">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Engineering Infrastructure Section */}
      <section className="bg-[#F5F4F1] relative py-12 md:py-24 overflow-hidden">
        {/* Precast Solutions CTA */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
          <div className="flex justify-center md:justify-end fade-in-section">
            <Link 
              href="/precast" 
              className="group inline-flex items-center gap-3 bg-[#F2913F] hover:bg-[#8A393B] px-6 py-3 md:px-8 md:py-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-base md:text-lg font-medium text-white"
            >
              Explore Precast Solutions
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
        

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout */}
          <div className="md:hidden space-y-8">
            {/* Mobile Content */}
            <div className="fade-in-section">
              {/* Gradient Line */}
              <div
                className="h-1.5 mb-6 rounded-full"
                style={{
                  width: '60px',
                  background: 'linear-gradient(90deg, #F2913F 0%, #1E3888 50%, #8A393B 100%)',
                }}
              />
              {/* Mobile Text */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#8A393B] leading-tight mb-4">
                  Engineering Infrastructure for the long run.
                </h2>
                <p className="text-gray-700 text-base leading-relaxed">
                  We make and deliver components that hold the railway together. Concrete sleepers, fastening systems, turnout parts and more.
                </p>
              </div>
            </div>
            
            {/* Mobile Image */}
            <div className="fade-in-section">
              <Image
                src="/engineering-infra.jpg"
                alt="Train in station"
                width={1200}
                height={800}
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>

          {/* Desktop Layout - Original */}
          <div className="hidden md:block">
            <div className="flex items-center justify-center mb-24 fade-in-section">
              {/* Image */}
              <div className="pr-32 z-0">
                <Image
                  src="/engineering-infra.jpg"
                  alt="Train in station"
                  width={1200}
                  height={800}
                  className="w-full max-w-3xl h-auto object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>

              {/* Text Box Area */}
              <div className="-ml-64 z-10">
                {/* Gradient Line */}
                <div
                  className="h-2 mb-4"
                  style={{
                    width: '85%',
                    background: 'linear-gradient(90deg, #F2913F 0%, #1E3888 50%, #8A393B 100%)',
                  }}
                />
                {/* White Text Box */}
                <div className="bg-white p-12">
                  <h2 className="text-4xl font-bold text-[#8A393B] leading-tight mb-6">
                    Engineering Infrastructure<br />
                    for the long run.
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We make and deliver components that hold the railway together. Concrete sleepers, fastening systems, turnout parts and more.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Responsive Statistics Section */}
          <div className="mt-12 md:mt-0">
            {/* Mobile Stats - Clean Cards without Icons */}
            <div className="md:hidden space-y-3">
              <div className="bg-white rounded-xl p-4 shadow-sm fade-in-section">
                <div className="text-center">
                  <StatCounter end={50} duration={2.5} suffix="+" />
                  <div className="text-gray-500 text-xs font-medium mt-1">years on the job</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-sm fade-in-section" style={{ animationDelay: '200ms' }}>
                <div className="text-center">
                  <StatCounter end={100} duration={2.5} suffix="%" />
                  <div className="text-gray-500 text-xs font-medium mt-1">Clients Satisfactions</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-sm fade-in-section" style={{ animationDelay: '400ms' }}>
                <div className="text-center">
                  <StatCounter end={4000000} duration={2.5} suffix="+" />
                  <div className="text-gray-500 text-xs font-medium mt-1">Safe Sleepers per year</div>
                </div>
              </div>
            </div>
            
            {/* Desktop Stats - Original Grid */}
            <div className="hidden md:grid grid-cols-3 text-center">
              <div className="flex flex-col items-center justify-center fade-in-section">
                <StatCounter end={50} duration={2.5} suffix="+" />
                <div className="text-gray-500 text-base font-medium">years on the job</div>
              </div>
              <div className="flex flex-col items-center justify-center fade-in-section" style={{ transitionDelay: '200ms' }}>
                <StatCounter end={100} duration={2.5} suffix="%" />
                <div className="text-gray-500 text-base font-medium">Clients Satisfactions</div>
              </div>
              <div className="flex flex-col items-center justify-center fade-in-section" style={{ transitionDelay: '400ms' }}>
                <StatCounter end={4000000} duration={2.5} suffix="+" />
                <div className="text-gray-500 text-base font-medium">Safe Sleepers per year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Our Projects Section */}
      <section className="bg-white py-12 sm:py-16 md:py-24">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Mobile-Optimized Header */}
          <div className="mb-8 sm:mb-10 md:mb-12 fade-in-section">
            {/* Mobile Layout */}
            <div className="md:hidden text-center mb-6">
              <h2 className="text-3xl font-bold text-[#8A393B] mb-8">Our Projects</h2>
              <div className="flex items-center justify-center gap-1">
                <CarouselPrevious className="relative w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 shadow-sm" />
                <CarouselNext className="relative w-10 h-10 rounded-full bg-[#F2913F] text-white hover:bg-[#D97706] shadow-sm" />
              </div>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden md:flex justify-between items-end">
              <div>
                <h2 className="text-4xl font-bold text-[#8A393B] mb-2">Our Projects</h2>
              </div>
              <div className="flex items-center gap-0">
                <CarouselPrevious className="relative w-12 h-12 rounded-full border border-gray-300 bg-white hover:bg-gray-100 text-gray-700" />
                <CarouselNext className="relative w-12 h-12 rounded-full bg-[#F2913F] text-white hover:bg-[#D97706]" />
              </div>
            </div>
          </div>
          
          {/* Responsive Carousel Content */}
          <CarouselContent className="-ml-2 sm:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 sm:pl-4 basis-4/5 sm:basis-3/5 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="fade-in-section group">
                  {/* Mobile-Optimized Image Container */}
                  <div className="mb-3 sm:mb-4 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.city}
                      width={400}
                      height={500}
                      className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
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
      <section className="relative py-48 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                preload="metadata"
              
            >
                <source src="/lppatil.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
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
                className="h-1.5 w-64 mx-auto mb-10"
                style={{
                    background: 'linear-gradient(90deg, #F2913F 0%, #ffcba4 100%)',
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
