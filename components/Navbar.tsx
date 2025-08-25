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

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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

             {/* Modern Mobile Navigation */}
       <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-out ${
         isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
       }`}>
         {/* Backdrop */}
         <div 
           className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
             isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
           }`}
           onClick={() => setIsMobileMenuOpen(false)}
         />
         
         {/* Navigation Panel */}
         <div className={`absolute top-20 sm:top-24 left-4 right-4 bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 transition-all duration-500 ease-out transform ${
           isMobileMenuOpen 
             ? 'translate-y-0 scale-100 opacity-100' 
             : '-translate-y-8 scale-95 opacity-0'
         }`}>
           {/* Header */}
           <div className="px-6 py-4 border-b border-gray-700/50">
             <div className="flex items-center justify-between">
               <div>
                 <h2 className="text-lg font-bold text-white">Navigation</h2>
                 <p className="text-sm text-gray-400">Explore our solutions</p>
               </div>
               <button
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200 hover:scale-105"
                 aria-label="Close menu"
               >
                 <X size={16} />
               </button>
             </div>
           </div>
           
           {/* Navigation Content */}
           <div className="max-h-[60vh] overflow-y-auto custom-scrollbar p-2">
                         {/* Home Link */}
             <div className="p-2">
               <Link 
                 href="/" 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="group flex items-center px-4 py-3 text-white hover:text-amber-400 transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-transparent rounded-xl text-base font-semibold"
               >
                 <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 Home
               </Link>
             </div>
            
                         {/* About Section */}
             <div className="p-2 border-t border-gray-700/30 mt-2">
               <div className="px-4 py-3">
                 <h3 className="text-amber-400 font-bold text-sm uppercase tracking-wider flex items-center">
                   <div className="w-1 h-4 bg-amber-400 rounded-full mr-2" />
                   About
                 </h3>
               </div>
               <div className="space-y-1 px-2">
                 {aboutLinks.map((link, index) => (
                   <Link 
                     key={link.href} 
                     href={link.href} 
                     onClick={() => setIsMobileMenuOpen(false)}
                     className={`group flex items-center px-4 py-2.5 text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-lg text-sm animate-slideUp touch-manipulation`}
                     style={{ animationDelay: `${index * 30}ms` }}
                   >
                     <div className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-amber-400 transition-colors duration-300" />
                     {link.label}
                   </Link>
                 ))}
               </div>
             </div>

                         {/* Products Section */}
             <div className="p-2 border-t border-gray-700/30">
               <Link 
                 href="/products" 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="group flex items-center px-4 py-3 text-amber-400 hover:text-amber-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-transparent rounded-xl font-bold text-sm uppercase tracking-wider"
               >
                 <div className="w-1 h-4 bg-amber-400 rounded-full mr-2" />
                 Products
               </Link>
               <div className="space-y-1 px-2">
                 {productLinks.map((link, index) => (
                   <Link 
                     key={link.href} 
                     href={link.href} 
                     onClick={() => setIsMobileMenuOpen(false)}
                     className={`group flex items-center px-4 py-2.5 text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-lg text-sm animate-slideUp touch-manipulation`}
                     style={{ animationDelay: `${index * 30}ms` }}
                   >
                     <div className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-amber-400 transition-colors duration-300" />
                     {link.label}
                   </Link>
                 ))}
               </div>
             </div>

                         {/* Systems Section */}
             <div className="p-2 border-t border-gray-700/30">
               <Link 
                 href="/systems" 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="group flex items-center px-4 py-3 text-amber-400 hover:text-amber-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-transparent rounded-xl font-bold text-sm uppercase tracking-wider"
               >
                 <div className="w-1 h-4 bg-amber-400 rounded-full mr-2" />
                 Systems
               </Link>
               <div className="space-y-1 px-2">
                 {systemLinks.map((link, index) => (
                   <Link 
                     key={link.href} 
                     href={link.href} 
                     onClick={() => setIsMobileMenuOpen(false)}
                     className={`group flex items-center px-4 py-2.5 text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-lg text-sm animate-slideUp touch-manipulation`}
                     style={{ animationDelay: `${index * 30}ms` }}
                   >
                     <div className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-amber-400 transition-colors duration-300" />
                     {link.label}
                   </Link>
                 ))}
               </div>
             </div>

                         {/* Other Pages */}
             <div className="p-2 border-t border-gray-700/30">
               <div className="space-y-1">
                 {[
                   { href: '/projects', label: 'Projects' },
                   { href: '/cme', label: 'CME' },
                   { href: '/research-and-development', label: 'R&D' },
                   { href: '/careers', label: 'Careers' }
                 ].map((item, index) => (
                   <Link 
                     key={item.href}
                     href={item.href} 
                     onClick={() => setIsMobileMenuOpen(false)}
                     className={`group flex items-center px-4 py-3 text-white hover:text-amber-400 transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-transparent rounded-xl text-base font-medium animate-slideUp touch-manipulation`}
                     style={{ animationDelay: `${index * 50}ms` }}
                   >
                     <div className="w-2 h-2 bg-gray-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 group-hover:bg-amber-400 transition-all duration-300" />
                     {item.label}
                   </Link>
                 ))}
               </div>
               
               {/* Contact CTA */}
               <div className="p-2 mt-4">
                 <Link 
                   href="/contact" 
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="group relative w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-[#8A393B] to-[#a0453f] text-white rounded-2xl font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden touch-manipulation"
                 >
                   <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                   <span className="relative flex items-center">
                     Contact Us
                     <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                   </span>
                 </Link>
               </div>
             </div>
                     </div>
           
           {/* Footer */}
           <div className="px-6 py-4 border-t border-gray-700/30 bg-gray-800/30">
             <div className="text-center">
               <p className="text-sm font-semibold text-amber-400">Patil Group</p>
               <p className="text-xs text-gray-400 mt-1">Railway Engineering Excellence</p>
             </div>
           </div>
         </div>
       </div>
    </nav>
  );
};

export default Navbar;
