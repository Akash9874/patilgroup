import Navbar from '@/components/Navbar';
import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('/mt train.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-6xl md:text-8xl font-bold animate-fadeInUp">Get in Touch</h1>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-12">
            Contact RouteWise Transport today for reliable and efficient trucking services. Our team is ready to assist you with your transportation needs.
          </p>
          <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8 text-lg">
            <p><span className="text-gray-500">Number:</span>1982912123</p>
            <p><span className="text-gray-500">Email:</span>info@routewise.com</p>
            <p><span className="text-gray-500">Address:</span>123 Main St</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 