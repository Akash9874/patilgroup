"use client";

import React from 'react';
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 'auto', containScroll: 'trimSnaps' });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  
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
        
        {/* Desktop Layout - Original Left Positioning */}
        <div className="hidden lg:block">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 h-full flex items-center">
            <div className="pl-16 xl:pl-24">
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
          
          {/* Mobile Layout - Enhanced Grid */}
          <div className="md:hidden space-y-4">
            {leadershipData.map((leader, i) => (
              <div key={i} className="leadership-card-mobile rounded-2xl p-6 border border-gray-700/30 backdrop-blur-sm">
                <div className="flex items-center space-x-4">
                  {/* Enhanced Mobile Image */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-white ring-2 ring-amber-500/20">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover leadership-image"
                      />
                    </div>
                  </div>
                  
                  {/* Enhanced Mobile Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-amber-400 font-semibold uppercase tracking-wider mb-1">{leader.post}</p>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{leader.name}</h3>
                    {/* Visual accent */}
                    <div className="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-transparent mt-2 rounded-full"></div>
                  </div>
                  
                  {/* Mobile indicator */}
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
