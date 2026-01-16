import React, { useState } from 'react';
import { CompanyDetails } from '../types';
import { Check, Plus, MoreHorizontal } from 'lucide-react';
import logo from '../logo.png';
import cover from '../cover.png';

interface HeroSectionProps {
  details: CompanyDetails;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ details }) => {
  const [showRestricted, setShowRestricted] = useState(false);

  return (
    <>
      <div className="bg-white rounded-t-lg shadow-sm border border-gray-200 overflow-hidden relative">
        {/* Banner Image */}
        <div className="h-[200px] w-full bg-gray-300 relative">
          <img
            src={cover}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Details Container */}
        <div className="px-6 pb-4 pt-12 relative">
          {/* Logo (Absolute Positioned) */}
          <div className="absolute -top-16 left-6 w-32 h-32 bg-white p-1 rounded-lg shadow-sm border border-gray-200">
               <img
                 src={logo}
                  alt="Zenthera groups Logo"
                  className="w-full h-full object-cover rounded"
               />
          </div>

          <div className="flex justify-between items-start">
              <div className="mt-6">
                  <h1 className="text-2xl font-bold text-gray-900 leading-tight">{details.name}</h1>
                  <p className="text-base text-gray-900 mt-1">{details.tagline}</p>

                  <div className="flex items-center text-sm text-gray-500 mt-2 gap-2">
                      <span>{details.industry}</span>
                      <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                      <span>{details.location}</span>
                      <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                      <span className="hover:text-linkedin-blue cursor-pointer font-semibold text-linkedin-blue underline-offset-2 hover:underline">
                          {details.followers.toLocaleString()} followers
                      </span>
                      <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                      <span className="hover:text-linkedin-blue cursor-pointer hover:underline">
                          {details.employees} employees
                      </span>
                  </div>

                   <div className="flex items-center gap-2 mt-4">
                       <button
                         onClick={(e) => e.preventDefault()}
                         className="bg-white font-semibold py-1.5 px-4 rounded-full text-base transition-colors flex items-center gap-1 border border-linkedin-blue text-linkedin-blue hover:bg-blue-50"
                       >
                         <Plus className="w-4 h-4" />
                         Follow
                       </button>
                      <a
                        href="https://www.zentheragroups.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-linkedin-blue hover:bg-linkedin-blueHover text-white font-semibold py-1.5 px-4 rounded-full text-base transition-colors flex items-center gap-1"
                      >
                        Visit website
                      </a>
                  </div>
              </div>

          </div>
        </div>
      </div>

      {showRestricted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full mx-4 border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Region restricted</h3>
            <p className="text-sm text-gray-600 mb-4">
              Following this company from this region is currently restricted.
            </p>
            <button
              onClick={() => setShowRestricted(false)}
              className="w-full bg-linkedin-blue hover:bg-linkedin-blueHover text-white font-semibold py-2.5 px-4 rounded-full text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
