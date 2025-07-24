'use client';

import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#8A393B] text-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-12">
            <div>
              <p className="font-medium">123 Market St. #22B</p>
              <p className="font-medium">XYZOPINK, INDIA 44635</p>
            </div>
            <div className="space-y-6">
              <p>
                <a href="tel:4345484356" className="border-b border-gray-500 pb-1 hover:border-white transition-colors">
                  (434) 548-4356
                </a>
              </p>
              <p>
                <a href="mailto:XYZ@PATIL.GROUP" className="border-b border-gray-500 pb-1 hover:border-white transition-colors">
                  XYZ@PATIL.GROUP
                </a>
              </p>
            </div>
          </div>

          {/* Site Links */}
          <div className="space-y-4">
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/systems" className="hover:text-white transition-colors">Systems</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/cme" className="hover:text-white transition-colors">CME</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
            <p className="text-sm text-gray-400 pt-8">&copy; {new Date().getFullYear()} Patil Group. All rights reserved.</p>
          </div>

          {/* Social & Policy */}
          <div className="md:col-span-2 space-y-4">
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            </ul>
            <div className="pt-8">
              <Link href="/whistleblower-policy" className="inline-block bg-[#F2913F] text-black font-bold py-3 px-6 rounded-md text-sm hover:bg-orange-400 transition-colors">
                WHISTLEBLOWER POLICY
              </Link>
            </div>
          </div>
          
          {/* Scroll to top */}
          <div className="flex justify-end items-start">
             <button 
                onClick={scrollToTop} 
                className="bg-[#F2913F] w-14 h-14 rounded-full flex items-center justify-center text-white hover:bg-orange-400 transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp size={28} />
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 