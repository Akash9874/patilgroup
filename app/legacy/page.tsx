"use client";
import HLSVideo from '@/components/HLSVideo';

export default function LegacyPage() {
  const TrackTimeline = require('../../components/legacy/TrackTimeline').default as any;
  const { legacyTimeline } = require('./timelineData');
  return (
    <div>
      {/* Responsive Legacy Hero Section */}
      <section className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden">
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
          <div className="relative z-10 h-full flex items-center justify-start px-4">
            <div className="w-full max-w-lg">
              <h1 className="text-white font-bold" style={{ fontFamily: '"Helvetica Neue"', fontSize: '48px', fontWeight: 700, lineHeight: '75%' }}>
                <span className="block">Our</span>
                <span className="block">Legacy</span>
              </h1>
              <p className="text-[#F2913F] mt-4" style={{ fontFamily: '"Helvetica Neue"', fontSize: '32px', fontWeight: 700, lineHeight: '38px' }}>
                Grounded in Use
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Left side positioning */}
        <div className="hidden md:block absolute left-0 z-10" style={{ top: '50%', transform: 'translateY(-50%)' }}>
          <div className="px-6 md:px-8 lg:px-12">
            <h1 className="text-white font-bold leading-[75%]" style={{ fontFamily: '"Helvetica Neue"', fontSize: '64px', fontWeight: 700, lineHeight: '75%' }}>
              <span className="block">Our</span>
              <span className="block">Legacy</span>
            </h1>
            <p className="text-[#F2913F] mt-4" style={{ fontFamily: '"Helvetica Neue"', fontSize: '64px', fontWeight: 700, lineHeight: '48px' }}>
              Grounded in Use
            </p>
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