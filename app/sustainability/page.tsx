"use client";
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';
import Image from 'next/image';
import { TypingAnimation } from '@/components/TypingAnimation';

export default function SustainabilityPage() {
  useGSAPAnimations();
  return (
    <div>
      {/* Responsive Hero Section - Single Frame */}
      <section className="relative h-screen max-h-screen w-full overflow-hidden fade-in-section">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          preload="metadata"
        >
          <source src="/sustainhero.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Mobile Layout */}
        <div className="md:hidden absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4 w-full max-w-lg mx-auto">
              <h1 className="text-white font-bold leading-tight text-5xl sm:text-6xl drop-shadow-2xl">
                Sustainability
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-green-400 via-[#F2913F] to-[#8A393B] mx-auto mt-8 rounded-full animate-pulse shadow-lg"></div>
              <p className="text-white text-xl sm:text-2xl mt-8 leading-relaxed drop-shadow-xl font-medium">
                Green innovation in railway engineering
              </p>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout - Bottom left positioning */}
        <div className="hidden md:block">
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute bottom-0 left-0 z-10">
            <div className="px-6 md:px-8 lg:px-12 pb-16">
              <h1 className="text-white font-bold leading-none text-6xl sm:text-7xl md:text-8xl lg:text-9xl drop-shadow-lg">
                Sustainability
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Split headline section */}
      <section className="bg-black py-8 sm:py-12 md:py-16 lg:py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Mobile Layout */}
          <div className="md:hidden space-y-8 text-center">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
              <TypingAnimation
                text="Quiet changes. Tangible outcomes."
                showCursor={true}
                speed={80}
                startAfterMs={500}
                cursorColor="#8A393B"
                className="text-2xl sm:text-3xl font-bold text-[#8A393B] leading-tight"
              />
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
              <TypingAnimation
                text="Built into every plant, every process."
                showCursor={true}
                speed={80}
                startAfterMs={1500}
                cursorColor="#F2913F"
                className="text-2xl sm:text-3xl font-bold text-[#F2913F] leading-tight"
              />
            </div>
          </div>
          
          {/* Desktop Layout - Original */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#8A393B] leading-tight">
              <TypingAnimation
                text="Quiet changes.
Tangible outcomes."
                showCursor={true}
                speed={80}
                startAfterMs={500}
                cursorColor="#8A393B"
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#8A393B] leading-tight"
              />
            </p>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F2913F] leading-tight md:text-right">
              <TypingAnimation
                text="Built into every plant,
every process."
                showCursor={true}
                speed={80}
                startAfterMs={1500}
                cursorColor="#F2913F"
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F2913F] leading-tight md:text-right"
              />
            </p>
          </div>
        </div>
      </section>

      {/* Responsive Clean power / clean cycles */}
      <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Mobile Header */}
          <div className="md:hidden text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              <span className="text-[#8A393B]">Clean power</span>
              <span className="italic text-[#008000] font-normal block sm:inline"> clean cycles</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-[#8A393B] mx-auto mt-4 rounded-full"></div>
          </div>
          
          {/* Desktop Header */}
          <div className="hidden md:block">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
              <span className="text-[#8A393B]">Clean power</span>
              <span className="italic text-[#008000] font-normal"> clean cycles</span>
            </h2>
          </div>

          {/* Mobile Content - Enhanced Card Layout with Images */}
          <div className="md:hidden mt-8 space-y-6">
            {[
              {
                title: "Solar generation",
                items: ["With 18 sites across India and an on-grid capacity of 5.4 megawatts, our solar generation network significantly reduces dependence on fossil fuels and lowers the overall carbon footprint of operations. This renewable infrastructure powers a substantial share of our manufacturing activities, ensuring cleaner and more sustainable production."],
                image: "/solargeneration.webp",
                color: "from-green-500 to-emerald-600"
              },
              {
                title: "Water reuse", 
                items: ["Recycled curing water is processed through closed-loop Water Treatment Plants (WTPs), dramatically reducing overall consumption and ensuring efficient use of every drop. By implementing zero-discharge processes across all facilities, the system prevents waste and protects natural water bodies from contamination."],
                image: "/waterreuse.jpg",
                color: "from-blue-500 to-cyan-600"
              },
              {
                title: "Dust control",
                items: ["Factory air is managed at the source through advanced multi-stage dust extraction systems installed across all units, creating a cleaner, safer, and healthier environment for every worker. High-efficiency filtration technology ensures that airborne particles are captured before they spread, maintaining optimal air quality standards throughout operations."],
                image: "/dust control.jpg",
                color: "from-gray-500 to-slate-600"
              }
            ].map((section, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 fade-in-section">
                {/* Mobile Card Header with Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg leading-tight">
                      {section.title}
                    </h3>
                    <div className={`w-16 h-1 bg-gradient-to-r ${section.color} mt-2 rounded-full shadow-lg`}></div>
                  </div>
                </div>
                
                {/* Mobile Card Content */}
                <div className="p-6">
                  <div className="space-y-3">
                    {section.items.map((item, i) => (
                      <div key={i} className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Mobile Card Footer */}
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#8A393B] font-medium text-sm">
                      <div className="w-2 h-2 bg-[#F2913F] rounded-full mr-2"></div>
                      Sustainability Initiative
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 font-medium">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Desktop Content - Safety page style layout */}
          <div className="hidden md:block mt-16">
            <div className="space-y-8">
              {/* Solar generation */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Solar generation</h3>
                <div className="space-y-3 text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 text-justify">
                  <p>With 18 sites across India and an on-grid capacity of 5.4 megawatts, our solar generation network significantly reduces dependence on fossil fuels and lowers the overall carbon footprint of operations. This renewable infrastructure powers a substantial share of our manufacturing activities, ensuring cleaner and more sustainable production. Designed for scalability, the system continues to expand as energy demands grow, reinforcing long-term environmental goals. By integrating solar energy into daily operations, we demonstrate a strong commitment to innovation, responsibility, and the transition toward a greener future across all our facilities.</p>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
                  <Image
                    src="/solargeneration.webp"
                    alt="Solar generation facility"
                    width={800}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Water reuse */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Water reuse</h3>
                <div className="space-y-3 text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 text-justify">
                  <p>Recycled curing water is processed through closed-loop Water Treatment Plants (WTPs), dramatically reducing overall consumption and ensuring efficient use of every drop. By implementing zero-discharge processes across all facilities, the system prevents waste and protects natural water bodies from contamination. This comprehensive approach not only conserves a vital resource but also aligns with global sustainability standards. Designed for long-term reliability, the water management framework supports both operational efficiency and environmental stewardship, reflecting our commitment to responsible resource utilization and sustainable manufacturing practices.</p>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
                  <Image
                    src="/waterreuse.jpg"
                    alt="Water reuse system"
                    width={800}
                    height={700}
                    className="w-full h-97 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Dust control */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Dust control</h3>
                <div className="space-y-3 text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 text-justify">
                  <p>Factory air is managed at the source through advanced multi-stage dust extraction systems installed across all units, creating a cleaner, safer, and healthier environment for every worker. High-efficiency filtration technology ensures that airborne particles are captured before they spread, maintaining optimal air quality standards throughout operations. These systems not only safeguard employee health but also protect sensitive machinery from dust-related wear, extending equipment life and reducing downtime. Designed for continuous performance and low maintenance, the dust control framework reflects our commitment to workplace safety, regulatory compliance, and sustainable industrial practices.</p>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
                  <Image
                    src="/dust control.jpg"
                    alt="Dust control system"
                    width={800}
                    height={400}
                    className="w-full h-97 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Responsive Efficiency and intent statements */}
      <section className="bg-[#F5F4F1] py-8 sm:py-12 md:py-16 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Mobile Layout */}
          <div className="md:hidden space-y-6 text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
              <p className="text-[#8A393B] italic font-semibold text-lg sm:text-xl leading-snug mb-3">
                Every decision — audited for efficiency
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#F2913F] to-transparent mx-auto rounded-full" />
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
              <p className="text-[#8A393B] italic font-semibold text-lg sm:text-xl leading-snug mb-3">
                Every plant — aligned with green intent
              </p>
              <div className="w-24 h-1 bg-gradient-to-l from-[#F2913F] to-transparent mx-auto rounded-full" />
            </div>
          </div>
          
          {/* Desktop Layout - Original */}
          <div className="hidden md:block space-y-8">
            <div className="flex items-center gap-6 slide-in-right">
              <p className="text-[#8A393B] italic font-semibold text-3xl sm:text-4xl md:text-5xl leading-snug">
                Every decision — audited for efficiency
              </p>
              <div className="ml-auto h-2 md:h-3 w-40 sm:w-56 md:w-72 bg-gradient-to-l from-[#F2913F] to-transparent rounded-full scale-in" />
            </div>
            <div className="flex items-center gap-6 slide-in-left">
              <div className="mr-auto h-2 md:h-3 w-40 sm:w-56 md:w-72 bg-gradient-to-r from-[#F2913F] to-transparent rounded-full scale-in" />
              <p className="text-[#8A393B] italic font-semibold text-3xl sm:text-4xl md:text-5xl leading-snug text-right md:text-left">
                Every plant — aligned with green intent
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Statement block: This is sustainability by design */}
      <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-28 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                This is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A393B] via-[#B25A5B] to-[#8A393B]">sustainability</span> by design
              </h3>
              <p className="mt-4 text-base sm:text-lg font-semibold text-white leading-relaxed">
                Not just a policy. <span className="text-[#F2913F]">A responsibility.</span>
              </p>
              <div className="mx-auto mt-6 h-1 w-32 rounded-full bg-gradient-to-r from-[#F2913F] via-[#1E3888] to-[#8A393B] animate-pulse" />
            </div>
          </div>
          
          {/* Desktop Layout - Original */}
          <div className="hidden md:block">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
              This is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A393B] via-[#B25A5B] to-[#8A393B]">sustainability</span> by design
            </h3>
            <p className="mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              Not just a policy. <span className="text-[#F2913F]">A responsibility.</span>
            </p>
            <div className="mx-auto mt-8 h-1.5 w-64 rounded-full bg-gradient-to-r from-[#F2913F] via-[#1E3888] to-[#8A393B] scale-in" />
          </div>
        </div>
      </section>
    </div>
  );
}
