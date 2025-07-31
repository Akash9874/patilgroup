"use client";
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const carouselImages = [
  '/fastener_carousel_image.png',
  '/concrete_carousel_sleeper.png',
  '/patil_rheda_image_carousel.png',
];

const ResearchAndDevelopmentPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % carouselImages.length);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-48" style={{ backgroundImage: "url('/01_hero_train.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
          <h1 className="text-7xl font-bold text-orange-400">
            Research & Development
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="w-full md:w-1/2 ml-auto mb-16">
            <p className="text-xl text-gray-700 leading-relaxed">
              Patil Group started its operations in 1933 from Gulbarga, a historic and commercially important city in the state of Karnataka by trading in agricultural products, mainly Pulses, which are an important part of the daily diet in India. From then onwards the Group activities were diversified to include:
            </p>
          </div>

          <h2 className="text-7xl font-bold text-[#8A393B] text-center">
            Alternate Material - CMA
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 text-xl text-gray-700 leading-relaxed">
            <div>
              <p>
                Extensive research by the Research & Development team has developed a Composite Mineral Admixture (CMA), which is Fly Ash based product. Fly Ash not only reduces the cost but also enhances the durability of the concrete tremendously.
              </p>
              <p className="mt-8">
                The sleeper design using CMA has been successfully tested at National Laboratories like Indian Institute of Technology (IIT) and Research Design & Standards Organisation (RDSO).
              </p>
            </div>
            <div>
              <p>
                CMA has been successful in replacing 20% of the cement.
              </p>
              <p className="mt-8">
                This project was appreciated by CIDA of ICMA, Canada and is sponsoring the research programmes through Canada Center for Mineral and Energy Technology, Natural Resource (CANMET).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex">
                  <div className="w-11/12">
                      <img src={carouselImages[currentImage]} alt="ERC MK V" className="w-full h-[600px] object-cover" />
                  </div>
                  <div className="w-1/12 bg-[#8A393B] flex items-center justify-center">
                      <button 
                          onClick={nextImage}
                          className="w-16 h-16 rounded-full border-2 border-orange-400 text-orange-400 flex items-center justify-center hover:bg-orange-400 hover:text-white transition-colors"
                      >
                          <ArrowRight size={32} />
                      </button>
                  </div>
              </div>
          </div>
      </section>

      {/* Mobile PATIL RHEDA Sleeper Plant Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold">
            <span className="text-[#8A393B]">Mobile PATIL RHEDA </span>
            <span className="text-orange-400">Sleeper Plant</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 text-xl text-gray-700 leading-relaxed">
            <div>
              <p>
                PATIL RHEDA sleepers are specially designed for high speed rail tracks and the greatest advantage is that it is laid Ballastless.
                At present in India, these sleepers are still under trial runs. They are ideally suited for laying washable aprons, at stations; this greatly contributes to the cleanliness of the station yard. So, Indian Railways are seriously considering, using these PATIL RHEDA sleepers for washable aprons at railway stations, especially for the platform tracks.
              </p>
              <p className="mt-8">
                As the requirement of these sleepers will not be in huge quantities like the mono block sleepers, bulk production plants for these sleepers is not advisable and also not economical, as their transportation charges from the place of manufacture to the place of laying will not be economical.
              </p>
            </div>
            <div>
              <p>
                So a mini plant was visualized and the basic concept drawings was reengineered by our R&D Team, who immediately realized its potential and also the simple operating technology. The best point in its favour was that it can reach any station which is nearby any motorable road. This mobile plant can reach the place where the laying of these sleepers is programmed, manufacture and deliver the required quantity of sleepers and move on to the next station of operation. This totally eliminates the setting up of bulk manufacturing plants and transportation of the sleepers to their destination.
              </p>
              <p className="mt-8">
                So a priority was given to the preparation of the working drawings and the evaluation of the time required for building this mobile plant.
                This presentation indicates the major activities involved in building this mobile plant and the estimated time duration to achieve this goal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Mobile Plant Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold">
            <span className="text-orange-400">Mini Mobile Plant for </span>
            <span className="text-[#8A393B]">PATIL RHEDA – Sleepers</span>
          </h2>
          <div className="mt-16 text-xl text-gray-700 leading-relaxed">
            <p className="font-bold">The essence of this plant is in three parts.</p>
            <ol className="list-decimal list-inside mt-4 space-y-2">
              <li>Manufacturing</li>
              <li>Steam curing</li>
              <li>Shifting of sleepers to their destination</li>
            </ol>
            <p className="mt-8">
              Individual activities under these groupings are programmed and are mounted on trucks to form this mobile plant. The following description provides a clear concept of the working of each of the activities.
            </p>
          </div>
        </div>
      </section>

      {/* Unit 1 Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="relative h-32 flex items-center mb-16">
                <div className="absolute top-0 left-0 h-full w-3/4 bg-gray-200" style={{clipPath: "polygon(0 0, 100% 0, 92.5% 100%, 0% 100%)"}}></div>
                <h2 className="relative text-8xl font-bold text-orange-400 pl-8">Unit 1</h2>
            </div>
            
            <div className="text-2xl text-gray-700 leading-relaxed space-y-6">
                <p className="font-bold">This is designated as TRUCK – 1</p>
                <p className="text-[#8A393B]">This track is shifted with all the equipments and machineries required for manufacturing the sleeper.</p>
                <p className="text-[#8A393B]">These equipments are:</p>
                <div className="mt-4 space-y-2 text-xl">
                    <p>Mini concrete mixer with concrete bucket with trolley track.</p>
                    <p>Vibrating table fitted with high frequency vibrators.</p>
                    <p>Overhead monorail wire rope hoist.</p>
                    <p>Demoulding machine.</p>
                    <p>Roller track to move the moulds.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Unit 2 Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="relative h-32 flex items-center mb-16">
                <div className="absolute top-0 left-0 h-full w-3/4 bg-gray-200" style={{clipPath: "polygon(0 0, 100% 0, 92.5% 100%, 0% 100%)"}}></div>
                <h2 className="relative text-8xl font-bold text-orange-400 pl-8">Unit 2</h2>
            </div>
            
            <div className="text-2xl text-gray-700 leading-relaxed space-y-6">
                <p className="font-bold">This is designated as TRUCK – II.</p>
                <p className="text-[#8A393B]">This truck is fitted with all the equipments required for the generation and distribution of steam.</p>
                <p className="text-[#8A393B]">These equipments are,</p>
                <div className="mt-4 space-y-2 text-xl">
                    <p>200 kgs/hr, diesel oil fired steam boiler</p>
                    <p>3 kl. Capacity diesel oil tank</p>
                    <p>10 kl. Capacity boiler water tank</p>
                </div>
            </div>
        </div>
      </section>

      {/* Unit 3 Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="relative h-32 flex items-center mb-16">
                <div className="absolute top-0 left-0 h-full w-3/4 bg-gray-200" style={{clipPath: "polygon(0 0, 100% 0, 92.5% 100%, 0% 100%)"}}></div>
                <h2 className="relative text-8xl font-bold text-orange-400 pl-8">Unit 3</h2>
            </div>
            
            <div className="text-2xl text-gray-700 leading-relaxed space-y-6">
                <p className="font-bold">This is designated as TRUCK – III.</p>
                <p className="text-[#8A393B]">This is used to shift moulds from work centre to work centre and also to shift the ready sleepers to the laying site.</p>
                <p className="text-[#8A393B]">This truck is fitted with a hydraulic boom crane of 1000 kg capacity.</p>
            </div>
        </div>
      </section>

      {/* New Design of Concrete Sleeper Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">New Design of Concrete Sleeper</h2>
          <p className="mt-4 text-xl text-gray-700 leading-relaxed">
            The Indian Railways design of concrete sleeper is about 30 years old. In this 30 years there has been a tremendous improvement in the input material like cement, admixture, steel, etc. and there has also been a change in the Indian Railways pattern of loading, speed. Hence, in association with the Railway Board it was decided to develop a new design of concrete sleeper to meet the future challenges of Indian Railways. As Indian Railway uses millions of sleepers. Even a slight economy achieved will lead to a large scale saving. This was also one of the major key driver behind this project. Patil Group of Industries has more than 25 years of experience in manufacturing Concrete sleepers coupled with a lot of experience in manufacturing High Tensile Steel Wire had made this project a reality.
          </p>

          <h3 className="text-4xl font-bold text-orange-400 mt-16">Technical Advantages of the New Sleepers Design</h3>
          <p className="mt-4 text-xl text-gray-700 font-bold">The salient features of the New Design:</p>
          <ol className="mt-4 text-xl text-gray-700 leading-relaxed list-decimal list-inside space-y-4">
            <li>The adoption of M60 grade concrete, which means more durable sleepers with increase in the life span.</li>
            <li>As the base width of the sleeper is increased, the ballast pressure has come down by 10% which will lead to a tremendous amount of savings in ballast as well as maintenance efforts on the track.</li>
            <li>In future, Railway is planning to go for higher axle load wagons, the new design will suit the future requirement of railways and at that point we need not go for another alternative sleeper.</li>
            <li>It envisages the use of one of the most modern stands developed in the recent years which will put us at par with the international prestressed concrete manufacturers.</li>
            <li>It envisages the use of a special strand with higher UTS by which the overall weight of steel per sleeper has been brought down by 25%. Under the technical collaboration of Reidelly we have been able to successfully develop the strand. The basic raw material will be produced by SSL as per the chemical composition suggested by Reidelly. Even the other steel manufacturers like Usha Martin and TISCO have got the basic capacity to produce. Our technical team has done the necessary evaluation. The strand is coded as per BSI Standard already and the coding for IS is under way.</li>
            <li>As the ballast pressure has been reduced approximately by 10%, this will contribute sufficiently to the longer life of ballast and in turn lesser maintenance effort. As the ballast pressure has been reduced approximately by 10%, this will contribute sufficiently to the longer life of ballast and in turn lesser maintenance effort.</li>
            <li>Apart from all the above advantages, it has got all the advantages what the present design of RDSO RT - 2496 has got.</li>
          </ol>

          <p className="mt-16 text-xl text-black">
            PRIL’s R&D Lab is a state-of-the-art facility dedicated to pioneering innovations for Indian Railways and is established under Make in India initiative for Indian Railways. It is focused on self-reliance and indigenous innovation making PRIL to emerge as a key player for innovation in railway track. <a href="/contact" className="text-blue-600 hover:underline">Click for more details</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResearchAndDevelopmentPage;
