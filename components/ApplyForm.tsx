"use client";

import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ApplyForm = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center px-4">
        <div className="flex justify-around text-black text-base md:text-lg mb-4 flex-wrap">
          <p>Work with Industry Leaders</p>
          <p>Innovate & Contribute to Nation-Building</p>
          <p>Opportunities for Learning & Growth</p>
        </div>
        <div className="inline-block w-40 h-0.5 bg-gradient-to-r from-blue-600 via-red-500 to-orange-500 mb-6"></div>
        <p className="max-w-5xl mx-auto text-black text-base md:text-xl mb-8">
          Be part of a team that is driving railway modernization and global expansion. Explore exciting career opportunities with Patil Group and take your career to the next level!
        </p>
        <hr className="mb-12" />
      </div>
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-amber-500 mb-12">
          Apply now
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="first-name" className="text-gray-500">First name*</label>
              <Input id="first-name" placeholder="Type" />
            </div>
            <div className="space-y-2">
              <label htmlFor="last-name" className="text-gray-500">Last name*</label>
              <Input id="last-name" placeholder="Type" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-gray-500">Email*</label>
              <Input id="email" type="email" placeholder="Type" />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-gray-500">Phone*</label>
              <Input id="phone" type="tel" placeholder="Type" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="address" className="text-gray-500">Address*</label>
            <Input id="address" placeholder="Type" />
          </div>
          <div className="space-y-2">
            <label htmlFor="position" className="text-gray-500">Position*</label>
            <Input id="position" placeholder="Type" />
          </div>
          <div className="text-center pt-6">
            <Button type="submit" variant="outline" size="lg">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm; 