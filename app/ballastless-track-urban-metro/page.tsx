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
          <img src="/ballastlesstrackhero.png" alt="Ballastless Track Urban Metro" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-start pl-4 sm:pl-8 md:pl-16 lg:pl-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-left leading-tight animate-fadeInUp px-4">
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
            <div className="flex flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <Image
                  src="/ballastlesstrack1.jpg"
                  alt="Ballastless track detail"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
              <div className="bg-white text-black p-8 rounded-lg shadow-lg flex-1">
                <h3 className="text-2xl font-bold text-[#8A393B] mb-4">
                  With reduced on-site casting, consistent alignment, and low maintenance needs, it supports fast-track construction and dependable daily operation across dense urban environments.
                </h3>
              </div>
            </div>
          </div>


        </div>
      </section>

      <section className="bg-black text-white py-20 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Ballastless Track System for Main Line
          </h2>
        </div>
      </section>

      {/* Added rich content section following the heading, with large typography */}
      <section className="bg-black text-white py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in-section">
            <p className="text-3xl md:text-4xl font-bold max-w-5xl">
              In main line applications such as tunnels, bridges, and station zones, ballastless track offers a durable, low-maintenance alternative to conventional systems. Our design accommodates high-speed movement, continuous loading, and complex terrain.
            </p>
          </div>

          <div className="relative mt-24 fade-in-section">
            <div className="flex flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <Image
                  src="/balltrack3.webp"
                  alt="Ballastless main line banner"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
              <div className="bg-white text-black p-8 rounded-lg shadow-lg flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-[#8A393B] mb-4">
                  This system has been successfully deployed in multiple metro projects, including:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-xl md:text-2xl">
                  <li>Bangalore Metro</li>
                  <li>Delhi Metro</li>
                  <li>Mumbai Metro</li>
                  <li>Chennai Metro</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-24 max-w-6xl fade-in-section">
            <p className="text-3xl md:text-4xl font-bold text-[#F2913F]">
              Engineered for long operational life with minimal intervention, the system ensures stable geometry, reduced deflection, and consistent track performance under both freight and passenger traffic.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BallastlessTrackUrbanMetroPage; 