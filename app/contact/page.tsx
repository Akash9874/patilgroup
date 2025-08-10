import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Image Section */}
      <div className="relative h-[50vh]">
        <img src="/seework2.jpg" alt="Contact us background" className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 p-8">
          <h1 className="text-8xl font-bold text-white">Contact</h1>
        </div>
        </div>

      {/* Content Section */}
      <div className="text-center py-20 px-4">
        <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Contact RouteWise Transport today for reliable and efficient trucking services. Our team is ready to assist you with your transportation needs.
          </p>
        <div className="mt-8 mx-auto w-1/2 h-0.5 bg-gradient-to-r from-[#8A393B] via-orange-400 to-blue-500"></div>
        <div className="mt-20 w-full max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-lg space-y-4 md:space-y-0">
            <p>Number: 1982912123</p>
            <p>Email: info@routewise.com</p>
            <p>Address: 123 Main St</p>
          </div>
          </div>
        </div>
    </div>
  );
};

export default ContactPage; 