"use client";
import React, { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import HLSVideo from '@/components/HLSVideo';

const CMEPage = () => {
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
      }, 3000);
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
    <div className="bg-white">
      <Navbar />
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <HLSVideo
            src="https://customer-5j20f6geb6l5wmm2.cloudflarestream.com/012c31e4679d5efd6ce8fc4e507dccca/manifest/video.m3u8"
            fallbackSrc="/cmeherovideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            preload="metadata"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-start p-4 sm:p-8 md:p-16">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold font-clash leading-tight text-white fade-in-section">
            Centre for<br />Manufacturing<br />Excellence
          </h1>
        </div>
      </section>

      
      
      

	  

      {/* Intro Section (post-hero) */}
      <section className="bg-black text-white py-6 sm:py-8 md:py-12 lg:py-16 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
            {/* Left: Moving CME logo video */}
            <div className="w-full flex justify-center md:justify-start order-2 md:order-1">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-48 sm:h-64 md:h-72 lg:h-96 xl:h-[28rem] 2xl:h-[36rem] w-auto object-contain"
                preload="metadata"
              >
                <source src="/cmelogomoving.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Right: Description text */}
            <div className="order-1 md:order-2">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed fade-in-section">
                The Patil Group has established the Dr. S. S. Patil Centre for Manufacturing Excellence as an in-house initiative,
                driven by a dedicated team of experts. This centre was created to achieve the highest standards in manufacturing
                excellence and cost management while fostering continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Key Objectives */}
      <section className="fade-in-section">
        {/* Title Bar */}
        <div className="bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-3 sm:py-4 md:py-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#F2913F] fade-in-section">Our Key Goals</h2>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white">
          <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
            {/* Left column with divider */}
            <div className="md:border-r border-gray-200 p-4 sm:p-6 md:p-10 flex flex-col justify-between min-h-[20rem] sm:min-h-[26rem] md:min-h-[32rem]">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#F2913F] fade-in-section mb-3 sm:mb-4">
                  ZERO BAD
                </h2>
                <div className="mb-6 sm:mb-8 space-y-2 sm:space-y-3 fade-in-section">
                  <div className="bg-[#8A393B] rounded-xl p-3 sm:p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#8A393B]/30 hover:bg-[#9d4447]">
                    <p className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                      <span className="text-[#F2913F]">B-</span> 0 Breakdown
                    </p>
                  </div>
                  <div className="bg-[#F2913F] rounded-xl p-3 sm:p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#F2913F]/30 hover:bg-[#ff9f4a]">
                    <p className="text-black font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                      <span className="text-[#8A393B]">A-</span> 0 Accidents
                    </p>
                  </div>
                  <div className="bg-[#8A393B] rounded-xl p-3 sm:p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#8A393B]/30 hover:bg-[#9d4447]">
                    <p className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                      <span className="text-[#F2913F]">D-</span> 0 Downtime
                    </p>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#8A393B] fade-in-section mb-3 sm:mb-4">
                  Focus Area
                </h3>
                <ul className="space-y-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-black/90 fade-in-section">
                  <li className="flex items-start">
                    <span className="text-[#F2913F] mr-2 sm:mr-3">•</span>
                    Ensure HSE (Health, Safety and Environment)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F2913F] mr-2 sm:mr-3">•</span>
                    Improving process and product quality
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F2913F] mr-2 sm:mr-3">•</span>
                    Enhance equipment and operations reliability
                  </li>
                </ul>
              </div>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-black/90 max-w-xl fade-in-section mt-4 sm:mt-6">
                Achieving Process Excellence through Statistical quality control (SQC) and statistical process control (SPC)
              </p>
            </div>

            {/* Right column with rectangular image */}
            <div className="relative p-4 sm:p-6 md:p-10 flex items-center justify-center">
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img src="/cmehero.JPG" alt="OEE Visual" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Key Objectives - New Card Design */}
      <section className="bg-black text-white py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 fade-in-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#F2913F] text-center mb-3 sm:mb-4 md:mb-6 fade-in-section">
            Our Key Objectives
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 fade-in-section leading-relaxed">
            To achieve these goals, the centre is actively implementing the following initiatives:
          </p>

          <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
            {/* Card 1 - Lean Manufacturing */}
            <div className="bg-[#8A393B] rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 fade-in-section cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#8A393B]/30 hover:bg-[#9d4447]">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#F2913F] mb-2 sm:mb-3 md:mb-4 lg:mb-6 transition-colors duration-300 hover:text-[#ffb366]">
                Lean Manufacturing
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-white transition-all duration-300">
                We streamline operations by eliminating waste and optimizing resource use, ensuring maximum value for every step in our production process.
              </p>
            </div>

            {/* Card 2 - 5S and Kaizen */}
            <div className="bg-[#F2913F] rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 fade-in-section cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#F2913F]/30 hover:bg-[#ff9f4a]">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#8A393B] mb-2 sm:mb-3 md:mb-4 lg:mb-6 transition-colors duration-300 hover:text-[#6d2f32]">
                5S and Kaizen Methodologies
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-black transition-all duration-300">
                By fostering discipline and continuous improvement at the ground level, we build a culture of efficiency, cleanliness, and proactive problem-solving.
              </p>
            </div>

            {/* Card 3 - Robotic Process */}
            <div className="bg-[#8A393B] rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 fade-in-section cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#8A393B]/30 hover:bg-[#9d4447]">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#F2913F] mb-2 sm:mb-3 md:mb-4 lg:mb-6 transition-colors duration-300 hover:text-[#ffb366]">
                Robotic Process Implementation & SPM Automation
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-white transition-all duration-300">
                We deploy advanced robotics and tailor-made Special Purpose Machines to automate repetitive tasks, boost precision, and enhance speed on the shop floor.
              </p>
            </div>

            {/* Card 4 - IoT-enabled */}
            <div className="bg-[#F2913F] rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 fade-in-section cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#F2913F]/30 hover:bg-[#ff9f4a]">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#8A393B] mb-2 sm:mb-3 md:mb-4 lg:mb-6 transition-colors duration-300 hover:text-[#6d2f32]">
                IoT-enabled Condition Monitoring
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-black transition-all duration-300">
                Our smart systems track equipment health in real time, helping predict failures before they occur—reducing downtime and extending machine life.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* DOJO Centers Section */}
      <section className="bg-black text-white py-8 sm:py-12 md:py-16 lg:py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
          {/* Left: Text */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-[#F2913F] fade-in-section">DOJO Centers.</h2>
            <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#8A393B] fade-in-section">
              Enhanced skill development centers for people development
            </h3>

            <div className="mt-4 sm:mt-6 md:mt-8 space-y-3 sm:space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed fade-in-section">
              <p>
                To support Indian Railways with a next-generation workforce, Patil Group has established a Skill Development Centre at its largest facility in Kargi Road.
              </p>
              <p>
                With Indian Railways planning major expansion projects, the coming decade will bring a significant challenge—ensuring the availability of a highly skilled workforce to execute these projects and operate manufacturing plants within the railway industry.
              </p>
              <p>
                Our Skill Development Centre is designed to bridge this gap by equipping individuals with the expertise needed to drive efficiency, innovation, and excellence in railway manufacturing and infrastructure development.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <img
              src="/dojo1.jpg"
              alt="Patil Group DOJO Centre"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Empowering Rural Youth Section */}
      <section className="bg-white text-black py-8 sm:py-12 md:py-16 lg:py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
          {/* Left: Copy */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#F2913F] leading-tight fade-in-section">
              Empowering Rural Youth through Skill Development
            </h2>
            <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-[#8A393B] fade-in-section">
              Skilling Rural India for a Smarter Tomorrow
            </h3>

            <div className="mt-4 sm:mt-6 md:mt-8 space-y-3 sm:space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed fade-in-section">
              <p>
                Recognizing the growing demand for skilled professionals in the railway industry, Patil Group is committed to playing its part in upskilling rural youth and preparing them for emerging opportunities.
              </p>
              <p>
                At our Skill Development Centre, we provide hands-on training to graduates from ITIs and polytechnic institutes, equipping them with specialized skills essential for railway manufacturing and infrastructure projects. To ensure a seamless transition into the industry, we also offer assured employment upon successful completion of the program.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/cmeonemore.JPG"
              alt="Skill development visual"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto rounded-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Inside the Training Program - New Horizontal Design */}
      <section className="bg-black text-white py-8 sm:py-12 md:py-16 lg:py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center text-[#F2913F] fade-in-section">
            Inside the Training Program
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 text-center max-w-6xl mx-auto fade-in-section leading-relaxed">
            Holistic Learning for Impactful Careers: Through this initiative, Patil Group aims to create a highly skilled workforce,
            contributing to the success of Indian Railways while empowering young professionals with stable and rewarding careers.
          </p>

          {/* 3 Cards in Responsive Layout */}
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Card 1 - Program Highlights */}
            <div className="rounded-2xl sm:rounded-3xl bg-[#8A393B] p-4 sm:p-6 lg:p-8 relative fade-in-section min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex flex-col cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#8A393B]/30 hover:bg-[#9d4447] group">
              <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#F2913F] mb-3 sm:mb-4 transition-all duration-300 group-hover:text-[#ffb366] group-hover:scale-110">1</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-[#F2913F] mb-4 sm:mb-6 transition-colors duration-300 group-hover:text-[#ffb366]">
                Program Highlights
              </h3>
              <ul className="space-y-2 sm:space-y-3 lg:space-y-4 text-white text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed flex-grow transition-all duration-300">
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#F2913F] mr-2 sm:mr-3 transition-colors duration-300 group-hover:text-[#ffb366]">•</span>
                  Each training batch consists of 30 students
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#F2913F] mr-2 sm:mr-3 transition-colors duration-300 group-hover:text-[#ffb366]">•</span>
                  A comprehensive curriculum covering key aspects of railway manufacturing
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#F2913F] mr-2 sm:mr-3 transition-colors duration-300 group-hover:text-[#ffb366]">•</span>
                  In-house training programs for continuous learning and skill enhancement
                </li>
            </ul>
          </div>

            {/* Card 2 - Current Training Modules */}
            <div className="rounded-2xl sm:rounded-3xl bg-[#F2913F] p-4 sm:p-6 lg:p-8 relative fade-in-section min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex flex-col cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#F2913F]/30 hover:bg-[#ff9f4a] group">
              <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#8A393B] mb-3 sm:mb-4 transition-all duration-300 group-hover:text-[#6d2f32] group-hover:scale-110">2</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-[#8A393B] mb-4 sm:mb-6 transition-colors duration-300 group-hover:text-[#6d2f32]">
                Current Training Modules
              </h3>
              <ul className="space-y-2 sm:space-y-3 lg:space-y-4 text-black text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed flex-grow transition-all duration-300">
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#8A393B] mr-2 sm:mr-3 transition-colors duration-300 group-hover:text-[#6d2f32]">•</span>
                  Concrete Mixing and Casting
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#8A393B] mr-2 sm:mr-3 transition-colors duration-300 group-hover:text-[#6d2f32]">•</span>
                  Advanced Pre-Stressing Techniques (Hi-Tech)
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#8A393B] mr-2 sm:mr-3 transition-colors duration-300 group-hover:text-[#6d2f32]">•</span>
                  Manufacturing & Quality Control of Concrete Sleepers
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#8A393B] mr-2 sm:mr-3 transition-colors duration-300 group-hover:text-[#6d2f32]">•</span>
                  Production of Rail Track Components (Clips, Pads, etc.)
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#8A393B] mr-2 sm:mr-3 transition-colors duration-300 group-hover:text-[#6d2f32]">•</span>
                  Railway Welding Technique
                </li>
            </ul>
          </div>

            {/* Card 3 - State-of-the-art Facilities */}
            <div className="rounded-2xl sm:rounded-3xl bg-[#8A393B] p-4 sm:p-6 lg:p-8 relative fade-in-section min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex flex-col cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#8A393B]/30 hover:bg-[#9d4447] group">
              <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#F2913F] mb-3 sm:mb-4 transition-all duration-300 group-hover:text-[#ffb366] group-hover:scale-110">3</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-[#F2913F] mb-4 sm:mb-6 transition-colors duration-300 group-hover:text-[#ffb366]">
                State-of-the-art Facilities
              </h3>
              <ul className="space-y-2 sm:space-y-3 lg:space-y-4 text-white text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed flex-grow transition-all duration-300">
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#F2913F] mr-2 sm:mr-3 transition-colors duration-300 group-hover:text-[#ffb366]">•</span>
                  4 Classrooms for theoretical instruction
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#F2913F] mr-2 sm:mr-3 transition-colors duration-300 group-hover:text-[#ffb366]">•</span>
                  Full-fledged Concrete Laboratory for material testing and analysis
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#F2913F] mr-2 sm:mr-3 transition-colors duration-300 group-hover:text-[#ffb366]">•</span>
                  Pre-Stressing Bed for practical training in advanced pre-stressing techniques
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#F2913F] mr-2 sm:mr-3 transition-colors duration-300 group-hover:text-[#ffb366]">•</span>
                  Metallurgical & Forging Training Lab for specialized skill development
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#F2913F] mr-2 sm:mr-3 transition-colors duration-300 group-hover:text-[#ffb366]">•</span>
                  Computer Lab for digital learning and simulation-based training
                </li>
            </ul>
            </div>
          </div>

          <p className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 text-center text-white/90 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-6xl mx-auto leading-relaxed">
            Additionally, we arrange specialized sessions on various railway functions in collaboration with RDSO and other railway authorities,
            based on industry needs and requests. With these cutting-edge facilities, Patil Group ensures that trainees receive comprehensive,
            industry-relevant education, preparing them for successful careers in railway manufacturing and infrastructure.
          </p>
        </div>
      </section>
      
      {/* First certificate from quality forum of India (Footer section) */}
      <section className="bg-black text-white py-8 sm:py-12 md:py-16 lg:py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
          {/* Left: Heading + Copy */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-[#F2913F] leading-tight fade-in-section">
              First certificate from quality forum of India
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl fade-in-section leading-relaxed">
              Every plant of Patil Group has successfully completed many Quality Circle projects. We had participated in
              "CCQC-2020, Hyderabad chapter" organized by QCFI (Quality Circle Forum of India) and were awarded a Gold Medal
              in the Quality Circle competition.
            </p>
          </div>

          {/* Right: Award Images Carousel */}
          <div className="relative flex justify-center md:justify-end">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[26rem] xl:h-[26rem]">
              <Carousel
                setApi={setApi}
                opts={{ align: "start", loop: true }}
                className="w-full h-full"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <CarouselContent className="h-full">
                  <CarouselItem className="h-full">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img 
                        src="/awardcme.jpg" 
                        alt="Quality recognition award from QCFI" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="h-full">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img 
                        src="/award2.jpg" 
                        alt="Award 2 - Quality Excellence" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="h-full">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img 
                        src="/award3.jpg" 
                        alt="Award 3 - Manufacturing Excellence" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="h-full">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img 
                        src="/award4.jpg" 
                        alt="Award 4 - Industry Recognition" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-gray-300 bg-white/90 hover:bg-white text-gray-700 hover:text-[#F2913F] transition-colors duration-300" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#F2913F] text-white hover:bg-[#D97706] transition-colors duration-300" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CMEPage;
