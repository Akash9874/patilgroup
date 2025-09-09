"use client";
import React from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { TypingAnimation } from '@/components/TypingAnimation';

const FastenersPage = () => {
  useScrollAnimation();
  
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
             <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-4">
               PRIL's journey in the Track Fastening Domain is well-established and extensive. For the past two decades, PRIL has been a key supplier of fastening systems for Ballastless Track, initially working through a JV mode. PRIL built the local vendors base for manufacturing of various fastening's component.
             </p>
             <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-4">
               In 2020, PRIL embarked on a new chapter by establishing a state-of-the-art fastening manufacturing Plant. This Plant brought all production processes under one roof, eliminating the previous dependency on multiple vendors. Now PRIL's have successfully developed in-house capabilities in manufacturing of fastenings, including in core areas like die tool design and heat treatment.
             </p>
             <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
               Today's PRIL's is the largest fastening supplier for Metros and supplying to Indian Railways in different zones.
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

          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed fade-in-section mb-12">
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

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {/* System 336 Assembly (SKL 12 Clamp) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              <div className="slide-in-left">
                <div className="relative group">
                  <Image
                    src="/skl12.jpg"
                    alt="System 336 Assembly (SKL 12 Clamp)"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div className="slide-in-right">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F2913F] mb-4">System 336 Assembly (SKL 12 Clamp)</h3>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg">
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Maximum Axle Load (Upto)</span> 
                    <span className="text-[#F2913F] font-semibold">18 Tonne</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Maximum Speed (Upto)</span> 
                    <span className="text-[#F2913F] font-semibold">110 kmph</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Curve radius (minimum)</span> 
                    <span className="text-[#F2913F] font-semibold">120 m</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Toe Load (per clip)</span> 
                    <span className="text-[#F2913F] font-semibold">9 kN</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Insulation</span> 
                    <span className="text-[#F2913F] font-semibold">≥ 5 kΩ</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Static stiffness of pad</span> 
                    <span className="text-[#F2913F] font-semibold">22.5 kN/mm</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Longitudinal rail restraint (as per EN 13146)</span> 
                    <span className="text-[#F2913F] font-semibold">9 kN</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* W 14 Assembly (SKL 14 Clamp) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              <div className="slide-in-left order-2 md:order-1">
                <div className="relative group">
                  <Image
                    src="/skl14.jpg"
                    alt="W 14 Assembly (SKL 14 Clamp)"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div className="slide-in-right order-1 md:order-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F2913F] mb-4">W 14 Assembly (SKL 14 Clamp)</h3>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg">
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Maximum Axle Load (Upto)</span> 
                    <span className="text-[#F2913F] font-semibold">22 Tonne</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Maximum Speed (Upto)</span> 
                    <span className="text-[#F2913F] font-semibold">200 kmph</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Curve radius (minimum)</span> 
                    <span className="text-[#F2913F] font-semibold">175 m</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Toe Load (per clip)</span> 
                    <span className="text-[#F2913F] font-semibold">9 kN</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Insulation</span> 
                    <span className="text-[#F2913F] font-semibold">≥ 5 kΩ</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Static stiffness of pad</span> 
                    <span className="text-[#F2913F] font-semibold">100 kN/mm</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                    <span className="font-medium">Longitudinal restraint (as per EN 13146)</span> 
                    <span className="text-[#F2913F] font-semibold">9 kN</span>
                  </li>
                </ul>
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
