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
            <div className="text-center px-6">
              <div className="bg-black/70 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
                <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                  Precast Solutions
                </h1>
                <div className="w-20 h-1.5 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto rounded-full shadow-lg"></div>
                <p className="text-gray-200 text-sm mt-4 font-medium">
                  Built for Speed, Strength, and Precision
                </p>
              </div>
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
                  Engineered for rapid surface water management, our U Drains ensure smooth flow and easy maintenance in urban and highway projects. Designed with precision, they handle heavy rainfall and stormwater effectively, reducing the risk of flooding and erosion. Their modular construction allows quick installation, while the durable materials provide long service life with minimal upkeep.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Manufactured using high-strength concrete with integrated reinforcement, these U-shaped drainage channels provide superior hydraulic performance while maintaining structural integrity under heavy traffic loads. The smooth internal finish ensures optimal flow characteristics and minimizes debris accumulation, reducing maintenance requirements and operational costs.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  From city streets to expressways and industrial complexes, U Drains deliver reliable drainage solutions that keep infrastructure safe and sustainable. Their standardized dimensions allow seamless integration with existing drainage networks, while the precast manufacturing process ensures consistent quality and faster project delivery. Weather-resistant properties and anti-corrosive formulations guarantee long-term performance in diverse environmental conditions.
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
                  Precast box culverts designed for efficient water conveyance and load-bearing performance in rail, road, and drainage applications. Their modular construction ensures rapid installation, reduced site work, and minimal disruption to traffic or surrounding infrastructure. Manufactured with high-strength concrete and precision moulding, these culverts offer superior durability, watertight joints, and the capacity to withstand heavy dynamic loads.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Advanced reinforcement systems and quality-controlled concrete mixes ensure these culverts meet stringent structural requirements while providing excellent resistance to ground movement, frost action, and chemical exposure. The factory-controlled production process guarantees dimensional accuracy, consistent wall thickness, and superior surface finish, eliminating common issues associated with cast-in-place construction.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Suitable for underpasses, utility corridors, stormwater drains, and irrigation channels, they provide a long-lasting, cost-effective solution for modern infrastructure development. Available in various sizes and configurations, these culverts can accommodate different flow requirements and installation conditions while maintaining structural integrity for decades. Their proven performance in critical infrastructure projects makes them the preferred choice for engineers and contractors across India.
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
                  Factory-finished manhole chambers that enable faster underground utility access with superior structural integrity. Produced under controlled conditions, they ensure consistent quality, watertight performance, and resistance to ground movement or heavy traffic loads. Their modular design allows quick installation, reducing on-site labor and downtime, while smooth internal finishes make inspection and maintenance safer and easier.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  These chambers incorporate advanced sealing systems and corrosion-resistant materials to withstand harsh underground environments, chemical exposure, and varying soil conditions. The precision manufacturing process ensures perfect dimensional accuracy, allowing for seamless integration with pipe networks and reducing the risk of settlement or structural failure over time.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Ideal for sewer lines, stormwater drains, telecom, and power networks, these chambers provide a reliable, long-lasting solution for modern urban infrastructure. Available with customizable configurations including various inlet and outlet arrangements, these chambers meet diverse project requirements while maintaining the highest standards of safety and accessibility for utility maintenance personnel.
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
                  Precision-moulded precast beams and columns that offer high load capacity and faster assembly at site. Manufactured in controlled factory conditions, they ensure dimensional accuracy, consistent strength, and superior surface finish. Their modular nature allows rapid erection, minimizing project timelines while maintaining structural reliability.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Engineered using high-grade concrete and strategically placed reinforcement, these structural elements undergo rigorous quality testing to meet demanding load requirements and seismic specifications. The controlled curing environment ensures optimal strength development and eliminates common defects associated with on-site casting, such as segregation, honeycombing, and inconsistent concrete quality.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Designed to withstand heavy loads and dynamic stresses, these components reduce on-site labour and formwork requirements, making them ideal for bridges, industrial structures, commercial complexes, and large-scale infrastructure projects. Available in various cross-sectional profiles and lengths, they offer architects and engineers greater design flexibility while ensuring consistent performance and durability across diverse applications.
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
                  Durable and modular precast wall panels suited for boundary, security, and retaining applications. Manufactured with high-strength concrete, these panels deliver long-lasting performance, excellent weather resistance, and superior finish. Their modular design enables quick installation with minimal site disruption, while ensuring uniformity and structural stability.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Advanced concrete formulations and steel reinforcement systems provide exceptional resistance to environmental stresses, impact loads, and thermal movements. The factory-controlled production ensures consistent thickness, smooth surfaces, and precise dimensional tolerances, eliminating the variability common in traditional masonry construction.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Ideal for industrial perimeters, residential developments, highways, and commercial spaces, precast walls provide a reliable solution for safety, privacy, and load-bearing requirements in modern infrastructure. Available with various surface textures, architectural finishes, and integration capabilities for gates and utilities, these walls combine functionality with aesthetic appeal while maintaining structural integrity for decades.
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
                  Precast floor and roof slabs enabling faster project turnaround with reduced on-site labor dependency. Manufactured under strict quality control, these slabs ensure uniform strength, superior finish, and long-term durability. Their precision-moulded design reduces shuttering and curing requirements at site, allowing quicker installation and consistent performance.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  These slabs incorporate optimized reinforcement layouts and high-performance concrete mixtures to achieve superior load-bearing capacity and crack resistance. The controlled manufacturing environment eliminates weather-related delays and ensures consistent curing conditions, resulting in predictable strength characteristics and enhanced structural performance.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Suitable for residential, commercial, and industrial structures, precast slabs provide a cost-effective solution that enhances construction speed, safety, and overall efficiency. Available in various thicknesses and span capabilities, these slabs can be customized with integrated services routing, thermal insulation, and surface treatments to meet specific project requirements while maintaining excellent fire resistance and acoustic properties.
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
                  Smartly designed precast bus stop units combining strength, aesthetics, and ease of installation. Produced with high-grade concrete and precision moulding, these units deliver durability against weather and heavy usage while maintaining a modern, functional design. Their modular construction allows rapid deployment with minimal site work, making them ideal for urban and highway applications.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Engineered with weather-resistant materials and anti-vandalism features, these bus stops incorporate integrated seating, lighting provisions, and advertisement panels while maintaining structural integrity under diverse environmental conditions. The standardized design ensures consistent appearance across transportation networks while accommodating site-specific requirements.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Perfect for smart city initiatives and public transportation upgrades, these prefabricated units significantly reduce installation time and maintenance costs while providing comfortable, secure passenger facilities. Available with customizable features including digital displays, solar lighting, and accessibility provisions to meet modern urban transport requirements.
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
                  Portable and hygienic precast toilet blocks tailored for urban, rural, and smart city sanitation projects. Designed with durability and ease of maintenance in mind, these units provide a ready-to-use solution that meets modern sanitation standards. Their factory-controlled production ensures consistent quality, watertight performance, and resistance to wear and weather.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  These sanitation units incorporate advanced ventilation systems, anti-bacterial surface treatments, and water-efficient fixtures to ensure optimal hygiene standards and user comfort. The modular design allows for easy transportation, quick installation, and simple maintenance, making them ideal for temporary and permanent installations.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Essential for public facilities, construction sites, event venues, and rural development programs, these toilet blocks support government sanitation initiatives while providing dignified, accessible facilities. Available with various configurations including disabled access, baby changing facilities, and water conservation features to meet diverse community needs.
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
                  High-performance acoustic walls engineered to minimize sound pollution near highways and railway corridors. Manufactured with precision using dense, durable precast concrete, these barriers effectively absorb and deflect noise, improving the quality of life in nearby residential and commercial areas.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Advanced acoustic design incorporating specialized surface textures and material compositions achieves superior noise reduction coefficients while maintaining structural integrity under wind loads and environmental stresses. The factory-controlled production ensures consistent acoustic performance across entire barrier installations.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Critical for urban infrastructure development, these barriers balance transportation efficiency with community welfare, supporting sustainable development goals. Available in various heights and architectural finishes, they can be integrated with landscaping and urban design elements while providing long-term noise mitigation solutions.
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
                  Precast road medians ensuring safer traffic segregation with easy installation and relocation features. Built with high-strength concrete, these dividers are designed to withstand impact, weathering, and heavy traffic conditions while maintaining long service life. Their modular design allows quick deployment and repositioning, reducing on-site work and traffic disruptions.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Incorporating crash-tested designs and reflective elements, these dividers enhance road safety while providing clear lane demarcation under all lighting conditions. The interlocking system ensures stable alignment even under thermal expansion and ground settlement, while drainage channels prevent water accumulation.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Essential for urban road networks, expressways, and construction zone management, these dividers facilitate traffic flow optimization while maintaining safety standards. Available with integrated provisions for utilities, signage, and landscaping to support comprehensive road infrastructure development.
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
                  Leak-proof precast septic tanks designed for long service life and minimal maintenance in decentralized sewage systems. Manufactured under controlled conditions with high-grade concrete, these tanks ensure watertight performance, structural stability, and resistance to soil pressure. Their modular design enables quick installation with minimal excavation, while smooth internal finishes improve hygiene and ease of cleaning.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Advanced sewage treatment design with optimized chamber configurations ensures efficient waste decomposition and clarification processes. Corrosion-resistant materials and protective coatings guarantee long-term performance in aggressive chemical environments, while integrated access points facilitate regular maintenance and inspection.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Vital for rural communities, individual homes, and areas without centralized sewerage, these tanks support public health and environmental protection goals. Available in multiple capacities with customizable inlet and outlet configurations to accommodate varying household sizes and site conditions while meeting environmental discharge standards.
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
                  Crash-tested precast barriers that enhance roadside safety and traffic control with minimal site disruption. Designed to absorb impact and redirect vehicles effectively, these barriers reduce accident severity and improve overall highway safety.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Engineered to international safety standards with optimized geometric profiles that ensure controlled vehicle redirection while minimizing occupant injury risk. The reinforced concrete construction provides superior impact resistance compared to traditional materials, while maintaining structural integrity under repeated loading conditions.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Critical for highway safety improvement projects, construction zones, and high-risk traffic areas, these barriers significantly reduce accident severity and property damage. Available with various containment levels and connection systems to meet specific traffic engineering requirements while providing reliable long-term performance.
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
                  Mechanically stabilized precast RE walls enabling faster slope construction with high structural stability. Engineered with precision reinforcement and durable concrete panels, these walls provide reliable earth retention for highways, railways, flyovers, and embankments.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Advanced geotechnical design incorporating high-tensile strength reinforcement strips and corrosion-resistant materials ensures long-term stability under varying soil conditions and loading scenarios. The modular panel system allows flexible installation on irregular terrain while maintaining consistent structural performance.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Essential for infrastructure projects requiring steep slope stabilization and space-efficient earth retention solutions, these walls support sustainable land development practices. Available with architectural facing options and integrated drainage systems to combine structural functionality with aesthetic appeal while ensuring long-term performance in challenging environments.
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
                  Precast platform walls tailored for railway stations, offering uniform finish and long-term durability. Manufactured with precision-moulded concrete, these walls provide structural stability, consistent alignment, and superior surface finish for safe passenger movement.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Designed specifically for railway infrastructure with integrated provisions for signage, lighting, and safety equipment, these walls ensure passenger safety while maintaining aesthetic appeal. Weather-resistant formulations and anti-graffiti surface treatments preserve appearance and reduce maintenance requirements in high-traffic environments.
                </p>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed text-justify">
                  Critical for modern railway station development and upgrades, these walls support efficient passenger flow and station operations while meeting stringent safety and accessibility requirements. Available with various architectural finishes and heights to complement station design while providing reliable performance in demanding transportation environments.
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


