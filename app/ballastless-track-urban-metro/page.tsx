"use client";
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const BallastlessTrackUrbanMetroPage = () => {
  useScrollAnimation();
  
  return (
    <div>
      <Navbar />
      <section className="relative h-screen">
        {/* Background Image */}
        <img src="/ballastlesstrackhero.png" alt="Ballastless Track Urban Metro" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        
        {/* Centered Card Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-6">
            <div className="bg-black/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Ballastless Track<br />For Urban Metro
              </h1>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto rounded-full shadow-lg"></div>
              <p className="text-gray-200 text-sm sm:text-base mt-4 font-medium">
                Precision Metro Solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-12 sm:py-16 md:py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in-section">
            <p className="text-lg sm:text-xl md:text-2xl font-bold max-w-4xl leading-relaxed">
              Urban metro systems demand high precision, uninterrupted service, and long-term structural integrity. Our ballastless track system for urban metros is based on pre-cast plinths, offering a modular, high-performance solution for elevated and underground corridors.
            </p>
          </div>

          <div className="relative mt-12 sm:mt-16 md:mt-24 fade-in-section">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start md:items-center">
              <div className="w-full md:flex-shrink-0 order-2 md:order-1">
                <Image
                  src="/ballastlesstrack1.jpg"
                  alt="Ballastless track detail"
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-auto max-w-md mx-auto md:mx-0"
                />
              </div>
              <div className="bg-white text-black p-6 sm:p-8 rounded-lg shadow-lg flex-1 order-1 md:order-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#8A393B] mb-4 leading-relaxed">
                  With reduced on-site casting, consistent alignment, and low maintenance needs, it supports fast-track construction and dependable daily operation across dense urban environments.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-12 sm:py-16 md:py-20 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-center md:text-left leading-tight">
            Ballastless Track System for Main Line
          </h2>
        </div>
      </section>

      {/* Added rich content section following the heading, with large typography */}
      <section className="bg-black text-white py-12 sm:py-16 md:py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in-section">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold max-w-5xl leading-relaxed">
              In main line applications such as tunnels, bridges, and station zones, ballastless track offers a durable, low-maintenance alternative to conventional systems. Our design accommodates high-speed movement, continuous loading, and complex terrain.
            </p>
          </div>

          <div className="relative mt-12 sm:mt-16 md:mt-24 fade-in-section">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start md:items-center">
              <div className="w-full md:flex-shrink-0 order-2 md:order-1">
                <Image
                  src="/balltrack3.webp"
                  alt="Ballastless main line banner"
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-auto max-w-md mx-auto md:mx-0"
                />
              </div>
              <div className="bg-white text-black p-6 sm:p-8 rounded-lg shadow-lg flex-1 order-1 md:order-2">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#8A393B] mb-4 leading-relaxed">
                  This system has been successfully deployed in multiple metro projects, including:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-base sm:text-lg md:text-xl lg:text-2xl">
                  <li>Bangalore Metro</li>
                  <li>Delhi Metro</li>
                  <li>Mumbai Metro</li>
                  <li>Chennai Metro</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 md:mt-24 max-w-6xl fade-in-section">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#F2913F] leading-relaxed">
              Engineered for long operational life with minimal intervention, the system ensures stable geometry, reduced deflection, and consistent track performance under both freight and passenger traffic.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BallastlessTrackUrbanMetroPage; 