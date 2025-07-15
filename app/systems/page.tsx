"use client";
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

const systemsData = [
  {
    title: 'Ballastless Track - Urban Metro',
    description: 'Designed for high-availability metro corridors, these systems reduce downtime and structural fatigue in dense urban transit.',
    link: '/ballastless-track-urban-metro',
    image: '/20_ballastless_urban_metro_banner.jpg'
  },
  {
    title: 'Ballastless Track - Main Line',
    description: 'Built for high-speed, long-distance corridors — engineered to minimize maintenance across tunnels, bridges, and aprons.',
    link: '/ballastless-track-main-line',
    image: '/19_ballastless_mainline_banner.jpg'
  },
  {
    title: 'Flash Butt Welding of Rails',
    description: 'Our in-house welding plants handle high-precision rail panel fabrication using proven flash butt welding techniques.',
    link: '/flash-butt-welding-of-rails',
    image: '/18_flash_butt_banner.jpg'
  },
  {
    title: 'Patil RHEDA System',
    description: 'A specialized ballastless track system for viaducts and tunnels — developed in partnership with German engineering standards.',
    link: '/patil-rheda-system',
    image: '/26_mobile_RHEDA_plant.jpg'
  },
  {
    title: 'Plinth System',
    description: 'A cast-in-place track solution ideal for metros and elevated structures where tight alignment and control are critical.',
    link: '/plinth-system',
    image: '/02_railway_infra_symbol.jpg'
  },
  {
    title: 'Precast Plinth',
    description: 'Factory-prepared plinth units that offer cleaner installation, reduced onsite time, and greater curve control.',
    link: '/precast-plinth',
    image: '/23_precast_plinth_process.jpg'
  }
];

const SystemsContent = () => {
  useScrollAnimation();

  return (
    <>
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <img src="/03_metro_curve_train.jpg" alt="Train" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2">
          {/* Left side with "Our Systems" title */}
          <div className="flex items-center justify-center">
            <div className="text-left px-4 sm:px-6 lg:px-8">
              <h1 className="text-6xl md:text-8xl font-bold text-amber-500 animate-fadeInUp">
                Our Systems
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
                Engineering Excellence for a Stronger Tomorrow
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white text-gray-800 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-600">
            Track systems are where structural integrity meets engineering detail. Over the years, we've developed and implemented advanced rail systems across urban metros, mainlines, tunnels, and yards — engineered to last, with a focus on precision and long-term performance.
          </p>
        </div>
      </section>

      {/* Systems Section */}
      <section className="bg-white text-gray-800 pb-24 overflow-hidden">
        <div className="space-y-24">
          {systemsData.map((system, index) => (
            <div key={index} className="relative group h-56 fade-in-section">
              <div 
                className="absolute top-0 left-0 h-full bg-gray-100 w-40 group-hover:w-5/12 transition-all duration-500 ease-in-out bg-cover bg-center"
                style={{ 
                  clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
                  backgroundImage: system.image ? `url(${system.image})` : 'none'
                }}
              ></div>
              <div className="relative max-w-screen-xl mx-auto h-full">
                <div className="absolute left-5 top-0 h-full flex items-center w-6/12 transform transition-transform duration-500 ease-in-out group-hover:translate-x-[85%]">
                  <div className="pr-8">
                    <h3 className="text-3xl font-bold font-clash tracking-wide text-amber-600">{system.title}</h3>
                    <p className="mt-4 text-lg text-gray-600">{system.description}</p>
                    <a href={system.link} className="group/link inline-flex items-center mt-6 gap-[13px] font-clash font-medium text-2xl text-black" style={{ lineHeight: '72px' }}>
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
    </>
  );
};

const SystemsPage = () => {
  return (
    <div className="bg-[#1E1E1E] text-white">
      <SystemsContent />
    </div>
  );
}

export default SystemsPage; 