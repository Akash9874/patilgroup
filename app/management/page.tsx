"use client";

import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navbar from '@/components/Navbar';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const LeadershipCard = ({ image, name, post }: { image: string, name: string, post: string }) => (
  <div className="bg-[#1E1E1E] text-white">
    <div className="relative h-[400px] sm:h-[500px] md:h-[550px] bg-white">
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="contain"
      />
    </div>
    <div className="text-center mt-3 sm:mt-4 font-clash px-2">
      <p className="font-bold text-sm sm:text-base">{post}</p>
      <p className="text-sm sm:text-base">{name}</p>
    </div>
  </div>
);

const leadershipData = [
  {
    image: '/management/lapatil.jpg',
    name: 'Dr. L. S. Patil',
    post: 'Executive Chairman',
  },
  {
    image: '/management/padmajapatil.jpg',
    name: 'Mrs. Padmaja Patil',
    post: 'Director',
  },
  {
    image: '/management/manish.jpg',
    name: 'Mr. Manish Ishwarlal Panchal',
    post: 'Executive Director',
  },
  {
    image: '/management/ajay.jpg',
    name: 'Dr. Ajay Rajput',
    post: 'Managing Director',
  },
  {
    image: '/management/Mr Kaushik Ghosh - Group Managing Director.jpg',
    name: 'Mr Kaushik Ghosh',
    post: 'Group Managing Director',
  },
  {
    image: '/management/Mr Vikash Kumar Gupta - Group CEO.jpg',
    name: 'Mr. Vikash Kumar Gupta',
    post: 'CEO',
  },
  {
    image: '/management/avchandra.jpg',
    name: 'Mr. A.V. Chandra Gupta',
    post: 'CEO - Growth Centre',
  },
  {
    image: '/management/Mr Jawahar Lal Sinhari - CFO.jpg',
    name: 'Mr Jawahar Lal Sinhari',
    post: 'CFO',
  },
  {
    image: '/management/sajjan.jpg',
    name: 'Mr. B.N. Sajjan',
    post: 'Executive Director- Corporate Affairs',
  },
  {
    image: '/management/_DSC5895.jpg',
    name: 'Mr. D.Prince',
    post: 'Director - Sleeper Operations',
  },
  {
    image: '/management/_DSC5857.jpg',
    name: 'Mr. GowriSankar Lavudi',
    post: 'Vice President - RMBD',
  },
  {
    image: '/management/Mr Satish Chandra Ayla - CEO TRack Systems and Engineering.jpg',
    name: 'Mr. Satish Chandra Alya',
    post: 'Coo-Track',
  },
];

const ManagementPage = () => {
  useScrollAnimation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 'auto', containScroll: 'trimSnaps' });
  const [mobileEmblaRef, mobileEmblaApi] = useEmblaCarousel({ 
    align: 'center',
    containScroll: 'trimSnaps',
    dragFree: true,
    loop: false
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  
  const mobileScrollPrev = () => mobileEmblaApi && mobileEmblaApi.scrollPrev();
  const mobileScrollNext = () => mobileEmblaApi && mobileEmblaApi.scrollNext();

  const onSelect = () => {
    if (!mobileEmblaApi) return;
    setSelectedIndex(mobileEmblaApi.selectedScrollSnap());
  };

  useEffect(() => {
    if (!mobileEmblaApi) return;
    onSelect();
    mobileEmblaApi.on('select', onSelect);
    return () => {
      if (mobileEmblaApi) {
        mobileEmblaApi.off('select', onSelect);
      }
    };
  }, [mobileEmblaApi]);
  
  return (
    <div className="bg-[#1E1E1E] text-white">
      <Navbar />
      
      {/* Responsive Management Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/managementhero.webp"
            alt="Management hero background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </div>
        
        {/* Mobile Layout */}
        <div className="md:hidden absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20"></div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4">
              <div className="bg-black/70 backdrop-blur-md rounded-3xl p-8 mx-2 border border-white/10 shadow-2xl">
                <h2 className="text-white text-2xl sm:text-3xl font-medium font-clash mb-2">Our</h2>
                <h1 className="text-white text-3xl sm:text-4xl font-bold font-clash leading-tight">Management</h1>
                <div className="w-20 h-1 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto mt-6 rounded-full"></div>
                <p className="text-gray-200 text-sm mt-4 leading-relaxed">Meet our experienced leadership team</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden absolute inset-0">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 h-full flex items-center">
            <div className="pl-8">
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-lg">
                <h2 className="text-white text-5xl font-medium font-clash mb-2">Our</h2>
                <h1 className="text-white text-6xl font-bold font-clash leading-tight">Management</h1>
                <div className="w-24 h-1.5 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mt-6 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout - Bottom Left Positioning */}
        <div className="hidden lg:block">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-0 left-0 z-10">
            <div className="pl-16 xl:pl-24 pb-16">
              <h2 className="text-white text-6xl lg:text-7xl font-medium font-clash">Our</h2>
              <h1 className="text-white text-8xl lg:text-9xl font-bold font-clash -mt-3 lg:-mt-4">Management</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Our Leadership Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#1E1E1E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            {/* Mobile Header */}
            <div className="md:hidden">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 mx-4 border border-gray-700/30">
                <h2 className="text-2xl sm:text-3xl font-clash font-bold text-amber-500 mb-2">
                  Legacy in Rail
                </h2>
                <p className="text-base sm:text-lg text-[#8A393B] font-semibold">Led by Experience</p>
                <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-[#8A393B] mx-auto mt-4 rounded-full"></div>
              </div>
            </div>
            
            {/* Desktop Header */}
            <div className="hidden md:block">
              <h2 className="text-4xl lg:text-5xl font-clash font-bold text-amber-500 mb-3 sm:mb-4">
                Legacy in Rail
              </h2>
              <p className="text-xl md:text-2xl text-[#8A393B] font-semibold">Led by Experience</p>
            </div>
          </div>
          
          {/* Mobile Layout - Swipeable Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden" ref={mobileEmblaRef}>
              <div className="flex touch-pan-y">
                {leadershipData.map((leader, i) => (
                  <div key={i} className="flex-shrink-0 w-[90%] sm:w-[80%] pl-4 first:pl-6 last:pr-6">
                    <div className="leadership-card-mobile rounded-2xl border border-gray-700/30 backdrop-blur-sm bg-gray-800/20 overflow-hidden shadow-xl">
                      {/* Full Photo Container */}
                      <div className="relative h-[300px] sm:h-[350px] bg-white">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 90vw, 80vw"
                        />
                      </div>
                      
                      {/* Designation and Name Below Photo */}
                      <div className="p-4 sm:p-6 text-center bg-[#1E1E1E]">
                        <p className="text-sm sm:text-base text-amber-400 font-bold uppercase tracking-wider mb-2">
                          {leader.post}
                        </p>
                        <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
                          {leader.name}
                        </h3>
                        {/* Visual accent */}
                        <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-[#8A393B] mx-auto mt-3 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Arrows */}
            <button 
              onClick={mobileScrollPrev} 
              className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/80 transition-colors z-10 backdrop-blur-sm border border-gray-600/30"
              aria-label="Previous management member"
            >
              <ArrowLeft className="h-5 w-5 text-amber-500" />
            </button>
            <button 
              onClick={mobileScrollNext} 
              className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/80 transition-colors z-10 backdrop-blur-sm border border-gray-600/30"
              aria-label="Next management member"
            >
              <ArrowRight className="h-5 w-5 text-amber-500" />
            </button>

            {/* Mobile Scroll Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {leadershipData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => mobileEmblaApi && mobileEmblaApi.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex 
                      ? 'bg-amber-500 scale-125' 
                      : 'bg-gray-600 opacity-50 hover:opacity-75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Mobile Swipe Hint */}
            <div className="text-center mt-4">
              <p className="text-xs text-gray-400 font-medium">
                ← Swipe to explore →
              </p>
            </div>
          </div>
          
          {/* Desktop Layout - Original Carousel */}
          <div className="hidden md:block relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {leadershipData.map((leader, i) => (
                  <div key={i} className="flex-grow-0 flex-shrink-0 w-full md:w-1/3 pl-4 sm:pl-6 md:pl-8">
                    <LeadershipCard image={leader.image} name={leader.name} post={leader.post} />
                  </div>
                ))}
              </div>
            </div>

            <button onClick={scrollPrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full hover:bg-white/20 transition-colors z-10">
              <ArrowLeft className="h-8 w-8 text-amber-500" />
            </button>
            <button onClick={scrollNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full hover:bg-white/20 transition-colors z-10">
              <ArrowRight className="h-8 w-8 text-amber-500" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagementPage;
