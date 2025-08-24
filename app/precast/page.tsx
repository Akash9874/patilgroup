"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { TypingAnimation } from '@/components/TypingAnimation';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PrecastPage = () => {
  useScrollAnimation();
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const typingSpeedMs = 70;
  const firstText = 'built for ';
  const secondText = 'speed, strength,';
  const thirdText = '\nand precision';
  const secondStart = firstText.length * typingSpeedMs + 150;
  const thirdStart = (firstText.length + secondText.length) * typingSpeedMs + 300;

  // Product images mapping
  const productImages = {
    'u-drains': '/p2.jpg',
    'box-culverts': '/p1.jpg',
    'manhole-chambers': '/precast2.jpg',
    'beams-columns': '/p3.jpg',
    'walls': '/p4.jpg',
    'slabs': '/p5.jpg',
    'bus-stops': '/precast3.jpg',
    'toilet-blocks': '/p6.jpg',
    'noise-barriers': '/p7.jpg',
    'road-dividers': '/precast2.jpg',
    'septic-tanks': '/p11.jpg',
    'road-barriers': '/p8.jpg',
    're-walls': '/p9.jpg',
    'platform-walls': '/p10.jpg'
  };

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <div className="relative h-auto md:h-[600px]">
        {/* Background Image */}
        <Image
          src="/Precast-Concrete.jpeg"
          alt="Precast Solutions"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Left aligned content */}
        <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center">
          <div className="w-full md:w-1/2 p-8 md:p-12 fade-in-section animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Precast
              <br />
              Solutions
            </h1>
          </div>
        </div>
      </div>

      {/* Built for speed, strength, and precision Section */}
      <section className="bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 fade-in-section">
          {/* Left Image */}
          <div className="relative h-[380px] md:h-[520px] slide-in-left">
            <Image
              src="/precast2.jpg"
              alt="Precast manufacturing"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          {/* Right Content Panel */}
          <div className="bg-black text-white flex items-center slide-in-right">
            <div className="w-full p-8 md:p-12 xl:p-16">
              <h2 className="font-bold leading-[1.05] text-[56px] md:text-[72px] tracking-[-0.25px]">
                <TypingAnimation
                  text={firstText}
                  className="text-amber-500"
                  speed={typingSpeedMs}
                  showCursor={false}
                />
                <TypingAnimation
                  text={secondText}
                  className="text-[#8A393B]"
                  speed={typingSpeedMs}
                  startAfterMs={secondStart}
                  showCursor={false}
                />
                <TypingAnimation
                  text={thirdText}
                  className="text-[#8A393B]"
                  speed={typingSpeedMs}
                  startAfterMs={thirdStart}
                  showCursor={true}
                  cursorColor="#F2913F"
                />
              </h2>
              <div className="mt-6 border-t border-gray-300/60"></div>

              <div className="mt-6 space-y-4 text-lg md:text-xl text-gray-200 leading-relaxed">
                <p>
                  Patil Group delivers one-stop infrastructure solutions with a daily precast capacity of 3,410 m³. Our portfolio spans diverse products, from culverts and drains to walls, slabs, and modular systems, supporting urban and industrial growth across India.
                </p>
                <p>
                  Driven by scale, diversity, and precision, we continue to expand into new markets while shaping durable foundations for tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="bg-white text-black py-20 fade-in-section">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <h3 className="text-5xl md:text-6xl font-bold text-[#8A393B] mb-14">Product Portfolio</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Product Portfolio Items */}
            <div className="space-y-12">
                        {/* U Drains */}
            <div 
              className="border-b border-gray-200 pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('u-drains')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
            <div>
              <h4 className="text-3xl md:text-4xl font-semibold text-amber-500">U Drains</h4>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-4xl">
                  Engineered for rapid surface water management, our U Drains ensure smooth flow and easy maintenance in urban and highway projects. Designed with precision, they handle heavy rainfall and stormwater effectively, reducing the risk of flooding and erosion. Their modular construction allows quick installation, while the durable materials provide long service life with minimal upkeep. From city streets to expressways, U Drains deliver reliable drainage solutions that keep infrastructure safe and sustainable.
                </p>
                <div className="mt-8 h-1.5 w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'u-drains' && (
                <div className="absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
                  <div className="bg-white rounded-lg shadow-2xl p-2 border">
                    <Image
                      src={productImages['u-drains']}
                      alt="U Drains"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Box Culverts */}
            <div 
              className="border-b border-gray-200 pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('box-culverts')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-3xl md:text-4xl font-semibold text-amber-500">Box Culverts</h4>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-4xl">
                  Precast box culverts designed for efficient water conveyance and load-bearing performance in rail, road, and drainage applications. Their modular construction ensures rapid installation, reduced site work, and minimal disruption to traffic or surrounding infrastructure. Manufactured with high-strength concrete and precision moulding, these culverts offer superior durability, watertight joints, and the capacity to withstand heavy dynamic loads. Suitable for underpasses, utility corridors, stormwater drains, and irrigation channels, they provide a long-lasting, cost-effective solution for modern infrastructure development.
                </p>
                <div className="mt-8 h-1.5 w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'box-culverts' && (
                <div className="absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
                  <div className="bg-white rounded-lg shadow-2xl p-2 border">
                    <Image
                      src={productImages['box-culverts']}
                      alt="Box Culverts"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Manhole Chambers */}
            <div 
              className="border-b border-gray-200 pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('manhole-chambers')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-3xl md:text-4xl font-semibold text-amber-500">Manhole Chambers</h4>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-4xl">
                  Factory-finished manhole chambers that enable faster underground utility access with superior structural integrity. Produced under controlled conditions, they ensure consistent quality, watertight performance, and resistance to ground movement or heavy traffic loads. Their modular design allows quick installation, reducing on-site labor and downtime, while smooth internal finishes make inspection and maintenance safer and easier. Ideal for sewer lines, stormwater drains, telecom, and power networks, these chambers provide a reliable, long-lasting solution for modern urban infrastructure.
                </p>
                <div className="mt-8 h-1.5 w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'manhole-chambers' && (
                <div className="absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
                  <div className="bg-white rounded-lg shadow-2xl p-2 border">
                    <Image
                      src={productImages['manhole-chambers']}
                      alt="Manhole Chambers"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Beams & Columns */}
            <div 
              className="border-b border-gray-200 pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('beams-columns')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-3xl md:text-4xl font-semibold text-amber-500">Beams & Columns</h4>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-4xl">
                  Precision-moulded precast beams and columns that offer high load capacity and faster assembly at site. Manufactured in controlled factory conditions, they ensure dimensional accuracy, consistent strength, and superior surface finish. Their modular nature allows rapid erection, minimizing project timelines while maintaining structural reliability. Designed to withstand heavy loads and dynamic stresses, these components reduce on-site labour and formwork requirements, making them ideal for bridges, industrial structures, commercial complexes, and large-scale infrastructure projects.
                </p>
                <div className="mt-8 h-1.5 w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'beams-columns' && (
                <div className="absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
                  <div className="bg-white rounded-lg shadow-2xl p-2 border">
                    <Image
                      src={productImages['beams-columns']}
                      alt="Beams & Columns"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Walls */}
            <div 
              className="border-b border-gray-200 pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('walls')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-3xl md:text-4xl font-semibold text-amber-500">Walls</h4>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-4xl">
                  Durable and modular precast wall panels suited for boundary, security, and retaining applications. Manufactured with high-strength concrete, these panels deliver long-lasting performance, excellent weather resistance, and superior finish. Their modular design enables quick installation with minimal site disruption, while ensuring uniformity and structural stability. Ideal for industrial perimeters, residential developments, highways, and commercial spaces, precast walls provide a reliable solution for safety, privacy, and load-bearing requirements in modern infrastructure.
                </p>
                <div className="mt-8 h-1.5 w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'walls' && (
                <div className="absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
                  <div className="bg-white rounded-lg shadow-2xl p-2 border">
                    <Image
                      src={productImages['walls']}
                      alt="Walls"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Slabs */}
            <div 
              className="border-b border-gray-200 pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('slabs')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-3xl md:text-4xl font-semibold text-amber-500">Slabs</h4>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-4xl">
                  Precast floor and roof slabs enabling faster project turnaround with reduced on-site labor dependency. Manufactured under strict quality control, these slabs ensure uniform strength, superior finish, and long-term durability. Their precision-moulded design reduces shuttering and curing requirements at site, allowing quicker installation and consistent performance. Suitable for residential, commercial, and industrial structures, precast slabs provide a cost-effective solution that enhances construction speed, safety, and overall efficiency.
                </p>
                <div className="mt-8 h-1.5 w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'slabs' && (
                <div className="absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
                  <div className="bg-white rounded-lg shadow-2xl p-2 border">
                    <Image
                      src={productImages['slabs']}
                      alt="Slabs"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Bus Stops */}
            <div 
              className="border-b border-gray-200 pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('bus-stops')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-3xl md:text-4xl font-semibold text-amber-500">Bus Stops</h4>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-4xl">
                  Smartly designed precast bus stop units combining strength, aesthetics, and ease of installation. Produced with high-grade concrete and precision moulding, these units deliver durability against weather and heavy usage while maintaining a modern, functional design. Their modular construction allows rapid deployment with minimal site work, making them ideal for urban and highway applications.
                </p>
                <div className="mt-8 h-1.5 w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'bus-stops' && (
                <div className="absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
                  <div className="bg-white rounded-lg shadow-2xl p-2 border">
                    <Image
                      src={productImages['bus-stops']}
                      alt="Bus Stops"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Toilet Blocks */}
            <div 
              className="border-b border-gray-200 pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('toilet-blocks')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-3xl md:text-4xl font-semibold text-amber-500">Toilet Blocks</h4>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-4xl">
                  Portable and hygienic precast toilet blocks tailored for urban, rural, and smart city sanitation projects. Designed with durability and ease of maintenance in mind, these units provide a ready-to-use solution that meets modern sanitation standards. Their factory-controlled production ensures consistent quality, watertight performance, and resistance to wear and weather.
                </p>
                <div className="mt-8 h-1.5 w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'toilet-blocks' && (
                <div className="absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
                  <div className="bg-white rounded-lg shadow-2xl p-2 border">
                    <Image
                      src={productImages['toilet-blocks']}
                      alt="Toilet Blocks"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Noise Barriers */}
            <div 
              className="border-b border-gray-200 pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('noise-barriers')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-3xl md:text-4xl font-semibold text-amber-500">Noise Barriers</h4>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-4xl">
                  High-performance acoustic walls engineered to minimize sound pollution near highways and railway corridors. Manufactured with precision using dense, durable precast concrete, these barriers effectively absorb and deflect noise, improving the quality of life in nearby residential and commercial areas.
                </p>
                <div className="mt-8 h-1.5 w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'noise-barriers' && (
                <div className="absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
                  <div className="bg-white rounded-lg shadow-2xl p-2 border">
                    <Image
                      src={productImages['noise-barriers']}
                      alt="Noise Barriers"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Road Dividers */}
            <div 
              className="border-b border-gray-200 pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('road-dividers')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-3xl md:text-4xl font-semibold text-amber-500">Road Dividers</h4>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-4xl">
                  Precast road medians ensuring safer traffic segregation with easy installation and relocation features. Built with high-strength concrete, these dividers are designed to withstand impact, weathering, and heavy traffic conditions while maintaining long service life. Their modular design allows quick deployment and repositioning, reducing on-site work and traffic disruptions.
                </p>
                <div className="mt-8 h-1.5 w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'road-dividers' && (
                <div className="absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
                  <div className="bg-white rounded-lg shadow-2xl p-2 border">
                    <Image
                      src={productImages['road-dividers']}
                      alt="Road Dividers"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Septic Tanks */}
            <div 
              className="border-b border-gray-200 pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('septic-tanks')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-3xl md:text-4xl font-semibold text-amber-500">Septic Tanks</h4>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-4xl">
                  Leak-proof precast septic tanks designed for long service life and minimal maintenance in decentralized sewage systems. Manufactured under controlled conditions with high-grade concrete, these tanks ensure watertight performance, structural stability, and resistance to soil pressure. Their modular design enables quick installation with minimal excavation, while smooth internal finishes improve hygiene and ease of cleaning.
                </p>
                <div className="mt-8 h-1.5 w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'septic-tanks' && (
                <div className="absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
                  <div className="bg-white rounded-lg shadow-2xl p-2 border">
                    <Image
                      src={productImages['septic-tanks']}
                      alt="Septic Tanks"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Road Barriers */}
            <div 
              className="border-b border-gray-200 pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('road-barriers')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-3xl md:text-4xl font-semibold text-amber-500">Road Barriers</h4>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-4xl">
                  Crash-tested precast barriers that enhance roadside safety and traffic control with minimal site disruption. Designed to absorb impact and redirect vehicles effectively, these barriers reduce accident severity and improve overall highway safety.
                </p>
                <div className="mt-8 h-1.5 w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'road-barriers' && (
                <div className="absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
                  <div className="bg-white rounded-lg shadow-2xl p-2 border">
                    <Image
                      src={productImages['road-barriers']}
                      alt="Road Barriers"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* RE Walls */}
            <div 
              className="border-b border-gray-200 pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('re-walls')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-3xl md:text-4xl font-semibold text-amber-500">RE Walls</h4>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-4xl">
                  Mechanically stabilized precast RE walls enabling faster slope construction with high structural stability. Engineered with precision reinforcement and durable concrete panels, these walls provide reliable earth retention for highways, railways, flyovers, and embankments.
                </p>
                <div className="mt-8 h-1.5 w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 're-walls' && (
                <div className="absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
                  <div className="bg-white rounded-lg shadow-2xl p-2 border">
                    <Image
                      src={productImages['re-walls']}
                      alt="RE Walls"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Platform Walls */}
            <div 
              className="relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('platform-walls')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-3xl md:text-4xl font-semibold text-amber-500">Platform Walls</h4>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-4xl">
                  Precast platform walls tailored for railway stations, offering uniform finish and long-term durability. Manufactured with precision-moulded concrete, these walls provide structural stability, consistent alignment, and superior surface finish for safe passenger movement.
              </p>
              <div className="mt-8 h-1.5 w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
            </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'platform-walls' && (
                <div className="absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
                  <div className="bg-white rounded-lg shadow-2xl p-2 border">
                    <Image
                      src={productImages['platform-walls']}
                      alt="Platform Walls"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
            </div>

            {/* Right: Precast Map Image */}
            <div className="flex justify-center items-start lg:sticky lg:top-4 lg:h-screen lg:overflow-hidden">
              <div className="w-full max-w-2xl lg:mt-8">
                <Image
                  src="/precastmap.jpg"
                  alt="Precast Manufacturing Map"
                  width={800}
                  height={1000}
                  className="w-full h-auto rounded-lg shadow-lg lg:max-h-[80vh] lg:object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrecastPage;


