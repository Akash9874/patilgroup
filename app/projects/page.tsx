"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';

const projectsData = [
  { title: 'Delhi Phase III', link: '/delhi-phase-3' },
  { title: 'Noida Corridor', link: '/noida-corridor' },
  { title: 'Kolkata Stretch', link: '/kolkata-stretch' },
  { title: 'Ahmedabad Phase II', link: '/ahmedabad-phase-2' },
  { title: 'Mumbai Line 2B', link: '/mumbai-line-2b' },
  { title: 'Mumbai Line 7X', link: '/mumbai-line-7x' },
  { title: 'Nagpur Metro', link: '/nagpur-metro' },
  { title: 'L&T - Standard Gauge Sleeper Supply', link: '/l&t-standard-gauge-sleeper-supply' },
  { title: 'IRCON - Special Sleeper Supply', link: '/ircon-special-sleeper' },
  { title: 'IRCON - PSC Sleeper Supply', link: '/ircon-psc-sleeper-supply' },
];

const ProjectsPage = () => {
  return (
    <>
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <img src="/mt train.jpg" alt="Train" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2">
          {/* Left side with "Our Products" title */}
          <div className="flex items-center justify-center">
            <div className="text-left px-4 sm:px-6 lg:px-8">
              <h1 className="text-6xl md:text-8xl font-bold text-amber-500 animate-fadeInUp">
                Our Projects
              </h1>
            </div>
          </div>

          {/* Right side with black cut and text */}
          <div
            className="h-full bg-[#1E1E1E] flex items-center"
            style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
          >
            <div className="space-y-6 animate-fadeInUp w-full pl-[30%] pr-8 lg:pr-16">
              <h2 className="text-3xl font-bold leading-tight text-white">
                Engineering Excellence for a Stronger Tomorrow
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {projectsData.map((project, index) => (
              <div key={index}>
                <div className="bg-gray-200 h-64 rounded-lg"></div>
                <h3 className="mt-4 text-xl font-semibold text-[#F2913F]">{project.title}</h3>
                <a href={project.link} className="inline-flex items-center mt-2 text-base text-[#8A393B] hover:text-black">
                  Read more
                  <span className="flex items-center justify-center w-4 h-4 rounded-full border border-[#8A393B] text-[#8A393B] ml-2">
                    <ArrowRight size={10} />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectsPage; 