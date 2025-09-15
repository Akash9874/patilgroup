"use client";
import { TypingAnimation } from '@/components/TypingAnimation';
import HLSVideo from '@/components/HLSVideo';

export default function LegacyPage() {
  const TrackTimeline = require('../../components/legacy/TrackTimeline').default as any;
  const { legacyTimeline } = require('./timelineData');
  return (
    <div>
      {/* Responsive Legacy Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        {/* Background video */}
        <HLSVideo
          src="https://customer-5j20f6geb6l5wmm2.cloudflarestream.com/ceec789bbff98173c6c4a3fda4c5520d/manifest/video.m3u8"
          fallbackSrc="/ourlegacy1.mp4"
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
            <div className="text-center px-4 w-full max-w-lg mx-auto">
              <h1 className="text-white font-bold leading-tight drop-shadow-2xl">
                <span className="block text-5xl sm:text-6xl text-[#F2913F] mb-3">Our</span>
                <span className="block text-5xl sm:text-6xl text-[#8A393B]">Legacy</span>
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto mt-8 rounded-full shadow-lg"></div>
              <p className="text-white text-xl sm:text-2xl mt-8 drop-shadow-xl font-medium">Journey through decades of innovation</p>
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