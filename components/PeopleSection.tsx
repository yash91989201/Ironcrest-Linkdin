import React, { useState } from 'react';
import { Person } from '../types';
import { UserPlus } from 'lucide-react';
import ceoImage from '../CEO.png';

export const PeopleSection: React.FC = () => {
  const people: Person[] = [
    { id: '47', name: 'Alexander Zenthera', title: 'Founder & CEO', image: ceoImage, department: 'Leadership' },
    {
      id: '1',
      name: 'Sarah Chen',
      title: 'Chief Operations Officer',
      department: 'Operations',
      image: 'https://picsum.photos/id/1027/200/200',
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      title: 'Head of Offshore Drilling',
      department: 'Operations',
      image: 'https://picsum.photos/id/338/200/200',
    },
    {
      id: '3',
      name: 'Dr. Lars Jensen',
      title: 'VP of Marine Engineering',
      department: 'Engineering',
      image: 'https://picsum.photos/id/1025/200/200',
    },
    {
      id: '4',
      name: 'Emily Thorne',
      title: 'Senior Geologist',
      department: 'Engineering',
      image: 'https://picsum.photos/id/237/200/200',
    },
    {
      id: '5',
      name: 'James O\'Connor',
      title: 'Rig Safety Supervisor',
      department: 'Operations',
      image: 'https://picsum.photos/id/1005/200/200',
    },
    {
      id: '6',
      name: 'Aisha Gupta',
      title: 'Sustainability Director',
      image: 'https://picsum.photos/id/1011/200/200',
    },
    { id: '7', name: 'Noah Williams', title: 'Lead Subsea Engineer', image: 'https://picsum.photos/id/1047/200/200', department: 'Engineering' },
    { id: '8', name: 'Priya Natarajan', title: 'Director, Renewable Projects', image: 'https://picsum.photos/id/1050/200/200', department: 'Engineering' },
    { id: '9', name: 'Alejandro Torres', title: 'Drilling Superintendent', image: 'https://picsum.photos/id/1062/200/200', department: 'Operations' },
    { id: '10', name: 'Mia Thompson', title: 'Marine Logistics Manager', image: 'https://picsum.photos/id/1074/200/200', department: 'Operations' },
    { id: '11', name: 'Omar Al-Farsi', title: 'HSSE Lead', image: 'https://picsum.photos/id/1084/200/200' },
    { id: '12', name: 'Sofia Petrov', title: 'Structural Analysis Engineer', image: 'https://picsum.photos/id/1081/200/200' },
    { id: '13', name: 'Daniel Kim', title: 'Program Manager, Offshore', image: 'https://picsum.photos/id/1082/200/200' },
    { id: '14', name: 'Lucia Romano', title: 'Senior Procurement Manager', image: 'https://picsum.photos/id/1080/200/200' },
    { id: '15', name: 'Ethan Walker', title: 'Pipeline Integrity Engineer', image: 'https://picsum.photos/id/1068/200/200' },
    { id: '16', name: 'Haruto Sato', title: 'Robotics Lead', image: 'https://picsum.photos/id/1069/200/200' },
    { id: '17', name: 'Isabella Costa', title: 'HR Business Partner', image: 'https://picsum.photos/id/1070/200/200' },
    { id: '18', name: 'Marcus Lee', title: 'Data Engineer, Operations', image: 'https://picsum.photos/id/1071/200/200', department: 'Engineering' },
    { id: '19', name: 'Lena Hoffmann', title: 'Fleet Maintenance Manager', image: 'https://picsum.photos/id/1072/200/200', department: 'Operations' },
    { id: '20', name: 'Connor Davis', title: 'Lead Surveyor', image: 'https://picsum.photos/id/1073/200/200' },
    { id: '21', name: 'Fatima Rahman', title: 'Talent Acquisition Lead', image: 'https://picsum.photos/id/1060/200/200' },
    { id: '22', name: 'Victor Alvarez', title: 'Instrumentation Engineer', image: 'https://picsum.photos/id/1059/200/200' },
    { id: '23', name: 'Grace Liu', title: 'Finance Controller', image: 'https://picsum.photos/id/1058/200/200' },
    { id: '24', name: 'Jonas Berg', title: 'Rig Operations Supervisor', image: 'https://picsum.photos/id/1057/200/200', department: 'Operations' },
    { id: '25', name: 'Helena Moreau', title: 'Strategy Manager', image: 'https://picsum.photos/id/1056/200/200' },
    { id: '26', name: 'Rajesh Iyer', title: 'Quality Assurance Lead', image: 'https://picsum.photos/id/1055/200/200' },
    { id: '27', name: 'Clara Jensen', title: 'Project Scheduler', image: 'https://picsum.photos/id/1054/200/200' },
    { id: '28', name: 'Mohammed Khan', title: 'Cybersecurity Manager', image: 'https://picsum.photos/id/1053/200/200' },
    { id: '29', name: 'Amelia Wright', title: 'Environmental Specialist', image: 'https://picsum.photos/id/1052/200/200' },
    { id: '30', name: 'Sebastian Cruz', title: 'Contracts Manager', image: 'https://picsum.photos/id/1051/200/200' },
    { id: '31', name: 'Emily Park', title: 'Communications Lead', image: 'https://picsum.photos/id/1049/200/200' },
    { id: '32', name: 'Thomas Eriksen', title: 'Hydrodynamics Engineer', image: 'https://picsum.photos/id/1048/200/200', department: 'Engineering' },
    { id: '33', name: 'Nia Okafor', title: 'Deck Operations Lead', image: 'https://picsum.photos/id/1046/200/200', department: 'Operations' },
    { id: '34', name: 'Julian Smith', title: 'Training & Competency Lead', image: 'https://picsum.photos/id/1045/200/200' },
    { id: '35', name: 'Aria Patel', title: 'Supply Chain Analyst', image: 'https://picsum.photos/id/1044/200/200' },
    { id: '36', name: 'Lucas Müller', title: 'Marine Warranty Surveyor', image: 'https://picsum.photos/id/1043/200/200', department: 'Engineering' },
    { id: '37', name: 'Zara Hassan', title: 'Corporate Counsel', image: 'https://picsum.photos/id/1042/200/200' },
    { id: '38', name: 'Diego Fernandez', title: 'Electrical Superintendent', image: 'https://picsum.photos/id/1041/200/200', department: 'Engineering' },
    { id: '39', name: 'Sophia Nguyen', title: 'Process Safety Engineer', image: 'https://picsum.photos/id/1040/200/200', department: 'Engineering' },
    { id: '40', name: 'Benjamin Clarke', title: 'Operations Excellence Lead', image: 'https://picsum.photos/id/1039/200/200', department: 'Operations' },
    { id: '41', name: 'Hana Yamada', title: 'Senior Planner', image: 'https://picsum.photos/id/1038/200/200' },
    { id: '42', name: 'Peter Kowalski', title: 'Mechanical Engineer', image: 'https://picsum.photos/id/1037/200/200', department: 'Engineering' },
    { id: '43', name: 'Mariam Diallo', title: 'Geotechnical Engineer', image: 'https://picsum.photos/id/1036/200/200', department: 'Engineering' },
    { id: '44', name: 'Andre Becker', title: 'Diving Operations Lead', image: 'https://picsum.photos/id/1035/200/200', department: 'Operations' },
    { id: '45', name: 'Chloe Martin', title: 'Design Engineer', image: 'https://picsum.photos/id/1034/200/200', department: 'Engineering' },
    { id: '46', name: 'Wei Zhang', title: 'Instrumentation Technician', image: 'https://picsum.photos/id/1033/200/200', department: 'Engineering' },
    { id: '48', name: 'Sarah Jenkins', title: 'Head Architect', image: 'https://picsum.photos/id/1128/200/200' },
    { id: '49', name: 'Marcus Thorne', title: 'Chief Engineer', image: 'https://picsum.photos/id/1129/200/200' },
    { id: '50', name: 'Elena Rodriguez', title: 'Project Director', image: 'https://picsum.photos/id/1130/200/200' }
  ];

  const [activeFilter, setActiveFilter] = useState<'All' | 'Engineering' | 'Operations'>('All');
  const [showRestricted, setShowRestricted] = useState(false);

  const filteredPeople = people.filter((person) => {
    if (activeFilter === 'All') return true;
    return person.department === activeFilter;
  });

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-2 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">People</h2>

      <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar pb-2">
        <button
          onClick={() => setActiveFilter('All')}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap ${activeFilter === 'All'
              ? 'bg-green-700 text-white'
              : 'border border-gray-400 text-gray-600 hover:bg-gray-100'
            }`}
        >
          All Employees
        </button>
        <button
          onClick={() => setActiveFilter('Engineering')}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap ${activeFilter === 'Engineering'
              ? 'bg-green-700 text-white'
              : 'border border-gray-400 text-gray-600 hover:bg-gray-100'
            }`}
        >
          Engineering
        </button>
        <button
          onClick={() => setActiveFilter('Operations')}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap ${activeFilter === 'Operations'
              ? 'bg-green-700 text-white'
              : 'border border-gray-400 text-gray-400 hover:bg-gray-100'
            }`}
        >
          Operations
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredPeople.map((person) => (
          <div key={person.id} className="flex items-start gap-3 p-3 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
            <img src={person.image} alt={person.name} className="w-16 h-16 rounded-full object-cover" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-base">{person.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{person.title}</p>
               <button
                 disabled
                 className="flex items-center gap-1 px-4 py-1 rounded-full border border-gray-300 text-gray-400 font-semibold text-sm bg-gray-50 cursor-not-allowed transition-colors"
               >
                 <UserPlus className="w-4 h-4" />
                 Connect
               </button>
            </div>
          </div>
        ))}
       </div>
       <div className="mt-6 border-t border-gray-100 pt-4">
       </div>

       {showRestricted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full mx-4 border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Region restricted</h3>
            <p className="text-sm text-gray-600 mb-4">
              Connecting with employees from this region is currently restricted.
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
    </div>
  );
};
