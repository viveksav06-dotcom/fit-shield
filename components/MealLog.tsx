
import React from 'react';

const MealLog: React.FC = () => {
  const days = [
    { d: '14 Sun', active: false },
    { d: '15 Mon', active: false },
    { d: '16 Tue', active: true },
    { d: '17 Wed', active: false },
    { d: '18 Thu', active: false },
  ];

  return (
    <div className="flex flex-col items-center w-full pt-20 px-4 gap-6 pb-10">
      {/* Month Header */}
      <div className="w-full flex justify-between items-center">
        <h2 className="text-white text-[20px] font-bold" style={{ fontFamily: 'Quicksand' }}>April 2024</h2>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#969696" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 2V6" stroke="#969696" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 2V6" stroke="#969696" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 10H21" stroke="#969696" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Date Selector */}
      <div className="flex w-full overflow-x-auto no-scrollbar gap-3 pb-2">
        {days.map((day, i) => (
          <div 
            key={i} 
            className={`flex flex-col items-center justify-center min-w-[62px] h-[72px] rounded-[16px] border ${day.active ? 'bg-[#8FFC86] border-[#8FFC86]' : 'bg-[#222328] border-[#2F2F2F]'}`}
          >
            <span className={`text-[12px] font-bold ${day.active ? 'text-[#0F0E11]' : 'text-[#969696]'}`} style={{ fontFamily: 'Quicksand' }}>
              {day.d.split(' ')[1]}
            </span>
            <span className={`text-[20px] font-bold ${day.active ? 'text-[#0F0E11]' : 'text-white'}`} style={{ fontFamily: 'Lexend' }}>
              {day.d.split(' ')[0]}
            </span>
          </div>
        ))}
      </div>

      {/* Daily Progress Card */}
      <div className="w-full p-5 rounded-[24px] bg-[#222328] flex flex-col gap-5 border border-[#2F2F2F] shadow-lg">
        <div className="flex justify-between items-center">
          <span className="text-white text-[16px] font-bold" style={{ fontFamily: 'Quicksand' }}>Daily Progress</span>
          <button className="text-[#8FFC86] text-[13px] font-bold flex items-center gap-1" style={{ fontFamily: 'Quicksand' }}>
            Detail
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4.5 9L7.5 6L4.5 3" stroke="#8FFC86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="flex items-center gap-6">
          {/* Main Kcal Ring */}
          <div className="relative w-[86px] h-[86px] flex-shrink-0 flex items-center justify-center">
            <svg width="86" height="86" viewBox="0 0 67 67" fill="none" className="scale-[1.28]">
               <path d="M33.5 0C37.8993 5.24609e-08 42.2555 0.866503 46.3199 2.55004C50.3843 4.23357 54.0773 6.70116 57.1881 9.81192C60.2988 12.9227 62.7664 16.6157 64.45 20.6801C66.1335 24.7445 67 29.1007 67 33.5L59.63 33.5C59.63 30.0686 58.9541 26.6707 57.641 23.5005C56.3278 20.3302 54.4031 17.4497 51.9767 15.0233C49.5503 12.5969 46.6698 10.6722 43.4995 9.35903C40.3293 8.04587 36.9314 7.37 33.5 7.37V0Z" fill="#FEFFC4" stroke="#2F2F37" strokeWidth="0.8"/>
               <path d="M67 33.5C67 41.649 64.0297 49.5186 58.6452 55.6353C53.2607 61.7519 45.8313 65.6962 37.7481 66.7296C29.6649 67.7629 21.4821 65.8145 14.7321 61.2491C7.98198 56.6838 3.12743 49.8145 1.07739 41.9276L8.21036 40.0735C9.8094 46.2253 13.5959 51.5833 18.861 55.1443C24.1261 58.7053 30.5086 60.2251 36.8135 59.4191C43.1184 58.613 48.9133 55.5365 53.1132 50.7655C57.3131 45.9945 59.63 39.8562 59.63 33.5H67Z" fill="#AED2FF" stroke="#2F2F37" strokeWidth="0.8"/>
               <path d="M1.50139 43.4166C0.134026 39.0044 -0.306098 34.3572 0.208669 29.7667C0.723436 25.1763 2.18197 20.7419 4.49264 16.7422L10.8743 20.4289C9.07194 23.5487 7.93428 27.0075 7.53276 30.588C7.13124 34.1686 7.47454 37.7935 8.54109 41.2349L1.50139 43.4166Z" fill="#BCA2FF" stroke="#2F2F37" strokeWidth="0.8"/>
               <path d="M4.33889 17.0112C7.27377 11.8208 11.5409 7.50768 16.6996 4.51732C21.8583 1.52696 27.7217 -0.0323096 33.6844 0.000507362L33.6438 7.3704C28.9929 7.3448 24.4195 8.56103 20.3957 10.8935C16.3719 13.226 13.0435 16.5902 10.7543 20.6388L4.33889 17.0112Z" fill="#FFABF4" stroke="#2F2F37" strokeWidth="0.8"/>
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="lexend font-bold text-[20px] text-white leading-tight">1240</span>
              <span className="lexend text-[10px] text-[#CCCCCC] font-medium tracking-tight">Kcal Left</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 flex-1">
             <ProgressItem color="#FEFFC4" label="Protein" current={65} total={120} />
             <ProgressItem color="#AED2FF" label="Carbs" current={140} total={250} />
             <ProgressItem color="#BCA2FF" label="Fats" current={32} total={70} />
             <ProgressItem color="#FFABF4" label="Fiber" current={12} total={35} />
          </div>
        </div>
      </div>

      {/* Meal Sections */}
      <div className="w-full flex flex-col gap-4">
        <MealCard type="Breakfast" calories={340} time="08:30 AM" icon="🥣" />
        <MealCard type="Lunch" calories={0} time="Log your meal" empty icon="🥗" />
        <MealCard type="Snacks" calories={120} time="04:15 PM" icon="🍎" />
        <MealCard type="Dinner" calories={0} time="Log your meal" empty icon="🍲" />
      </div>
    </div>
  );
};

const ProgressItem = ({ color, label, current, total }: { color: string, label: string, current: number, total: number }) => (
  <div className="flex flex-col gap-1.5">
    <div className="flex justify-between items-baseline">
      <span className="text-[10px] text-[#969696] uppercase font-bold tracking-wider" style={{ fontFamily: 'Quicksand' }}>{label}</span>
      <span className="text-[11px] text-white font-bold" style={{ fontFamily: 'Lexend' }}>{current}g</span>
    </div>
    <div className="h-[5px] w-full bg-[#18171C] rounded-full overflow-hidden">
      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${(current / total) * 100}%`, backgroundColor: color }}></div>
    </div>
  </div>
);

const MealCard = ({ type, calories, time, icon, empty = false }: { type: string, calories: number, time: string, icon: string, empty?: boolean }) => (
  <div className="w-full p-4 rounded-[20px] bg-[#222328] flex items-center justify-between border border-[#2F2F2F] hover:border-[#3e3e46] transition-colors">
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-[16px] flex items-center justify-center text-2xl ${empty ? 'bg-[#18171C] opacity-60' : 'bg-[#18171C] shadow-inner'}`}>
        {icon}
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-white text-[16px] font-bold" style={{ fontFamily: 'Quicksand' }}>{type}</span>
        <span className="text-[#969696] text-[12px] font-medium" style={{ fontFamily: 'Quicksand' }}>{time}</span>
      </div>
    </div>
    <div className="flex items-center gap-2">
      {empty ? (
        <button className="px-5 py-2 bg-[#8FFC86] rounded-[10px] text-[#0F0E11] text-[13px] font-bold shadow-[0_2px_10px_rgba(143,252,134,0.2)] active:scale-95 transition-transform">
          Add
        </button>
      ) : (
        <div className="flex flex-col items-end">
          <span className="text-white text-[15px] font-bold" style={{ fontFamily: 'Lexend' }}>{calories}</span>
          <span className="text-[#969696] text-[10px] font-bold uppercase tracking-tighter" style={{ fontFamily: 'Lexend' }}>Kcal</span>
        </div>
      )}
    </div>
  </div>
);

export default MealLog;
