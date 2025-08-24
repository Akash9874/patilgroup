"use client";

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, ArrowLeft, X } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { TypingAnimation } from '@/components/TypingAnimation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

const projectsData = [
  {
    title: 'Delhi Phase III',
    image: '/delhimonu.jpg',
    description: `Patil Group was entrusted with the supply and installation of fastening systems across key corridors of Delhi Metro Phase III. The project covered multiple extensions — including Kalindi Kunj to Botanical Garden, Noida City Centre to Sector 62, Dilshad Garden to Ghaziabad, and Escorts Mujesar to Ballabhgarh. We delivered and installed over 2 lakh fastening assemblies, supporting both elevated and underground track structures. The project demanded high precision and performance under challenging urban transit conditions.`,
    client: 'Delhi Metro Rail Corporation (DMRC)',
    principalClient: 'DMRC',
    specs: [
      'Fastener Types: 2-hole and 4-hole elastic rail clip systems',
      'Models Used: Vossloh 336 (standard), ADFF-6 (for vibration-sensitive underground zones)',
      'Compliance: RDSO standards (IRS-T-39), ISO 2631 (vibration control), and Metro safety norms',
      'Application: Suitable for ballastless and ballasted track sections across the corridor',
    ],
    conclusion: 'This project reflects our continued partnership with DMRC in shaping India’s most advanced metro networks.',
    showcaseImage: '/train 2.jpg'
  },
  {
    title: 'Noida Corridor',
    image: '/noidamonu.jpg',
    description: `Patil Group secured the supply of over 2.1 lakh fastening assemblies for the ballastless track on Line-8 (Janakpuri West - Majlis Park - R.K. Ashram), including 69,000 four-anchor and 1,44,150 two-anchor sets to support both elevated and underground segments.`,
    client: 'Delhi Metro Rail Corporation (DMRC)',
    principalClient: 'DMRC',
    specs: [
      'Fastener Configurations: 4-anchor & 2-anchor plate systems',
      'Quantities Supplied: ~2.13 lakh unit sets',
      'Usage Context: Ballastless track designed for speeds up to 110km/h, handling axle loads of up to 20t',
      'Compliance: Pre-approved by Ministry of Railways, tested to RDSO/DMRC safety criteria per Metro footing Annexure C-II standards',
    ],
    conclusion: 'This deployment further establishes Patil Group’s role as a trusted partner for high-precision fastening solutions on modern metro corridors.',
    showcaseImage: '/train 2.jpg'
  },
  {
    title: 'Kolkata Stretch',
    image: '/kolkatamonu.jpg',
    description: `Patil Group contributed to the expansion of the Kolkata Metro network by supplying fastening systems for the Noapara to Barasat via Bimanbandar corridor. This route includes underground, at-grade, and elevated sections. We supplied over 66,000 fastening assemblies engineered for the specific structural and vibration conditions of Kolkata’s mixed-terrain metro line.`,
    client: 'Paras Railtech Pvt. Ltd.',
    principalClient: 'Metro Authority, Kolkata',
    specs: [
      'Fastener Types: 2-hole and 4-hole elastic clip systems',
      'Quantities Supplied: 38,317 (2-hole) + 28,493 (4-hole) sets',
      'Application: Compatible with tunnel, elevated viaduct, and station slab tracks',
      'Compliance: Supplied as per Metro safety and vibration standards, RDSO-compliant',
    ],
    conclusion: 'This project marks our growing presence in Eastern India’s transit infrastructure with robust, tested fastening solutions.',
    showcaseImage: '/train 2.jpg'
  },
  {
    title: 'Ahmedabad Phase II',
    image: '/ahemdabadmonu.webp',
    description: `For the Phase II expansion of the Ahmedabad Metro, Patil Group supplied fastening systems for the corridor stretching from Motera Stadium to Mahatma Mandir. Over 2 lakh fastening assemblies were delivered to support the construction of ballastless track systems across elevated and at-grade sections.`,
    client: 'KEC International Ltd.',
    principalClient: 'Gujarat Metro Rail Corporation (GMRCL)',
    specs: [
      'Fastener Types: 2-hole and 4-hole elastic systems',
      'Quantities Supplied: 1,80,000 (2-hole) + 20,500 (4-hole) sets',
      'Application: Engineered for elevated track sections and viaduct spans',
      'Standards: RDSO-certified systems suitable for high-speed, low-vibration metro operations',
    ],
    conclusion: 'This delivery reinforced our continued partnership in Gujarat’s evolving metro infrastructure.',
    showcaseImage: '/train 2.jpg'
  },
  {
    title: 'Mumbai Line 2B',
    image: '/mumbaimonu.jpeg',
    description: `Patil Group supplied fastening systems for Mumbai Metro Line 2B, a critical corridor connecting DN Nagar to Mandale via Bandra. We delivered over 76,000 fastening assemblies, designed for high-traffic, elevated urban infrastructure.`,
    client: 'KEC International Ltd.',
    principalClient: 'Mumbai Metropolitan Region Development Authority (MMRDA)',
    specs: [
      'Fastener Types: 2-hole and 4-hole elastic clip sets',
      'Quantities Supplied: 58,218 (2-hole) + 18,697 (4-hole) sets',
      'Application: Designed for elevated viaduct track sections under heavy axle load',
      'Standards: Fully compliant with RDSO and MMRDA performance norms for metro systems',
    ],
    conclusion: 'This project demonstrates our expertise in delivering robust fastening solutions for Mumbai\'s expanding metro network.',
    showcaseImage: '/mumbaimetrohero.png'
  },
  {
    title: 'Mumbai Line 7X',
    image: '/mumbaimonu2.jpg',
    description: `Patil Group supplied fastening systems for the extension of Mumbai Metro Line 7, connecting Gundavali to the Chhatrapati Shivaji International Airport (CSIA). This strategic link enhances airport connectivity via the western suburbs. We delivered over 85,000 fastening assemblies, engineered for durability in high-traffic urban transit.`,
    client: 'Paras Railtech Pvt. Ltd.',
    principalClient: 'DMRC',
    specs: [
      'Fastener Types: 2-hole and 4-hole elastic systems',
      'Quantities Supplied: 56,420 (2-hole) + 29,800 (4-hole) sets',
      'Application: Suitable for metro tracks including elevated and airport corridor sections',
      'Standards: Conforms to RDSO and DMRC metro infrastructure guidelines',
    ],
    conclusion: 'This project marks our continued involvement in Mumbai\'s next-generation urban mobility solutions.',
    showcaseImage: '/mumbaimetrohero.png'
  },
  {
    title: 'Nagpur Metro',
    image: '/nagpurmetrohero.png',
    description: `Patil Group supplied fastening systems for Nagpur Metro, a critical infrastructure project connecting key areas of the city. We delivered over 100,000 fastening assemblies, designed for high-traffic, elevated urban infrastructure to support Maharashtra's expanding metro network.`,
    client: 'SEW-VSE Joint Venture',
    principalClient: 'Maharashtra Metro Rail Corporation Ltd. (Maha Metro)',
    specs: [
      'Fastener Types: 2-hole and 4-hole clip-based systems',
      'Quantities Supplied: 88,000 (2-hole) + 12,500 (4-hole) sets',
      'Application: Elevated viaduct and station track structures',
      'Standards: Designed and supplied as per Maha Metro and RDSO guidelines',
    ],
    conclusion: 'This partnership extended our footprint across Maharashtra\'s expanding metro infrastructure.',
    showcaseImage: '/nagpurmetrohero.png'
  },
  {
    title: 'L&T - Standard Gauge Sleeper Supply',
    image: '/lntmonu.webp',
    description: `We supplied over 17,000 pre-stressed concrete (PSC) sleepers to L&T for standard gauge urban rail construction. These sleepers were produced to match L&T's specifications while meeting Indian Railway and metro compliance norms.`,
    client: 'Larsen & Toubro (L&T)',
    principalClient: 'L&T Rail Projects',
    specs: [
      'Product Type: PSC sleepers for standard gauge application',
      'Compliance: Designed as per L&T technical requirements and metro standards',
      'Quantity Supplied: 17,600 units',
      'Application: Urban transit corridors and depot track',
      'Manufacturing: Supplied from our certified PSC sleeper plants',
    ],
    conclusion: 'This project added to our growing collaborations with India\'s largest EPC contractors in modern rail infrastructure.',
    showcaseImage: '/l&t-sleeper.jpg'
  },
  {
    title: 'IRCON - Special Sleeper Supply',
    image: '/irconmonu.jpg',
    description: `We supplied a range of specialized concrete sleepers to IRCON including those used in turnouts, bridges, and level crossings. These sleepers were custom-engineered to meet non-standard geometries and high-precision requirements.`,
    client: 'IRCON International Ltd.',
    principalClient: 'IRCON',
    specs: [
      'Product Type: PSC sleepers for standard gauge application',
      'Compliance: Designed and manufactured to project-specific and RDSO standards',
      'Quantity Supplied: Not specified',
      'Application: Used in junctions and high-stress structural zones',
      'Manufacturing: Produced at our specialized sleeper units with custom moulding capabilities',
    ],
    conclusion: 'This project highlights our expertise in delivering tailored sleeper solutions for complex rail configurations.',
    showcaseImage: '/ircon-sleeper.jpg'
  },
  {
    title: 'IRCON - PSC Sleeper Supply',
    image: '/irconmonu2.jpg',
    description: `We manufactured, transported, and delivered pre-stressed concrete (PSC) sleepers to IRCON for large-scale railway development projects. The supply was executed under stringent quality protocols to meet performance and durability requirements across diverse terrains.`,
    client: 'IRCON International Ltd.',
    principalClient: 'IRCON',
    specs: [
      'Product Type: Standard PSC sleepers for mainline rail',
      'Compliance: RDSO approved design and loading standards',
      'Quantity Supplied: Not specified',
      'Application: General railway infrastructure across multiple project sites',
      'Execution: End-to-end delivery including manufacturing and logistics',
    ],
    conclusion: 'This project reinforced our long-standing relationship with IRCON and our role in national railway expansion.',
    showcaseImage: '/ircon-psc-sleeper.jpg'
  },
];

const ProjectsPage = () => {
  useScrollAnimation();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <>
      <Navbar />
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            preload="metadata"
          >
            <source src="/djiproject.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="pl-16 md:pl-24">
            <h2 className="text-white text-6xl md:text-7xl font-medium font-clash">Our</h2>
            <h1 className="text-white text-8xl md:text-9xl font-bold font-clash -mt-4">Projects</h1>
          </div>
        </div>
      </section>

      <section className="bg-black text-white fade-in-section">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full"
              preload="metadata"
            >
              <source src="/systemvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="md:w-1/2 flex items-center p-8 md:p-16">
            <div>
              <h2 className="text-5xl font-bold font-clash leading-tight">
                <TypingAnimation
                  text="Engineering Excellence for a Stronger Tomorrow"
                  showCursor={true}
                  speed={50}
                  startAfterMs={200}
                  cursorColor="#F2913F"
                  textParts={[
                    { text: "Engineering Excellence\nfor a ", className: "text-amber-500" },
                    { text: "Stronger Tomorrow", className: "text-[#8A393B]" }
                  ]}
                />
              </h2>
              <div className="w-32 h-0.5 bg-white mt-6 mb-8"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end mb-8">
          <div className="flex items-center space-x-4">
            <button onClick={scrollPrev} className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:bg-gray-100 transition-colors">
              <ArrowLeft size={24} />
            </button>
            <button onClick={scrollNext} className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projectsData.map((project, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/4 px-4">
                <Dialog>
                <div className="relative h-96 rounded-lg overflow-hidden group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <DialogTrigger asChild>
                        <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
                          <span>Read More</span>
                          <ArrowRight size={16} className="ml-2" />
                        </button>
                      </DialogTrigger>
                    </div>
                  </div>

                  <DialogContent className="sm:max-w-[80vw] bg-[#18181B] text-gray-300 border-gray-700 p-0 top-[60%]">
                    <DialogHeader className="p-6 border-b border-gray-700 sticky top-0 bg-[#18181B] z-10 flex flex-row items-center justify-between">
                      <DialogTitle className="text-3xl lg:text-4xl font-bold text-orange-500">{project.title}</DialogTitle>
                      <DialogClose asChild>
                        <button className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                          <X className="h-5 w-5" />
                          <span className="sr-only">Close</span>
                        </button>
                      </DialogClose>
                    </DialogHeader>
                    <div className="max-h-[75vh] overflow-y-auto">
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-12 p-6">
                        <div className="lg:col-span-3">
                          <Image
                            src={project.showcaseImage || '/engineering-infra.jpg'}
                            alt={project.title}
                            width={1600}
                            height={1200}
                            className="rounded-lg object-cover w-full shadow-lg mb-6"
                          />
                           {project.conclusion && (
                            <div className="border-l-4 border-orange-500 pl-4">
                              <p className="text-lg font-medium text-gray-400 italic">"{project.conclusion}"</p>
                            </div>
                          )}
                        </div>
                        <div className="lg:col-span-2 space-y-6 mt-8 lg:mt-0">
                          <div>
                            <h4 className="text-lg font-semibold text-orange-400 mb-2 border-b border-gray-700 pb-2">Project Overview</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
                          </div>
                          
                          <div className="bg-zinc-800/50 p-4 rounded-lg border border-gray-700">
                            <h4 className="text-lg font-semibold text-orange-400 mb-3">Project Details</h4>
                            <div className="text-sm space-y-2">
                              <p><strong className="text-gray-500 w-28 inline-block">Client:</strong> {project.client}</p>
                              <p><strong className="text-gray-500 w-28 inline-block">Principal Client:</strong> {project.principalClient}</p>
                            </div>
                          </div>

                          {project.specs && project.specs.length > 0 && (
                            <div className="bg-zinc-800/50 p-4 rounded-lg border border-gray-700">
                              <h4 className="text-lg font-semibold text-orange-400 mb-3">Specifications</h4>
                              <ul className="space-y-2">
                                {project.specs.map((spec, i) => (
                                  <li key={i} className="flex items-start text-sm">
                                    <ArrowRight size={14} className="mr-2 mt-0.5 text-orange-500 flex-shrink-0" />
                                    <span>{spec}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                  </div>
                </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage; 