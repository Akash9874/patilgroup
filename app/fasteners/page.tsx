"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { TypingAnimation } from '@/components/TypingAnimation';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

const FastenersPage = () => {
  useScrollAnimation();

  const [api, setApi] = useState<CarouselApi>();
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!api) return;

    const startAutoPlay = () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
      
      autoPlayRef.current = setInterval(() => {
        if (isAutoPlaying) {
          api.scrollNext();
        }
      }, 4000); // 4 seconds for W clamp images
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [api, isAutoPlaying]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };
  
  return (
    <div className="bg-white text-black">
      <div className="relative">
        {/* Mobile Layout */}
        <div className="md:hidden h-screen relative">
          <Image
            src="/fastenerheroimage.JPG"
            alt="Fasteners Hero Image"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10"></div>
          
          <div className="relative z-20 h-full flex items-center justify-center">
            <div className="text-center px-6 w-full max-w-lg mx-auto">
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-3 drop-shadow-2xl">
                Fasteners
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto mt-8 rounded-full shadow-lg"></div>
              <p className="text-white text-xl sm:text-2xl mt-8 font-medium drop-shadow-xl leading-relaxed">
                Critical link between rails and sleepers
              </p>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden md:block relative h-[600px]">
          <Image
            src="/fastenerheroimage.JPG"
            alt="Fasteners Hero Image"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          
          {/* Content */}
          <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row h-full z-20">
            {/* Left Panel */}
            <div className="w-full md:w-1/3 flex flex-col justify-center p-8 lg:p-12">
              <div className="text-left">
                <h1 className="text-5xl lg:text-6xl font-bold text-white mt-2">
                  Fasteners
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-8 sm:py-10 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="flex">
                <div className="w-full md:w-4/5 pr-0 md:pr-6 lg:pr-10">
                    <TypingAnimation
                      text="Patil Group has already set up global manufacturing facilities under the Make in India initiative capable of supplying world class fastening systems for railway infrastructure"
                      showCursor
                      speed={30}
                      className="block text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white leading-relaxed fade-in-section"
                      cursorColor="#ffffff"
                    />
                </div>
                <div className="hidden md:block md:w-1/5 border-l border-gray-700/40"></div>
            </div>
        </div>
      </div>

             <div className="bg-white py-8 sm:py-12 md:py-16">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
           <div className="mb-8 sm:mb-12 md:mb-16 fade-in-section">
             <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
               Fasteners are the critical link between rails and sleepers, ensuring safety and performance across diverse track conditions. Patil Group, in collaboration with global leaders in fastening technology, has built proven expertise in designing, manufacturing, and supplying advanced fastening systems for modern rail networks.
             </p>
           </div>
           
           <div className="mb-8 sm:mb-12 md:mb-16 fade-in-section">
             <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
               Patil Group has over two decades of experience in track fastening systems — beginning with joint ventures and the development of a local vendor base. In 2020, the Group established a dedicated fastening plant, bringing all processes under one roof and adding in-house capabilities in die tool design and heat treatment. Today, Patil Group is the largest fastening supplier for metros and a trusted partner to Indian Railways across multiple zones.
             </p>
           </div>
           
           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#8A393B] mb-6 sm:mb-8 md:mb-12 fade-in-section">
             For Mainline Ballasted Track
           </h2>

          <div className="space-y-6 sm:space-y-8">
                         {/* Elastic Rail Clips */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-start pt-6 sm:pt-8">
               <div className="col-span-full h-px bg-gradient-to-r from-[#F2913F] via-[#8A393B] to-[#F2913F] mb-4 sm:mb-6"></div>
               <div className="md:col-span-1 slide-in-left mb-4 md:mb-0">
                 <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#F2913F]">Elastic Rail Clips</h3>
               </div>
               <div className="md:col-span-1 slide-in-right mb-4 md:mb-0">
                 <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#F2913F]">ERC clips: mark III and V</h4>
                 <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mt-2">
                   Manufactured in Medchal<br />
                   Approved by RDSO for Indian Railways and freight corridors
                 </p>
               </div>
               <div className="md:col-span-1 slide-in-left">
                 <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#F2913F]">Production Capacity</h4>
                 <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mt-2">
                   Manufactured around 110000 units Per Annum
                 </p>
               </div>
             </div>

            {/* GFN Liners */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-start pt-6 sm:pt-8">
              <div className="col-span-full h-px bg-gradient-to-r from-[#F2913F] via-[#8A393B] to-[#F2913F] mb-4 sm:mb-6"></div>
              <div className="md:col-span-1 slide-in-left mb-4 md:mb-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#F2913F]">GFN Liners</h3>
              </div>
              <div className="md:col-span-1 slide-in-right mb-4 md:mb-0">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mt-2">
                  GFN liner production<br />
                  84 lakh units per annum<br />
                  RDSO approved
                </p>
              </div>
              <div className="md:col-span-1 slide-in-left">
                <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#F2913F]">SKL Series</h4>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mt-2">
                  - SKL 12<br />
                  - SKL 15<br />
                  - System W 14 HH
                </p>
              </div>
            </div>

                         {/* System W 14 HH */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-start pt-6 sm:pt-8">
               <div className="col-span-full h-px bg-gradient-to-r from-[#F2913F] via-[#8A393B] to-[#F2913F] mb-4 sm:mb-6"></div>
               <div className="md:col-span-1 slide-in-left mb-4 md:mb-0">
                 <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#F2913F]">System W 14<br />HH</h3>
               </div>
               <div className="md:col-span-1 slide-in-right mb-4 md:mb-0">
                 <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#F2913F]">(Heavy Haul)</h4>
                 <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mt-2">
                   Used in freight and heavy axle routes
                 </p>
               </div>
               <div className="md:col-span-1 slide-in-left">
                 <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mt-2">
                   Allows tension clamping and tilt protection<br />
                   Reduces long term maintenance
                 </p>
               </div>
             </div>

             {/* Lab Facilities */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-start pt-6 sm:pt-8">
               <div className="col-span-full h-px bg-gradient-to-r from-[#F2913F] via-[#8A393B] to-[#F2913F] mb-4 sm:mb-6"></div>
               <div className="md:col-span-1 slide-in-left mb-4 md:mb-0">
                 <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#F2913F]">Lab Facilities</h3>
               </div>
               <div className="md:col-span-1 slide-in-right mb-4 md:mb-0">
                 <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mt-2">
                   - World class labs<br />
                   - Fatigue testing machines<br />
                   - GOM Scanner<br />
                   - Salt spray testing machine<br />
                   - UTM
                 </p>
               </div>
               <div className="md:col-span-1 slide-in-left">
                 <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mt-2">
                   According to STR(Standard Technology Requirement) by RDSO. These testing machines are not available anywhere in india.
                 </p>
               </div>
             </div>
           </div>
        </div>
      </div>

      <div className="bg-[#F5F4F1] py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#8A393B] mb-6 sm:mb-8 md:mb-12 fade-in-section">
            For Mainline Ballastless Track
          </h2>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {/* System 300 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              <div className="slide-in-left order-2 md:order-1">
                <div className="relative group">
                <Image src="/fs300.jpg" alt="System 300" width={600} height={400} className="rounded-lg object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-[#F2913F] text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center px-4">System 300 for Ballastless Track</p>
                </div>
              </div>
              </div>
              <div className="slide-in-right order-1 md:order-2">
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg">
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Maximum Axle Load (Upto)</span> 
                    <span className="text-[#F2913F] font-semibold">22.5 Tonne</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Maximum Speed (Upto)</span> 
                    <span className="text-[#F2913F] font-semibold">300 kmph</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Toe Load (per clip)</span> 
                    <span className="text-[#F2913F] font-semibold">9 kN</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Insulation</span> 
                    <span className="text-[#F2913F] font-semibold">2.5 kΩ</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Static stiffness of pad</span> 
                    <span className="text-[#F2913F] font-semibold">22.5 kN/mm</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Longitudinal restraint (as per EN 13146)</span> 
                    <span className="text-[#F2913F] font-semibold">9 kN</span>
                  </li>
                </ul>
                <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg">Pre assembled system suitable for all slab track installations</p>
              </div>
            </div>

            {/* System DB 336 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              <div className="slide-in-left">
                <div className="relative group">
                <Image src="/fs336.jpg" alt="System DB 336" width={600} height={400} className="rounded-lg object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-[#F2913F] text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center px-4">System DB 336 for Ballastless Track</p>
                </div>
              </div>
              </div>
              <div className="slide-in-right">
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg">
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Maximum Axle Load (Upto)</span> 
                    <span className="text-[#F2913F] font-semibold">22.5 Tonne</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Maximum Speed (Upto)</span> 
                    <span className="text-[#F2913F] font-semibold">300 kmph</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Toe Load (per clip)</span> 
                    <span className="text-[#F2913F] font-semibold">9 kN</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Insulation</span> 
                    <span className="text-[#F2913F] font-semibold">2-5 kΩ</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Static stiffness of pad</span> 
                    <span className="text-[#F2913F] font-semibold">22.5 kN/mm</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Longitudinal restraint (as per EN 13146)</span> 
                    <span className="text-[#F2913F] font-semibold">9 kN</span>
                  </li>
                </ul>
                <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg">Optimized for vibration and noise reduction. Ideal for urban rail and steel structure tracks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* W Clamp Section */}
      <div className="bg-white py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#8A393B] mb-6 sm:mb-8 md:mb-12 fade-in-section">
            W Clamp
          </h2>

          {/* Introduction with Carousel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            {/* Left: Introduction Text */}
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed fade-in-section">
              <p>
                The W clamp is a resilient fastening component used in railway tracks.
              </p>
              <p>
                It ensures secure holding of rails to sleepers — maintaining track stability under dynamic loads.
              </p>
              <p>
                Its design allows controlled flexibility, reducing vibration and stress on the fastening system.
              </p>
              <p>
                Patil Group manufactures W clamps with precision engineering and tested spring steel — built for long service life, safety, and performance across diverse track conditions.
              </p>
            </div>

            {/* Right: W Clamp Images Carousel */}
            <div className="fade-in-section">
              <div className="w-full h-80 sm:h-96 lg:h-[28rem]">
                <Carousel
                  setApi={setApi}
                  opts={{ align: "start", loop: true }}
                  className="w-full h-full"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <CarouselContent className="h-full">
                    <CarouselItem className="h-full">
                      <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="/skl12.jpg"
                          alt="System 336 Assembly (SKL 12 Clamp)"
                          width={600}
                          height={450}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem className="h-full">
                      <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="/skl14.jpg"
                          alt="W 14 Assembly (SKL 14 Clamp)"
                          width={600}
                          height={450}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gray-300 bg-white/90 hover:bg-white text-gray-700 hover:text-[#F2913F] transition-colors duration-300" />
                  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#F2913F] text-white hover:bg-[#D97706] transition-colors duration-300" />
                </Carousel>
              </div>
            </div>
          </div>

          {/* W Clamp Specifications - Side by Side Tables */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 fade-in-section">
            {/* System 336 Assembly (SKL 12 Clamp) */}
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F2913F] mb-6 text-center">
                System 336 Assembly (SKL 12 Clamp)
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-medium text-gray-700">Maximum Axle Load (Upto)</span>
                  <span className="text-[#F2913F] font-bold text-lg">18 Tonne</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-medium text-gray-700">Maximum Speed (Upto)</span>
                  <span className="text-[#F2913F] font-bold text-lg">110 kmph</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-medium text-gray-700">Curve radius (minimum)</span>
                  <span className="text-[#F2913F] font-bold text-lg">120 m</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-medium text-gray-700">Toe Load (per clip)</span>
                  <span className="text-[#F2913F] font-bold text-lg">9 kN</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-medium text-gray-700">Insulation</span>
                  <span className="text-[#F2913F] font-bold text-lg">≥ 5 kΩ</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-medium text-gray-700">Static stiffness of pad</span>
                  <span className="text-[#F2913F] font-bold text-lg">22.5 kN/mm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Longitudinal rail restraint (as per EN 13146)</span>
                  <span className="text-[#F2913F] font-bold text-lg">9 kN</span>
                </div>
              </div>
            </div>

            {/* W 14 Assembly (SKL 14 Clamp) */}
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F2913F] mb-6 text-center">
                W 14 Assembly (SKL 14 Clamp)
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-medium text-gray-700">Maximum Axle Load (Upto)</span>
                  <span className="text-[#F2913F] font-bold text-lg">22 Tonne</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-medium text-gray-700">Maximum Speed (Upto)</span>
                  <span className="text-[#F2913F] font-bold text-lg">200 kmph</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-medium text-gray-700">Curve radius (minimum)</span>
                  <span className="text-[#F2913F] font-bold text-lg">175 m</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-medium text-gray-700">Toe Load (per clip)</span>
                  <span className="text-[#F2913F] font-bold text-lg">9 kN</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-medium text-gray-700">Insulation</span>
                  <span className="text-[#F2913F] font-bold text-lg">≥ 5 kΩ</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-medium text-gray-700">Static stiffness of pad</span>
                  <span className="text-[#F2913F] font-bold text-lg">100 kN/mm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Longitudinal restraint (as per EN 13146)</span>
                  <span className="text-[#F2913F] font-bold text-lg">9 kN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fatigue Testing Section */}
      <div className="bg-white py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#8A393B] mb-6 sm:mb-8 md:mb-12 fade-in-section">
            Fatigue Testing
          </h2>
          
          <div className="mb-8 sm:mb-12 md:mb-16 fade-in-section">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
              Our laboratories are equipped with world-class facilities including India's first fatigue testing machine for railway fastening systems. It simulates real track conditions and subjects components to millions of load cycles, with five million cycles equating to more than ten years of service life in the lab. Earlier, such advanced testing was available only in Europe — this capability now sets a new benchmark for safety and reliability in India.
            </p>
          </div>
          
          <div className="mt-8 sm:mt-12 md:mt-16 flex justify-center fade-in-section">
            <Image
              src="/fatigue.jpg"
              alt="Fatigue Testing Equipment"
              width={800}
              height={600}
              className="rounded-lg shadow-lg w-full max-w-4xl h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastenersPage;
