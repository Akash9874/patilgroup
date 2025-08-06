"use client";
import React from 'react';
import Image from 'next/image';

const FastenersPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="relative h-auto md:h-[600px]">
        {/* Background Image */}
        <Image
          src="/engineering-infra.jpg"
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
          <div className="w-full md:w-1/3 flex flex-col justify-center p-8 md:p-12">
            <div className="text-left">
              <p className="text-5xl lg:text-6xl font-bold text-white opacity-50">01</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mt-2">
                Fasteners
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-12 md:py-16">
            <div className="flex">
                <div className="w-full md:w-3/4 pr-8 md:pr-12">
                    <p className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed">
                        Patil Group has already set up global manufacturing facilities under the Make in India initiative capable of supplying world class fastening systems for railway infrastructure
                    </p>
                </div>
                <div className="hidden md:block md:w-1/4 border-l border-gray-200"></div>
            </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <h2 className="text-5xl font-bold text-[#8A393B] mb-12">
            For Mainline Ballasted Track
          </h2>

          <div className="space-y-8">
            {/* Elastic Rail Clips */}
            <div className="grid md:grid-cols-3 gap-8 items-start border-t border-gray-200 pt-8">
              <div className="md:col-span-1">
                <h3 className="text-3xl font-semibold text-[#F2913F]">Elastic Rail Clips</h3>
              </div>
              <div className="md:col-span-1">
                <h4 className="text-lg font-bold text-[#F2913F]">ERC clips: mark III and V</h4>
                <p className="text-lg text-gray-600 mt-2">
                  Manufactured in Ajmer<br />
                  Approved by RDSO for Indian Railways and freight corridors
                </p>
              </div>
            </div>

            {/* GFN Liners */}
            <div className="grid md:grid-cols-3 gap-8 items-start border-t border-gray-200 pt-8">
              <div className="md:col-span-1">
                <h3 className="text-3xl font-semibold text-[#F2913F]">GFN Liners</h3>
              </div>
              <div className="md:col-span-1">
                <p className="text-lg text-gray-600 mt-2">
                  GFN liner production<br />
                  84 lakh units per annum<br />
                  RDSO approved
                </p>
              </div>
              <div className="md:col-span-1">
                <h4 className="text-lg font-bold text-[#F2913F]">SKL 14 for Normal Tracks</h4>
                <p className="text-lg text-gray-600 mt-2">
                  Spring deflection<br />
                  tilting protection<br />
                  high tensioning force<br />
                  Pre assembled and maintenance free
                </p>
              </div>
            </div>

            {/* System W 14 HH */}
            <div className="grid md:grid-cols-3 gap-8 items-start border-t border-gray-200 pt-8">
              <div className="md:col-span-1">
                <h3 className="text-3xl font-semibold text-[#F2913F]">System W 14<br />HH</h3>
              </div>
              <div className="md:col-span-1">
                <h4 className="text-lg font-bold text-[#F2913F]">(Heavy Haul)</h4>
                <p className="text-lg text-gray-600 mt-2">
                  Used in freight and heavy axle routes<br />
                  Allows tension clamping and tilt protection<br />
                  Reduces long term maintenance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F4F1] py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <h2 className="text-5xl font-bold text-[#8A393B] mb-12">
            For Mainline Ballastless Track
          </h2>

          <div className="space-y-16">
            {/* System 300 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image src="/fs300.jpg" alt="System 300" width={600} height={400} className="rounded-lg object-cover w-full h-full" />
              </div>
              <div>
                <ul className="space-y-4 text-lg">
                  <li className="flex justify-between border-b pb-2"><span>Maximum Axle Load (Upto)</span> <span className="text-[#F2913F] font-semibold">22.5 Tonne</span></li>
                  <li className="flex justify-between border-b pb-2"><span>Maximum Speed (Upto)</span> <span className="text-[#F2913F] font-semibold">300 kmph</span></li>
                  <li className="flex justify-between border-b pb-2"><span>Toe Load (per clip)</span> <span className="text-[#F2913F] font-semibold">9 kN</span></li>
                  <li className="flex justify-between border-b pb-2"><span>Insulation</span> <span className="text-[#F2913F] font-semibold">2.5 kΩ</span></li>
                  <li className="flex justify-between border-b pb-2"><span>Static stiffness of pad</span> <span className="text-[#F2913F] font-semibold">22.5 kN/mm</span></li>
                  <li className="flex justify-between border-b pb-2"><span>Longitudinal restraint (as per EN 13146</span> <span className="text-[#F2913F] font-semibold">9 kN</span></li>
                </ul>
                <p className="mt-6 text-lg">Pre assembled system suitable for all slab track installations</p>
              </div>
            </div>

            {/* System DB 336 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image src="/fs336.jpg" alt="System DB 336" width={600} height={400} className="rounded-lg object-cover w-full h-full" />
              </div>
              <div>
                <ul className="space-y-4 text-lg">
                  <li className="flex justify-between border-b pb-2"><span>Maximum Axle Load (Upto)</span> <span className="text-[#F2913F] font-semibold">22.5 Tonne</span></li>
                  <li className="flex justify-between border-b pb-2"><span>Maximum Speed (Upto)</span> <span className="text-[#F2913F] font-semibold">300 kmph</span></li>
                  <li className="flex justify-between border-b pb-2"><span>Toe Load (per clip)</span> <span className="text-[#F2913F] font-semibold">9 kN</span></li>
                  <li className="flex justify-between border-b pb-2"><span>Insulation</span> <span className="text-[#F2913F] font-semibold">2-5 kΩ</span></li>
                  <li className="flex justify-between border-b pb-2"><span>Static stiffness of pad</span> <span className="text-[#F2913F] font-semibold">22.5 kN/mm</span></li>
                  <li className="flex justify-between border-b pb-2"><span>Longitudinal restraint (as per EN 13146</span> <span className="text-[#F2913F] font-semibold">9 kN</span></li>
                </ul>
                <p className="mt-6 text-lg">Optimized for vibration and noise reduction Ideal for urban rail and steel structure tracks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastenersPage;
