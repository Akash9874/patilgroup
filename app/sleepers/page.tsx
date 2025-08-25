"use client";
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { TypingAnimation } from '@/components/TypingAnimation';

const SleepersPage = () => {
    useScrollAnimation();
  return (
    <div className="bg-white text-black">
      <div className="relative h-auto md:h-[600px]">
        {/* Background Image */}
        <video
          src="/1.mp4"
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          preload="metadata"
          
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row h-full z-20">
          {/* Left Panel */}
          <div className="w-full md:w-1/3 flex flex-col justify-center p-8 md:p-12">
            <div className="text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mt-2">
                Concrete Sleepers
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-10 md:py-12">
        <div className="max-w-5xl mx-auto px-8 md:px-12">
            <div className="flex">
                <div className="w-full md:w-4/5 pr-6 md:pr-10">
                    <TypingAnimation
                        text="Patil Group manufactures pre stressed concrete sleepers designed for high load, high speed rail conditions"
                        showCursor
                        speed={30}
                        className="block text-lg md:text-2xl font-light text-white leading-relaxed fade-in-section"
                        cursorColor="#ffffff"
                    />
                </div>
                <div className="hidden md:block md:w-1/5 border-l border-gray-700/40"></div>
            </div>
        </div>
      </div>

      {/* Composite Sleepers Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8A393B] mb-8 fade-in-section">
            Composite Sleepers: Smarter, Sustainable Track Solutions
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-16 fade-in-section">
            We introduced EFG TieTek design composite sleepers to India as a durable, eco-friendly alternative to wood and steel. Made from recyclable materials and tested to AREMA standards, they offer a service life of 60+ years. RDSO-approved and in use on Indian Railways since 2002, our sleepers set new benchmarks in strength, safety, and sustainability.
          </p>

          {/* Our Composite Sleeper Range */}
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#F2913F] mb-12 fade-in-section">
              Our Composite Sleeper Range
            </h3>
            
            <div className="space-y-12">
              {/* Standard Composite Sleepers */}
              <div className="bg-[#F5F4F1] rounded-lg p-8 fade-in-section">
                <h4 className="text-2xl font-bold text-[#8A393B] mb-4">Standard Composite Sleepers</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#F2913F] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Designed as a direct replacement for wooden and steel channel sleepers.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#F2913F] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Manufactured to AREMA standards, with proven installation across global railroads.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#F2913F] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Life span of 40–60 years, resistant to corrosion, fire, moisture, and insect attack.
                  </li>
                </ul>
              </div>

              {/* Bridge & Girder Applications */}
              <div className="bg-[#F5F4F1] rounded-lg p-8 fade-in-section">
                <h4 className="text-2xl font-bold text-[#8A393B] mb-4">Bridge & Girder Applications</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#F2913F] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Approved by RDSO for use on steel girder bridges in India.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#F2913F] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Installed successfully across bridges in Northern, Eastern, South Eastern, and North Central Railways since 2002.
                  </li>
                </ul>
              </div>

              {/* Special & Custom Sleepers */}
              <div className="bg-[#F5F4F1] rounded-lg p-8 fade-in-section">
                <h4 className="text-2xl font-bold text-[#8A393B] mb-4">Special & Custom Sleepers</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#F2913F] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Tailored for ballasted track, open-deck bridges, points & crossings, and level crossings.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#F2913F] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Flexible for ballastless and slab track systems, including metro applications.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Composite Sleepers */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#F2913F] mb-12 fade-in-section">
              Why Choose Composite Sleepers
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#8A393B] to-[#a0453f] text-white rounded-lg p-8 fade-in-section">
                <h4 className="text-xl font-bold mb-4 text-[#F2913F]">Sustainability</h4>
                <p>100% recyclable, using waste plastics and rubber.</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#8A393B] to-[#a0453f] text-white rounded-lg p-8 fade-in-section">
                <h4 className="text-xl font-bold mb-4 text-[#F2913F]">Performance</h4>
                <p>High strength, low life-cycle cost, and superior fatigue resistance.</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#8A393B] to-[#a0453f] text-white rounded-lg p-8 fade-in-section">
                <h4 className="text-xl font-bold mb-4 text-[#F2913F]">Safety</h4>
                <p>Low electrical conductivity, fire resistance, and excellent vibration damping.</p>
            </div>
              
              <div className="bg-gradient-to-br from-[#8A393B] to-[#a0453f] text-white rounded-lg p-8 fade-in-section">
                <h4 className="text-xl font-bold mb-4 text-[#F2913F]">Maintainability</h4>
                <p>Easy installation, minimal maintenance, and compatibility with standard fittings.</p>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F4F1] py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
            <h2 className="text-5xl font-bold text-[#F2913F] mb-12 text-center fade-in-section">
                Sleeper Types
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Technical Data Table */}
                <div className="lg:col-span-2 overflow-x-auto fade-in-section">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                        <table className="w-full text-xs">
                        <thead>
                            <tr className="bg-gradient-to-r from-[#8A393B] to-[#a0453f]">
                                <th className="p-4 text-center border-r border-white/20 text-white">
                                    <div className="font-bold text-sm mb-1">MAIN TRACK SLEEPERS</div>
                                    <div className="text-xs opacity-90 font-medium">TECHNICAL DATA - RT 8746 (WB)</div>
                                </th>
                                <th className="p-4 text-center border-r border-white/20 text-white">
                                    <div className="font-bold text-sm mb-1">SWITH EXPANSION JOINT SLEEPER</div>
                                    <div className="text-xs opacity-90 font-medium">TECHNICAL DATA - RT 4149 (SEJ)</div>
                                </th>
                                <th className="p-4 text-center text-white">
                                    <div className="font-bold text-sm mb-1">TURNOUT SLEEPER</div>
                                    <div className="text-xs opacity-90 font-medium">TECHNICAL DATA - 1 IN 12</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-[#F2913F]">
                            <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200">
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Permissible axle load:</span><br />
                                    <span className="font-bold text-sm">25 metric tonnes</span>
                                </td>
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Permissible axle load:</span><br />
                                    <span className="font-bold text-sm">25 metric tonnes</span>
                                </td>
                                <td className="p-3 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Permissible axle load:</span><br />
                                    <span className="font-bold text-sm">25 metric tonnes</span>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200 bg-gray-25">
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Maximum speed:</span><br />
                                    <span className="font-bold text-sm">100km/h</span>
                                </td>
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Maximum speed:</span><br />
                                    <span className="font-bold text-sm">100km/h</span>
                                </td>
                                <td className="p-3 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Maximum speed:</span><br />
                                    <span className="font-bold text-sm">100km/h</span>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200">
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Concrete grade:</span><br />
                                    <span className="font-bold text-sm">M60</span>
                                </td>
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Concrete grade:</span><br />
                                    <span className="font-bold text-sm">M60</span>
                                </td>
                                <td className="p-3 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Concrete grade:</span><br />
                                    <span className="font-bold text-sm">M60</span>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200 bg-gray-25">
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Concrete volume:</span><br />
                                    <span className="font-bold text-sm">136237.5 cm3</span>
                                </td>
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Concrete volume:</span><br />
                                    <span className="font-bold text-sm">161975 cm3</span>
                                </td>
                                <td className="p-3 text-center font-medium">
                                    <span className="text-gray-700 text-xs">No of sleepers:</span><br />
                                    <span className="font-bold text-sm">96</span>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200">
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Weight (without rail fastenings):</span><br />
                                    <span className="font-bold text-sm">347 kg</span>
                                </td>
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Weight (without rail fastenings):</span><br />
                                    <span className="font-bold text-sm">405 kg</span>
                                </td>
                                <td className="p-3 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Sleeper RMT:</span><br />
                                    <span className="font-bold text-sm">326.29</span>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200 bg-gray-25">
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Length:</span><br />
                                    <span className="font-bold text-sm">2750 mm</span>
                                </td>
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Length:</span><br />
                                    <span className="font-bold text-sm">2750 mm</span>
                                </td>
                                <td className="p-3 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Width:</span><br />
                                    <span className="font-bold text-sm">240 mm</span>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200">
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Width:</span><br />
                                    <span className="font-bold text-sm">230 mm</span>
                                </td>
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Width:</span><br />
                                    <span className="font-bold text-sm">300 mm</span>
                                </td>
                                <td className="p-3 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Sleeper height:</span><br />
                                    <span className="font-bold text-sm">230 mm</span>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200 bg-gray-25">
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Height of rail-seat centre:</span><br />
                                    <span className="font-bold text-sm">230 mm</span>
                                </td>
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Height of rail-seat centre:</span><br />
                                    <span className="font-bold text-sm">190 mm</span>
                                </td>
                                <td className="p-3 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Height of rail-seat centre:</span><br />
                                    <span className="font-bold text-sm">230 mm</span>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200">
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Top Width of rail-seat centre:</span><br />
                                    <span className="font-bold text-sm">210 mm</span>
                                </td>
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Top Width of rail-seat centre:</span><br />
                                    <span className="font-bold text-sm">300mm</span>
                                </td>
                                <td className="p-3 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Top Width of rail-seat centre:</span><br />
                                    <span className="font-bold text-sm">240 mm</span>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200 bg-gray-25">
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Bottom Width of rail-seat centre:</span><br />
                                    <span className="font-bold text-sm">230 mm</span>
                                </td>
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Bottom Width of rail-seat centre:</span><br />
                                    <span className="font-bold text-sm">320 mm</span>
                                </td>
                                <td className="p-3 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Bottom Width of rail-seat centre:</span><br />
                                    <span className="font-bold text-sm">260 mm</span>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200">
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Top Width of sleeper centre:</span><br />
                                    <span className="font-bold text-sm">180 mm</span>
                                </td>
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Top Width of sleeper centre:</span><br />
                                    <span className="font-bold text-sm">300 mm</span>
                                </td>
                                <td className="p-3 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Top Width of sleeper centre:</span><br />
                                    <span className="font-bold text-sm">240 mm</span>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200 bg-gray-25">
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Width of sleeper centre:</span><br />
                                    <span className="font-bold text-sm">230 mm</span>
                                </td>
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Bottom Width of sleeper centre:</span><br />
                                    <span className="font-bold text-sm">320 mm</span>
                                </td>
                                <td className="p-3 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Bottom Width of sleeper centre:</span><br />
                                    <span className="font-bold text-sm">260 mm</span>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50/50 transition-colors duration-200">
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Height of sleeper centre:</span><br />
                                    <span className="font-bold text-sm">200 mm</span>
                                </td>
                                <td className="p-3 border-r border-gray-100 text-center font-medium">
                                    <span className="text-gray-700 text-xs">Height of sleeper centre:</span><br />
                                    <span className="font-bold text-sm">190 mm</span>
                                </td>
                                <td className="p-3 text-center font-medium">
                                    <span className="text-gray-700 text-xs font-bold text-sm">-</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
                        {/* Image Section */}
            <div className="lg:col-span-1 flex flex-col items-center space-y-6 fade-in-section">
                <div className="slide-in-right">
                    <Image 
                        src="/sleeper1.jpg" 
                        alt="Sleeper Types" 
                        width={800} 
                        height={1000} 
                        className="rounded-lg shadow-lg w-full max-w-xl" 
                    />
                </div>
                <div className="slide-in-right" style={{ animationDelay: '200ms' }}>
                    <Image 
                        src="/sleeper2.jpg" 
                        alt="Sleeper Types" 
                        width={800} 
                        height={1000} 
                        className="rounded-lg shadow-lg w-full max-w-xl" 
                    />
                </div>
                <div className="slide-in-right" style={{ animationDelay: '400ms' }}>
                    <Image 
                        src="/sleeper3.jpg" 
                        alt="Sleeper Types" 
                        width={800} 
                        height={1000} 
                        className="rounded-lg shadow-lg w-full max-w-xl" 
                    />
                </div>
                </div>
            </div>
        </div>
    </div>


    <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <h2 className="text-5xl font-bold text-[#8A393B] mb-12 fade-in-section">
            Manufactured for
          </h2>

          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8 border-b border-gray-200 pb-8 fade-in-section">
                <p className="text-2xl text-[#F2913F]">Broad Gauge</p>
                <p className="text-2xl text-[#F2913F]">Metros</p>
                <p className="text-2xl text-[#F2913F]">Points and Crossings</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 fade-in-section">
                <p className="text-2xl text-[#F2913F]">Guard Rail</p>
                <p className="text-2xl text-[#F2913F]">Dual Gauge Systems</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-12 text-center fade-in-section">
          <div className="h-1 bg-gradient-to-r from-[#8A393B] via-[#1E3888] to-[#F2913F] mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Includes India's first ISO certified composite plant
          </h2>
          <div className="h-1 bg-gradient-to-l from-[#8A393B] via-[#1E3888] to-[#F2913F]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 md:px-12 mt-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h3 className="text-5xl font-bold text-[#F2913F]">Mass Spring System</h3>
              <p className="mt-4 text-xl">Used in slab track to reduce noise and vibration</p>
            </div>
            <div className="slide-in-right">
              <div className="relative rounded-lg overflow-hidden">
                <video
                  src="/2.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  preload="metadata"
                  poster="/12_sleeper_types.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="slide-in-left">
                    <h3 className="text-4xl font-bold text-[#F2913F] leading-tight">
                        Custom designed for urban zones<br />
                        rail via ducts and elevated metro lines
                    </h3>
                </div>
                <div className="slide-in-right">
                    <p className="text-lg">
                        Functions by isolating vibration at source<br />
                        Minimizes secondary noise in nearby buildings
                    </p>
                    <p className="mt-8 text-xl font-bold">
                        Executed on elevated corridors of Mumbai Metro
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default SleepersPage;
