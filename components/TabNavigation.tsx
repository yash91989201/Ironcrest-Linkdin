import React from 'react';
import { Tab } from '../types';

interface TabNavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="bg-white border-x border-b border-gray-200 px-4">
      <div className="flex gap-1 overflow-x-auto no-scrollbar">
        {Object.values(Tab).map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`
              relative px-3 py-3 font-semibold text-sm whitespace-nowrap transition-colors
              ${activeTab === tab 
                ? 'text-green-700' 
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}
            `}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-green-700 rounded-t-sm" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};