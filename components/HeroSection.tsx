import React, { useState } from 'react';
import { CompanyDetails } from '../types';
import { Check, Plus, MoreHorizontal } from 'lucide-react';
import logo from '../logo.png';
import cover from '../cover.png';

interface HeroSectionProps {
  details: CompanyDetails;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ details }) => {
  const [followError, setFollowError] = useState(false);

  return (
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
                alt="Ironcrest Developers Logo"
                className="w-full h-full object-cover rounded"
             />
        </div>

        <div className="flex justify-between items-start">
            <div className="mt-2">
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
                      onClick={() => setFollowError(true)}
                      className={`bg-white font-semibold py-1.5 px-4 rounded-full text-base transition-colors flex items-center gap-1 border ${followError ? 'border-red-500 text-red-500 hover:bg-red-50' : 'border-linkedin-blue text-linkedin-blue hover:bg-blue-50'}`}
                    >
                         {followError ? (
                            <span>Error</span>
                         ) : (
                            <>
                              <Plus className="w-4 h-4" />
                              Follow
                            </>
                         )}
                    </button>
                    <button className="bg-linkedin-blue hover:bg-linkedin-blueHover text-white font-semibold py-1.5 px-4 rounded-full text-base transition-colors flex items-center gap-1">
                        Visit website
                    </button>
                     <button className="bg-white text-gray-600 border border-gray-600 hover:bg-gray-100 hover:border-gray-800 font-semibold py-1.5 px-3 rounded-full text-base transition-colors">
                        More
                    </button>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};