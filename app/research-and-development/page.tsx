"use client";
import React, { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

const carouselImages = [
  '/fastener_carousel_image.png',
  '/concrete_carousel_sleeper.png',
  '/patil_rheda_image_carousel.png',
];

const ResearchAndDevelopmentPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  useScrollAnimation();

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % carouselImages.length);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-auto md:h-[600px]">
        {/* Background Image */}
        <img src="/rnd-hero.jpg" alt="R&D Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Left-aligned overlay text */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center">
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
              Research &
              <br />
              Development
            </h1>
          </div>
        </div>
      </div>

      {/* Intro text section */}
      <section className="bg-black text-white py-16 fade-in-section">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg md:text-xl leading-relaxed">
            Patil Group started its operations in 1933 from Gulbarga, a historic and commercially important city in the state of Karnataka by trading in agricultural products, mainly Pulses, which are an important part of the daily diet in India. From then onwards the Group activities were diversified to include:
          </p>
        </div>
      </section>

      {/* Unit 2 */}
      <section className="bg-white text-black py-20 fade-in-section">
        <div className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Text column */}
          <div className="slide-in-left">
            <h3 className="text-5xl md:text-6xl font-extrabold text-amber-500">Unit 2</h3>
            <p className="mt-6 text-xl font-semibold">This is designated as TRUCK – II.</p>
            <p className="mt-4 text-lg text-[#8A393B] font-semibold">This truck is fitted with all the equipments required for the generation and distribution of steam.</p>
            <p className="mt-2 text-lg text-[#8A393B] font-semibold">These equipments are,</p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-lg">
              <li>200 kgs/hr, diesel oil fired steam boiler</li>
              <li>3 kl. Capacity diesel oil tank</li>
              <li>10 kl. Capacity boiler water tank</li>
            </ul>
          </div>
          {/* Image column */}
          <div className="slide-in-right">
            <img src="/fastener_carousel_image.png" alt="Unit 2 equipment" className="w-full h-[260px] md:h-[380px] object-cover rounded" />
          </div>
        </div>
      </section>

      {/* Unit 3 */}
      <section className="bg-white text-black py-20 fade-in-section">
        <div className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Text column */}
          <div className="slide-in-left">
            <h3 className="text-5xl md:text-6xl font-extrabold text-amber-500">Unit 3</h3>
            <p className="mt-6 text-xl font-semibold">This is designated as TRUCK – III.</p>
            <p className="mt-4 text-lg text-[#8A393B] font-semibold">This is used to shift moulds from work centre to work centre and also to shift the ready sleepers to the laying site.</p>
            <p className="mt-2 text-lg text-[#8A393B] font-semibold">This truck is fitted with a hydraulic boom crane of 1000 kg capacity.</p>
          </div>
          {/* Image column */}
          <div className="slide-in-right">
            <img src="/fastener_carousel_image.png" alt="Unit 3 equipment" className="w-full h-[260px] md:h-[380px] object-cover rounded" />
          </div>
        </div>
      </section>

      {/* Image with side action bar */}
      <section className="py-16 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <div className="w-11/12">
              <img src={carouselImages[currentImage]} alt="ERC MK V" className="w-full h-[520px] object-cover" />
            </div>
            <div className="w-1/12 bg-[#8A393B] flex items-center justify-center">
              <button
                onClick={nextImage}
                className="w-12 h-12 rounded-full border-2 border-[#F2913F] text-[#F2913F] flex items-center justify-center hover:bg-[#F2913F] hover:text-white transition-colors"
                aria-label="Next image"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Alternate Material - CMA */}
      <section className="bg-white text-black py-20 fade-in-section">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#8A393B]">Alternate Material - CMA</h2>
          <div className="mt-6 h-px w-full bg-gray-200"></div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left column */}
            <div>
              <div className="h-2 w-3/4 bg-gradient-to-r from-[#8A393B] via-[#F2913F] to-transparent rounded-full"></div>
              <div className="mt-6 space-y-4 text-lg leading-relaxed">
                <p>
                  Extensive research by the Research & Development team has developed a Composite Mineral Admixture (CMA), which is Fly Ash based product. Fly Ash not only reduces the cost but also enhances the durability of the concrete tremendously.
                </p>
                <p>
                  The sleeper design using CMA has been successfully tested at National Laboratories like Indian Institute of Technology (IIT) and Research Design & Standards Organisation (RDSO).
                </p>
              </div>
            </div>

            {/* Right column */}
            <div>
              <div className="h-2 w-3/4 ml-auto bg-gradient-to-r from-transparent via-[#F2913F] to-[#8A393B] rounded-full"></div>
              <div className="mt-6 space-y-4 text-lg leading-relaxed">
                <p>
                  CMA has been successful in replacing 20% of the cement.
                </p>
                <p>
                  This project was appreciated by CIDA of ICMA, Canada and is sponsoring the research programmes through Canada Center for Mineral and Energy Technology, Natural Resource (CANMET).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile PATIL RHEDA Sleeper Plant */}
      <section className="bg-white text-black py-20 fade-in-section">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <h2 className="text-5xl md:text-6xl font-extrabold">
            <span className="text-[#8A393B]">Mobile PATIL RHEDA</span>
            <br />
            <span className="text-amber-500">Sleeper Plant</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 text-lg leading-relaxed">
            <div className="space-y-4">
              <p>
                PATIL RHEDA sleepers are specially designed for high speed rail tracks and the greatest advantage is that it is laid Ballastless.
              </p>
              <p>
                At present in India, these sleepers are still under trial runs. They are ideally suited for laying washable aprons, at stations; this greatly contributes to the cleanliness of the station yard. So, Indian Railways are seriously considering, using these PATIL RHEDA sleepers for washable aprons at railway stations, especially for the platform tracks.
              </p>
              <p>
                As the requirement of these sleepers will not be in huge quantities like the mono block sleepers, bulk production plants for these sleepers is not advisable and also not economical, as their transportation charges from the place of manufacture to the place of laying will not be economical.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                So a mini plant was visualized and the basic concept drawings was reengineered by our R&D Team, who immediately realized its potential and also the simple operating technology. The best point in its favour was that it can reach any station which is nearby any motorable road. This mobile plant can reach the place where the laying of these sleepers is programmed, manufacture and deliver the required quantity of sleepers and move on to the next station of operation. This totally eliminates the setting up of bulk manufacturing plants and transportation of the sleepers to their destination.
              </p>
              <p>
                So a priority was given to the preparation of the working drawings and the evaluation of the time required for building this mobile plant. This presentation indicates the major activities involved in building this mobile plant and the estimated time duration to achieve this goal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Mobile Plant for PATIL RHEDA – Sleepers */}
      <section className="bg-white text-black py-16 fade-in-section">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <span className="text-amber-500">Mini Mobile Plant</span>
            <br />
            <span className="text-[#8A393B]">for PATIL RHEDA – Sleepers</span>
          </h2>

          <div className="mt-8 text-xl leading-relaxed space-y-6">
            <div>
              <p className="font-semibold">The essence of this plant is in three parts.</p>
              <ol className="list-decimal list-inside mt-2 space-y-1">
                <li>Manufacturing</li>
                <li>Steam curing</li>
                <li>Shifting of sleepers to their destination</li>
              </ol>
            </div>
            <p>
              Individual activities under these groupings are programmed and are mounted on trucks to form this mobile plant. The following description provides a clear concept of the working of each of the activities.
            </p>
          </div>
        </div>
      </section>

      {/* Unit 1 */}
      <section className="bg-white text-black py-20 fade-in-section">
        <div className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Text column */}
          <div className="slide-in-left">
            <h3 className="text-5xl md:text-6xl font-extrabold text-amber-500">Unit 1</h3>
            <p className="mt-6 text-xl font-semibold">This is designated as TRUCK – 1</p>
            <p className="mt-4 text-lg text-[#8A393B] font-semibold">This track is shifted with all the equipments and machineries required for manufacturing the sleeper.</p>
            <p className="mt-2 text-lg text-[#8A393B] font-semibold">These equipments include:</p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-lg">
              <li>Mini concrete mixer with concrete bucket with trolley track.</li>
              <li>Vibrating table fitted with high frequency vibrators.</li>
              <li>Overhead monorail wire rope hoist.</li>
              <li>Demoulding machine.</li>
              <li>Roller track to move the moulds.</li>
            </ul>
          </div>
          {/* Image column */}
          <div className="slide-in-right">
            <img src="/fastener_carousel_image.png" alt="Unit 1 equipment" className="w-full h-[260px] md:h-[380px] object-cover rounded" />
          </div>
        </div>
      </section>

      {/* All content intentionally removed per request; keeping page minimal with hero only */}
    </div>
  );
};

export default ResearchAndDevelopmentPage;
