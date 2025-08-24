"use client";
import React from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ResearchAndDevelopmentPage = () => {
  useScrollAnimation();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-auto md:h-[600px]">
        {/* Background Image */}
        <Image src="/rndimage2.JPG" alt="R&D Hero" fill className="object-cover" priority sizes="100vw" />
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
          <p className="text-xl md:text-2xl leading-relaxed">
            Patil Group started its operations in 1933 from Gulbarga, a historic and commercially important city in the state of Karnataka by trading in agricultural products, mainly Pulses, which are an important part of the daily diet in India. From then onwards the Group activities were diversified to include:
          </p>
        </div>
      </section>

      

      {/* Alternate Material - CMA */}
      <section className="bg-white text-black py-20 fade-in-section">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#8A393B]">
            Alternate Material - CMA
          </h2>
          <div className="mt-6 h-px w-full bg-gray-200"></div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left column */}
            <div>
              <div className="h-2 w-3/4 bg-gradient-to-r from-[#8A393B] via-[#F2913F] to-transparent rounded-full"></div>
              <div className="mt-6 space-y-4 text-xl md:text-2xl leading-relaxed">
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
              <div className="mt-6 space-y-4 text-xl md:text-2xl leading-relaxed">
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

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 text-xl md:text-2xl leading-relaxed">
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

          <div className="mt-8 text-xl md:text-2xl leading-relaxed space-y-6">
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



      {/* New Design of Concrete Sleeper */}
      <section className="bg-white text-black py-20 fade-in-section">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#8A393B]">
            New Design of Concrete Sleeper
          </h2>
          <div className="mt-6 space-y-4 text-xl md:text-2xl leading-relaxed">
            <p>
              The Indian Railways design of concrete sleeper is about 30 years old. In this 30 years there has been a tremendous improvement in the input material like cement, admixture, steel, etc. and there has also been a change in the Indian Railways pattern of loading, speed. Hence, in association with the Railway Board it was decided to develop a new design of concrete sleeper to meet the future challenges of Indian Railways. As Indian Railway uses millions of sleepers. Even a slight economy achieved will lead to a large scale saving. This was also one of the major key driver behind this project. Patil Group of Industries has more than 25 years of experience in manufacturing Concrete sleepers coupled with a lot of experience in manufacturing High Tensile Steel Wire had made this project a reality.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Advantages of the New Sleepers Design */}
      <section className="bg-white text-black py-20 fade-in-section">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <h2 className="text-5xl md:text-6xl font-extrabold text-amber-500">
            Technical Advantages of the New Sleepers Design
          </h2>
          <p className="mt-4 text-2xl md:text-3xl font-semibold text-[#8A393B]">
            The Salient features of the New Design:
          </p>
          <ol className="mt-8 space-y-4 list-decimal list-inside text-xl md:text-2xl leading-relaxed">
            <li>
              The adoption of M60 grade concrete, which means more durable sleepers with increase in the life span.
            </li>
            <li>
              As the base width of the sleeper is increased, the ballast pressure has come down by 10% which will lead to a tremendous amount of savings in ballast as well as maintenance efforts on the track.
            </li>
            <li>
              In future, Railway is planning to go for higher axle load wagons, the new design will suit the future requirement of railways and at that point we need not go for another alternative sleeper.
            </li>
            <li>
              It envisages the use of one of the most modern stands developed in the recent years which will put us at par with the international prestressed concrete manufacturers.
            </li>
            <li>
              It envisages the use of a special strand with higher UTS by which the overall weight of steel per sleeper has been brought down by 25%. Under the technical collaboration of Reidelly we have been able to successfully develop the strand. The basic raw material will be produced by SSL as per the chemical composition suggested by Reidelly. Even the other steel manufacturers like Usha Martin and TISCO have got the basic capacity to produce. Our technical team has done the necessary evaluation. The strand is coded as per BSI Standard already and the coding for IS is under way.
            </li>
            <li>
              As the ballast pressure has been reduced approximately by 10%, this will contribute sufficiently to the longer life of ballast and in turn lesser maintenance effort. As the ballast pressure has been reduced approximately by 10%, this will contribute sufficiently to the longer life of ballast and in turn lesser maintenance effort.
            </li>
            <li>
              Apart from all the above advantages, it has got all the advantages what the present design of RDSO RT - 2496 has got.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default ResearchAndDevelopmentPage;
