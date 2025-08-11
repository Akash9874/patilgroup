"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

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
          <h1 className="text-5xl md:text-7xl font-bold font-clash leading-tight text-white">
            Centre for<br />Manufacturing<br />Excellence
          </h1>
        </div>
      </section>

      <section className="bg-black text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="h-2 mb-24"
            style={{
              background: 'linear-gradient(to right, #F2913F, #1E3888, #8A393B)',
            }}
          ></div>
          <div className="space-y-24">
            <div className="flex items-center justify-between scroll-animate">
              <h2 className="text-5xl font-semibold text-amber-500">Systems</h2>
              <div className="w-3/4">
                <Image src="/cmetrack.png" alt="track" width={800} height={80} />
              </div>
            </div>
            <div className="flex items-center justify-between scroll-animate">
              <div className="w-3/4">
                <Image src="/cmetrack.png" alt="track" width={800} height={80} />
              </div>
              <h2 className="text-5xl font-semibold text-amber-500 text-right">Training</h2>
            </div>
            <div className="flex items-center justify-between scroll-animate">
              <h2 className="text-5xl font-semibold text-amber-500">Process discipline</h2>
              <div className="w-2/3">
                <Image src="/cmetrack.png" alt="track" width={800} height={80} />
              </div>
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

      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-16">
            <div>
              <h2 className="text-5xl font-bold text-amber-500">Inside the Program</h2>
              <ul className="mt-4 space-y-2 text-2xl text-gray-800">
                <li>Industry specific sessions</li>
                <li>Led in collaboration with RDSO</li>
                <li>and other railway bodies</li>
              </ul>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-[#8A393B]">Recognition</h2>
              <p className="mt-4 text-2xl text-gray-800">
                Awarded by QCFI for Quality Circle projects
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/cmelogo.png"
              alt="CME Logo"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CMEPage;
