"use client";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';

export default function SustainabilityPage() {
  useScrollAnimation();
  return (
    <div>
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden fade-in-section">
        {/* Background image */}
        <Image
          src="/sustainabilityhero.JPG"
          alt="Sustainability background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Left-aligned overlay text */}
        <div className="relative z-10 h-full max-w-7xl mx-auto flex items-end md:items-center">
          <div className="px-6 md:px-8 lg:px-12 pb-10 md:pb-0 slide-in-left">
            <h1 className="text-white font-bold leading-none text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
              Sustainability
            </h1>
          </div>
        </div>
      </section>

      {/* Split headline section */}
      <section className="bg-black py-16 md:py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#8A393B] leading-tight slide-in-left">
              Quiet changes.<br />
              Tangible outcomes.
            </p>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F2913F] leading-tight md:text-right slide-in-right">
              Built into every plant,<br />
              every process.
            </p>
          </div>
        </div>
      </section>

      {/* Clean power / clean cycles */}
      <section className="bg-white py-16 md:py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            <span className="text-[#8A393B]">Clean power</span>
            <span className="italic text-[#8A393B] font-normal"> clean cycles</span>
          </h2>

          <div className="mt-16 space-y-16">
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

      {/* Efficiency and intent statements with gradient bars */}
      <section className="bg-[#F5F4F1] py-12 md:py-16 fade-in-section">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 space-y-8">
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
      </section>

      {/* Statement block: This is sustainability by design */}
      <section className="bg-black py-20 md:py-28 fade-in-section">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
            This is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A393B] via-[#B25A5B] to-[#8A393B]">sustainability</span> by design
          </h3>
          <p className="mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            Not just a policy. <span className="text-[#F2913F]">A responsibility.</span>
          </p>
          <div className="mx-auto mt-8 h-1.5 w-64 rounded-full bg-gradient-to-r from-[#F2913F] via-[#1E3888] to-[#8A393B] scale-in" />
        </div>
      </section>
    </div>
  );
}
