"use client";
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const BallastlessTrackUrbanMetroPage = () => {
  useScrollAnimation();
  
  return (
    <div>
      <Navbar />
      <div className="relative">
        {/* Mobile Layout */}
        <div className="md:hidden h-screen relative">
          <img src="/ballastlesstrackhero.png" alt="Ballastless Track Urban Metro" className="h-full w-full object-cover z-0" />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center px-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-2xl">
                Ballastless Track<br />For Urban Metro
              </h1>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto rounded-full shadow-lg"></div>
              <p className="text-gray-200 text-base mt-4 font-medium">
                Precision Metro Solutions
              </p>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden md:block relative h-[600px]">
          <img src="/ballastlesstrackhero.png" alt="Ballastless Track Urban Metro" className="h-full w-full object-cover z-0" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 z-20">
            <div className="px-6 sm:px-8 md:px-12 pb-16">
              <h1 className="text-white font-bold leading-[0.95] text-6xl md:text-7xl lg:text-8xl">
                Ballastless Track<br />For Urban Metro
              </h1>
              <p className="text-gray-200 text-lg mt-4 font-medium">
                Precision Metro Solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-black text-white py-12 sm:py-16 md:py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in-section">
            <p className="text-lg sm:text-xl md:text-2xl font-bold max-w-4xl leading-relaxed mb-8 sm:mb-12 md:mb-16">
              Urban metro systems demand high precision, uninterrupted service, and long-term structural integrity. Our ballastless track system for urban metros is based on pre-cast plinths, offering a modular, high-performance solution for elevated and underground corridors.
            </p>
            
            <div className="max-w-6xl space-y-8 sm:space-y-12 md:space-y-16">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F2913F] mb-6 sm:mb-8">Leading Change in Indian Railways</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
                  At Patil Group, we pioneered the adoption of RHEDA ballast less track systems in India, an achievement that reshaped track infrastructure for one of the world's busiest rail networks. Our journey was marked by challenges, breakthroughs, and innovation, but it has since set a new benchmark for safety, precision, and reliability in Indian Railways.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F2913F] mb-4 sm:mb-6">The Challenge</h3>
                <ul className="list-disc list-inside space-y-2 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed ml-4">
                  <li>Convincing Indian Railways to adopt Patil RHEDA technology was not easy, as they had their own BLT designs in place.</li>
                  <li>Existing BLT systems were failing, raising safety concerns for millions of daily passengers.</li>
                  <li>Decision-makers required extensive assurances on design and safety before considering a new system.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F2913F] mb-4 sm:mb-6">Turning Point:</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                  In December 2006, after months of discussions, technical presentations, and marketing, we earned the trust of Indian Railways, securing approval for the adoption of Patil RHEDA sleepers.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F2913F] mb-4 sm:mb-6">Design & Development</h3>
                <ul className="list-disc list-inside space-y-2 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed ml-4 mb-4">
                  <li>Creating a sleeper for India's most demanding track system required unmatched precision and innovation.</li>
                  <li>We explored multiple design iterations before arriving at the final mould.</li>
                  <li>Extensive R&D ensured every sleeper met exacting safety and quality standards.</li>
                  <li>Different material combinations and tolerance levels were tested to optimise performance.</li>
                </ul>
                <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Outcome</h4>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    A sleeper design capable of delivering both strength and reliability, validated through repeated trials.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F2913F] mb-4 sm:mb-6">Installation & Execution</h3>
                <ul className="list-disc list-inside space-y-2 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed ml-4 mb-4">
                  <li>Execution demanded as much precision as design.</li>
                  <li>Transporting and handling sleepers required specialised equipment like spindle bars to prevent damage.</li>
                  <li>Every step had to be finalised before concrete pouring, as changes were impossible afterwards.</li>
                  <li>Working under strict delivery timelines of just 40 days, we maintained rigorous monitoring to ensure zero errors.</li>
                </ul>
                <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Result</h4>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Safe, efficient, and timely installation of Patil RHEDA sleepers—demonstrating our ability to deliver complex infrastructure under pressure.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F2913F] mb-4 sm:mb-6">Legacy & Impact</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                  Today, Patil RHEDA and BLT systems are synonymous with reliability in Indian Railways. By overcoming early challenges, we proved that innovation and perseverance can redefine national infrastructure.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-12 sm:mt-16 md:mt-24 fade-in-section">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start md:items-stretch">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <Image
                  src="/ballastlesstrack1.jpg"
                  alt="Ballastless track detail"
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 bg-white text-black p-6 sm:p-8 rounded-lg shadow-lg order-1 md:order-2 flex flex-col justify-center">
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
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start md:items-stretch">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <Image
                  src="/balltrack3.webp"
                  alt="Ballastless main line banner"
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 bg-white text-black p-6 sm:p-8 rounded-lg shadow-lg order-1 md:order-2 flex flex-col justify-center">
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