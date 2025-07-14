"use client";
import React from 'react';
import ContentSlider from '@/components/ContentSlider';
import ExploreSolutions from '@/components/ExploreSolutions';

const TurnoutsAndSwitchesPage = () => {
  const turnoutSlides = [
    { image: '/08_turnouts_switches_banner.jpg' },
    { image: '/15AerialViewTurnout.jpg' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-32 sm:py-40" style={{ backgroundImage: "url('/15AerialViewTurnout.jpg')" }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="font-clash font-medium text-[96px] leading-[84px] tracking-[-0.25px] text-[#F2913F]">
              Turnouts & Switches
            </h1>
          </div>
        </div>
      </div>

      {/* Engineered for Reliable Diversion and Control Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-clash font-medium text-4xl sm:text-5xl text-[#8A393B] leading-tight">
              Engineered for Reliable <br /> Diversion and Control
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-gray-700">
              Modern turnout systems are essential for enabling trains to switch between tracks safely and efficiently. Patil Group's turnouts are built with precision components like switches, frogs, and closure rails — supporting applications across high-speed rail, heavy haul, MRTS systems, and all gauge types.
            </p>
          </div>
        </div>
      </div>

      {/* Key Applications Section */}
      <div className="bg-white pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-clash font-medium text-4xl sm:text-5xl text-amber-500 leading-tight">
              Key Applications:
            </h2>
            <ul className="mt-6 space-y-4">
              <li className="text-lg sm:text-xl text-gray-700">High-Speed & Heavy Haul Rail</li>
              <li className="text-lg sm:text-xl text-gray-700">Mass Rapid Transit (Urban Metro)</li>
              <li className="text-lg sm:text-xl text-gray-700">Slab Track & Ballasted Track Systems</li>
              <li className="text-lg sm:text-xl text-gray-700">All Required Gauges & Rail Fastenings</li>
            </ul>
          </div>
        </div>
      </div>
      <ContentSlider slides={turnoutSlides} />

      {/* Why Patil Turnouts? Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-clash font-medium text-4xl sm:text-5xl text-amber-500 leading-tight">
              Why Patil Turnouts?
            </h2>
            <ul className="mt-6 space-y-2 list-disc pl-5">
              <li className="text-lg sm:text-xl text-gray-700">Designed for lower maintenance and longer service life</li>
              <li className="text-lg sm:text-xl text-gray-700">Compatible with all major track infrastructure types</li>
              <li className="text-lg sm:text-xl text-gray-700">Tailor-made solutions for custom technical requirements</li>
            </ul>

            <h3 className="mt-16 text-3xl font-bold text-black">
              Switch Systems
            </h3>
            <p className="mt-4 text-lg sm:text-xl text-gray-700">
              Each switch is optimized for minimal wear and better force distribution. This improves passenger comfort, lowers stress on the infrastructure, and extends operational life.
            </p>
          </div>
        </div>
      </div>
      <ExploreSolutions />
    </div>
  );
};

export default TurnoutsAndSwitchesPage; 