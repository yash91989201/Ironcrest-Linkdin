import React from 'react';
import { Rocket, Users, MonitorPlay, Briefcase, Puzzle, Laptop } from 'lucide-react';

interface NavbarProps {
  onNavClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const navItems = [
    { icon: Rocket, label: 'Top Content' },
    { icon: Users, label: 'People' },
    { icon: MonitorPlay, label: 'Learning' },
    { icon: Briefcase, label: 'Jobs', active: true }, // Jobs is underlined in the image
    { icon: Puzzle, label: 'Games' },
    { icon: Laptop, label: 'Get the app' },
  ];

  const LINKEDIN_URL = "https://www.linkedin.com/?trk=guest_homepage-jobseeker_nav-header-logo";

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50 px-4 h-[72px] sm:h-[52px]">
      <div className="max-w-[1128px] mx-auto h-full flex items-center justify-between">
        
        {/* Full Logo: Linked + [in] */}
        <div className="flex items-center">
          <span className="text-linkedin-blue font-bold text-2xl tracking-tight hidden sm:block mr-0.5">Linked</span>
          <div className="text-linkedin-blue">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 sm:w-9 sm:h-9">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </div>
        </div>

        <div className="flex items-center h-full">
            {/* Nav Links */}
            <ul className="hidden md:flex items-center gap-2 lg:gap-6 h-full mr-4">
            {navItems.map((item, idx) => (
                <li 
                  key={idx} 
                  onClick={onNavClick}
                  className={`flex flex-col items-center justify-center cursor-pointer min-w-[60px] h-full border-b-2 ${item.active ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black'} transition-colors`}
                >
                  <item.icon className={`w-6 h-6 ${item.active ? 'fill-current' : ''}`} strokeWidth={1.5} />
                  <span className="text-xs mt-1">{item.label}</span>
                </li>
            ))}
            </ul>

            {/* Divider */}
            <div className="hidden md:block h-8 w-[1px] bg-gray-200 mr-4"></div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
                <a href={LINKEDIN_URL} className="hidden sm:block px-6 py-2.5 rounded-full text-base font-semibold text-linkedin-blue hover:bg-blue-50 hover:shadow-[inset_0_0_0_1px_#0a66c2] transition-all border border-transparent text-center decoration-0">
                    Sign in
                </a>
                <a href={LINKEDIN_URL} className="px-6 py-2.5 rounded-full text-base font-semibold text-white bg-linkedin-blue hover:bg-linkedin-blueHover transition-colors text-center decoration-0">
                    Join for free
                </a>
            </div>
        </div>

      </div>
    </nav>
  );
};