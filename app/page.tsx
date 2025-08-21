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
        {/* Video Background with Diagonal Cutout */}
        <div 
          className="absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out"
          style={{
            clipPath: isHeroAnimated 
              ? 'polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)' 
              : 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
          }}
        >
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            preload="metadata"

          >
            <source src="/herovideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16">
            {/* Left Side Text */}
            <div 
              className={`absolute left-4 sm:left-6 lg:left-8 xl:left-16 top-1/2 transform -translate-y-1/2 pt-8 transition-opacity duration-1000 ease-in-out ${isHeroAnimated ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '800ms' }}
            >
              <h2 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
                <span className={`transition-colors duration-1000 ${isHeroAnimated ? 'text-[#F2913F]' : 'text-white'}`}>RAILWAY</span><br />
                <span className={`transition-colors duration-1000 ${isHeroAnimated ? 'text-[#8A393B]' : 'text-white'}`}>ENGINEERING</span>
              </h2>
            </div>

            {/* Right Side Text */}
            <div 
              className={`absolute right-4 sm:right-6 lg:right-8 xl:right-16 top-1/2 transform -translate-y-1/2 pt-8 transition-opacity duration-1000 ease-in-out ${isHeroAnimated ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '1200ms' }}
            >
              <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight italic">
                SMARTER TRACK<br />
                SOLUTIONS,<br />
                SAFER MOBILITY
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Built to Section */}
      <section className="h-96 flex">
        {/* Built to Scale */}
        <div className="flex-1 bg-black flex flex-col justify-between p-6 lg:p-8 fade-in-section">
          <div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#8A393B] mb-4 lg:mb-6">
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
            <button className="text-[#F2913F] font-medium text-sm lg:text-base hover:text-[#D97706] transition-colors duration-300">
              Read More
            </button>
            </div>
        </div>

        {/* Built to Last */}
        <div className="flex-1 bg-black flex flex-col justify-between p-6 lg:p-8 fade-in-section border-l border-gray-700" style={{ transitionDelay: '200ms' }}>
          <div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#F2913F] mb-4 lg:mb-6">
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
            <button className="text-[#F2913F] font-medium text-sm lg:text-base hover:text-[#D97706] transition-colors duration-300">
              Read More
            </button>
          </div>
        </div>

        {/* Built to Keep Moving */}
        <div className="flex-1 bg-black flex flex-col justify-between p-6 lg:p-8 fade-in-section border-l border-gray-700" style={{ transitionDelay: '400ms' }}>
          <div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#F2913F] mb-4 lg:mb-6">
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
            <button className="text-[#F2913F] font-medium text-sm lg:text-base hover:text-[#D97706] transition-colors duration-300">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Engineering Infrastructure Section */}
      <section className="bg-[#F5F4F1] relative py-24 overflow-hidden">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-300 h-full scale-in"></div>
          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-300 h-full scale-in" style={{ transitionDelay: '200ms' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Top Content Area */}
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

          {/* Statistics Section */}
          <div className="grid grid-cols-3 text-center">
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
                  <div className="text-gray-500 text-base font-medium">Safe Sleepers</div>
              </div>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="bg-white py-24">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex justify-between items-end mb-12 fade-in-section">
            <div>
              <h2 className="text-4xl font-bold text-[#8A393B] mb-2">Our Projects</h2>
              <p className="text-gray-500"></p>
              </div>
            <div className="flex items-center gap-4">
              <CarouselPrevious className="relative w-12 h-12 rounded-full border border-gray-300 bg-white hover:bg-gray-100 text-gray-700" />
              <CarouselNext className="relative w-12 h-12 rounded-full bg-[#F2913F] text-white hover:bg-[#D97706]" />
            </div>
          </div>
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="fade-in-section">
                  <div className="mb-4 overflow-hidden rounded-2xl">
                    <Image
                      src={project.image}
                      alt={project.city}
                      width={400}
                      height={500}
                      className="w-full h-[450px] object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.city}</h3>
                  <Link href={project.link} className="text-base font-medium text-gray-900 border-b border-gray-400 hover:border-gray-900 transition">
                    View Project
                  </Link>
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
