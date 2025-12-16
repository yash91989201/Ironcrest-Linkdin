import React from 'react';

interface AboutSectionProps {
  description: string;
  loading: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ description, loading }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-2">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Overview</h2>
      {loading ? (
        <div className="space-y-3 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
      ) : (
        <p className="text-sm text-gray-900 whitespace-pre-line leading-relaxed">
          {description}
        </p>
      )}
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
           <h3 className="text-gray-500 font-semibold mb-1">Website</h3>
           <a href="http://www.ironcrestdevelopers.com" target="_blank" rel="noopener noreferrer" className="text-linkedin-blue hover:underline font-semibold">www.ironcrestdevelopers.com</a>
        </div>
        <div>
           <h3 className="text-gray-500 font-semibold mb-1">Phone</h3>
           <span className="text-gray-900">07943494755</span>
        </div>
        <div>
           <h3 className="text-gray-500 font-semibold mb-1">Industry</h3>
           <span className="text-gray-900">Offshore Construction & Power</span>
        </div>
        <div>
           <h3 className="text-gray-500 font-semibold mb-1">Company size</h3>
           <span className="text-gray-900">10,000+ employees</span>
        </div>
      </div>
    </div>
  );
};