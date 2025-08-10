"use client";
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const BallastlessTrackUrbanMetroPage = () => {
  useScrollAnimation();
  
  return (
    <div>
      <Navbar />
      <section className="relative h-screen bg-black">
        <div className="absolute inset-0 h-full w-full">
          <img src="/train 2.jpg" alt="Train at a station" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-start pl-16 md:pl-24">
          <h1 className="text-8xl font-bold text-white text-left leading-tight animate-fadeInUp">
            Ballastless Track<br />For Urban Metro
          </h1>
        </div>
      </section>

      <section className="bg-black text-white py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in-section">
            <p className="text-2xl font-bold max-w-4xl">
              Urban metro systems demand high precision, uninterrupted service, and long-term structural integrity. Our ballastless track system for urban metros is based on pre-cast plinths, offering a modular, high-performance solution for elevated and underground corridors.
            </p>
          </div>

          <div className="relative mt-24 fade-in-section">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="pt-16">
                <Image
                  src="/20_ballastless_urban_metro_banner.jpg"
                  alt="Ballastless urban metro banner"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
              <div className="bg-white text-black p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#8A393B] mb-4">
                  This system has been successfully deployed in multiple metro projects, including:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Bangalore Metro</li>
                  <li>Delhi Metro</li>
                  <li>Mumbai Metro</li>
                  <li>Chennai Metro</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-24 max-w-5xl fade-in-section">
            <p className="text-2xl font-bold text-[#F2913F]">
              With reduced on-site casting, consistent alignment, and low maintenance needs, it supports fast-track construction and dependable daily operation across dense urban environments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BallastlessTrackUrbanMetroPage; 