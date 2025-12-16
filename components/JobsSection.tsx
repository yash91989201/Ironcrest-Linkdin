import React from 'react';
import { Job } from '../types';
import { MapPin, Clock, Briefcase } from 'lucide-react';

export const JobsSection: React.FC = () => {
  // SVG Data URI for Ironcrest Logo (reused for consistency)
  const LOGO_URL = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Crect width='512' height='512' rx='100' fill='%23ea8c10'/%3E%3Cpath fill='white' d='M384.6 153.2l-51.4-51.4c-9.2-9.2-24.2-9.2-33.4 0L193 208.6l-39-39c-9.2-9.2-24.2-9.2-33.4 0L76.9 213.3c-9.2 9.2-9.2 24.2 0 33.4l39 39L53.7 347.9c-15.3 15.3-15.3 40.1 0 55.4l55.4 55.4c15.3 15.3 40.1 15.3 55.4 0l62.2-62.2 39 39c9.2 9.2 24.2 9.2 33.4 0l43.7-43.7c9.2-9.2 9.2-24.2 0-33.4l-39-39 106.8-106.8c9.2-9.2 9.2-24.2 0-33.4z'/%3E%3C/svg%3E";

  const jobs: Job[] = [
    {
      id: '1',
      title: 'Senior Offshore Structural Engineer',
      location: 'Aberdeen, Scotland (Hybrid)',
      type: 'Full-time',
      postedAgo: '2 days ago',
      companyName: 'Ironcrest Developers',
      companyLogo: LOGO_URL
    },
    {
      id: '2',
      title: 'Deep Sea Operations Manager',
      location: 'Houston, TX, USA (On-site)',
      type: 'Contract',
      postedAgo: '5 days ago',
      companyName: 'Ironcrest Developers',
      companyLogo: LOGO_URL
    },
    {
      id: '3',
      title: 'Marine Safety Officer',
      location: 'Dubai, UAE (On-site)',
      type: 'Full-time',
      postedAgo: '1 week ago',
      companyName: 'Ironcrest Developers',
      companyLogo: LOGO_URL
    },
    {
      id: '4',
      title: 'Renewable Energy Project Lead',
      location: 'Oslo, Norway',
      type: 'Full-time',
      postedAgo: '2 weeks ago',
      companyName: 'Ironcrest Developers',
      companyLogo: LOGO_URL
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-2 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900">Recently Posted Jobs</h2>
      </div>
      <div>
        {jobs.map((job) => (
          <div key={job.id} className="p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 cursor-pointer flex gap-4">
            <img src={job.companyLogo} alt={job.companyName} className="w-12 h-12 rounded object-contain" />
            <div className="flex-1">
              <h3 className="text-base font-semibold text-linkedin-blue hover:underline">{job.title}</h3>
              <p className="text-sm text-gray-900">{job.companyName}</p>
              <div className="flex flex-wrap gap-y-1 gap-x-3 text-sm text-gray-500 mt-1">
                 <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                 <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {job.type}</span>
                 <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {job.postedAgo}</span>
              </div>
            </div>
            <button className="h-fit px-4 py-1.5 rounded-full border border-linkedin-blue text-linkedin-blue font-semibold text-sm hover:bg-blue-50 transition-colors">
              Apply
            </button>
          </div>
        ))}
      </div>
      <div className="p-3 text-center border-t border-gray-200">
          <button className="text-sm font-semibold text-gray-600 hover:text-gray-900">Show all jobs →</button>
      </div>
    </div>
  );
};