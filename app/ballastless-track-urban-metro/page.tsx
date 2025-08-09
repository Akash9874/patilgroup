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
        <div className="absolute inset-0">
          <Image
            src="/train.png"
            alt="Train at a station"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-y-0 left-0 w-[45%] bg-black flex items-center">
          <div className="pl-16 md:pl-24">
            <h1 className="text-white text-6xl md:text-7xl font-bold font-clash leading-tight">
              Ballastless Track For<br />Urban Metro
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-2xl font-bold max-w-4xl scroll-animate">
            Urban metro systems demand high precision, uninterrupted service, and long-term structural integrity. Our ballastless track system for urban metros is based on pre-cast plinths, offering a modular, high-performance solution for elevated and underground corridors.
          </p>

          <div className="relative mt-24 scroll-animate">
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

          <div className="mt-24 max-w-5xl scroll-animate">
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