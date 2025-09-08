'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isSystemsMenuOpen, setIsSystemsMenuOpen] = useState(false);
  const [isMobileAboutExpanded, setIsMobileAboutExpanded] = useState(false);
  const [isMobileProductsExpanded, setIsMobileProductsExpanded] = useState(false);
  const [isMobileSystemsExpanded, setIsMobileSystemsExpanded] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Show navbar when scrolling up, hide when scrolling down
          if (currentScrollY < lastScrollY.current || currentScrollY <= 10) {
            // Scrolling up or at the top of page
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            // Scrolling down and past 100px
            setIsVisible(false);
          }
          
          setScrollY(currentScrollY);
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Always show navbar when dropdown menus are open or mobile menu is open
  const shouldShowNavbar = isVisible || isAboutMenuOpen || isProductsMenuOpen || isSystemsMenuOpen || isMobileMenuOpen;
  const navIsScrolled = scrollY > 50 || isAboutMenuOpen || isProductsMenuOpen || isSystemsMenuOpen;

  const aboutLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/legacy', label: 'Our Legacy' },
    { href: '/management', label: 'Management' },
    { href: '/news', label: 'In News' },
    { href: '/responsibilities', label: 'Our Resources' },
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
    { href: '/safety', label: 'Safety' },
  ];

  const systemLinks = [
    { href: '/ballastless-track-urban-metro', label: 'Ballastless Track' },
    { href: '/flash-butt-welding-of-rails', label: 'Flash Butt Welding' },
    { href: '/patil-rheda-system', label: 'Patil RHEDA System' },
    { href: '/precast-plinth', label: 'Precast Plinth' },
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent scroll when mobile menu is open and reset submenus
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'unset';
      document.documentElement.style.overflow = 'unset';
      // Reset all mobile submenus when main menu closes
      setIsMobileAboutExpanded(false);
      setIsMobileProductsExpanded(false);
      setIsMobileSystemsExpanded(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        navIsScrolled
          ? 'bg-black/40 backdrop-blur-sm shadow-sm' 
          : 'bg-black/30'
      } ${
        shouldShowNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
      onMouseLeave={() => {
        setIsAboutMenuOpen(false);
        setIsProductsMenuOpen(false);
        setIsSystemsMenuOpen(false);
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24 md:h-26">
          {/* Logo */}
          <div className="flex items-center animate-fadeInLeft -ml-2 sm:-ml-4 md:-ml-8 lg:-ml-12 xl:-ml-16">
              <Link href="/" onMouseEnter={() => setIsAboutMenuOpen(false)}>
                <picture>
                  <source srcSet="/pg.png" type="image/png" />
                  <img
                    src="/pg.png"
                    alt="Patil Group Logo"
                    width={175}
                    height={90}
                    loading="eager"
                    className="h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 2xl:h-24 w-auto transition-all duration-300 hover-scale cursor-pointer"
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

          {/* Modern Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`relative p-3 rounded-xl transition-all duration-300 hover:bg-white/10 active:scale-95 ${
                navIsScrolled ? 'text-white hover:text-amber-400' : 'text-white hover:text-amber-400'
              } ${isMobileMenuOpen ? 'bg-white/10 scale-95' : ''}`}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className={`absolute transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-0' : 'rotate-0 -translate-y-2'
                }`}>
                  <div className="w-5 h-0.5 bg-current rounded-full" />
                </div>
                <div className={`absolute transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}>
                  <div className="w-5 h-0.5 bg-current rounded-full" />
                </div>
                <div className={`absolute transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'rotate-0 translate-y-2'
                }`}>
                  <div className="w-5 h-0.5 bg-current rounded-full" />
                </div>
              </div>
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

             {/* Full Screen Mobile Navigation */}
       <div 
         className={`lg:hidden fixed z-[9999] bg-black transition-all duration-500 ease-in-out ${
           isMobileMenuOpen 
             ? 'translate-x-0 opacity-100 visible' 
             : 'translate-x-full opacity-0 invisible'
         }`}
         style={{ 
           position: 'fixed',
           top: 0,
           left: 0,
           right: 0,
           bottom: 0,
           width: '100vw', 
           height: '100vh',
           backgroundColor: '#000000',
           zIndex: 9999,
           transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)'
         }}
       >         
         {/* Full Screen Navigation Panel */}
         <div className="w-full h-full bg-black flex flex-col overflow-hidden">
           {/* Header */}
           <div className="flex items-center justify-between px-6 py-6 border-b border-gray-800 shrink-0">
             <h2 className="text-xl font-bold text-white">Navigation Menu</h2>
             <button
               onClick={() => setIsMobileMenuOpen(false)}
               className="p-2 text-white hover:text-amber-400 transition-colors duration-200"
               aria-label="Close menu"
             >
               <X size={24} />
             </button>
           </div>
           
           {/* Brand Section */}
           <div className="px-6 py-6 border-b border-gray-800 shrink-0">
             <h1 className="text-3xl font-bold text-white tracking-tight">
               PATIL GROUP
             </h1>
             <p className="text-gray-400 text-sm mt-2 tracking-wide">
               RAILWAY ENGINEERING EXCELLENCE
             </p>
           </div>
           
           {/* Navigation Content */}
           <div className="flex-1 overflow-y-auto px-6 py-4 bg-black" style={{ backgroundColor: '#000000' }}>
             {/* Navigation Menu Items */}
             <div className="space-y-1 mt-2">
               {/* Home */}
               <Link 
                 href="/" 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="block py-4 border-b border-gray-800 text-white hover:text-amber-400 transition-colors duration-200"
               >
                 <span className="text-lg font-medium">Home</span>
               </Link>

               {/* About Us - Expandable */}
               <div className="border-b border-gray-800">
                 <button 
                   onClick={() => setIsMobileAboutExpanded(!isMobileAboutExpanded)}
                   className="w-full flex items-center justify-between py-4 text-white hover:text-amber-400 transition-colors duration-200"
                 >
                   <span className="text-lg font-medium">About Us</span>
                   <div className={`text-gray-400 transition-transform duration-300 ${isMobileAboutExpanded ? 'rotate-90' : ''}`}>
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                       <path d="M15 18l-6-6 6-6"/>
                     </svg>
                   </div>
                 </button>
                 
                 {/* About Us Submenu */}
                 <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                   isMobileAboutExpanded ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                 }`}>
                   <div className="py-2 pl-4 bg-gray-900">
                     <Link 
                       href="/about" 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="block py-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base"
                     >
                       About Us
                     </Link>
                     <Link 
                       href="/legacy" 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="block py-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base"
                     >
                       Our Legacy
                     </Link>
                     <Link 
                       href="/management" 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="block py-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base"
                     >
                       Management
                     </Link>
                     <Link 
                       href="/news" 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="block py-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base"
                     >
                       In News
                     </Link>
                     <Link 
                       href="/responsibilities" 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="block py-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base"
                     >
                       Our Resources
                     </Link>
                     <Link 
                       href="/sustainability" 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="block py-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base"
                     >
                       Sustainability
                     </Link>
                     <Link 
                       href="/our-clientele" 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="block py-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base"
                     >
                       Our Clientele
                     </Link>
                     <Link 
                       href="/our-presence" 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="block py-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base"
                     >
                       Our Presence
                     </Link>
                   </div>
                 </div>
               </div>

               {/* Products - Expandable */}
               <div className="border-b border-gray-800">
                 <button 
                   onClick={() => setIsMobileProductsExpanded(!isMobileProductsExpanded)}
                   className="w-full flex items-center justify-between py-4 text-white hover:text-amber-400 transition-colors duration-200"
                 >
                   <span className="text-lg font-medium">Products</span>
                   <div className={`text-gray-400 transition-transform duration-300 ${isMobileProductsExpanded ? 'rotate-90' : ''}`}>
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                       <path d="M15 18l-6-6 6-6"/>
                     </svg>
                   </div>
                 </button>
                 
                 {/* Products Submenu */}
                 <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                   isMobileProductsExpanded ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                 }`}>
                   <div className="py-2 pl-4 bg-gray-900">
                     <Link 
                       href="/products" 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="block py-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base"
                     >
                       All Products
                     </Link>
                     <Link 
                       href="/sleepers" 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="block py-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base"
                     >
                       Sleepers
                     </Link>
                     <Link 
                       href="/fasteners" 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="block py-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base"
                     >
                       Fasteners
                     </Link>
                     <Link 
                       href="/wires" 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="block py-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base"
                     >
                       Wires
                     </Link>
                     <Link 
                       href="/inserts" 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="block py-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base"
                     >
                       Inserts
                     </Link>
                     <Link 
                       href="/precast" 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="block py-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base"
                     >
                       Precast
                     </Link>
                     <Link 
                       href="/safety" 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="block py-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base"
                     >
                       Safety
                     </Link>
                   </div>
                 </div>
               </div>

               {/* Systems - Expandable */}
               <div className="border-b border-gray-800">
                 <button 
                   onClick={() => setIsMobileSystemsExpanded(!isMobileSystemsExpanded)}
                   className="w-full flex items-center justify-between py-4 text-white hover:text-amber-400 transition-colors duration-200"
                 >
                   <span className="text-lg font-medium">Systems</span>
                   <div className={`text-gray-400 transition-transform duration-300 ${isMobileSystemsExpanded ? 'rotate-90' : ''}`}>
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                       <path d="M15 18l-6-6 6-6"/>
                     </svg>
                   </div>
                 </button>
                 
                 {/* Systems Submenu */}
                 <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                   isMobileSystemsExpanded ? 'max-h-[250px] opacity-100' : 'max-h-0 opacity-0'
                 }`}>
                   <div className="py-2 pl-4 bg-gray-900">
                     <Link 
                       href="/systems" 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="block py-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base"
                     >
                       All Systems
                     </Link>
                     <Link 
                       href="/ballastless-track-urban-metro" 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="block py-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base"
                     >
                       Ballastless Track
                     </Link>
                     <Link 
                       href="/flash-butt-welding-of-rails" 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="block py-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base"
                     >
                       Flash Butt Welding
                     </Link>
                     <Link 
                       href="/patil-rheda-system" 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="block py-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base"
                     >
                       Patil RHEDA System
                     </Link>
                     <Link 
                       href="/precast-plinth" 
                       onClick={() => setIsMobileMenuOpen(false)}
                       className="block py-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base"
                     >
                       Precast Plinth
                     </Link>
                   </div>
                 </div>
               </div>

               {/* Projects */}
               <Link 
                 href="/projects" 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="block py-4 border-b border-gray-800 text-white hover:text-amber-400 transition-colors duration-200"
               >
                 <span className="text-lg font-medium">Projects</span>
               </Link>

               {/* CME */}
               <Link 
                 href="/cme" 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="block py-4 border-b border-gray-800 text-white hover:text-amber-400 transition-colors duration-200"
               >
                 <span className="text-lg font-medium">CME</span>
               </Link>

               {/* R&D */}
               <Link 
                 href="/research-and-development" 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="block py-4 border-b border-gray-800 text-white hover:text-amber-400 transition-colors duration-200"
               >
                 <span className="text-lg font-medium">R&D</span>
               </Link>

               {/* Careers */}
               <Link 
                 href="/careers" 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="block py-4 border-b border-gray-800 text-white hover:text-amber-400 transition-colors duration-200"
               >
                 <span className="text-lg font-medium">Career</span>
               </Link>

               {/* Gallery (Projects alternative) */}
               <Link 
                 href="/projects" 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="block py-4 border-b border-gray-800 text-white hover:text-amber-400 transition-colors duration-200"
               >
                 <span className="text-lg font-medium">Gallery</span>
               </Link>

               {/* Contact Us */}
               <Link 
                 href="/contact" 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="block py-4 border-b border-gray-800 text-white hover:text-amber-400 transition-colors duration-200"
               >
                 <span className="text-lg font-medium">Contact Us</span>
               </Link>

               {/* Privacy Policy */}
               <Link 
                 href="/privacy-policy" 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="block py-4 text-white hover:text-amber-400 transition-colors duration-200"
               >
                 <span className="text-lg font-medium">Privacy Policy</span>
               </Link>
             </div>
           </div>
         </div>
       </div>
    </nav>
  );
};

export default Navbar;
