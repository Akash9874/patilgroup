"use client";

import React from 'react';
import Navbar from '@/components/Navbar';

const PhotoGalleryPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="pt-24 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            Photo Gallery
          </h1>
          
          <img 
            src="/train 2.jpg" 
            alt="Indian Railways Train" 
            className="w-full h-auto object-cover mb-12"
          />

          <div>
            <div className="bg-gray-200 h-96 w-full mb-4"></div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-gray-400 h-32"></div>
              <div className="bg-gray-400 h-32"></div>
              <div className="bg-gray-400 h-32"></div>
              <div className="bg-gray-400 h-32"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGalleryPage; 