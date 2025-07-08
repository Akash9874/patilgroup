"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navbar from '@/components/Navbar';

interface TimelineItemProps {
    period: string;
    title: string;
    description?: string;
    points?: string[];
}

interface TimelineIntroProps {
    scrollYProgress: any;
}

interface TimelineIconProps {
    reference: React.RefObject<HTMLLIElement>;
}

const TimelineIntro = ({ scrollYProgress }: TimelineIntroProps) => {
    const scale = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const pathLength = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);

    const leftPath = "M 50 50 H 0";
    const rightPath = "M 50 50 H 100";
    
    return (
        <div className="h-[80vh] w-full relative flex flex-col items-center justify-center text-center">
            <motion.div style={{ scale, opacity }}>
                <h2 className="text-6xl font-clash font-bold text-[#8A393B] mb-4">
                    Our Journey
                </h2>
                <p className="text-2xl text-gray-600">
                    A Legacy of Innovation and Progress
                </p>
            </motion.div>

            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute top-0 left-0">
                {/* Center point */}
                <motion.circle 
                    cx="50" cy="50" r="1" fill="#8A393B" 
                    initial={{ scale: 0 }}
                    animate={{ scale: scrollYProgress.get() > 0 ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
                {/* Left line */}
                <motion.path
                    d={leftPath}
                    style={{ pathLength }}
                    stroke="#8A393B"
                    strokeWidth="1"
                    fill="none"
                />
                {/* Right line */}
                <motion.path
                    d={rightPath}
                    style={{ pathLength }}
                    stroke="#8A393B"
                    strokeWidth="1"
                    fill="none"
                />
            </svg>
        </div>
    );
};


const TimelineIcon = ({ reference }: TimelineIconProps) => {
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["center end", "center center"],
    });

    return (
        <figure className="absolute left-1/2 -translate-x-1/2 stroke-[#8A393B]">
            <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="20" className="stroke-[#8A393B] stroke-1 fill-none" />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="20"
                    className="stroke-[5px] fill-white"
                    style={{
                        pathLength: scrollYProgress,
                    }}
                />
                <circle cx="50" cy="50" r="10" className="animate-pulse stroke-1 fill-[#8A393B]" />
            </svg>
        </figure>
    );
};

const TimelineItem = ({ period, title, description, points, isLeft }: TimelineItemProps & { isLeft: boolean }) => {
    const ref = useRef<HTMLLIElement>(null);

    const content = (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className={`w-full ${isLeft ? 'text-right' : 'text-left'}`}
        >
            <h3 className="text-4xl font-bold text-[#8A393B]">{period}</h3>
            <h4 className="text-2xl font-semibold mt-2 mb-4">{title}</h4>
            {description && <p className="text-lg text-gray-600">{description}</p>}
            {points && (
                <ul className={`list-disc mt-2 space-y-2 text-lg text-gray-600 ${isLeft ? 'list-inside ml-auto' : 'list-outside ml-4'}`}>
                    {points.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
            )}
        </motion.div>
    );

    return (
        <li ref={ref} className="my-16 flex items-center w-full">
            {isLeft ? (
                <>
                    <div className="w-2/5">{content}</div>
                    <div className="w-1/5 relative h-full">
                        <TimelineIcon reference={ref} />
                    </div>
                    <div className="w-2/5"></div>
                </>
            ) : (
                <>
                    <div className="w-2/5"></div>
                    <div className="w-1/5 relative h-full">
                        <TimelineIcon reference={ref} />
                    </div>
                    <div className="w-2/5">{content}</div>
                </>
            )}
        </li>
    );
};


const LegacyPage = () => {
    const timelineData = [
        {
            period: '1980s',
            title: 'Entry into Railway Infrastructure',
            description: 'Ventures into Pre-Stressed Concrete (PSC) Sleepers, marking the beginning of its partnership with Indian Railways, which continues to this day.',
        },
        {
            period: '1990s',
            title: 'Transitioning Railway Technology',
            description: 'Plays a crucial role in the shift from Wooden Sleepers to Concrete Sleepers, pioneering innovation in railway track engineering.',
        },
        {
            period: '2000s',
            title: 'Expanding Manufacturing & Regional Presence',
            description: 'Becomes a leading manufacturer of Concrete Sleepers and Rail Fittings for Metro and Mainline Railways. Establishes operations across West Bengal, Odisha, Chhattisgarh, Maharashtra, Andhra Pradesh, Telangana, Tamil Nadu, Karnataka, and Delhi Metro & Chennai Metro.',
        },
        {
            period: '2010s',
            title: 'Backward Integration & High-Tech Expansion',
            points: [
                'Establishes HTS Wire Units for High Tensile Steel Wire production, a critical component in PSC Sleepers.',
                'Develops Switches & Crossings (Thick Web Technology) and Ballastless Track for High-Speed Lines, Bridges, and Tunnels.',
            ],
        },
        {
            period: '2020s',
            title: 'Metro Rail & Global Expansion',
            points: [
                'Supplies fasteners for Urban Rapid Mass Transport projects in Delhi & Chennai Metro.',
                'Forms technology partnerships with global leaders in sleepers and fasteners, ensuring cutting-edge solutions.',
            ],
        },
        {
            period: 'Present and Future',
            title: 'Innovating for the Next Generation',
            points: [
                'Continues to drive railway modernization with Composite Sleepers & Next-Gen Rail Solutions.',
                'Expanding globally with turnkey projects under execution.',
                'Committed to delivering uncompromised quality and safety across all 20 manufacturing locations and sites.',
            ],
        },
    ];

  useScrollAnimation();
  const timelineContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: timelineContainerRef,
      offset: ["start start", "end end"]
  });

  const timelineScaleY = useTransform(scrollYProgress, [0.25, 0.85], [0, 1]);
  
  return (
    <div className="bg-[#1E1E1E] text-white">
      <Navbar />
      
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <img src="/train.png" alt="Train" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2">
          {/* Left side with "Our Legacy" title */}
          <div className="flex items-center justify-center">
            <div className="text-left px-4 sm:px-6 lg:px-8">
              <h1 className="text-6xl md:text-8xl font-bold text-amber-500 animate-fadeInUp">
                Our Legacy
              </h1>
            </div>
          </div>

          {/* Right side with black cut and text */}
          <div 
            className="h-full bg-[#1E1E1E] flex items-center"
            style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
          >
            <div className="space-y-6 animate-fadeInUp w-full pl-[30%] pr-8 lg:pr-16">
              <h2 className="text-5xl font-bold leading-tight">
                Built on Legacy, Driven by Innovation
              </h2>
              <p className="font-clash font-light text-2xl leading-[39px] tracking-[-0.25px] text-white">
                With decades of expertise, Patil Group has led the transformation of India's railway infrastructure, from introducing Concrete Sleepers to shaping the future with advanced track solutions. Our legacy of quality, innovation, and dedication to progress continues to fuel the evolution of global rail networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineContainerRef} className="bg-white text-gray-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <TimelineIntro scrollYProgress={scrollYProgress} />
          
          <div className="w-full relative mt-16">
              <motion.div 
              style={{scaleY: timelineScaleY}}
              className="absolute left-1/2 top-0 w-[4px] h-full bg-[#8A393B] origin-top -translate-x-1/2" />
            <ul className="w-full">
              {timelineData.map((item, index) => (
                <TimelineItem key={index} {...item} isLeft={index % 2 === 0} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegacyPage; 