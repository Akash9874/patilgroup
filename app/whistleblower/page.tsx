"use client";
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const WhistleblowerPage = () => {
  useScrollAnimation();
  return (
    <div className="bg-black text-white min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto fade-in-section">
        <h1 className="text-5xl font-bold text-center text-orange-500">
          Whistleblower Policy
        </h1>
        <p className="mt-8 text-lg text-gray-300 text-center leading-relaxed max-w-3xl mx-auto">
          At Patil's Group, we are committed to maintaining a culture of transparency, integrity, and accountability. Our Whistleblower Policy provides a safe and confidential platform for employees to report any concerns related to unethical behavior, misconduct, or violations of company policies—without fear of retaliation.
        </p>

        <form className="mt-16 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-400">First Name*</label>
              <input type="text" name="first-name" id="first-name" className="mt-2 block w-full px-4 py-3 bg-black border-gray-700 border rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500" />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-400">Last Name*</label>
              <input type="text" name="last-name" id="last-name" className="mt-2 block w-full px-4 py-3 bg-black border-gray-700 border rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email*</label>
              <input type="email" name="email" id="email" className="mt-2 block w-full px-4 py-3 bg-black border-gray-700 border rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-400">Phone*</label>
              <input type="tel" name="phone" id="phone" className="mt-2 block w-full px-4 py-3 bg-black border-gray-700 border rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message*</label>
            <textarea id="message" name="message" rows={6} className="mt-2 block w-full px-4 py-3 bg-black border-gray-700 border rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-12 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
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
