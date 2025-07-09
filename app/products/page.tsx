"use client";

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

const productsData = [
  {
    title: 'Fasteners',
    description: 'High-performance fastening solutions that secure rails in place, reducing vibration and improving track longevity.',
    link: '/fasteners'
  },
  {
    title: 'Sleepers',
    description: 'Engineered for strength and durability, our sleepers enhance track stability with minimal maintenance.',
    link: '/sleepers'
  },
  {
    title: 'Wires',
    description: 'High-quality pre-stressed steel wires designed for superior reinforcement in railway infrastructure.',
    link: '/wires'
  },
  {
    title: 'Inserts',
    description: 'We manufacture high-quality SGCI Inserts and Base Plates, crucial components for both Railway and Metro Rail tracks.',
    link: '/inserts'
  }
];

const ProductsContent = () => {
  useScrollAnimation();
  
  return (
    <>
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <img src="/train.png" alt="Train" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2">
          {/* Left side with "Our Products" title */}
          <div className="flex items-center justify-center">
            <div className="text-left px-4 sm:px-6 lg:px-8">
              <h1 className="text-6xl md:text-8xl font-bold text-amber-500 animate-fadeInUp">
                Our Products
              </h1>
            </div>
          </div>

          {/* Right side with black cut and text */}
          <div 
            className="h-full bg-[#1E1E1E] flex items-center"
            style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
          >
            <div className="space-y-6 animate-fadeInUp w-full pl-[30%] pr-8 lg:pr-16">
              <h2 className="text-5xl font-bold leading-tight">
                Engineering Excellence for a Stronger Tomorrow
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white text-gray-800 py-24 overflow-hidden">
        <div className="space-y-24">
          {productsData.map((product, index) => (
            <div key={index} className="relative group h-48 fade-in-section">
              {/* Grey background shape */}
              <div 
                className="absolute top-0 left-0 h-full bg-gray-100 w-40 group-hover:w-5/12 transition-all duration-500 ease-in-out"
                style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
              ></div>
              
              {/* Text content container */}
              <div className="relative max-w-screen-xl mx-auto h-full">
                <div className="absolute left-5 top-0 h-full flex items-center w-6/12 transform transition-transform duration-500 ease-in-out group-hover:translate-x-[85%]">
                  <div className="pr-8">
                    <h3 className="text-4xl font-bold font-clash tracking-wide">{product.title}</h3>
                    <p className="mt-4 text-lg text-gray-600">{product.description}</p>
                    <a href={product.link} className="group/link inline-flex items-center mt-6 text-lg font-medium text-gray-900">
                      Read more
                      <span className="ml-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-gray-400 text-gray-600 transition-all duration-300 group-hover/link:bg-gray-900 group-hover/link:text-white group-hover/link:border-gray-900">
                        <ArrowRight size={16} className="transform transition-transform group-hover/link:translate-x-1" />
                      </span>
                    </a>
                    <div className="mt-3 h-1.5 w-full max-w-sm bg-gradient-to-r from-[#8A393B] via-[#1E3888] to-[#F2913F]" style={{ maskImage: 'linear-gradient(to right, black 70%, transparent 100%)' }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="bg-white text-gray-800 py-24">
        <div className="px-[59px] fade-in-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="md:col-span-1">
              <h2 className="font-clash font-medium text-8xl leading-[85px] tracking-[-0.25px]">
                <span className="text-[#8A393B] block">Get in touch with us for all</span>
                <span className="text-amber-500 block">your railway needs.</span>
              </h2>
            </div>
            <div className="md:col-span-1 pt-24">
              <p className="text-lg text-gray-600">
                By addressing the growing demands of modern railways while offering substantial cost and environmental benefits, Patil Group's composite sleepers represent the future of sustainable, high-performance railway infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ProductsPage = () => {
  return (
    <div className="bg-[#1E1E1E] text-white">
      <ProductsContent />
    </div>
  );
}

export default ProductsPage; 