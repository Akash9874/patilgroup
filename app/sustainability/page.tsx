"use client";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';
import { TypingAnimation } from '@/components/TypingAnimation';

export default function SustainabilityPage() {
  useScrollAnimation();
  return (
    <div>
      {/* Responsive Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden fade-in-section">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          preload="metadata"
        >
          <source src="/sustainhero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Mobile Layout */}
        <div className="md:hidden absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4">
              <div className="bg-black/70 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
                <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl">
                  Sustainability
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-green-400 via-[#F2913F] to-[#8A393B] mx-auto mt-6 rounded-full animate-pulse"></div>
                <p className="text-gray-200 text-sm mt-4 leading-relaxed">
                  Green innovation in railway engineering
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout - Original */}
        <div className="hidden md:block">
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 h-full max-w-7xl mx-auto flex items-end md:items-center">
            <div className="px-6 md:px-8 lg:px-12 pb-10 md:pb-0 slide-in-left">
              <h1 className="text-white font-bold leading-none text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
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
              <span className="italic text-[#8A393B] font-normal block sm:inline"> clean cycles</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-[#8A393B] mx-auto mt-4 rounded-full"></div>
          </div>
          
          {/* Desktop Header */}
          <div className="hidden md:block">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
              <span className="text-[#8A393B]">Clean power</span>
              <span className="italic text-[#8A393B] font-normal"> clean cycles</span>
            </h2>
          </div>

          {/* Mobile Content - Card Layout */}
          <div className="md:hidden mt-8 space-y-4">
            {[
              {
                title: "Solar generation",
                items: ["18 sites across India", "5.4 megawatts on-grid", "Reduced dependence on fossil sources"]
              },
              {
                title: "Water reuse", 
                items: ["Recycled curing water through closed-loop WTPs", "Reduced consumption", "Zero discharge processes in place"]
              },
              {
                title: "Dust control",
                items: ["Factory air managed at source", "Multi-stage dust extraction across units", "Cleaner environment for every worker"]
              }
            ].map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-[#F2913F] mb-4 flex items-center">
                  <div className="w-3 h-3 bg-[#F2913F] rounded-full mr-3"></div>
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mt-1.5 mr-3 w-1.5 h-1.5 bg-[#8A393B] rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Desktop Content - Original */}
          <div className="hidden md:block mt-16 space-y-16">
            {/* Solar generation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#F2913F] slide-in-left">Solar generation</h3>
              <ul className="text-xl md:text-2xl text-black leading-8 list-disc list-inside slide-in-right">
                <li>18 sites across India</li>
                <li>5.4 megawatts on-grid</li>
                <li>Reduced dependence on fossil sources</li>
              </ul>
            </div>

            {/* Water reuse */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#F2913F] slide-in-left">Water reuse</h3>
              <ul className="text-xl md:text-2xl text-black leading-8 list-disc list-inside slide-in-right">
                <li>Recycled curing water through closed-loop WTPs</li>
                <li>Reduced consumption</li>
                <li>Zero discharge processes in place</li>
              </ul>
            </div>

            {/* Dust control */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#F2913F] slide-in-left">Dust control</h3>
              <ul className="text-xl md:text-2xl text-black leading-8 list-disc list-inside slide-in-right">
                <li>Factory air managed at source</li>
                <li>Multi-stage dust extraction across units</li>
                <li>Cleaner environment for every worker</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Image showcase section */}
      <section className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Mobile Layout - Single column */}
          <div className="md:hidden space-y-4">
            {[
              { src: "/sustain.jpg", alt: "Sustainability initiative" },
              { src: "/sustain2.jpg", alt: "Environmental practices" },
              { src: "/sustainabilityhero.jpg", alt: "Green technology" }
            ].map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300}
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
          
          {/* Desktop Layout - Original */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src="/sustain.jpg"
                alt="Sustainability initiative"
                width={400}
                height={300}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src="/sustain2.jpg"
                alt="Environmental practices"
                width={400}
                height={300}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src="/sustainabilityhero.jpg"
                alt="Green technology"
                width={400}
                height={300}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
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
