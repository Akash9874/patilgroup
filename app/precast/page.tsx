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
      <div className="relative">
        {/* Mobile Layout */}
        <div className="md:hidden h-screen relative">
          <Image
            src="/Precast-Concrete.jpeg"
            alt="Precast Solutions"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10"></div>
          
          <div className="relative z-20 h-full flex items-center justify-center">
            <div className="text-center px-6 w-full max-w-lg mx-auto">
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-3 drop-shadow-2xl">
                Precast Solutions
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto mt-8 rounded-full shadow-lg"></div>
              <p className="text-white text-xl sm:text-2xl mt-8 font-medium drop-shadow-xl leading-relaxed">
                Built for Speed, Strength, and Precision
              </p>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden md:block relative h-[600px]">
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
      </div>

      {/* Built for speed, strength, and precision Section */}
      <section className="bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 fade-in-section">
          {/* Left Image */}
          <div className="relative h-[300px] sm:h-[380px] md:h-[520px] slide-in-left">
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
            <div className="w-full p-6 sm:p-8 md:p-12 xl:p-16">
              <h2 className="font-bold leading-[1.05] text-[28px] sm:text-[36px] md:text-[56px] lg:text-[72px] tracking-[-0.25px]">
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
              <div className="mt-4 sm:mt-6 border-t border-gray-300/60"></div>

              <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
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
      <section className="bg-white text-black py-8 sm:py-12 md:py-20 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Header with Map */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 sm:mb-10 md:mb-14">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#8A393B] mb-6 lg:mb-0 lg:mr-8">Product Portfolio</h3>
            
            {/* Small Map positioned next to title */}
            <div className="flex-shrink-0 max-w-xs lg:max-w-sm">
              <Image
                src="/precastmap.jpg"
                alt="Precast Manufacturing Map"
                width={400}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Single column layout for products */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
                        {/* U Drains */}
            <div 
              className="border-b border-gray-200 pb-6 sm:pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-3 sm:p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('u-drains')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
            <div>
              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-500">U Drains</h4>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Engineered for rapid surface water management, our U Drains ensure smooth flow and easy maintenance in urban and highway projects. Manufactured using high-strength concrete with integrated reinforcement, these U-shaped drainage channels provide superior hydraulic performance while maintaining structural integrity under heavy traffic loads. Their modular construction allows quick installation and seamless integration with existing drainage networks.
                </p>
                <div className="mt-6 sm:mt-8 h-1.5 w-32 sm:w-40 md:w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image - Desktop Only */}
              {hoveredProduct === 'u-drains' && (
                <div className="hidden lg:block absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
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
              className="border-b border-gray-200 pb-6 sm:pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-3 sm:p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('box-culverts')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-500">Box Culverts</h4>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Precast box culverts designed for efficient water conveyance and load-bearing performance in rail, road, and drainage applications. Their modular construction ensures rapid installation with minimal site disruption, while advanced reinforcement systems and quality-controlled concrete provide superior durability and watertight joints. Suitable for underpasses, utility corridors, and stormwater systems, these culverts offer a cost-effective solution for modern infrastructure development.
                </p>
                <div className="mt-6 sm:mt-8 h-1.5 w-32 sm:w-40 md:w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image - Desktop Only */}
              {hoveredProduct === 'box-culverts' && (
                <div className="hidden lg:block absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
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
              className="border-b border-gray-200 pb-6 sm:pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-3 sm:p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('manhole-chambers')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-500">Manhole Chambers</h4>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Factory-finished manhole chambers that enable faster underground utility access with superior structural integrity. Produced under controlled conditions with advanced sealing systems and corrosion-resistant materials, they ensure consistent quality, watertight performance, and resistance to harsh underground environments. Ideal for sewer lines, stormwater drains, telecom, and power networks, providing reliable solutions for modern urban infrastructure.
                </p>
                <div className="mt-6 sm:mt-8 h-1.5 w-32 sm:w-40 md:w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'manhole-chambers' && (
                <div className="hidden lg:block absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
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
              className="border-b border-gray-200 pb-6 sm:pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-3 sm:p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('beams-columns')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-500">Beams & Columns</h4>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Precision-moulded precast beams and columns that offer high load capacity and faster assembly at site. Manufactured in controlled factory conditions with high-grade concrete and strategically placed reinforcement, they ensure dimensional accuracy, consistent strength, and superior surface finish. Designed to withstand heavy loads and dynamic stresses, these components are ideal for bridges, industrial structures, and commercial complexes.
                </p>
                <div className="mt-6 sm:mt-8 h-1.5 w-32 sm:w-40 md:w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'beams-columns' && (
                <div className="hidden lg:block absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
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
              className="border-b border-gray-200 pb-6 sm:pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-3 sm:p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('walls')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-500">Walls</h4>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Durable and modular precast wall panels suited for boundary, security, and retaining applications. Manufactured with high-strength concrete and advanced reinforcement systems, these panels deliver long-lasting performance, excellent weather resistance, and superior finish. Ideal for industrial perimeters, residential developments, and commercial spaces, providing reliable solutions for safety, privacy, and load-bearing requirements.
                </p>
                <div className="mt-6 sm:mt-8 h-1.5 w-32 sm:w-40 md:w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'walls' && (
                <div className="hidden lg:block absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
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
              className="border-b border-gray-200 pb-6 sm:pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-3 sm:p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('slabs')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-500">Slabs</h4>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Precast floor and roof slabs enabling faster project turnaround with reduced on-site labor dependency. Manufactured under strict quality control with optimized reinforcement layouts and high-performance concrete mixtures, these slabs ensure uniform strength, superior finish, and long-term durability. Suitable for residential, commercial, and industrial structures, providing cost-effective solutions that enhance construction speed and efficiency.
                </p>
                <div className="mt-6 sm:mt-8 h-1.5 w-32 sm:w-40 md:w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'slabs' && (
                <div className="hidden lg:block absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
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
              className="border-b border-gray-200 pb-6 sm:pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-3 sm:p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('bus-stops')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-500">Bus Stops</h4>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Smartly designed precast bus stop units combining strength, aesthetics, and ease of installation. Produced with high-grade concrete and engineered with weather-resistant materials, these units incorporate integrated seating, lighting provisions, and advertisement panels while maintaining structural integrity. Perfect for smart city initiatives, these prefabricated units significantly reduce installation time and maintenance costs.
                </p>
                <div className="mt-6 sm:mt-8 h-1.5 w-32 sm:w-40 md:w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'bus-stops' && (
                <div className="hidden lg:block absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
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
              className="border-b border-gray-200 pb-6 sm:pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-3 sm:p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('toilet-blocks')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-500">Toilet Blocks</h4>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Portable and hygienic precast toilet blocks tailored for urban, rural, and smart city sanitation projects. These units incorporate advanced ventilation systems, anti-bacterial surface treatments, and water-efficient fixtures to ensure optimal hygiene standards and user comfort. Essential for public facilities, construction sites, and rural development programs, supporting government sanitation initiatives with dignified, accessible facilities.
                </p>
                <div className="mt-6 sm:mt-8 h-1.5 w-32 sm:w-40 md:w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'toilet-blocks' && (
                <div className="hidden lg:block absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
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
              className="border-b border-gray-200 pb-6 sm:pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-3 sm:p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('noise-barriers')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-500">Noise Barriers</h4>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  High-performance acoustic walls engineered to minimize sound pollution near highways and railway corridors. Manufactured with dense, durable precast concrete and advanced acoustic design incorporating specialized surface textures, these barriers effectively absorb and deflect noise while maintaining structural integrity. Critical for urban infrastructure development, balancing transportation efficiency with community welfare.
                </p>
                <div className="mt-6 sm:mt-8 h-1.5 w-32 sm:w-40 md:w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'noise-barriers' && (
                <div className="hidden lg:block absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
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
              className="border-b border-gray-200 pb-6 sm:pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-3 sm:p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('road-dividers')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-500">Road Dividers</h4>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Precast road medians ensuring safer traffic segregation with easy installation and relocation features. Built with high-strength concrete and incorporating crash-tested designs with reflective elements, these dividers enhance road safety while providing clear lane demarcation under all lighting conditions. Essential for urban road networks, expressways, and construction zone management, facilitating traffic flow optimization while maintaining safety standards.
                </p>
                <div className="mt-6 sm:mt-8 h-1.5 w-32 sm:w-40 md:w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'road-dividers' && (
                <div className="hidden lg:block absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
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
              className="border-b border-gray-200 pb-6 sm:pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-3 sm:p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('septic-tanks')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-500">Septic Tanks</h4>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Leak-proof precast septic tanks designed for long service life and minimal maintenance in decentralized sewage systems. Manufactured with high-grade concrete and advanced sewage treatment design, these tanks ensure watertight performance, structural stability, and efficient waste decomposition. Vital for rural communities and areas without centralized sewerage, supporting public health and environmental protection goals.
                </p>
                <div className="mt-6 sm:mt-8 h-1.5 w-32 sm:w-40 md:w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'septic-tanks' && (
                <div className="hidden lg:block absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
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
              className="border-b border-gray-200 pb-6 sm:pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-3 sm:p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('road-barriers')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-500">Road Barriers</h4>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Crash-tested precast barriers that enhance roadside safety and traffic control with minimal site disruption. Engineered to international safety standards with optimized geometric profiles, these barriers absorb impact and redirect vehicles effectively while maintaining structural integrity. Critical for highway safety improvement projects and construction zones, significantly reducing accident severity and property damage.
                </p>
                <div className="mt-6 sm:mt-8 h-1.5 w-32 sm:w-40 md:w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'road-barriers' && (
                <div className="hidden lg:block absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
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
              className="border-b border-gray-200 pb-6 sm:pb-8 relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-3 sm:p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('re-walls')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-500">RE Walls</h4>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Mechanically stabilized precast RE walls enabling faster slope construction with high structural stability. Engineered with precision reinforcement, high-tensile strength strips, and durable concrete panels, these walls provide reliable earth retention for highways, railways, and embankments. Essential for infrastructure projects requiring steep slope stabilization and space-efficient earth retention solutions.
                </p>
                <div className="mt-6 sm:mt-8 h-1.5 w-32 sm:w-40 md:w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 're-walls' && (
                <div className="hidden lg:block absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
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
              className="relative cursor-pointer transition-all duration-300 hover:bg-gray-50 p-3 sm:p-4 rounded-lg"
              onMouseEnter={() => setHoveredProduct('platform-walls')}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-500">Platform Walls</h4>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Precast platform walls tailored for railway stations, offering uniform finish and long-term durability. Manufactured with precision-moulded concrete and designed with integrated provisions for signage, lighting, and safety equipment, these walls ensure passenger safety while maintaining aesthetic appeal. Critical for modern railway station development, supporting efficient passenger flow and station operations.
                </p>
                <div className="mt-6 sm:mt-8 h-1.5 w-32 sm:w-40 md:w-56 bg-gradient-to-r from-[#8A393B] via-amber-500 to-transparent"></div>
              </div>
              
              {/* Hover Image */}
              {hoveredProduct === 'platform-walls' && (
                <div className="hidden lg:block absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out transform animate-in slide-in-from-right-2 fade-in">
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
        </div>
      </section>
    </div>
  );
};

export default PrecastPage;



