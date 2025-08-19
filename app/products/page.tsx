"use client";
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { AnimatedProductList } from '@/components/AnimatedProductList';
import { TypingAnimation } from '@/components/TypingAnimation';
import { GridLines } from '@/components/GridLines';

const products = [
    {
      name: "Sleepers",
      description: "Concrete units for mainlines, metros, and turnouts",
      link: "/sleepers",
      image: "/sleepersslider.jpg",
    },
    {
      name: "Fasteners",
      description: "Clips, clamps, and insulators for securing rails",
      link: "/fasteners",
      image: "/fastenerslider.webp",
    },
    {
      name: "Wires",
      description: "Pre stressed steel strands for sleeper reinforcement",
      link: "/wires",
      image: "/htswireslider.jpg",
    },
    {
      name: "Inserts",
      description: "SGCI castings and base plates for fastening systems",
      link: "/inserts",
      image: "/insertsslider.jpg",
      },
      {
        name: "Precast",
        description: "Precast plinth units for rapid installation and uniform geometry",
        link: "/precast",
        image: "/precastslider.jpg",
      },
  ];

const ProductsPage = () => {
  useScrollAnimation();

  return (
    <div className="bg-black text-white">
      <section className="relative h-screen">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            preload="metadata"
           
          >
            <source src="/productherovideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex items-end justify-start p-8 sm:p-12 lg:p-16">
          <h1 className="text-6xl md:text-8xl font-bold text-white animate-fadeInUp">
            Track<br/>Components
          </h1>
        </div>
      </section>

      {/* Middle section redesigned to match Systems page style */}
      <section className="bg-white text-gray-800 pb-24 overflow-hidden">
        <div className="space-y-24">
          {products.map((p, index) => (
            <div key={index} className="relative group h-56 fade-in-section">
              <div 
                className="absolute top-0 left-0 h-full bg-gray-100 w-5/12 bg-cover bg-center"
                style={{ 
                  clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
                  backgroundImage: `url(${p.image})`
                }}
              ></div>
              <div className="relative max-w-screen-xl mx-auto h-full">
                <div className="absolute left-5 top-0 h-full flex items-center w-6/12 transform translate-x-[85%]">
                  <div className="pr-8">
                    <h3 className="text-3xl font-bold font-clash tracking-wide text-amber-600">{p.name}</h3>
                    <p className="mt-4 text-lg text-gray-600">{p.description}</p>
                    <a href={p.link} className="group/link inline-flex items-center mt-6 gap-[13px] font-clash font-medium text-2xl text-black" style={{ lineHeight: '72px' }}>
                      Read more
                      <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border border-gray-400 text-gray-600 transition-all duration-300 group-hover/link:bg-black group-hover/link:text-white group-hover/link:border-black">
                        <ArrowRight size={16} className="transform transition-transform group-hover/link:translate-x-1" />
                      </span>
                    </a>
                    <div 
                      className="mt-3 h-1.5 w-full max-w-sm" 
                      style={{ 
                        background: 'linear-gradient(90deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)' 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA after slider */}
      <section className="bg-white text-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-extrabold leading-[1.1]">
            <span className="text-[#8A393B]">Get in touch for</span><br/>
            <span className="text-[#F2913F]">specifications or supply.</span>
          </h2>
          <div
            className="mt-6 h-1.5 w-80"
            style={{
              background:
                'linear-gradient(90deg, #8A393B 0%, #1E3888 20%, #F2913F 60%, rgba(242,145,63,0) 100%)',
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
