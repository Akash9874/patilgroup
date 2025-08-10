"use client";

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { ArrowRight } from 'lucide-react'; // Changed from ChevronRight
import { GridLines } from '@/components/GridLines';

const PhotoGalleryPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center relative">
        <GridLines />
        <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 relative">
          <div className="relative group w-full aspect-[16/9]">
            <Image
              src="/train 2.jpg"
              alt="Indian Railways Train"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              loading="eager"
              priority
            />
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <div className="w-12 h-12 bg-transparent border-2 border-orange-500 rounded-full flex items-center justify-center cursor-pointer">
                <ArrowRight className="w-6 h-6 text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F3F0E8] w-full py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-[#A43A25]">
            Photo Gallery
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PhotoGalleryPage; 