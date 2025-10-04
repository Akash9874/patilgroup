"use client";
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
            <div className="text-left px-6 w-full max-w-lg mx-auto">
              <h1 className="text-white font-bold leading-tight drop-shadow-2xl">
                <span className="block text-5xl sm:text-6xl mb-2">Our</span>
                <span className="block text-5xl sm:text-6xl mb-4">Legacy</span>
              </h1>
              <p className="text-[#F2913F] text-xl sm:text-2xl drop-shadow-xl font-medium">Grounded in Use</p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Bottom left positioning */}
        <div className="hidden md:block absolute bottom-0 left-0 z-10">
          <div className="px-6 md:px-8 lg:px-12 pb-16">
            <h1 className="text-white font-bold leading-none text-6xl sm:text-7xl md:text-8xl lg:text-9xl drop-shadow-lg mb-4">
              <span className="block">Our</span>
              <span className="block">Legacy</span>
            </h1>
            <p className="text-[#F2913F] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium drop-shadow-lg">Grounded in Use</p>
          </div>
        </div>
      </section>

      {/* Adjust 'trainXOffset' to nudge the train horizontally (px). Positive moves right, negative left. */}
      <div className="content-visibility-auto">
        <TrackTimeline items={legacyTimeline} trackSrc="/legacytrack.svg" trainSrc="/legacytrain.svg" trainXOffset={-98} />
        </div>
    </div>
  );
}