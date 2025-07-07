'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrollY > 50 
        ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center animate-fadeInLeft">
            <Link href="/">
              <img 
                src="/pg.png" 
                alt="Patil Group Logo" 
                className="h-10 w-auto transition-all duration-300 hover-scale cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 animate-fadeInRight">
            <Link href="/" className={`transition-all duration-300 font-medium relative group ${
              scrollY > 50 ? 'text-gray-700 hover:text-amber-700' : 'text-white hover:text-amber-200'
            }`}>
              Home
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                scrollY > 50 ? 'bg-amber-700' : 'bg-amber-200'
              }`}></span>
            </Link>
            <Link href="/about" className={`transition-all duration-300 font-medium relative group ${
              scrollY > 50 ? 'text-gray-700 hover:text-amber-700' : 'text-white hover:text-amber-200'
            }`}>
              About
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                scrollY > 50 ? 'bg-amber-700' : 'bg-amber-200'
              }`}></span>
            </Link>
            <Link href="/products" className={`transition-all duration-300 font-medium relative group ${
              scrollY > 50 ? 'text-gray-700 hover:text-amber-700' : 'text-white hover:text-amber-200'
            }`}>
              Products
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                scrollY > 50 ? 'bg-amber-700' : 'bg-amber-200'
              }`}></span>
            </Link>
            <Link href="/solutions" className={`transition-all duration-300 font-medium relative group ${
              scrollY > 50 ? 'text-gray-700 hover:text-amber-700' : 'text-white hover:text-amber-200'
            }`}>
              Solutions
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                scrollY > 50 ? 'bg-amber-700' : 'bg-amber-200'
              }`}></span>
            </Link>
            <Link href="/projects" className={`transition-all duration-300 font-medium relative group ${
              scrollY > 50 ? 'text-gray-700 hover:text-amber-700' : 'text-white hover:text-amber-200'
            }`}>
              Projects
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                scrollY > 50 ? 'bg-amber-700' : 'bg-amber-200'
              }`}></span>
            </Link>
            <Link href="/cme" className={`transition-all duration-300 font-medium relative group ${
              scrollY > 50 ? 'text-gray-700 hover:text-amber-700' : 'text-white hover:text-amber-200'
            }`}>
              CME
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                scrollY > 50 ? 'bg-amber-700' : 'bg-amber-200'
              }`}></span>
            </Link>
            <Link href="/careers" className={`transition-all duration-300 font-medium relative group ${
              scrollY > 50 ? 'text-gray-700 hover:text-amber-700' : 'text-white hover:text-amber-200'
            }`}>
              Careers
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                scrollY > 50 ? 'bg-amber-700' : 'bg-amber-200'
              }`}></span>
            </Link>
            <button className="bg-amber-700 text-white px-6 py-2 rounded-full hover:bg-amber-800 transition-all duration-300 font-medium hover-lift hover-glow">
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-all duration-300 hover-scale ${
                scrollY > 50 ? 'text-gray-700 hover:text-amber-700' : 'text-white hover:text-amber-200'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg animate-slideInFromBottom">
            <div className="px-4 py-2 space-y-2">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-amber-700 transition-all duration-300 hover:bg-amber-50 rounded-md">Home</Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-amber-700 transition-all duration-300 hover:bg-amber-50 rounded-md">About</Link>
              <Link href="/products" className="block px-3 py-2 text-gray-700 hover:text-amber-700 transition-all duration-300 hover:bg-amber-50 rounded-md">Products</Link>
              <Link href="/solutions" className="block px-3 py-2 text-gray-700 hover:text-amber-700 transition-all duration-300 hover:bg-amber-50 rounded-md">Solutions</Link>
              <Link href="/projects" className="block px-3 py-2 text-gray-700 hover:text-amber-700 transition-all duration-300 hover:bg-amber-50 rounded-md">Projects</Link>
              <Link href="/cme" className="block px-3 py-2 text-gray-700 hover:text-amber-700 transition-all duration-300 hover:bg-amber-50 rounded-md">CME</Link>
              <Link href="/careers" className="block px-3 py-2 text-gray-700 hover:text-amber-700 transition-all duration-300 hover:bg-amber-50 rounded-md">Careers</Link>
              <button className="w-full text-left px-3 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-all duration-300 hover-lift">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 