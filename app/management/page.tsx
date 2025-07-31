"use client";

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navbar from '@/components/Navbar';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const LeadershipCard = ({ image, name, post }: { image: string, name: string, post: string }) => (
  <div className="bg-white text-gray-800">
    <div className="relative bg-[#D9D9D9] h-[550px]">
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="contain"
      />
    </div>
    <div className="bg-[#6F2527] text-white p-4 text-center font-clash">
      <p className="font-bold">{post}</p>
      <p>{name}</p>
    </div>
  </div>
);

const leadershipData = [
  {
    image: '/management/Mr Vikash Kumar Gupta - Group CEO.jpg',
    name: 'Mr Vikash Kumar Gupta',
    post: 'Group CEO',
  },
  {
    image: '/management/Mr Kaushik Ghosh - Group Managing Director.jpg',
    name: 'Mr Kaushik Ghosh',
    post: 'Group Managing Director',
  },
  {
    image: '/management/Mr Jawahar Lal Sinhari - CFO.jpg',
    name: 'Mr Jawahar Lal Sinhari',
    post: 'CFO',
  },
  {
    image: '/management/Mr Satish Chandra Ayla - CEO TRack Systems and Engineering.jpg',
    name: 'Mr Satish Chandra Ayla',
    post: 'CEO Track Systems and Engineering',
  },
  {
    image: '/management/_DSC5857.jpg',
    name: 'Name 5',
    post: 'Post 5',
  },
  {
    image: '/management/_DSC5895.jpg',
    name: 'Name 6',
    post: 'Post 6',
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
      
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <img src="/train.png" alt="Train" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2">
          {/* Left side with "Management" title */}
          <div className="flex items-center justify-center">
            <div className="text-left px-4 sm:px-6 lg:px-8">
              <h1 className="text-6xl md:text-8xl font-bold text-amber-500 animate-fadeInUp">
                Management
              </h1>
            </div>
          </div>

          {/* Right side with white cut and text */}
          <div 
            className="h-full bg-white flex items-center"
            style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
          >
            <div className="space-y-6 animate-fadeInUp w-full pl-[30%] pr-8 lg:pr-16 text-center">
              <h2 className="text-7xl font-bold leading-tight text-[#8A393B]">
                Legacy in rail
              </h2>
              <p className="font-clash font-light text-4xl tracking-[-0.25px] text-black">
                Led by experience
              </p>
              <div
                className="h-2 mt-4 mx-auto"
                style={{
                  width: '200px',
                  background: 'linear-gradient(to right, #F2913F, #1E3888, #8A393B)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Leadership Section */}
      <section className="py-24 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-clash font-bold text-[#8A393B] mb-16">
            Our leadership
          </h2>
        </div>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {leadershipData.map((leader, i) => (
                <div key={i} className="flex-grow-0 flex-shrink-0 w-1/3 pl-8">
                  <LeadershipCard image={leader.image} name={leader.name} post={leader.post} />
                </div>
              ))}
            </div>
          </div>

          <div 
            className="absolute top-0 right-0 w-2/5 h-full bg-[#8A393B]"
            style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}
          >
            <div className="absolute top-1/2 right-12 transform -translate-y-1/2 flex space-x-4">
              <button onClick={scrollPrev} className="p-2 rounded-full hover:bg-white/20 transition-colors">
                <ArrowLeft className="h-8 w-8 text-amber-500" />
              </button>
              <button onClick={scrollNext} className="p-2 rounded-full hover:bg-white/20 transition-colors">
                <ArrowRight className="h-8 w-8 text-amber-500" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagementPage;
