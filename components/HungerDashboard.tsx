
import React, { useState } from 'react';

type HungerLevel = 'high' | 'medium' | 'low';

const HungerDashboard: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<HungerLevel>('high');

  return (
    <div className="flex flex-col items-start gap-12 w-full max-w-[358px] mx-auto pt-5">
      <div className="w-full text-white text-[24px] font-bold leading-none" style={{ fontFamily: 'Quicksand' }}>
        Hunger level
      </div>
      
      <div className="flex flex-col items-start gap-3 w-full">
        {/* Full / High Level Indicator */}
        <button 
          onClick={() => setSelectedLevel('high')}
          className={`flex w-full h-[46px] items-center gap-3 rounded-xl border transition-all relative overflow-hidden px-4 ${
            selectedLevel === 'high' 
              ? 'border-[#00C600] bg-[#222328]/50 backdrop-blur-md shadow-[0_0_15px_rgba(0,198,0,0.2)]' 
              : 'border-transparent bg-[#222328]'
          }`}
        >
           <div className="flex items-center gap-3 w-full">
             <div className="w-8 h-8 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="6" width="18" height="12" rx="2" stroke={selectedLevel === 'high' ? "#00C600" : "#969696"} strokeWidth="1.5" />
                  <path d="M22 10V14" stroke={selectedLevel === 'high' ? "#00C600" : "#969696"} strokeWidth="1.5" strokeLinecap="round" />
                  <rect x="4" y="8" width="14" height="8" rx="1" fill="#00C600" />
                </svg>
             </div>
             <span className={`text-lg font-medium font-['Quicksand'] transition-colors ${selectedLevel === 'high' ? 'text-white font-bold' : 'text-[#CDCDCD]'}`}>Full</span>
             {selectedLevel === 'high' && (
               <div className="ml-auto w-5 h-5 rounded-full bg-[#00C600] flex items-center justify-center">
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0F0E11" strokeWidth="4">
                   <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </div>
             )}
           </div>
        </button>

        {/* Medium Level Status Item */}
        <button 
          onClick={() => setSelectedLevel('medium')}
          className={`flex w-full h-[46px] items-center gap-3 rounded-xl border transition-all relative overflow-hidden px-4 ${
            selectedLevel === 'medium' 
              ? 'border-[#00C600] bg-[#222328]/50 backdrop-blur-md shadow-[0_0_15px_rgba(0,198,0,0.2)]' 
              : 'border-transparent bg-[#222328]'
          }`}
        >
          <div className="flex items-center gap-3 w-full">
            <div className="flex items-center justify-center w-8 h-8">
              <BatterySVG level="medium" active={selectedLevel === 'medium'} />
            </div>
            <span className={`text-lg font-medium font-['Quicksand'] transition-colors ${selectedLevel === 'medium' ? 'text-white font-bold' : 'text-[#CDCDCD]'}`}>Medium</span>
            {selectedLevel === 'medium' && (
               <div className="ml-auto w-5 h-5 rounded-full bg-[#00C600] flex items-center justify-center">
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0F0E11" strokeWidth="4">
                   <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </div>
             )}
          </div>
        </button>

        {/* Low Level Status Item */}
        <button 
          onClick={() => setSelectedLevel('low')}
          className={`flex w-full h-[46px] items-center gap-3 rounded-xl border transition-all relative overflow-hidden px-4 ${
            selectedLevel === 'low' 
              ? 'border-[#00C600] bg-[#222328]/50 backdrop-blur-md shadow-[0_0_15px_rgba(0,198,0,0.2)]' 
              : 'border-transparent bg-[#222328]'
          }`}
        >
          <div className="flex items-center gap-3 w-full">
            <div className="flex items-center justify-center w-8 h-8">
              <BatterySVG level="low" active={selectedLevel === 'low'} />
            </div>
            <span className={`text-lg font-medium font-['Quicksand'] transition-colors ${selectedLevel === 'low' ? 'text-white font-bold' : 'text-[#CDCDCD]'}`}>Low</span>
            {selectedLevel === 'low' && (
               <div className="ml-auto w-5 h-5 rounded-full bg-[#00C600] flex items-center justify-center">
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0F0E11" strokeWidth="4">
                   <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </div>
             )}
          </div>
        </button>
      </div>
    </div>
  );
};

const BatterySVG = ({ level, active }: { level: 'medium' | 'low', active: boolean }) => {
  const primaryColor = active ? "#00C600" : "#969696";
  const barColor = level === 'medium' ? "#FF8C00" : "#FFC400";
  
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="6" width="18" height="12" rx="2" stroke={primaryColor} strokeWidth="1.5" />
      <path d="M22 10V14" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" />
      <rect x="4" y="8" width="6" height="8" rx="1" fill={barColor} />
      {level === 'medium' && <rect x="11" y="8" width="6" height="8" rx="1" fill={barColor} />}
    </svg>
  );
};

export default HungerDashboard;
