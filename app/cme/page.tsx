"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

const CMEPage = () => {
  useScrollAnimation();

  return (
    <div className="bg-white">
      <Navbar />
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            preload="metadata"
          >
            <source src="/cmeherovideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-start p-16">
          <h1 className="text-5xl md:text-7xl font-bold font-clash leading-tight text-white fade-in-section">
            Centre for<br />Manufacturing<br />Excellence
          </h1>
        </div>
      </section>

      
      
      

	  

      {/* Intro Section (post-hero) */}
      <section className="bg-black text-white py-16 fade-in-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: Moving CME logo video */}
            <div className="w-full flex justify-center md:justify-start">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-72 sm:h-96 md:h-[28rem] lg:h-[36rem] w-auto object-contain"
                preload="metadata"
              >
                <source src="/cmelogomoving.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Right: Description text */}
            <div>
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed fade-in-section">
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
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#F2913F] fade-in-section">Our Key Objectives</h2>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white">
          <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
            {/* Left column with divider */}
            <div className="border-r border-gray-200 p-6 md:p-10 flex flex-col justify-between min-h-[26rem] md:min-h-[32rem]">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#8A393B] fade-in-section">
                </h3>
              </div>
              <p className="text-lg md:text-xl lg:text-4xl text-black/90 max-w-xl fade-in-section">
                We aim to maximize productivity by reducing downtime, improving performance, and ensuring equipment runs at its best—every shift, every day.
              </p>
            </div>

            {/* Right column with rectangular image */}
            <div className="relative p-6 md:p-10 flex items-center justify-center">
              <div className="w-80 h-64 md:w-96 md:h-72 lg:w-[30rem] lg:h-[22rem] rounded-lg overflow-hidden shadow-lg">
                <img src="/cmehero.JPG" alt="OEE Visual" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Key Objectives - New Card Design */}
      <section className="bg-black text-white py-16 md:py-20 fade-in-section">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F2913F] text-center mb-6 fade-in-section">
            Our Key Objectives
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-center mb-12 md:mb-16 fade-in-section">
            To achieve these goals, the centre is actively implementing the following initiatives:
          </p>

          <div className="space-y-6 md:space-y-8">
            {/* Card 1 - Lean Manufacturing */}
            <div className="bg-[#8A393B] rounded-3xl p-8 md:p-12 fade-in-section cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#8A393B]/30 hover:bg-[#9d4447]">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F2913F] mb-4 md:mb-6 transition-colors duration-300 hover:text-[#ffb366]">
                Lean Manufacturing
              </h3>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white transition-all duration-300">
                We streamline operations by eliminating waste and optimizing resource use, ensuring maximum value for every step in our production process.
              </p>
            </div>

            {/* Card 2 - 5S and Kaizen */}
            <div className="bg-[#F2913F] rounded-3xl p-8 md:p-12 fade-in-section cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#F2913F]/30 hover:bg-[#ff9f4a]">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8A393B] mb-4 md:mb-6 transition-colors duration-300 hover:text-[#6d2f32]">
                5S and Kaizen Methodologies
              </h3>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-black transition-all duration-300">
                By fostering discipline and continuous improvement at the ground level, we build a culture of efficiency, cleanliness, and proactive problem-solving.
              </p>
            </div>

            {/* Card 3 - Robotic Process */}
            <div className="bg-[#8A393B] rounded-3xl p-8 md:p-12 fade-in-section cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#8A393B]/30 hover:bg-[#9d4447]">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F2913F] mb-4 md:mb-6 transition-colors duration-300 hover:text-[#ffb366]">
                Robotic Process Implementation & SPM Automation
              </h3>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white transition-all duration-300">
                We deploy advanced robotics and tailor-made Special Purpose Machines to automate repetitive tasks, boost precision, and enhance speed on the shop floor.
              </p>
            </div>

            {/* Card 4 - IoT-enabled */}
            <div className="bg-[#F2913F] rounded-3xl p-8 md:p-12 fade-in-section cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#F2913F]/30 hover:bg-[#ff9f4a]">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8A393B] mb-4 md:mb-6 transition-colors duration-300 hover:text-[#6d2f32]">
                IoT-enabled Condition Monitoring
              </h3>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-black transition-all duration-300">
                Our smart systems track equipment health in real time, helping predict failures before they occur—reducing downtime and extending machine life.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* DOJO Centers Section */}
      <section className="bg-black text-white py-16 md:py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-[#F2913F] fade-in-section">DOJO Centers.</h2>
            <h3 className="mt-3 text-3xl md:text-4xl font-semibold text-[#8A393B] fade-in-section">
              Enhanced skill development centers for
              <br className="hidden md:block" /> people development
            </h3>

            <div className="mt-8 space-y-6 text-lg md:text-xl leading-relaxed fade-in-section">
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
          <div className="flex justify-center md:justify-end md:translate-x-6 lg:translate-x-10">
            <img
              src="/dojo1.jpg"
              alt="Patil Group DOJO Centre"
              className="w-full max-w-xl md:max-w-none md:w-[520px] lg:w-[640px] rounded-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Empowering Rural Youth Section */}
      <section className="bg-white text-black py-16 md:py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Copy */}
          <div>
            <h2 className="text-6xl md:text-5xl font-extrabold text-[#F2913F] leading-tight fade-in-section">
              Empowering Rural Youth through Skill Development
            </h2>
            <h3 className="mt-4 text-3xl md:text-5xl font-semibold text-[#8A393B] fade-in-section">
              Skilling Rural India for a Smarter Tomorrow
            </h3>

            <div className="mt-8 space-y-6 text-xl md:text-1xl leading-relaxed fade-in-section">
              <p>
                Recognizing the growing demand for skilled professionals in the railway industry, Patil Group is committed to playing its part in upskilling rural youth and preparing them for emerging opportunities.
              </p>
              <p>
                At our Skill Development Centre, we provide hands-on training to graduates from ITIs and polytechnic institutes, equipping them with specialized skills essential for railway manufacturing and infrastructure projects. To ensure a seamless transition into the industry, we also offer assured employment upon successful completion of the program.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center md:justify-end md:translate-x-8 lg:translate-x-12 xl:translate-x-16">
            <img
              src="/cmeonemore.JPG"
              alt="Skill development visual"
              className="w-full max-w-xl md:max-w-none md:w-[520px] lg:w-[640px] h-auto rounded-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Inside the Training Program - New Horizontal Design */}
      <section className="bg-black text-white py-16 md:py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-[#F2913F] fade-in-section">
            Inside the Training Program
          </h2>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-white/90 text-center max-w-6xl mx-auto fade-in-section leading-relaxed">
            Holistic Learning for Impactful Careers: Through this initiative, Patil Group aims to create a highly skilled workforce,
            contributing to the success of Indian Railways while empowering young professionals with stable and rewarding careers.
          </p>

          {/* 3 Cards in Horizontal Row */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 - Program Highlights */}
            <div className="rounded-3xl bg-[#8A393B] p-6 lg:p-8 relative fade-in-section min-h-[500px] flex flex-col cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#8A393B]/30 hover:bg-[#9d4447] group">
              <div className="text-6xl lg:text-7xl font-extrabold text-[#F2913F] mb-4 transition-all duration-300 group-hover:text-[#ffb366] group-hover:scale-110">1</div>
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#F2913F] mb-6 transition-colors duration-300 group-hover:text-[#ffb366]">
                Program Highlights
              </h3>
              <ul className="space-y-3 lg:space-y-4 text-white text-base lg:text-lg xl:text-xl leading-relaxed flex-grow transition-all duration-300">
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#F2913F] mr-3 transition-colors duration-300 group-hover:text-[#ffb366]">•</span>
                  Each training batch consists of 30 students
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#F2913F] mr-3 transition-colors duration-300 group-hover:text-[#ffb366]">•</span>
                  A comprehensive curriculum covering key aspects of railway manufacturing
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#F2913F] mr-3 transition-colors duration-300 group-hover:text-[#ffb366]">•</span>
                  In-house training programs for continuous learning and skill enhancement
                </li>
            </ul>
          </div>

            {/* Card 2 - Current Training Modules */}
            <div className="rounded-3xl bg-[#F2913F] p-6 lg:p-8 relative fade-in-section min-h-[500px] flex flex-col cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#F2913F]/30 hover:bg-[#ff9f4a] group">
              <div className="text-6xl lg:text-7xl font-extrabold text-[#8A393B] mb-4 transition-all duration-300 group-hover:text-[#6d2f32] group-hover:scale-110">2</div>
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#8A393B] mb-6 transition-colors duration-300 group-hover:text-[#6d2f32]">
                Current Training Modules
              </h3>
              <ul className="space-y-3 lg:space-y-4 text-black text-base lg:text-lg xl:text-xl leading-relaxed flex-grow transition-all duration-300">
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#8A393B] mr-3 transition-colors duration-300 group-hover:text-[#6d2f32]">•</span>
                  Concrete Mixing and Casting
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#8A393B] mr-3 transition-colors duration-300 group-hover:text-[#6d2f32]">•</span>
                  Advanced Pre-Stressing Techniques (Hi-Tech)
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#8A393B] mr-3 transition-colors duration-300 group-hover:text-[#6d2f32]">•</span>
                  Manufacturing & Quality Control of Concrete Sleepers
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#8A393B] mr-3 transition-colors duration-300 group-hover:text-[#6d2f32]">•</span>
                  Production of Rail Track Components (Clips, Pads, etc.)
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#8A393B] mr-3 transition-colors duration-300 group-hover:text-[#6d2f32]">•</span>
                  Railway Welding Technique
                </li>
            </ul>
          </div>

            {/* Card 3 - State-of-the-art Facilities */}
            <div className="rounded-3xl bg-[#8A393B] p-6 lg:p-8 relative fade-in-section min-h-[500px] flex flex-col cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#8A393B]/30 hover:bg-[#9d4447] group">
              <div className="text-6xl lg:text-7xl font-extrabold text-[#F2913F] mb-4 transition-all duration-300 group-hover:text-[#ffb366] group-hover:scale-110">3</div>
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#F2913F] mb-6 transition-colors duration-300 group-hover:text-[#ffb366]">
                State-of-the-art Facilities
              </h3>
              <ul className="space-y-3 lg:space-y-4 text-white text-base lg:text-lg xl:text-xl leading-relaxed flex-grow transition-all duration-300">
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#F2913F] mr-3 transition-colors duration-300 group-hover:text-[#ffb366]">•</span>
                  4 Classrooms for theoretical instruction
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#F2913F] mr-3 transition-colors duration-300 group-hover:text-[#ffb366]">•</span>
                  Full-fledged Concrete Laboratory for material testing and analysis
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#F2913F] mr-3 transition-colors duration-300 group-hover:text-[#ffb366]">•</span>
                  Pre-Stressing Bed for practical training in advanced pre-stressing techniques
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#F2913F] mr-3 transition-colors duration-300 group-hover:text-[#ffb366]">•</span>
                  Metallurgical & Forging Training Lab for specialized skill development
                </li>
                <li className="flex items-start transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-[#F2913F] mr-3 transition-colors duration-300 group-hover:text-[#ffb366]">•</span>
                  Computer Lab for digital learning and simulation-based training
                </li>
            </ul>
            </div>
          </div>

          <p className="mt-12 md:mt-16 text-center text-white/90 text-lg md:text-xl lg:text-2xl max-w-6xl mx-auto leading-relaxed">
            Additionally, we arrange specialized sessions on various railway functions in collaboration with RDSO and other railway authorities,
            based on industry needs and requests. With these cutting-edge facilities, Patil Group ensures that trainees receive comprehensive,
            industry-relevant education, preparing them for successful careers in railway manufacturing and infrastructure.
          </p>
        </div>
      </section>
      
      {/* First certificate from quality forum of India (Footer section) */}
      <section className="bg-black text-white py-16 md:py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Heading + Copy */}
          <div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-[#F2913F] leading-tight fade-in-section">
              First certificate from
              <br />
              quality forum of India
            </h2>
            <p className="mt-6 text-base md:text-lg text-white/90 max-w-2xl fade-in-section">
              Every plant of Patil Group has successfully completed many Quality Circle projects. We had participated in
              "CCQC-2020, Hyderabad chapter" organized by QCFI (Quality Circle Forum of India) and were awarded a Gold Medal
              in the Quality Circle competition.
            </p>
          </div>

          {/* Right: Circular Image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] rounded-full overflow-hidden">
              <img src="/awardcme.jpg" alt="Quality recognition visual" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CMEPage;
