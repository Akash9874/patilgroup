"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Download, Eye, X } from 'lucide-react';
import Image from 'next/image';

const ResponsibilitiesPage = () => {
  useScrollAnimation();
  const [expandedBrochure, setExpandedBrochure] = useState<number | null>(null);

  const brochures = [
    {
      title: "Corporate brochure",
      filename: "PG Brochure .pdf",
      description: "Complete overview of Patil Group's services and capabilities",
      coverImage: "/Brochure/coverimage1.jpg",
      hasCoverImage: true
    },
    {
      title: "Precast brochure",
      filename: "precastbrochure.pdf",
      description: "Comprehensive guide to our precast concrete solutions",
      coverImage: "/Brochure/coverimage2.jpg",
      hasCoverImage: true
    }
  ];


  const handleDownload = (filename: string, title: string) => {
    const link = document.createElement('a');
    link.href = `/Brochure/${filename}`;
    link.download = filename;
    link.click();
  };

  const handleQuickView = (index: number) => {
    setExpandedBrochure(expandedBrochure === index ? null : index);
  };

  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-black">
        {/* Mobile Layout */}
        <div className="md:hidden relative h-screen flex flex-col">
          <div className="absolute inset-0">
            <img src="/ourrespoheroimage.jpg" alt="Our Resources" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 flex-1 flex items-center justify-center px-6">
            <div className="text-center max-w-lg mx-auto">
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight drop-shadow-2xl animate-fadeInUp">
                Our Resources
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto mt-8 rounded-full animate-pulse shadow-lg"></div>
              <p className="text-white text-xl sm:text-2xl mt-8 font-medium tracking-wide drop-shadow-xl leading-relaxed">
                Empowering communities through responsibility
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative h-screen">
          <div className="absolute inset-0 h-full w-full">
            <img src="/ourrespoheroimage.jpg" alt="Our Resources" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative z-10 h-full flex items-center justify-start pl-4 sm:pl-8 md:pl-16 lg:pl-24">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-left px-4">
              Our <br /> Resources
            </h1>
          </div>
        </div>
      </section>

      {/* CSR Resources Section */}
      <section className="bg-white text-black py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section with all three components */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* CSR Policy */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8A393B] mb-8">
                CSR Policy
              </h2>
            </div>

            {/* CSR Committee - Center */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F2913F] mb-6">
                Composition of<br />
                CSR Committee
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8">CSR Annual Action Plan_FY</p>
              
              {/* Year Display */}
              <div className="flex justify-center items-center space-x-8 md:space-x-16 mb-6">
                <div className="text-xl md:text-2xl font-bold text-black">2022-23</div>
                <div className="text-xl md:text-2xl font-bold text-black">2024-25</div>
              </div>
              <div className="text-xl md:text-2xl font-bold text-black">2023-24</div>
              </div>

            {/* CSR PRIL */}
            <div className="text-center lg:text-right">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8A393B] mb-8">
                CSR PRIL<br />
                AR 2021–22
              </h2>
          </div>
        </div>

          {/* Bottom Section with Brochures */}
          <div className="w-full">
            {/* Brochure heading with gradient lines */}
            <div className="flex items-center mb-12">
              <div className="flex-1 h-2" style={{
                background: 'linear-gradient(90deg, #8A393B 0%, #1E3888 30%, #F2913F 70%, rgba(242, 145, 63, 0) 100%)'
              }}></div>
              <div className="px-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F2913F] leading-tight whitespace-nowrap">
                  Brochures
                </h2>
                </div>
              <div className="flex-1 h-2" style={{
                background: 'linear-gradient(270deg, #8A393B 0%, #1E3888 30%, #F2913F 70%, rgba(242, 145, 63, 0) 100%)'
              }}></div>
              </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
              {brochures.map((brochure, index) => (
                <div key={index} className={`bg-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl transition-all duration-300 ${expandedBrochure === index ? 'lg:col-span-2' : ''}`}>
                  {/* Collapsed State */}
                  {expandedBrochure !== index && (
                    <>
                      {/* Card Header with Cover Image */}
                      <div className="relative h-60 sm:h-72 lg:h-80 bg-white overflow-hidden">
                        {brochure.hasCoverImage && brochure.coverImage ? (
                          <>
                            <Image
                              src={brochure.coverImage}
                              alt={`${brochure.title} Cover`}
                              fill
                              className="object-cover object-center"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                          </>
                        ) : (
                          <>
                            <iframe
                              src={`/Brochure/${brochure.filename}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                              className="w-full h-full transform scale-150 origin-top-left pointer-events-none"
                              title={`${brochure.title} Preview`}
                              style={{
                                width: '150%',
                                height: '150%',
                                transform: 'scale(0.67) translate(-25%, -25%)'
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                          </>
                        )}
                      </div>
                      
                      {/* Card Content */}
                      <div className="p-6 sm:p-8 bg-gray-100">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight text-gray-800">
                          {brochure.title}
                        </h3>
                        <p className="text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed text-gray-600">
                          {brochure.description}
                        </p>
                        
                        {/* File Info */}
                        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 text-xs sm:text-sm text-gray-500">
                          <span className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            15 pages
                          </span>
                          <span>•</span>
                          <span>1.1 MB</span>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                          {/* Quick View */}
                          <button
                            onClick={() => handleQuickView(index)}
                            className="flex flex-1 items-center justify-center gap-2 sm:gap-3 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-medium transition-colors duration-200 text-base sm:text-lg bg-gray-700 hover:bg-gray-800"
                          >
                            <Eye size={18} className="sm:w-5 sm:h-5" />
                            <span>Quick View</span>
                          </button>
                          {/* Download */}
                          <button
                            onClick={() => handleDownload(brochure.filename, brochure.title)}
                            className="flex flex-1 items-center justify-center gap-2 sm:gap-3 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-medium transition-colors duration-200 text-base sm:text-lg bg-blue-600 hover:bg-blue-700"
                          >
                            <Download size={18} className="sm:w-5 sm:h-5" />
                            <span>Download</span>
                          </button>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Expanded State - Inline Preview */}
                  {expandedBrochure === index && (
                    <div className="bg-gray-800 text-white">
                      {/* Header */}
                      <div className="p-6 border-b border-gray-700">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-2xl font-bold text-blue-400 mb-2">
                              {brochure.title}
                            </h3>
                            <p className="text-gray-300 text-sm">
                              {brochure.description}
                            </p>
                          </div>
                          <div className="text-right text-sm text-gray-400">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                              15 pages
                            </div>
                            <div>1.1 MB</div>
                          </div>
                        </div>
                      </div>

                      {/* PDF Preview */}
                      <div className="relative bg-white" style={{ height: '600px' }}>
                        <iframe
                          src={`/Brochure/${brochure.filename}#view=FitH&navpanes=0&toolbar=0`}
                          className="w-full h-full"
                          title={`${brochure.title} Preview`}
                          style={{ border: 'none' }}
                        />
                      </div>

                      {/* Action Buttons */}
                      <div className="p-6 flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => setExpandedBrochure(null)}
                          className="flex items-center justify-center gap-2 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 bg-gray-700 hover:bg-gray-600"
                        >
                          <X size={18} />
                          <span>Close Preview</span>
                        </button>
                        <button
                          onClick={() => handleDownload(brochure.filename, brochure.title)}
                          className="flex items-center justify-center gap-2 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 bg-blue-600 hover:bg-blue-700"
                        >
                          <Download size={18} />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default ResponsibilitiesPage;

