"use client";
import React from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ResearchAndDevelopmentPage = () => {
  useScrollAnimation();

  return (
    <div className="bg-white">
      <div className="relative">
        {/* Mobile Layout */}
        <div className="md:hidden h-screen relative">
          <Image src="/rndimage2.JPG" alt="R&D Hero" fill className="object-cover z-0" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10"></div>
          
          <div className="relative z-20 h-full flex items-center justify-center">
            <div className="text-center px-6 w-full max-w-lg mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-3 drop-shadow-2xl">
                Research & Development
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto mt-8 rounded-full shadow-lg"></div>
              <p className="text-white text-xl sm:text-2xl mt-8 font-medium drop-shadow-xl leading-relaxed">
                Innovation & Technology Solutions
              </p>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden md:block relative h-[600px]">
          <Image src="/rndimage2.JPG" alt="R&D Hero" fill className="object-cover z-0" priority sizes="100vw" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 z-20">
            <div className="px-6 sm:px-8 md:px-12 pb-16">
              <h1 className="text-white font-bold leading-[0.95] text-6xl md:text-7xl lg:text-8xl">
                Research &<br />Development
              </h1>
              <p className="text-gray-200 text-lg mt-4 font-medium">
                Innovation & Technology Solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Intro text section */}
      <section className="bg-black text-white py-8 sm:py-12 md:py-16 fade-in-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
            Patil Group started its operations in 1933 from Gulbarga, a historic and commercially important city in the state of Karnataka by trading in agricultural products, mainly Pulses, which are an important part of the daily diet in India. From then onwards the Group activities were diversified to include:
          </p>
        </div>
      </section>

      

      {/* Alternate Material - CMA */}
      <section className="bg-white text-black py-8 sm:py-12 md:py-16 lg:py-20 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#8A393B]">
            Alternate Material - CMA
          </h2>
          <div className="mt-4 sm:mt-6 h-px w-full bg-gray-200"></div>

          <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Left column */}
            <div>
              <div className="h-1.5 sm:h-2 w-3/4 bg-gradient-to-r from-[#8A393B] via-[#F2913F] to-transparent rounded-full"></div>
              <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
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
              <div className="h-1.5 sm:h-2 w-3/4 ml-auto bg-gradient-to-r from-transparent via-[#F2913F] to-[#8A393B] rounded-full"></div>
              <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
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

      {/* Stricter Tolerance Track */}
      <section className="bg-white text-black py-8 sm:py-12 md:py-16 lg:py-20 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#8A393B]">
            Stricter Tolerance Track
          </h2>
          <div className="mt-4 sm:mt-6 h-px w-full bg-gray-200"></div>

          <div className="mt-6 sm:mt-8 md:mt-10 space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
              <p>
              Existing Track gauge (Broad Gauge) 1673 mm - 2 to + 3 (1671mm to 1676 mm). Indian railways is in the process of enhancing operating speed of trains from existing 110 Kmph to 160 Kmph and above.
              </p>
            
              <p>
              For increasing the speed, stricter tolerances are mandatory for better control of gauge and other track parameters. PRIL's has implemented stricter tolerances of +/-1 mm, on wider gauge sleepers which are more stringent than European standards. It is laid in Indian Railway's nominated section. Since parameters are tighter and has lesser slack gauge, reduced sinusoidal movement of vehicles shall ensure a better ride index, thereby enhancing the comfort and safety of passengers.
              </p>
            </div>

          <div className="mt-8 sm:mt-12 md:mt-16 flex justify-center">
            <Image
              src="/rndgauge.jpg"
              alt="Stricter Tolerance Track Gauge"
              width={800}
              height={600}
              className="rounded-lg shadow-lg w-full max-w-4xl h-auto object-cover"
            />
          </div>

          <div className="mt-8 sm:mt-12 md:mt-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#F2913F] mb-4 sm:mb-6">
              Liner less Fastening system
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
              The major problem today is rail foot corrosion leading to premature renewal of rails due to moisture entrapment in the liners. Our Patil Liner Less Fastening system will solve the problem. This Patil liner less fastening system has been developed indigenously.
            </p>
          </div>
        </div>
      </section>

      {/* New Design of Concrete Sleeper */}
      <section className="bg-white text-black py-8 sm:py-12 md:py-16 lg:py-20 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#8A393B]">
            New Design of Concrete Sleeper
          </h2>
          <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
            <p>
              The Indian Railways design of concrete sleeper is about 30 years old. In this 30 years there has been a tremendous improvement in the input material like cement, admixture, steel, etc. and there has also been a change in the Indian Railways pattern of loading, speed. Hence, in association with the Railway Board it was decided to develop a new design of concrete sleeper to meet the future challenges of Indian Railways. As Indian Railway uses millions of sleepers. Even a slight economy achieved will lead to a large scale saving. This was also one of the major key driver behind this project. Patil Group of Industries has more than 25 years of experience in manufacturing Concrete sleepers coupled with a lot of experience in manufacturing High Tensile Steel Wire had made this project a reality.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Advantages of the New Sleepers Design */}
      <section className="bg-white text-black py-8 sm:py-12 md:py-16 lg:py-20 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-amber-500">
            Technical Advantages of the New Sleepers Design
          </h2>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#8A393B]">
            The Salient features of the New Design:
          </p>
          <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 list-disc list-inside text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
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
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ResearchAndDevelopmentPage;
