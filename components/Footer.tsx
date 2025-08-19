'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, ArrowUp, Send } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-black text-white">
      {/* Contact headline above address */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="text-amber-500">Get in touch with us for all</span><br />
          <span className="text-[#8A393B]">your railway needs.</span>
        </h2>
        <p className="mt-6 max-w-3xl text-sm sm:text-base text-gray-300">
          By addressing the growing demands of modern railways while offering substantial cost and environmental benefits, Patil Group's composite sleepers represent the future of sustainable, high-performance railway infrastructure.
        </p>
      </div>

      {/* Pre-footer section */}
      <div className="relative bg-black pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">Legend Apartments, 6-3-1342/4</h3>
            <p className="text-3xl font-bold">Raj Bhavan Rd, Raj Bhavan Quarters Colony</p>
            <p className="text-3xl font-bold">Somajiguda, Hyderabad, Telangana 500082</p>
            <Link href="/contact">
              <button className="bg-[#F2913F] text-black font-bold py-3 px-8 rounded-full text-sm hover:bg-orange-400 transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
          <div className="absolute right-0 bottom-0">
            <Image 
              src="/trainfooter.svg"
              alt="Footer illustration"
              width={600}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* About & Socials */}
            <div className="space-y-6">
            <p className="max-w-xs">Discover Inspired Solutions Tailored to Your Unique Style and Needs.</p>
            <p className="text-sm">
              <a href="mailto:info@patilgroup.com" className="hover:text-orange-400 transition-colors">info@patilgroup.com</a>
              </p>
              <p>
              <a href="tel:+914039556700" className="hover:text-orange-400 transition-colors">+91 40 3955 6700</a>
              </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-400 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/systems" className="hover:text-white transition-colors">Systems</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/cme" className="hover:text-white transition-colors">CME</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="md:col-span-2">
            <h4 className="font-bold mb-4">Subscribe to our Newsletter</h4>
            <div className="relative mb-8">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-gray-800 border border-gray-700 rounded-full py-3 px-6 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white w-8 h-8 rounded-full flex items-center justify-center text-black">
                <Send size={16} />
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-wrap gap-4">
                <Link href="/whistleblower">
                  <button className="bg-[#F2913F] text-black font-bold py-3 px-6 rounded-full text-sm hover:bg-orange-400 transition-colors">
                    WHISTLEBLOWER POLICY
                  </button>
                </Link>
                <Link href="/privacy-policy">
                  <button className="bg-[#F2913F] text-black font-bold py-3 px-6 rounded-full text-sm hover:bg-orange-400 transition-colors">
                    PRIVACY POLICY
                  </button>
                </Link>
              </div>
             <button 
                onClick={scrollToTop} 
                className="bg-[#F2913F] w-12 h-12 rounded-full flex items-center justify-center text-black hover:bg-orange-400 transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp size={24} />
             </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
