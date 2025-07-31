"use client";
import React from 'react';

const WhistleblowerPage = () => {
  return (
    <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-[#8A393B]">
          Whistleblower Policy
        </h1>
        <p className="mt-8 text-xl text-gray-700 text-center leading-relaxed">
          At Patil's Group, we are committed to maintaining a culture of transparency, integrity, and accountability. Our Whistleblower Policy provides a safe and confidential platform for employees to report any concerns related to unethical behavior, misconduct, or violations of company policies—without fear of retaliation.
        </p>

        <form className="mt-16 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="first-name" className="block text-lg font-medium text-gray-700">First name*</label>
              <input type="text" name="first-name" id="first-name" placeholder="Type" className="mt-2 block w-full px-4 py-3 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-lg font-medium text-gray-700">Last name*</label>
              <input type="text" name="last-name" id="last-name" placeholder="Type" className="mt-2 block w-full px-4 py-3 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email*</label>
              <input type="email" name="email" id="email" placeholder="Type" className="mt-2 block w-full px-4 py-3 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone*</label>
              <input type="tel" name="phone" id="phone" placeholder="Type" className="mt-2 block w-full px-4 py-3 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message*</label>
            <textarea id="message" name="message" rows={6} placeholder="Type" className="mt-2 block w-full px-4 py-3 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-12 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-[#8A393B] hover:bg-[#7A2E30] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WhistleblowerPage;
