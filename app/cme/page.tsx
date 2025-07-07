"use client";

import Navbar from '@/components/Navbar';
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CMEPage = () => {
  useScrollAnimation();
  
  return (
    <div className="bg-[#1E1E1E] text-white">
      <Navbar />
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <img src="/train.png" alt="Train" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2">
          {/* Left side with "CME" title */}
          <div className="flex items-center justify-center">
            <div className="text-left px-4 sm:px-6 lg:px-8">
              <h1 className="text-6xl md:text-8xl font-bold text-amber-500 animate-fadeInUp">
                Centre for<br />Manufacturing<br />Excellence
              </h1>
            </div>
          </div>

          {/* Right side with black cut and text */}
          <div 
            className="h-full bg-[#1E1E1E] flex items-center"
            style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
          >
            <div className="space-y-6 animate-fadeInUp w-full pl-[30%] pr-8 lg:pr-16">
              <p className="font-clash font-light text-xl leading-relaxed text-white">
                The Patil Group has established the Dr. S. S. Patil Centre for Manufacturing Excellence as an in-house initiative, driven by a dedicated team of experts. This centre was created to achieve the highest standards in manufacturing excellence and cost management while fostering continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Objectives Section */}
      <section className="bg-white text-gray-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#8A393B] mb-20">Our key objectives :</h2>
            <div className="space-y-16">
                {/* Objective 1 */}
                <div>
                    <div className="flex items-center">
                        <h3 className="text-2xl md:text-3xl font-semibold text-amber-500 whitespace-nowrap pr-4">Enhancing Overall Equipment Efficiency (OEE)</h3>
                        <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 via-red-500 to-orange-500"></div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <p className="text-base md:text-lg text-gray-700 max-w-2xl text-left">
                            We aim to maximize productivity by reducing downtime, improving performance, and ensuring equipment runs at its best—every shift, every day.
                        </p>
                    </div>
                </div>
                {/* Objective 2 */}
                <div>
                    <div className="flex items-center">
                        <h3 className="text-2xl md:text-3xl font-semibold text-amber-500 whitespace-nowrap pr-4">Improving Product Quality & Process Efficiency</h3>
                        <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 via-red-500 to-orange-500"></div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <p className="text-base md:text-lg text-gray-700 max-w-2xl text-left">
                            Through optimized workflows and precision manufacturing, we consistently deliver high-quality products while minimizing material and time wastage.
                        </p>
                    </div>
                </div>
                {/* Objective 3 */}
                <div>
                    <div className="flex items-center">
                        <h3 className="text-2xl md:text-3xl font-semibold text-amber-500 whitespace-nowrap pr-4">Strengthening Health, Safety & Environment (HSE)</h3>
                        <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 via-red-500 to-orange-500"></div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <p className="text-base md:text-lg text-gray-700 max-w-2xl text-left">
                            We are committed to creating a safe, healthy, and environmentally responsible workspace that supports our teams and meets global compliance standards.
                        </p>
                    </div>
                </div>
                {/* Objective 4 */}
                <div>
                    <div className="flex items-center">
                        <h3 className="text-2xl md:text-3xl font-semibold text-amber-500 whitespace-nowrap pr-4">Setting Global Benchmarks in Manufacturing</h3>
                        <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 via-red-500 to-orange-500"></div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <p className="text-base md:text-lg text-gray-700 max-w-2xl text-left">
                            By constantly innovating and improving, we aspire to lead by example—positioning our brand as a global symbol of Indian manufacturing excellence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Our Initiatives Section */}
    <section className="bg-white text-gray-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#8A393B]">Our Initiatives</h2>
            <p className="mt-4 text-base md:text-lg text-gray-700">To achieve these goals, the centre is actively implementing the following initiatives:</p>
            <div className="mt-16 space-y-20">
                {/* Initiative 1 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1 bg-gray-200 h-48 rounded-lg"></div>
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-semibold mb-2">Lean Manufacturing</h3>
                        <p className="text-gray-700">We streamline operations by eliminating waste and optimizing resource use, ensuring maximum value for every step in our production process.</p>
                    </div>
                </div>
                {/* Initiative 2 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1 bg-gray-200 h-48 rounded-lg"></div>
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-semibold mb-2">5S and Kaizen Methodologies</h3>
                        <p className="text-gray-700">By fostering discipline and continuous improvement at the ground level, we build a culture of efficiency, cleanliness, and proactive problem-solving.</p>
                    </div>
                </div>
                {/* Initiative 3 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1 bg-gray-200 h-48 rounded-lg"></div>
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-semibold mb-2">Robotic Process Implementation & SPM Automation</h3>
                        <p className="text-gray-700">By fostering discipline and continuous improvement at the ground level, we build a culture of efficiency, cleanliness, and proactive problem-solving.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Skill Development Centre Section */}
    <section className="bg-gray-100 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
            <div className="flex items-center justify-center p-8 md:p-16">
                <div>
                    <h2 className="text-4xl font-bold text-[#8A393B]">
                        Skill Development Centre
                    </h2>
                    <h3 className="text-2xl font-bold mt-2">Building Workforce for Tomorrow's Railways</h3>
                    <p className="mt-4 text-lg text-gray-600">
                        To support Indian Railways with a next-generation workforce, Patil Group has established a Skill Development Centre at its largest facility in Kargi Road.
                    </p>
                    <div className="flex space-x-2 mt-8">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                </div>
            </div>
            <div 
                className="bg-cover bg-center min-h-[400px] md:min-h-full"
                style={{
                    backgroundImage: "url('/sleeper.png')",
                    clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)'
                }}
            >
            </div>
        </div>
    </section>

    {/* Empowering Rural Youth Section */}
    <section className="bg-white text-gray-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#8A393B] mb-12">Empowering Rural Youth through Skill Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                <div className="md:col-span-1 bg-gray-200 h-64 rounded-lg"></div>
                <div className="md:col-span-2 space-y-6">
                    <p className="text-gray-700 text-lg">
                        Recognizing the growing demand for skilled professionals in the railway industry, Patil Group is committed to playing its part in upskilling rural youth and preparing them for emerging opportunities.
                    </p>
                    <p className="text-gray-700 text-lg">
                        At our Skill Development Centre, we provide hands-on training to graduates from ITIs and polytechnic institutes, equipping them with specialized skills essential for railway manufacturing and infrastructure projects. To ensure a seamless transition into the industry, we also offer assured employment upon successful completion of the program.
                    </p>
                </div>
            </div>
        </div>
    </section>

    {/* Inside the Training Program Section */}
    <section className="bg-white text-gray-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#8A393B] mb-12">Inside the Training Program</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="bg-gray-200 h-96 rounded-3xl flex flex-col justify-end items-center p-4">
                    <div className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</div>
                </div>
                <div className="bg-gray-200 h-96 rounded-3xl flex flex-col justify-end items-center p-4">
                    <div className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</div>
                </div>
                <div className="bg-gray-200 h-96 rounded-3xl flex flex-col justify-end items-center p-4">
                    <div className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">3</div>
                </div>
            </div>
            <p className="max-w-4xl mx-auto text-gray-700 text-lg">
                Additionally, we arrange specialized sessions on various railway functions in collaboration with RDSO and other railway authorities, based on industry needs and requests. With these cutting-edge facilities, Patil Group ensures that trainees receive comprehensive, industry-relevant education, preparing them for successful careers in railway manufacturing and infrastructure.
            </p>
        </div>
    </section>

    {/* First Certificate Section */}
    <section className="bg-white text-gray-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#8A393B] mb-8">
                        First certificate from quality<br />forum of India
                    </h2>
                    <p className="text-gray-700 text-lg">
                        Every plant of Patil Group has successfully completed many Quality Circle projects. We had Participated in "CCQC-2020, Hyderabad chapter organized by QCFI (Quality Circle Forum of India) And awarded Gold Medal in Quality circle competition.
                    </p>
                </div>
                <div className="bg-gray-200 h-80 rounded-lg"></div>
            </div>
        </div>
    </section>
    </div>
  );
};

export default CMEPage; 