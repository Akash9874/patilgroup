'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const newsItems = [
  {
    date: "Mar 2024",
    title: "Sleepers supplied for new Pune Metro corridor",
    image: '/image.png',
  },
  {
    date: "Sep 2023",
    title: "Recognised by RDSO for product innovation",
    image: '/train 2.jpg',
  },
  {
    date: "Dec 2023",
    title: "Partnered on Mumbai Ahmedabad bullet train trial track",
    image: '/mt train.jpg',
  },
];

export default function Home() {
  useScrollAnimation();

  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const builtForItems = [
    "Built for scale.",
    "Built to last.",
    "Built to keep moving.",
  ];
  const [activeBuiltForItem, setActiveBuiltForItem] = useState(1);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const builtForInterval = setInterval(() => {
      setActiveBuiltForItem(prev => (prev + 1) % builtForItems.length);
    }, 3000);

    return () => {
      clearInterval(builtForInterval);
    };
  }, [builtForItems.length]);

  return (
    <div className="overflow-x-hidden" onMouseMove={handleMouseMove}>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] mt-16 overflow-hidden">
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

        {/* White overlay with diagonal cut */}
          <div 
          className="absolute inset-0 bg-white"
            style={{
            clipPath: 'polygon(0 0, 42% 0, 22% 100%, 0% 100%)',
            }}
          ></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full ml-4 sm:ml-6 lg:ml-12 xl:ml-16">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#8A393B] leading-tight mb-4 animate-fadeInUp">
                Smarter Track Solutions, <br /> Safer Mobility
              </h1>
            </div>
            <div
              className="h-2 my-6 animate-fadeInUp animate-delay-200"
              style={{
                width: '30%',
                background: 'linear-gradient(90deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)',
              }}
            />
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#D97706] animate-fadeInUp animate-delay-400">
                Railway Engineering
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Infrastructure Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="mb-16">
          <h2 className="font-clash font-medium text-[96px] leading-[85px] tracking-[-0.25px] text-[#8A393B] pl-4 sm:pl-6 lg:pl-8 xl:pl-16">
            Engineering infrastructure
          </h2>
          <div className="flex items-center mt-4">
            <div
              className="h-[53px]"
              style={{
                width: '709px',
                background: 'linear-gradient(90deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)',
              }}
            />
            <h2 className="font-clash font-medium text-[96px] leading-[85px] tracking-[-0.25px] text-[#8A393B] ml-4 whitespace-nowrap">
              for the long run
              </h2>
            </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="slide-in-left">
            <img
              src="/engineering-infra.jpg"
              alt="Engineering Infrastructure"
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>

          <div className="slide-in-right space-y-8 pr-4 sm:pr-6 lg:pr-8 xl:pr-16">
            <p className="w-[640px] h-[99px] text-[#1E1E1E] text-[30px] font-medium font-clash leading-[32px]">
              We make and deliver components that hold the railway together. Concrete sleepers, fastening systems, turnout parts and more.
            </p>
            
            <div className="space-y-4 pt-8">
              {builtForItems.map((item, index) => (
                <p
                  key={index}
                  className={`text-4xl font-bold transition-all duration-700 ease-in-out ${
                    activeBuiltForItem === index
                      ? 'text-[#D97706] opacity-100'
                      : 'text-gray-300 opacity-70'
                  }`}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* See Our Work / Explore Products Section */}
      <section className="w-full h-48 relative bg-white">
        {/* Left Section: See Our Work */}
        <Link
          href="/projects"
          className="absolute inset-0 bg-cover bg-center group"
          style={{
            backgroundImage: "url('/seework2.jpg')",
            clipPath: 'polygon(0 0, calc(50% - 1.5rem) 0, calc(50% + 1.5rem) 100%, 0 100%)'
          }}
        >
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>
          <div className="relative z-10 h-full">
            <div className="w-1/2 h-full flex items-center justify-center">
              <span className="text-2xl font-bold text-orange-400 flex items-center gap-4">
                See Our Work
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white transition-colors">
                  <ArrowRight className="w-5 h-5 text-white group-hover:text-orange-400"/>
              </div>
              </span>
            </div>
          </div>
        </Link>

        {/* Right Section: Explore our Products */}
        <Link
          href="/products"
          className="absolute inset-0 bg-cover bg-center group"
          style={{
            backgroundImage: "url('/04_fasteners_banner.jpg')",
            clipPath: 'polygon(calc(50% - 1.5rem + 24px) 0, 100% 0, 100% 100%, calc(50% + 1.5rem + 24px) 100%)'
          }}
        >
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>
          <div className="relative z-10 h-full">
             <div className="w-1/2 h-full flex items-center justify-center ml-auto">
                <span className="text-2xl font-bold text-white flex items-center gap-4">
                  Explore our Products
                  <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white transition-colors">
                    <ArrowRight className="w-5 h-5 text-white group-hover:text-black"/>
              </div>
                </span>
            </div>
          </div>
        </Link>
      </section>

      {/* Legacy Stats Section */}
      <section className="relative mt-16 h-[453px] bg-white overflow-hidden flex items-center justify-center">
        {/* Left Shape */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-28 bg-[#8A393B]"
          style={{ clipPath: 'polygon(0 0, 30% 0, 100% 100%, 0 100%)' }}
        ></div>
        {/* Right Shape */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-28 bg-[#8A393B]"
          style={{ clipPath: 'polygon(70% 0, 100% 0, 100% 100%, 0 100%)' }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto text-left">
          <h2 className="font-clash font-medium text-[96px] leading-[85px] tracking-[-0.25px]">
            <span className="text-[#F2913F]">50</span>
            <span className="text-black"> plus years.</span>
          </h2>
          <h2 className="font-clash font-medium text-[96px] leading-[85px] tracking-[-0.25px] mt-2 ml-12">
            <span className="text-[#F2913F]">10 million </span>
            <span className="text-black">sleepers.</span>
          </h2>
          <h2 className="font-clash font-medium text-[96px] leading-[85px] tracking-[-0.25px] mt-2 ml-48">
            <span className="text-[#F2913F]">Endless</span>
            <span className="text-black"> track</span>
          </h2>
        </div>
      </section>

      {/* Nationwide Presence Section */}
      <section className="relative mt-16 py-24 bg-white overflow-hidden">
        {/* Background Grids */}
        <div className="absolute inset-0 flex justify-between items-center z-0">
          <img 
            src="/grid.png" 
            alt="Decorative grid" 
            className="h-full w-auto opacity-100"
          />
          <img 
            src="/grid.png" 
            alt="Decorative grid" 
            className="h-full w-auto opacity-100 transform scale-x-[-1]"
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-6xl md:text-7xl font-semibold font-clash">
            <span className="text-[#F2913F]">Nationwide</span>
            <span className="text-[#8A393B]"> presence</span>
          </h2>
          <p className="mt-4 text-2xl md:text-3xl text-black font-medium font-clash">
            From city metros to national corridors
          </p>
          <p className="mt-8 text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
            Our products run across India.
            <br />
            We support both new and upgrade projects at every scale.
          </p>
          <div
            className="h-1.5 mt-12 mx-auto"
              style={{
              width: '40%',
              background: 'linear-gradient(90deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)',
            }}
          />
        </div>
      </section>

      {/* In News Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-clash font-bold text-[48px] leading-[45px] text-[#8A393B] mb-12 lg:mb-16 fade-in-section text-left">
            News and updates
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-3 fade-in-section"
                onMouseEnter={() => setHoveredImage(item.image)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <p className="font-clash text-base text-gray-500">{item.date}</p>
                <h3 className="font-clash font-medium text-2xl leading-tight text-[#F2913F] transition-colors duration-300 h-24">
                  {item.title}
                </h3>
                <Link href="/news" className="inline-flex items-center gap-3 text-black font-clash font-medium text-lg group transition-all duration-300">
                  Read more
                  <span className="flex items-center justify-center w-7 h-7 rounded-full border border-[#8A393B] text-[#8A393B] transition-all duration-300 group-hover:bg-[#8A393B] group-hover:text-white">
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={16} />
                  </span>
                </Link>
                <div
                  className="w-full h-[3px] rounded-full mt-2"
                  style={{
                    background: 'linear-gradient(90deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn Update Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 pt-16">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-80 h-52 bg-gray-200 rounded-2xl flex-shrink-0">
                {/* Image placeholder */}
              </div>
              <div className="flex flex-col items-start">
                <p className="font-clash text-base text-[#8A393B]">Dec 2023</p>
                <h3 className="font-clash font-medium text-3xl text-[#F2913F] mt-2 leading-tight">
                  Partnered on Mumbai Ahmedabad bullet train trial track
                </h3>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-[#0A66C2] font-bold text-2xl mt-4 group"
                >
                  <span>LinkedIn</span>
                  <Linkedin className="h-7 w-7" fill="#0A66C2" strokeWidth={0}/>
                  <span className="flex items-center justify-center w-7 h-7 rounded-full border-2 border-[#8A393B] text-[#8A393B] transition-all duration-300 group-hover:bg-[#8A393B] group-hover:text-white">
                    <ArrowRight size={16} />
                  </span>
                </a>
              </div>
            </div>
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
    </div>
  );
}