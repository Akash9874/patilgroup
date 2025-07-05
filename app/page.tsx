'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

// Counter hook for animated counting
function useCounter(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * (end - start) + start));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start, isVisible]);

  return { count, setIsVisible };
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Counter hooks for each stat
  const sleepers = useCounter(40, 2500);
  const employees = useCounter(5000, 2000);
  const zones = useCounter(14, 1500);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          // Trigger counter animations when stats section becomes visible
          if (entry.target.id === 'stats-section') {
            sleepers.setIsVisible(true);
            employees.setIsVisible(true);
            zones.setIsVisible(true);
          }
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.fade-in-section, .slide-in-left, .slide-in-right, .scale-in'
    );
    
    animatedElements.forEach((el) => observer.observe(el));

    // Also observe the stats section
    const statsSection = document.getElementById('stats-section');
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, [sleepers, employees, zones]);

  return (
    <div className="overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center animate-fadeInLeft">
              <img 
                src="/pg.png" 
                alt="Patil Group Logo" 
                className="h-10 w-auto transition-all duration-300 hover-scale cursor-pointer"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 animate-fadeInRight">
              <a href="#" className={`transition-all duration-300 font-medium relative group ${
                scrollY > 50 ? 'text-gray-700 hover:text-amber-700' : 'text-white hover:text-amber-200'
              }`}>
                Home
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  scrollY > 50 ? 'bg-amber-700' : 'bg-amber-200'
                }`}></span>
              </a>
              <a href="#" className={`transition-all duration-300 font-medium relative group ${
                scrollY > 50 ? 'text-gray-700 hover:text-amber-700' : 'text-white hover:text-amber-200'
              }`}>
                About
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  scrollY > 50 ? 'bg-amber-700' : 'bg-amber-200'
                }`}></span>
              </a>
              <a href="#" className={`transition-all duration-300 font-medium relative group ${
                scrollY > 50 ? 'text-gray-700 hover:text-amber-700' : 'text-white hover:text-amber-200'
              }`}>
                Products
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  scrollY > 50 ? 'bg-amber-700' : 'bg-amber-200'
                }`}></span>
              </a>
              <a href="#" className={`transition-all duration-300 font-medium relative group ${
                scrollY > 50 ? 'text-gray-700 hover:text-amber-700' : 'text-white hover:text-amber-200'
              }`}>
                Solutions
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  scrollY > 50 ? 'bg-amber-700' : 'bg-amber-200'
                }`}></span>
              </a>
              <a href="#" className={`transition-all duration-300 font-medium relative group ${
                scrollY > 50 ? 'text-gray-700 hover:text-amber-700' : 'text-white hover:text-amber-200'
              }`}>
                Projects
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  scrollY > 50 ? 'bg-amber-700' : 'bg-amber-200'
                }`}></span>
              </a>
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
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-amber-700 transition-all duration-300 hover:bg-amber-50 rounded-md">Home</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-amber-700 transition-all duration-300 hover:bg-amber-50 rounded-md">About</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-amber-700 transition-all duration-300 hover:bg-amber-50 rounded-md">Products</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-amber-700 transition-all duration-300 hover:bg-amber-50 rounded-md">Solutions</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-amber-700 transition-all duration-300 hover:bg-amber-50 rounded-md">Projects</a>
                <button className="w-full text-left px-3 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-all duration-300 hover-lift">
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/herovideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Diagonal Cut Overlays - Increased left cut width for text */}
        <div className="absolute inset-0">
          {/* Left diagonal cut with #1E1E1E color - increased width to fit text */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundColor: '#1E1E1E',
              clipPath: 'polygon(0% 0%, 35% 0%, 25% 100%, 0% 100%)'
            }}
          ></div>
          
          {/* Right diagonal cut with #1E1E1E color - kept narrow */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundColor: '#1E1E1E',
              clipPath: 'polygon(85% 100%, 90% 0%, 100% 0%, 100% 100%)'
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full">
            <div className="max-w-lg ml-4 sm:ml-6 lg:ml-12 xl:ml-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-2 sm:mb-4 animate-fadeInUp">
                Delivering
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight animate-fadeInUp animate-delay-300">
                Track solutions
              </h2>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animate-delay-500">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1 hover-glow cursor-pointer">
            <div className="w-1 h-3 bg-white/70 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Made in India Section 1 */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="slide-in-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-800 mb-6 lg:mb-8 leading-tight">
                Made in India
              </h2>
            </div>
            <div className="space-y-6 slide-in-right lg:mt-16">
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Patil Group is a trusted leader in railway infrastructure, delivering 
                high-quality track solutions for urban and interurban transport. 
                From design to execution, we provide innovative and sustainable 
                railway components that power seamless mobility.
              </p>
              <button className="inline-flex items-center text-amber-700 hover:text-amber-800 font-semibold text-lg group hover-lift transition-all duration-300">
                Read more 
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Made in India Section 2 */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 lg:col-span-2 fade-in-section">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 lg:pr-0">
                With over 50 years of legacy, Patil Group has been a key partner in India's railway 
                infrastructure, driving innovation from wooden to concrete to composite sleepers
              </h3>
              <div className="mt-16 lg:mt-24">
                <h4 className="text-3xl sm:text-4xl font-bold text-amber-800 mb-4 animate-gradient-shift bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text text-transparent">
                  Unmatched Expertise
                </h4>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-3 scale-in">
              <div className="relative hover-lift">
                <img
                  src="https://images.pexels.com/photos/3634750/pexels-photo-3634750.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Modern Train"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committed to Progress Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="slide-in-left lg:col-span-3 pl-4 sm:pl-6 lg:pl-8 xl:pl-16">
            <h2 
              className="text-left"
              style={{
                fontFamily: 'Clash Grotesk, Arial, sans-serif',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '86px',
                lineHeight: '1.1',
                color: '#8A393B'
              }}
            >
              <div>Committed to Progress,</div>
              <div>Driven by <span style={{ color: '#D97706' }}>Innovation</span></div>
            </h2>
          </div>
          <div className="space-y-6 slide-in-right lg:col-span-2 pt-16 lg:pt-32 pr-4 sm:pr-6 lg:pr-8 xl:pr-16">
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Patil Group has played a pivotal role in revolutionizing India's rail 
              infrastructure, consistently delivering exceptional results with a 
              focus on innovation, efficiency, and quality. From supplying over 
              40 million sleepers to Indian Railways and industrial giants, the 
              company has made significant contributions to the growth and 
              modernization of the rail sector.
            </p>
            <button className="inline-flex items-center text-gray-800 hover:text-amber-700 font-semibold text-lg group hover-lift transition-all duration-300">
              About us 
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="bg-[#F2F2F2] overflow-hidden">
        <div className="grid lg:grid-cols-5">
          {/* Left side - Content */}
          <div className="lg:col-span-3 space-y-6 lg:space-y-8 p-8 sm:p-12 lg:p-16">
            <h2 
              className="flex items-center"
              style={{
                fontFamily: 'inherit', // Use the inherited font
                fontWeight: 500,
                fontSize: '64px',
                lineHeight: '61px',
                color: '#8A393B'
              }}
            >
              Our Solutions
            </h2>
            
            <div className="space-y-4 lg:space-y-6">
              <h3 
                className="flex items-center"
                style={{
                  fontFamily: 'inherit',
                  fontWeight: 500,
                  fontSize: '32px',
                  lineHeight: '61px',
                  color: '#000000'
                }}
              >
                Concrete Sleepers
              </h3>
              <p 
                style={{
                  fontFamily: 'inherit',
                  fontWeight: 400,
                  fontSize: '24px',
                  lineHeight: '28px',
                  color: '#000000'
                }}
              >
                Engineered for strength and durability, our concrete sleepers enhance track 
                stability with minimal maintenance
              </p>
            </div>

            <button 
              className="inline-flex items-center group transition-all duration-300"
              style={{
                fontFamily: 'inherit',
                fontWeight: 500,
                fontSize: '24px',
                lineHeight: '72px',
                color: '#000000',
                gap: '13px'
              }}
            >
              Products 
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={28} />
            </button>
          </div>

          {/* Right side - Concrete Sleepers Image */}
          <div 
            className="lg:col-span-2 min-h-[400px] lg:min-h-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(/sleeper.png)',
              clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)'
            }}
          >
            {/* This div is for the background image */}
          </div>
        </div>
      </section>

      {/* In News Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-800 mb-12 lg:mb-16 fade-in-section">
            In News
          </h2>
          
          <div className="space-y-12 lg:space-y-0 lg:relative">
            {/* News Item 1 */}
            <div className="lg:mb-16 max-w-md lg:max-w-lg fade-in-section animate-delay-200">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-500 mb-4 lg:mb-6 leading-tight hover:text-orange-600 transition-colors duration-300">
                Patil Group recently acquired 'Apnatech'.
              </h3>
              <button className="inline-flex items-center text-gray-800 hover:text-amber-700 font-semibold group mb-4 transition-all duration-300">
                Read more 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </button>
              <div className="w-full h-1 bg-gradient-to-r from-amber-800 via-blue-600 to-orange-500 rounded-full animate-gradient-shift"></div>
            </div>

            {/* News Item 2 */}
            <div className="lg:mb-16 max-w-md lg:max-w-lg lg:mx-auto lg:translate-x-[-25%] fade-in-section animate-delay-400">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-500 mb-4 lg:mb-6 leading-tight hover:text-orange-600 transition-colors duration-300">
                India's largest foundry opened in Bokaro by Patil group.
              </h3>
              <button className="inline-flex items-center text-gray-800 hover:text-amber-700 font-semibold group mb-4 transition-all duration-300">
                Read more 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </button>
              <div className="w-full h-1 bg-gradient-to-r from-amber-800 via-blue-600 to-orange-500 rounded-full animate-gradient-shift"></div>
            </div>

            {/* News Item 3 */}
            <div className="max-w-md lg:max-w-lg lg:ml-auto lg:mt-8 lg:translate-x-8 fade-in-section animate-delay-600">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-500 mb-4 lg:mb-6 leading-tight hover:text-orange-600 transition-colors duration-300">
                India's Longest Railway Tunnel opens to Traffic
              </h3>
              <button className="inline-flex items-center text-gray-800 hover:text-amber-700 font-semibold group mb-4 transition-all duration-300">
                Read more 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </button>
              <div className="w-full h-1 bg-gradient-to-r from-amber-800 via-blue-600 to-orange-500 rounded-full animate-gradient-shift"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers That Define Our Legacy Section */}
      <section id="stats-section" className="py-20 sm:py-24 lg:py-32 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#8A393B] mb-16 lg:mb-20 text-center">
            Numbers That Define Our Legacy
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 - Sleepers */}
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-[#8A393B] mb-2">
                +{sleepers.count} Million
              </p>
              <p className="text-lg text-black">
                Sleepers Supplied
              </p>
            </div>

            {/* Stat 2 - Employees */}
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-[#8A393B] mb-2">
                +{employees.count.toLocaleString()}
              </p>
              <p className="text-lg text-black">
                Employees
              </p>
            </div>

            {/* Stat 3 - Railway Zones */}
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-[#8A393B] mb-2">
                +{zones.count}
              </p>
              <p className="text-lg text-black">
                Railway Zones Served
              </p>
            </div>

            {/* Stat 4 - Largest */}
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-[#8A393B] mb-2">
                Largest
              </p>
              <p className="text-lg text-black">
                Rail Welding Depot in India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2 fade-in-section">
              <div className="text-2xl font-bold text-amber-400 mb-4 hover-scale cursor-pointer">
                PATIL
                <span className="block text-sm font-normal text-amber-300 leading-none">GROUP</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Leading India's railway infrastructure development with innovative track solutions 
                and sustainable engineering practices.
              </p>
            </div>
            <div className="fade-in-section animate-delay-200">
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Products</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Projects</a></li>
              </ul>
            </div>
            <div className="fade-in-section animate-delay-400">
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors duration-300">Email: info@patilgroup.com</li>
                <li className="hover:text-white transition-colors duration-300">Phone: +91 98765 43210</li>
                <li className="hover:text-white transition-colors duration-300">Address: Mumbai, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400 fade-in-section animate-delay-600">
            <p>&copy; 2025 Patil Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}