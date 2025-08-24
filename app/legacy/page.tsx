"use client";
import { TypingAnimation } from '@/components/TypingAnimation';

export default function LegacyPage() {
  const TrackTimeline = require('../../components/legacy/TrackTimeline').default as any;
  const { legacyTimeline } = require('./timelineData');
  return (
    <div>
      {/* Responsive Legacy Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        {/* Background video */}
        <video
          src="/ourlegacy1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          preload="metadata"
        />
        
        {/* Mobile Layout */}
        <div className="md:hidden absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4">
              <div className="bg-black/60 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h1 className="text-white font-bold leading-tight">
                  <span className="block text-3xl sm:text-4xl text-[#F2913F] mb-2">Our</span>
                  <span className="block text-3xl sm:text-4xl text-[#8A393B]">Legacy</span>
                </h1>
                <div className="w-16 h-1 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto mt-6 rounded-full"></div>
                <p className="text-gray-200 text-sm mt-4">Journey through decades of innovation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Bottom left positioning */}
        <div className="hidden md:block absolute bottom-0 left-0 z-10">
          <div className="px-6 md:px-8 lg:px-12 pb-16">
            <h1 className="text-white font-bold leading-none text-6xl sm:text-7xl md:text-8xl lg:text-9xl drop-shadow-lg">
              <span className="block text-[#F2913F]">Our</span>
              <span className="block text-[#8A393B]">Legacy</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Responsive Text block after hero */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-14">
          <TypingAnimation
            text="Grounded in Use"
            showCursor
            speed={80}
            className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-[#F2913F] text-center md:text-left"
            cursorColor="#F2913F"
          />
        </div>
      </section>

      {/* Adjust 'trainXOffset' to nudge the train horizontally (px). Positive moves right, negative left. */}
      <div className="content-visibility-auto">
        <TrackTimeline items={legacyTimeline} trackSrc="/legacytrack.svg" trainSrc="/legacytrain.svg" trainXOffset={-98} />
        </div>
    </div>
  );
}