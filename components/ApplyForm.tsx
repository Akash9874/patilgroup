"use client";

import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ApplyForm = () => {
  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
          Apply Now
        </h2>
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="first-name" className="text-gray-400">First name*</label>
              <Input id="first-name" className="bg-black border-gray-700 rounded-full" />
            </div>
            <div className="space-y-2">
              <label htmlFor="last-name" className="text-gray-400">Last name*</label>
              <Input id="last-name" className="bg-black border-gray-700 rounded-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="email" className="text-gray-400">Email*</label>
              <Input id="email" type="email" className="bg-black border-gray-700 rounded-full" />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-gray-400">Phone*</label>
              <Input id="phone" type="tel" className="bg-black border-gray-700 rounded-full" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="address" className="text-gray-400">Address*</label>
            <Input id="address" className="bg-black border-gray-700 rounded-full" />
          </div>
          <div className="space-y-2">
            <label htmlFor="position" className="text-gray-400">Position*</label>
            <Input id="position" className="bg-black border-gray-700 rounded-full" />
          </div>
          <div className="text-center pt-6">
            <Button type="submit" className="bg-gray-800 text-white hover:bg-gray-700 rounded-full px-12">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm; 