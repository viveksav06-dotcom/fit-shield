
import React from 'react';

const HungerDashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-start gap-12 w-full max-w-[358px] relative">
      <div className="w-full text-white text-2xl font-bold leading-none">
        Hunger level
      </div>
      
      <div className="flex flex-col items-start gap-3 w-full relative">
        {/* Full / High Level Indicator */}
        <div className="flex w-full h-[46px] items-center gap-3 rounded-xl border-[0.6px] border-[#00C600] bg-[#222328]/50 backdrop-blur-md relative overflow-hidden px-4">
           {/* Visual progress bar representation */}
           <div className="h-1.5 w-full bg-[#1a1b1f] rounded-full overflow-hidden">
             <div className="h-full bg-[#00C600] w-[95%] shadow-[0_0_10px_#00C600]"></div>
           </div>
        </div>

        {/* Medium Level Status Item */}
        <StatusCard 
          label="Medium" 
          level="medium"
        />

        {/* Low Level Status Item */}
        <StatusCard 
          label="Low" 
          level="low"
        />
      </div>
    </div>
  );
};

interface StatusCardProps {
  label: string;
  level: 'medium' | 'low';
}

const StatusCard: React.FC<StatusCardProps> = ({ label, level }) => {
  return (
    <div className="flex w-full p-[10px_16px] items-center gap-3 rounded-xl bg-[#222328] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] relative group cursor-default">
      <div className="flex items-center justify-center w-8 h-8 relative">
        <BatteryIcon level={level} />
      </div>
      <span className="text-[#CDCDCD] text-lg font-medium font-['Quicksand']">{label}</span>
    </div>
  );
};

const BatteryIcon: React.FC<{ level: 'medium' | 'low' }> = ({ level }) => {
  // Replicating the visual style of the custom SVG provided
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Battery Container */}
      <rect x="6" y="4" width="12" height="18" rx="2" stroke="#666" strokeWidth="1.5" />
      <rect x="9" y="2" width="6" height="2" rx="0.5" fill="#666" />
      
      {/* Battery Levels based on status */}
      {level === 'medium' ? (
        <>
          <rect x="8" y="15" width="8" height="3" rx="0.5" fill="#FF8C00" />
          <rect x="8" y="11" width="8" height="3" rx="0.5" fill="#FF8C00" />
          <rect x="8" y="7" width="8" height="3" rx="0.5" fill="#444" />
        </>
      ) : (
        <>
          <rect x="8" y="15" width="8" height="3" rx="0.5" fill="#FFC400" />
          <rect x="8" y="11" width="8" height="3" rx="0.5" fill="#444" />
          <rect x="8" y="7" width="8" height="3" rx="0.5" fill="#444" />
        </>
      )}
    </svg>
  );
};

export default HungerDashboard;
