import React, { useState } from 'react';
import { SimilarCompany } from '../types';
import { Plus } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const [errorIndices, setErrorIndices] = useState<number[]>([]);

  const similarCompanies: SimilarCompany[] = [
    { name: 'Aramco', industry: 'Oil & Gas', logo: 'https://picsum.photos/id/1015/100/100', followers: 1203940 },
    { name: 'Infosys', industry: 'IT Services', logo: 'https://picsum.photos/id/1016/100/100', followers: 10722812 },
    { name: 'Wipro', industry: 'IT Services', logo: 'https://picsum.photos/id/1018/100/100', followers: 11387507 },
    { name: 'HCLTech', industry: 'IT Services', logo: 'https://picsum.photos/id/1019/100/100', followers: 8500201 },
  ];

  const handleFollowClick = (index: number) => {
    if (!errorIndices.includes(index)) {
      setErrorIndices([...errorIndices, index]);
    }
  };

  return (
    <div className="space-y-2">
      {/* Promoted Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex justify-between items-center mb-2">
             <span className="text-xs font-semibold text-gray-500">Promoted</span>
             <span className="text-gray-400 hover:text-gray-600 cursor-pointer">•••</span>
        </div>
        <div className="flex items-start gap-3">
             <img src="https://picsum.photos/id/180/100/100" className="w-12 h-12 object-cover" alt="Ad" />
             <div>
                 <p className="text-sm text-gray-900 leading-tight">Master construction management with new AI tools.</p>
                 <button className="mt-2 text-linkedin-blue font-semibold text-sm hover:underline flex items-center gap-1">
                     Learn more <span className="text-lg">→</span>
                 </button>
             </div>
        </div>
      </div>

      {/* People Also Follow */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h2 className="text-base font-semibold text-gray-900 mb-4">People also follow</h2>
        <div className="space-y-4">
          {similarCompanies.map((company, idx) => (
            <div key={idx} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
               <img src={company.logo} alt={company.name} className="w-12 h-12 object-contain border border-gray-100" />
               <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 leading-tight hover:underline cursor-pointer">{company.name}</h3>
                  <p className="text-xs text-gray-500 leading-tight mt-0.5">{company.industry}</p>
                  <p className="text-xs text-gray-500 mt-0.5 mb-2">{company.followers.toLocaleString()} followers</p>
                  <button 
                    onClick={() => handleFollowClick(idx)}
                    className={`w-full flex items-center justify-center gap-1 border rounded-full py-1 font-semibold transition-colors text-sm ${errorIndices.includes(idx) ? 'border-red-500 text-red-600 bg-red-50' : 'border-gray-600 text-gray-600 hover:bg-gray-100 hover:border-gray-800'}`}
                  >
                      {errorIndices.includes(idx) ? (
                        <span>Error</span>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          Follow
                        </>
                      )}
                  </button>
               </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 py-1 text-sm font-semibold text-gray-600 hover:bg-gray-100 rounded transition-colors">
            Show all
        </button>
      </div>
    </div>
  );
};