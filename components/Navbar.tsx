'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isSystemsMenuOpen, setIsSystemsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navIsScrolled = scrollY > 50 || isAboutMenuOpen || isProductsMenuOpen || isSystemsMenuOpen;

  const aboutLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/legacy', label: 'Our Legacy' },
    { href: '/management', label: 'Management' },
    { href: '/news', label: 'In News' },
    { href: '/responsibilities', label: 'Our Responsibilities' },
    { href: '/safety', label: 'Safety' },
    { href: '/sustainability', label: 'Sustainability' },
    { href: '/our-clientele', label: 'Our Clientele' },
    { href: '/our-presence', label: 'Our Presence' },
  ];

  const productLinks = [
    { href: '/sleepers', label: 'Sleepers' },
    { href: '/fasteners', label: 'Fasteners' },
    { href: '/wires', label: 'Wires' },
    { href: '/inserts', label: 'Inserts' },
    { href: '/precast', label: 'Precast' },
  ];

  const systemLinks = [
    { href: '/ballastless-track-urban-metro', label: 'Ballastless Track' },
    { href: '/flash-butt-welding-of-rails', label: 'Flash Butt Welding' },
    { href: '/patil-rheda-system', label: 'Patil RHEDA System' },
    { href: '/precast-plinth', label: 'Precast Plinth' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        navIsScrolled
          ? 'bg-black/40 backdrop-blur-sm shadow-sm' 
          : 'bg-black/30'
      }`}
      onMouseLeave={() => {
        setIsAboutMenuOpen(false);
        setIsProductsMenuOpen(false);
        setIsSystemsMenuOpen(false);
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center animate-fadeInLeft -ml-8 sm:-ml-12 lg:-ml-16">
              <Link href="/" onMouseEnter={() => setIsAboutMenuOpen(false)}>
                <picture>
                  <source srcSet="/pg.png" type="image/png" />
                  <img
                    src="/pg.png"
                    alt="Patil Group Logo"
                    width={140}
                    height={70}
                    loading="eager"
                    className="h-16 sm:h-18 lg:h-20 w-auto transition-all duration-300 hover-scale cursor-pointer"
                  />
                </picture>
              </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 animate-fadeInRight">
            <Link href="/" onMouseEnter={() => {
              setIsAboutMenuOpen(false);
              setIsProductsMenuOpen(false);
              setIsSystemsMenuOpen(false);
            }} className={`transition-all duration-300 font-medium relative group ${
              navIsScrolled ? 'text-white hover:text-amber-400' : 'text-white hover:text-amber-400'
            }`}>
              Home
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                navIsScrolled ? 'bg-amber-400' : 'bg-amber-400'
              }`}></span>
            </Link>
            
            <div onMouseEnter={() => {
              setIsAboutMenuOpen(true);
              setIsProductsMenuOpen(false);
              setIsSystemsMenuOpen(false);
            }}>
              <Link href="/about" className={`transition-all duration-300 font-medium relative group flex items-center gap-1 ${
                navIsScrolled ? 'text-white hover:text-amber-400' : 'text-white hover:text-amber-400'
              }`}>
                About
                <ChevronDown size={16} className={`transition-transform duration-300 ${isAboutMenuOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  navIsScrolled ? 'bg-amber-400' : 'bg-amber-400'
                }`}></span>
              </Link>
            </div>

            <div onMouseEnter={() => {
              setIsAboutMenuOpen(false);
              setIsProductsMenuOpen(true);
              setIsSystemsMenuOpen(false);
            }}>
              <Link href="/products" className={`transition-all duration-300 font-medium relative group flex items-center gap-1 ${
                navIsScrolled ? 'text-white hover:text-amber-400' : 'text-white hover:text-amber-400'
              }`}>
                Products
                <ChevronDown size={16} className={`transition-transform duration-300 ${isProductsMenuOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  navIsScrolled ? 'bg-amber-400' : 'bg-amber-400'
                }`}></span>
              </Link>
            </div>
            <div onMouseEnter={() => {
              setIsAboutMenuOpen(false);
              setIsProductsMenuOpen(false);
              setIsSystemsMenuOpen(true);
            }}>
              <Link href="/systems" className={`transition-all duration-300 font-medium relative group flex items-center gap-1 ${
                navIsScrolled ? 'text-white hover:text-amber-400' : 'text-white hover:text-amber-400'
              }`}>
                Systems
                <ChevronDown size={16} className={`transition-transform duration-300 ${isSystemsMenuOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  navIsScrolled ? 'bg-amber-400' : 'bg-amber-400'
                }`}></span>
              </Link>
            </div>
            <Link href="/projects" onMouseEnter={() => {
              setIsAboutMenuOpen(false);
              setIsProductsMenuOpen(false);
              setIsSystemsMenuOpen(false);
            }} className={`transition-all duration-300 font-medium relative group ${
              navIsScrolled ? 'text-white hover:text-amber-400' : 'text-white hover:text-amber-400'
            }`}>
              Projects
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                navIsScrolled ? 'bg-amber-400' : 'bg-amber-400'
              }`}></span>
            </Link>
            <Link href="/cme" onMouseEnter={() => {
              setIsAboutMenuOpen(false);
              setIsProductsMenuOpen(false);
              setIsSystemsMenuOpen(false);
            }} className={`transition-all duration-300 font-medium relative group ${
              navIsScrolled ? 'text-white hover:text-amber-400' : 'text-white hover:text-amber-400'
            }`}>
              CME
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                navIsScrolled ? 'bg-amber-400' : 'bg-amber-400'
              }`}></span>
            </Link>
            <Link href="/research-and-development" onMouseEnter={() => {
              setIsAboutMenuOpen(false);
              setIsProductsMenuOpen(false);
              setIsSystemsMenuOpen(false);
            }} className={`transition-all duration-300 font-medium relative group ${
              navIsScrolled ? 'text-white hover:text-amber-400' : 'text-white hover:text-amber-400'
            }`}>
              R&D
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                navIsScrolled ? 'bg-amber-400' : 'bg-amber-400'
              }`}></span>
            </Link>
            <Link href="/careers" onMouseEnter={() => {
              setIsAboutMenuOpen(false);
              setIsProductsMenuOpen(false);
              setIsSystemsMenuOpen(false);
            }} className={`transition-all duration-300 font-medium relative group ${
              navIsScrolled ? 'text-white hover:text-amber-400' : 'text-white hover:text-amber-400'
            }`}>
              Careers
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                navIsScrolled ? 'bg-amber-400' : 'bg-amber-400'
              }`}></span>
            </Link>
            <Link href="/contact" onMouseEnter={() => {
              setIsAboutMenuOpen(false);
              setIsProductsMenuOpen(false);
              setIsSystemsMenuOpen(false);
            }} className="bg-[#8A393B] text-white px-6 py-2 rounded-full hover:bg-[#793032] transition-all duration-300 font-medium hover-lift hover-glow">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-all duration-300 hover-scale ${
                navIsScrolled ? 'text-white hover:text-amber-400' : 'text-white hover:text-amber-400'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* About Us Mega Menu */}
      <div className={`absolute top-full left-0 w-full bg-black shadow-lg transition-all duration-300 ease-in-out ${isAboutMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-2xl font-semibold text-white hover:text-amber-400 transition-colors duration-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Products Mega Menu */}
      <div className={`absolute top-full left-0 w-full bg-black shadow-lg transition-all duration-300 ease-in-out ${isProductsMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-2xl font-semibold text-white hover:text-amber-400 transition-colors duration-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Systems Mega Menu */}
      <div className={`absolute top-full left-0 w-full bg-black shadow-lg transition-all duration-300 ease-in-out ${isSystemsMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {systemLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-2xl font-semibold text-white hover:text-amber-400 transition-colors duration-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-black shadow-lg animate-slideInFromBottom">
          <div className="px-4 py-2 space-y-2">
            <Link href="/" className="block px-3 py-2 text-white hover:text-amber-400 transition-all duration-300 hover:bg-gray-800 rounded-md">Home</Link>
            
            {/* About Section */}
            <div className="border-t border-gray-800 pt-2">
              <p className="px-3 py-1 text-amber-400 font-semibold text-sm">About</p>
              {aboutLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block px-6 py-2 text-white hover:text-amber-400 transition-all duration-300 hover:bg-gray-800 rounded-md text-sm">
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Products Section */}
            <div className="border-t border-gray-800 pt-2">
              <Link href="/products" className="block px-3 py-2 text-amber-400 font-semibold hover:text-amber-300 transition-all duration-300 hover:bg-gray-800 rounded-md">Products</Link>
              {productLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block px-6 py-2 text-white hover:text-amber-400 transition-all duration-300 hover:bg-gray-800 rounded-md text-sm">
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Systems Section */}
            <div className="border-t border-gray-800 pt-2">
              <Link href="/systems" className="block px-3 py-2 text-amber-400 font-semibold hover:text-amber-300 transition-all duration-300 hover:bg-gray-800 rounded-md">Systems</Link>
              {systemLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block px-6 py-2 text-white hover:text-amber-400 transition-all duration-300 hover:bg-gray-800 rounded-md text-sm">
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Other Pages */}
            <div className="border-t border-gray-800 pt-2">
              <Link href="/projects" className="block px-3 py-2 text-white hover:text-amber-400 transition-all duration-300 hover:bg-gray-800 rounded-md">Projects</Link>
              <Link href="/cme" className="block px-3 py-2 text-white hover:text-amber-400 transition-all duration-300 hover:bg-gray-800 rounded-md">CME</Link>
              <Link href="/research-and-development" className="block px-3 py-2 text-white hover:text-amber-400 transition-all duration-300 hover:bg-gray-800 rounded-md">R&D</Link>
              <Link href="/careers" className="block px-3 py-2 text-white hover:text-amber-400 transition-all duration-300 hover:bg-gray-800 rounded-md">Careers</Link>
              <Link href="/contact" className="w-full text-left block px-3 py-2 bg-[#8A393B] text-white rounded-md hover:bg-[#793032] transition-all duration-300 hover-lift">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
