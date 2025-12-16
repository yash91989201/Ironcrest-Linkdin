import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TabNavigation } from './components/TabNavigation';
import { AboutSection } from './components/AboutSection';
import { FeedSection } from './components/FeedSection';
import { JobsSection } from './components/JobsSection';
import { PeopleSection } from './components/PeopleSection';
import { Sidebar } from './components/Sidebar';
import { Tab, CompanyDetails, Post } from './types';
import { generateCompanyDescription, generateRecentPosts } from './services/geminiService';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [description, setDescription] = useState<string>('');
  const [isRestricted, setIsRestricted] = useState<boolean>(false);

  const companyDetails: CompanyDetails = {
    name: 'Ironcrest Developers',
    tagline: 'Global Leaders in Offshore Construction & Power Infrastructure.',
    industry: 'Civil Engineering • Oil & Energy • Construction',
    location: 'Metropolis, NY',
    followers: 142053,
    employees: '10,000+',
    description: '' // Filled by API or Fallback
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [desc, fetchedPosts] = await Promise.all([
        generateCompanyDescription(),
        generateRecentPosts()
      ]);
      setDescription(desc);
      setPosts(fetchedPosts);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (isRestricted) {
    return (
      <div className="min-h-screen bg-[#f3f2ef] flex flex-col items-center justify-center p-4 font-sans">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center max-w-sm w-full">
           <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
           </div>
           <h2 className="text-xl font-bold text-gray-900 mb-2">Page is restricted</h2>
           <p className="text-gray-600 text-sm mb-6">You need permission to access this section.</p>
           <button 
             onClick={() => setIsRestricted(false)}
             className="w-full bg-linkedin-blue hover:bg-linkedin-blueHover text-white font-semibold py-2.5 px-4 rounded-full transition-colors"
           >
             Tap to go back
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f2ef] font-sans pb-12">
      <Navbar onNavClick={() => setIsRestricted(true)} />

      <main className="pt-[84px] sm:pt-[72px] max-w-[1128px] mx-auto px-0 sm:px-4 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
        
        {/* Left Column (Main Content) */}
        <div className="flex flex-col">
          <HeroSection details={companyDetails} />
          
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          
          <div className="mt-2">
            {activeTab === Tab.HOME && (
              <>
                <AboutSection description={description} loading={loading} />
                <FeedSection posts={posts} loading={loading} />
              </>
            )}
            {activeTab === Tab.ABOUT && (
               <AboutSection description={description} loading={loading} />
            )}
            {activeTab === Tab.POSTS && (
               <FeedSection posts={posts} loading={loading} />
            )}
            {activeTab === Tab.JOBS && (
               <JobsSection />
            )}
            {activeTab === Tab.PEOPLE && (
               <PeopleSection />
            )}
          </div>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

      </main>
    </div>
  );
};

export default App;