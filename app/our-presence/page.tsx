import React from 'react';
import IndiaMap from '../../components/IndiaMap';

const OurPresencePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-48" style={{ backgroundImage: "url('/our-presence-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
          <h1 className="text-7xl font-bold">
            Our Presence
          </h1>
        </div>
      </div>
      <div className="container mx-auto py-12">
        <IndiaMap />
      </div>
    </div>
  );
};

export default OurPresencePage;
