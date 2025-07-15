"use client";

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navbar from '@/components/Navbar';
import { ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const LeadershipCard = ({ image, name, post }: { image: string, name: string, post: string }) => (
  <div className="bg-white text-gray-800">
    <div className="bg-[#D9D9D9] h-96 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
    <div className="bg-[#6F2527] text-white p-4 text-center font-clash">
      <p className="font-bold">{post}</p>
      <p>{name}</p>
    </div>
  </div>
);

const leadershipData = [
  {
    image: '/management/Mr%20Vikash%20Kumar%20Gupta%20-%20Group%20CEO.jpg',
    name: 'Mr Vikash Kumar Gupta',
    post: 'Group CEO',
  },
  {
    image: '/management/Mr%20Kaushik%20Ghosh%20-%20Group%20Managing%20Director.jpg',
    name: 'Mr Kaushik Ghosh',
    post: 'Group Managing Director',
  },
  {
    image: '/management/Mr%20Jawahar%20Lal%20Sinhari%20-%20CFO.jpg',
    name: 'Mr Jawahar Lal Sinhari',
    post: 'CFO',
  },
  {
    image: '/management/Mr%20Satish%20Chandra%20Ayla%20-%20CEO%20TRack%20Systems%20and%20Engineering.jpg',
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
  const [emblaRef] = useEmblaCarousel({ slidesToScroll: 'auto', containScroll: 'trimSnaps' });
  
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

          {/* Right side with black cut and text */}
          <div
            className="h-full bg-white flex items-center"
            style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
          >
            <div className="space-y-6 animate-fadeInUp w-full pl-[30%] pr-8 lg:pr-16">
              <h2 className="text-5xl font-bold leading-tight text-black">
                Built on Legacy, Driven by Innovation
              </h2>
              <p className="font-clash font-light text-2xl leading-[39px] tracking-[-0.25px] text-black">
                With decades of expertise, Patil Group has led the transformation of India's railway infrastructure, from introducing Concrete Sleepers to shaping the future with advanced track solutions. Our legacy of quality, innovation, and dedication to progress continues to fuel the evolution of global rail networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Leadership Section */}
      <section className="bg-white text-gray-800 py-24">
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
            <div className="absolute top-1/2 right-12 transform -translate-y-1/2">
                <ArrowRight className="h-6 w-6 text-amber-500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagementPage; 