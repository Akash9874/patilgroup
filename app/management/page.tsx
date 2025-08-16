"use client";

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navbar from '@/components/Navbar';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const LeadershipCard = ({ image, name, post }: { image: string, name: string, post: string }) => (
  <div className="bg-[#1E1E1E] text-white">
    <div className="relative h-[550px] bg-white">
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="contain"
      />
    </div>
    <div className="text-center mt-4 font-clash">
      <p className="font-bold">{post}</p>
      <p>{name}</p>
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
      
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/train.png"
            alt="Train at a station"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-y-0 left-0 w-[35%] bg-black flex items-center">
          <div className="pl-16 md:pl-24">
            <h2 className="text-white text-6xl md:text-7xl font-medium font-clash">Our</h2>
            <h1 className="text-white text-8xl md:text-9xl font-bold font-clash -mt-4">Management</h1>
          </div>
        </div>
      </section>

      {/* Our Leadership Section */}
      <section className="py-24 bg-[#1E1E1E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-clash font-bold text-amber-500 mb-4">
            Legacy in Rail
          </h2>
          <p className="text-2xl text-[#8A393B] font-semibold">Led by Experience</p>
        </div>
        <div className="relative mt-16">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {leadershipData.map((leader, i) => (
                <div key={i} className="flex-grow-0 flex-shrink-0 w-full md:w-1/3 pl-8">
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
      </section>
    </div>
  );
};

export default ManagementPage;
