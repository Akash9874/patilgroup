"use client";

import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

const projectsData = [
  { title: 'Delhi Phase III', link: '/delhi-phase-3', image: '/delhimetrohero.png' },
  { title: 'Noida Corridor', link: '/noida-corridor', image: '/noidametro.jpg' },
  { title: 'Kolkata Stretch', link: '/kolkataherometro.jpeg', image: '/kolkataherometro.jpeg' },
  { title: 'Ahmedabad Phase II', link: '/ahmedabad-phase-2', image: '/ahemdabadmetrohero.jpeg' },
  { title: 'Mumbai Line 2B', link: '/mumbai-line-2b', image: '/mumbaimetrohero.png' },
  { title: 'Mumbai Line 7X', link: '/mumbai-line-7x', image: '/mumbaimetrohero.png' },
  { title: 'Nagpur Metro', link: '/nagpur-metro', image: '/nagpurmetrohero.png' },
  { title: 'L&T - Standard Gauge Sleeper Supply', link: '/l&t-standard-gauge-sleeper-supply', image: '/l&t-sleeper.jpg' },
  { title: 'IRCON - Special Sleeper Supply', link: '/ircon-special-sleeper', image: '/ircon-sleeper.jpg' },
  { title: 'IRCON - PSC Sleeper Supply', link: '/ircon-psc-sleeper-supply', image: '/ircon-psc-sleeper.jpg' },
];

const ProjectsPage = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <>
      <Navbar />
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/tower.png"
            alt="Modern architecture"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-y-0 left-0 w-[35%] bg-black flex items-center">
          <div className="pl-16 md:pl-24">
            <h2 className="text-white text-6xl md:text-7xl font-medium font-clash">Our</h2>
            <h1 className="text-white text-8xl md:text-9xl font-bold font-clash -mt-4">Projects</h1>
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Image
              src="/engineering-infra.jpg"
              alt="Engineering infrastructure"
              width={1200}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:w-1/2 flex items-center p-8 md:p-16">
            <div>
              <h2 className="text-5xl font-bold font-clash leading-tight">
                <span className="text-amber-500">Engineering Excellence<br />for a </span>
                <span className="text-[#8A393B]">Stronger Tomorrow</span>
              </h2>
              <div className="w-32 h-0.5 bg-white mt-6 mb-8"></div>
              <h3 className="text-xl font-semibold text-gray-400 mb-4">Some placeholder text</h3>
              <p className="text-lg text-gray-300">
                Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus ultricies velit elementum ut dui sed augue ultrices phasellus ullamcorper condimentum ut suspendisse viverra ornare sit venenatis
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end mb-8">
          <div className="flex items-center space-x-4">
            <button onClick={scrollPrev} className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:bg-gray-100 transition-colors">
              <ArrowLeft size={24} />
            </button>
            <button onClick={scrollNext} className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projectsData.map((project, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/4 px-4">
                <div className="relative h-96 rounded-lg overflow-hidden group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6">
                    <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
                <a href={project.link} className="inline-flex items-center mt-4 text-base text-black hover:text-[#8A393B]">
                  Read more
                  <ArrowRight size={16} className="ml-2" />
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