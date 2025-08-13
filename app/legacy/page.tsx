"use client";

export default function LegacyPage() {
  const TrackTimeline = require('../../components/legacy/TrackTimeline').default as any;
  const { legacyTimeline } = require('./timelineData');
  return (
    <div>
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        {/* Background image */}
        <img
          src="/delhimetrohero.png"
          alt="Our Legacy background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Left-aligned stacked title */}
        <div className="relative z-10 h-full max-w-7xl mx-auto flex items-end md:items-center">
          <div className="px-6 md:px-8 lg:px-12 pb-10 md:pb-0">
            <h1 className="text-white font-bold leading-none text-6xl sm:text-7xl md:text-8xl lg:text-9xl drop-shadow-lg">
              <span className="block">Our</span>
              <span className="block">Legacy</span>
              </h1>
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