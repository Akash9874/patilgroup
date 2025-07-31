"use client";
import React from 'react';

const CMEPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-32 sm:py-40" style={{ backgroundImage: "url('/05_sleepers_banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="font-clash font-medium text-[96px] leading-[64px] tracking-[-0.25px] text-[#F2913F]">
              Centre for Manufacturing Excellence
            </h1>
          </div>
        </div>
      </div>

      {/* Focus Section */}
      <section className="py-24 overflow-hidden relative">
        <div className="absolute top-24 right-0 flex items-center">
          <div className="text-right text-[#8A393B] font-semibold text-2xl pr-8">
            <p>An in house initiative</p>
            <p>Focused on</p>
          </div>
          <div 
            className="w-48 h-24 bg-[#8A393B]"
            style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0% 100%)' }}
          ></div>
        </div>

        <div className="mt-48 space-y-12">
          <div className="flex items-center">
            <div className="w-1/4">
              <img src="/cmetrack.png" alt="track" className="w-full h-12" />
            </div>
            <div className="w-3/4 pl-8">
                <h2 className="text-8xl font-semibold text-orange-500">systems</h2>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1/4">
              <img src="/cmetrack.png" alt="track" className="w-full h-12" />
            </div>
            <div className="w-3/4 pl-8">
                <h2 className="text-8xl font-semibold text-gray-400">training</h2>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1/4">
              <img src="/cmetrack.png" alt="track" className="w-full h-12" />
            </div>
            <div className="w-3/4 pl-8">
                <h2 className="text-8xl font-semibold text-gray-400">process discipline</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas & Our Approach Section */}
      <section className="py-24 space-y-32">
        {/* Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start px-4 sm:px-6 lg:px-8">
          <h2 className="text-7xl font-bold text-black">Focus Areas</h2>
          <ul className="space-y-4 text-4xl text-gray-800">
            <li>Enhancing equipment efficiency</li>
            <li>Improving product quality</li>
            <li>Ensuring safety and compliance</li>
          </ul>
        </div>

        {/* Our Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start px-4 sm:px-6 lg:px-8">
          <h2 className="text-7xl font-bold text-[#8A393B]">Our Approach</h2>
          <ul className="space-y-4 text-4xl text-orange-500">
            <li>Lean manufacturing</li>
            <li>5S and Kaizen at every level</li>
            <li>Automation where it matters</li>
          </ul>
        </div>
      </section>

      {/* Skill Development Centre Section */}
      <section className="relative bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-16">
                <h2 className="text-6xl font-bold text-[#8A393B]">Skill Development Centre</h2>
                <p className="mt-8 text-4xl text-orange-500">Training railway technicians</p>
                <p className="mt-4 text-4xl text-orange-500">At our Kargi Road facility</p>
            </div>
            <div 
                className="bg-cover bg-center min-h-[400px]"
                style={{
                    backgroundImage: "url('/27_training_center.jpg')",
                    clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)'
                }}
            >
            </div>
        </div>
      </section>

      {/* Uplifting Rural Youth Section */}
      <section className="py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-8xl font-bold text-[#8A393B]">Uplifting Rural Youth</h2>
            <p className="mt-8 text-5xl text-black">Hands on training in manufacturing and infrastructure</p>
            <p className="mt-2 text-5xl text-black">Direct pathways to employment</p>
        </div>
      </section>

      {/* Inside the Program Section */}
      <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-8xl font-bold text-black leading-tight">
                          Inside the<br />Program
                      </h2>
                  </div>
                  <div>
                      <div className="h-24 bg-gray-200 mb-8">
                          {/* Placeholder for the train image */}
                      </div>
                      <div className="text-4xl text-[#8A393B] font-semibold space-y-2">
                          <p>Industry specific sessions</p>
                          <p>Led in collaboration with RDSO</p>
                          <p>and other railway bodies</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Recognition Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-8xl font-bold text-[#8A393B]">Recognition</h2>
                    <p className="mt-8 text-4xl text-black">Awarded by QCFI for Quality Circle projects</p>
                </div>
                <div className="h-96 bg-gray-200">
                    {/* Placeholder for the image */}
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default CMEPage;
