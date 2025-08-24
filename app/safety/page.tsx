"use client";

import React from 'react';
import Image from 'next/image';
import { TypingAnimation } from '@/components/TypingAnimation';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SafetyPage = () => {
  useScrollAnimation();
  return (
    <div className="bg-white text-black">
      {/* Responsive Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[600px]">
        {/* Background Image */}
        <Image
          src="/safetyside.jpg"
          alt="Safety"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
          priority
        />
        
        {/* Mobile Layout */}
        <div className="md:hidden absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10"></div>
          <div className="relative z-20 h-full flex items-center justify-center">
            <div className="text-center px-4">
              <div className="bg-black/70 backdrop-blur-md rounded-3xl p-6 border border-white/10">
                <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Rail wayside safety
                </h1>
                <div className="w-16 h-1 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto mt-4 rounded-full"></div>
                <p className="text-gray-200 text-sm mt-3">Protecting tracks, securing journeys</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout - Bottom left positioning */}
        <div className="hidden md:block">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute bottom-0 left-0 z-20">
            <div className="px-6 md:px-8 lg:px-12 pb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">Rail wayside safety</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Protecting tracks / Securing Journeys */}
      <section className="bg-black text-white py-8 sm:py-12 md:py-16 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Mobile Layout */}
          <div className="md:hidden text-center space-y-6">
            <TypingAnimation
              text="Protecting tracks"
              showCursor
              speed={70}
              className="text-2xl sm:text-3xl font-bold text-[#8A393B]"
              cursorColor="#8A393B"
            />
            <TypingAnimation
              text="Securing Journeys"
              showCursor
              speed={70}
              className="text-xl sm:text-2xl font-bold text-amber-500"
              cursorColor="#F2913F"
            />
                          <p className="text-sm sm:text-base text-gray-200 leading-relaxed px-4 text-justify">
                Patil Group builds practical, durable solutions to keep railway corridors safe and operational. From high speed routes to regional lines, our systems are made to prevent intrusions, reduce risks and ensure uninterrupted train movement.
              </p>
          </div>
          
          {/* Desktop Layout - Original */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="text-left">
              <TypingAnimation
                text="Protecting tracks"
                showCursor
                speed={70}
                className="text-4xl md:text-6xl font-bold text-[#8A393B]"
                cursorColor="#8A393B"
              />
            </div>
            <div className="text-center">
              <TypingAnimation
                text="Securing Journeys"
                showCursor
                speed={70}
                className="text-2xl md:text-4xl font-bold text-amber-500"
                cursorColor="#F2913F"
              />
              <p className="mt-4 text-sm md:text-base text-gray-200 max-w-xl mx-auto text-justify">
                Patil Group builds practical, durable solutions to keep railway corridors safe and operational. From high speed routes to regional lines, our systems are made to prevent intrusions, reduce risks and ensure uninterrupted train movement.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Responsive Track fencing / Precast Safety Infrastructure */}
      <section className="relative bg-white text-black py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Mobile Headers */}
            <div className="text-center mb-8 fade-in-section">
              <h3 className="text-3xl sm:text-4xl font-bold text-amber-500 mb-2">Track fencing</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-[#8A393B] mx-auto mb-4 rounded-full"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#8A393B] leading-tight">
                Precast Safety Infrastructure
              </h3>
            </div>
            

            
            {/* Mobile Content Cards */}
            <div className="space-y-4">
              {[
                {
                  title: "W beam fence",
                  content: "Galvanized steel with a corrugated W profile, this fencing system is engineered to provide strong and reliable protection. It is designed to prevent animals, vehicles, and trespassers from entering the track zone, ensuring operational safety and minimizing accidents. Durable and weather-resistant, the W beam fence requires minimal maintenance while offering long-term performance. Already in use along critical corridors such as Mumbai to Ahmedabad, it stands as a proven solution for large-scale rail infrastructure projects."
                },
                {
                  title: "Fixed knot wire fence",
                  content: "Made from high-tensile steel mesh, the fixed knot wire fence offers reliable and long-lasting perimeter security. Its unique knotting design ensures rigidity and strength, preventing displacement and maintaining tension over large stretches. Quick to install and adaptable to uneven or sloping terrain, it provides an efficient barrier against both human intrusion and animal entry. With low maintenance needs and high durability, the fixed knot wire fence is a cost-effective solution for securing extensive rail corridors and sensitive infrastructure zones."
                },
                {
                  title: "Crash barriers and security walls",
                  content: "Crash barriers and security walls are critical safety installations designed to shield work zones, safeguard trackside equipment, and prevent unauthorized access. Built with reinforced materials, they provide a strong physical barrier against vehicle impact and trespassing, significantly reducing the risk of accidents near rail corridors. These systems are engineered for durability, withstanding harsh weather and continuous operational stress while requiring minimal upkeep. Beyond protection, they also help streamline operations by clearly demarcating restricted areas, ensuring both worker and passenger safety. Widely deployed across major infrastructure projects, crash barriers and security walls form an essential layer of defence in modern rail networks."
                },
                {
                  title: "Platform copings",
                  content: "Platform copings are precision-engineered elements designed to ensure passenger safety and comfort at stations. Manufactured with anti-slip surfaces, they minimize the risk of slips and falls, even under wet conditions. Integrated tactile indicators provide essential guidance for visually impaired passengers, helping them navigate platforms with confidence and security. Built to withstand heavy foot traffic and daily operational stress, these copings combine durability with functionality. Their consistent quality and reliable performance make them an indispensable feature across modern railway and metro networks, supporting both safety and accessibility standards."
                },
                {
                  title: "Cable troughs and drains",
                  content: "Cable troughs and drains are essential components for maintaining safe and efficient rail operations. Designed to securely house and protect signaling and power lines, they prevent accidental damage, tampering, and exposure to harsh environmental conditions. At the same time, integrated drainage systems ensure that rainwater and runoff are effectively channelled away, keeping the tracks free from waterlogging and structural damage. Built with durable, weather-resistant materials, these systems require minimal maintenance while offering long-term reliability. By combining protection for critical infrastructure with effective trackside water management, cable troughs and drains play a vital role in ensuring uninterrupted rail services and operational safety."
                },
                {
                  title: "Noise barriers",
                  content: "Noise barriers are engineered to minimize sound disturbance in residential and sensitive zones along railway corridors. By reducing the transmission of operational noise, they create a quieter environment for surrounding communities, enhancing overall quality of life. In addition to comfort, these barriers improve safety by limiting distractions for both passengers and operators. Constructed from durable, weather-resistant materials, they are designed to perform effectively over long service cycles with minimal maintenance. Noise barriers are a critical feature of modern rail infrastructure, balancing the demands of high-capacity rail systems with environmental responsibility and community well-being."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow duration-300 fade-in-section">
                  <h4 className="text-lg sm:text-xl font-bold text-black mb-3 flex items-center">
                    <div className="w-2 h-2 bg-[#F2913F] rounded-full mr-3"></div>
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed pl-5 text-justify">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop Layout - Original */}
          <div className="hidden lg:block">
            <div className="slide-in-left">
                {/* Main headings */}
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold text-amber-500 mb-8">Track fencing</h3>
                
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#8A393B] leading-tight mb-16">
                  Precast Safety<br />Infrastructure
                </h3>

                {/* Content sections with spacing */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold text-black mb-4">W beam fence</h4>
                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 text-justify">
                      Galvanized steel with a corrugated W profile, this fencing system is engineered to provide strong and reliable protection. It is designed to prevent animals, vehicles, and trespassers from entering the track zone, ensuring operational safety and minimizing accidents. Durable and weather-resistant, the W beam fence requires minimal maintenance while offering long-term performance. Already in use along critical corridors such as Mumbai to Ahmedabad, it stands as a proven solution for large-scale rail infrastructure projects.
                    </p>
                    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
                      <Image
                        src="/beamfence.jpg"
                        alt="W beam fence installation"
                        width={800}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold text-black mb-4">Fixed knot wire fence</h4>
                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 text-justify">
                      Made from high-tensile steel mesh, the fixed knot wire fence offers reliable and long-lasting perimeter security. Its unique knotting design ensures rigidity and strength, preventing displacement and maintaining tension over large stretches. Quick to install and adaptable to uneven or sloping terrain, it provides an efficient barrier against both human intrusion and animal entry. With low maintenance needs and high durability, the fixed knot wire fence is a cost-effective solution for securing extensive rail corridors and sensitive infrastructure zones.
                    </p>
                    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
                      <Image
                        src="/fixedknot.jpg"
                        alt="Fixed knot wire fence installation"
                        width={800}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold text-black mb-4">Crash barriers and security walls</h4>
                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 text-justify">
                      Crash barriers and security walls are critical safety installations designed to shield work zones, safeguard trackside equipment, and prevent unauthorized access. Built with reinforced materials, they provide a strong physical barrier against vehicle impact and trespassing, significantly reducing the risk of accidents near rail corridors. These systems are engineered for durability, withstanding harsh weather and continuous operational stress while requiring minimal upkeep. Beyond protection, they also help streamline operations by clearly demarcating restricted areas, ensuring both worker and passenger safety. Widely deployed across major infrastructure projects, crash barriers and security walls form an essential layer of defence in modern rail networks.
                    </p>
                    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
                      <Image
                        src="/crashbarrier.jpg"
                        alt="Crash barriers and security walls installation"
                        width={800}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold text-black mb-4">Platform copings</h4>
                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 text-justify">
                      Platform copings are precision-engineered elements designed to ensure passenger safety and comfort at stations. Manufactured with anti-slip surfaces, they minimize the risk of slips and falls, even under wet conditions. Integrated tactile indicators provide essential guidance for visually impaired passengers, helping them navigate platforms with confidence and security. Built to withstand heavy foot traffic and daily operational stress, these copings combine durability with functionality. Their consistent quality and reliable performance make them an indispensable feature across modern railway and metro networks, supporting both safety and accessibility standards.
                    </p>
                    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
                      <Image
                        src="/platformcooping.jpg"
                        alt="Platform copings installation"
                        width={800}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold text-black mb-4">Cable troughs and drains</h4>
                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 text-justify">
                      Cable troughs and drains are essential components for maintaining safe and efficient rail operations. Designed to securely house and protect signaling and power lines, they prevent accidental damage, tampering, and exposure to harsh environmental conditions. At the same time, integrated drainage systems ensure that rainwater and runoff are effectively channelled away, keeping the tracks free from waterlogging and structural damage. Built with durable, weather-resistant materials, these systems require minimal maintenance while offering long-term reliability. By combining protection for critical infrastructure with effective trackside water management, cable troughs and drains play a vital role in ensuring uninterrupted rail services and operational safety.
                    </p>
                    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
                      <Image
                        src="/drainage.webp"
                        alt="Cable troughs and drains installation"
                        width={800}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold text-black mb-4">Noise barriers</h4>
                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 text-justify">
                      Noise barriers are engineered to minimize sound disturbance in residential and sensitive zones along railway corridors. By reducing the transmission of operational noise, they create a quieter environment for surrounding communities, enhancing overall quality of life. In addition to comfort, these barriers improve safety by limiting distractions for both passengers and operators. Constructed from durable, weather-resistant materials, they are designed to perform effectively over long service cycles with minimal maintenance. Noise barriers are a critical feature of modern rail infrastructure, balancing the demands of high-capacity rail systems with environmental responsibility and community well-being.
                    </p>
                    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
                      <Image
                        src="/noisebarrier.jpg"
                        alt="Noise barriers installation"
                        width={800}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>



      {/* Responsive Made for Indian Railways */}
      <section className="bg-black text-white py-8 sm:py-12 md:py-16 fade-in-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Mobile Layout */}
          <div className="md:hidden text-center">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
              <h3 className="text-2xl sm:text-3xl font-bold text-amber-500 mb-4">Made for Indian Railways</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto mb-4 rounded-full"></div>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed text-justify">
                Every product is manufactured under strict quality control in a factory environment. This ensures consistent strength, precise dimensions and long service life — meeting the standards of modern railway operations.
              </p>
            </div>
          </div>
          
          {/* Desktop Layout - Original */}
          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              <div className="flex-1 h-1 bg-gradient-to-r from-transparent to-[#F2913F]"></div>
              <h3 className="text-4xl md:text-6xl font-bold text-amber-500 text-center whitespace-nowrap">Made for Indian Railways</h3>
              <div className="flex-1 h-1 bg-gradient-to-l from-transparent to-[#F2913F]"></div>
            </div>
            <p className="mt-4 text-base md:text-lg text-gray-200 text-center max-w-3xl mx-auto text-justify">
              Every product is manufactured under strict quality control in a factory environment. This ensures consistent
              strength, precise dimensions and long service life — meeting the standards of modern railway operations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SafetyPage;


