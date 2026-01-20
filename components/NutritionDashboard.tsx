
import React from 'react';

const NutritionDashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-4 py-6 w-full pb-24">
      {/* Header (Simplified Boketto Logo Area) */}
      <div className="flex w-full h-[56px] justify-between items-center self-stretch">
        <div className="flex items-center gap-1">
           <h1 className="text-white text-xl font-bold tracking-tight" style={{ fontFamily: 'Lexend' }}>Boketto</h1>
        </div>
        <div className="w-[30px] h-[30px] rounded-full bg-[#86A788] border border-[#2F2F2F] flex items-center justify-center">
            <span className="text-[12px] font-semibold text-black" style={{ fontFamily: 'Quicksand' }}>K</span>
        </div>
      </div>

      {/* Goal Card */}
      <div className="flex w-full p-3 flex-col items-start gap-[7px] rounded-[12px] bg-[#222328]">
        <div className="flex justify-between items-start w-full">
          <span className="text-[#EFEFEF] text-[14px] font-medium" style={{ fontFamily: 'Quicksand' }}>Your Dinner Goal</span>
          <span className="text-[#8FFC86] text-[14px] font-semibold underline cursor-pointer" style={{ fontFamily: 'Quicksand' }}>Edit</span>
        </div>
        <div className="flex items-center gap-3 w-full">
          <div className="relative w-[67px] h-[67px] flex items-center justify-center flex-shrink-0">
            <svg width="67" height="67" viewBox="0 0 67 67" fill="none">
              <circle cx="33.5" cy="33.5" r="30" stroke="#18171C" strokeWidth="6" />
              <path d="M33.5 3.5 A 30 30 0 0 1 63.5 33.5" stroke="#FEFFC4" strokeWidth="6" fill="none" />
              <path d="M63.5 33.5 A 30 30 0 0 1 33.5 63.5" stroke="#AED2FF" strokeWidth="6" fill="none" />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="lexend font-medium text-[16px] text-white leading-none">622</span>
              <span className="lexend text-[10px] text-[#CCCCCC]">Kcal</span>
            </div>
          </div>
          <div className="flex flex-1 h-[56px] px-3 justify-between items-center rounded-[12px] border-[0.6px] border-[#2F2F2F] bg-[#18171C]">
            <MacroSummaryItem color="#FEFFC4" val="25" label="Protein" />
            <div className="w-[1px] h-[14px] bg-[#3E3E3E]"></div>
            <MacroSummaryItem color="#AED2FF" val="90" label="Carb" />
            <div className="w-[1px] h-[14px] bg-[#3E3E3E]"></div>
            <MacroSummaryItem color="#BCA2FF" val="18" label="Fat" />
          </div>
        </div>
      </div>

      {/* Recommended For You Section - Refined for Recheck */}
      <div className="flex flex-col w-full gap-3 mt-4">
        <div className="flex items-center justify-between self-stretch">
          <h2 className="text-[#EFEFEF] text-[16px] font-semibold" style={{ fontFamily: 'Inter' }}>Recommended For You</h2>
        </div>
        
        <div className="flex gap-3 overflow-x-auto no-scrollbar w-full py-1">
           <RefinedRecommendationCard 
              title="Veg Puff" 
              sub="Half" 
              price="120" 
              kcal="340" 
              macros={{p: '24', c: '24', f: '24'}}
              image="https://api.builder.io/api/v1/image/assets/TEMP/746508f8fb2f0d84eb1320e309d1a97733cbe2d0?width=126" 
           />
           <RefinedRecommendationCard 
              title="Chicken Salad" 
              sub="Bowl" 
              price="240" 
              kcal="280" 
              macros={{p: '32', c: '12', f: '10'}}
              image="https://api.builder.io/api/v1/image/assets/TEMP/6c92f224e688e10dda7e86f4c914c99ab51dae4b?width=126" 
           />
        </div>
      </div>
    </div>
  );
};

const MacroSummaryItem = ({ color, val, label }: { color: string, val: string, label: string }) => (
  <div className="flex flex-col items-center justify-center">
    <div className="flex items-center gap-1">
      <div className="w-[5px] h-[5px] rounded-full" style={{ backgroundColor: color }}></div>
      <div className="lexend text-[12px] font-medium text-white">{val}g</div>
    </div>
    <span className="lexend text-[10px] text-[#CCC] font-normal">{label}</span>
  </div>
);

const RefinedRecommendationCard = ({ title, sub, price, kcal, macros, image }: any) => (
  <div className="flex flex-shrink-0 p-3 items-center gap-2 rounded-xl bg-[#222328] border border-[#2F2F2F] shadow-sm">
    {/* Left Column: Stats and Info */}
    <div className="flex flex-col w-[122px] items-flex-start gap-3">
      <div className="flex flex-col gap-2 self-stretch">
        <div className="flex items-center gap-3">
          <MacroVerticalStack color="#FEFF87" val={macros.p} label="Protein" />
          <MacroVerticalStack color="#AED2FF" val={macros.c} label="Carb" />
          <MacroVerticalStack color="#AED2FF" val={macros.f} label="Fat" />
        </div>
        <span className="text-[#26D326] text-[12px] font-medium" style={{ fontFamily: 'Quicksand' }}>
          {kcal} kcal
        </span>
      </div>

      <div className="flex flex-col gap-1 self-stretch">
        <div className="text-[#CCC] text-[10px] font-normal truncate" style={{ fontFamily: 'Quicksand' }}>
          <span className="text-[#EEE] font-medium">{title}</span> <span className="text-[#CCC]">({sub})</span>
        </div>
        <span className="text-[#DDD] text-[10px] font-normal" style={{ fontFamily: 'Quicksand' }}>₹{price}</span>
      </div>
    </div>

    {/* Right Column: Image and Action */}
    <div className="flex flex-col justify-between items-center self-stretch gap-2">
      <img className="w-[63px] h-[62px] rounded-md border border-[#494949] object-cover" src={image} alt={title} />
      <button className="flex w-[62px] h-[28px] items-center justify-center rounded-lg border border-[#2F2F2F] bg-[#222328] shadow-[0_4px_26px_0_rgba(0,0,0,0.45)] active:scale-95 transition-transform">
        <span className="text-[#00C600] text-[14px] font-bold" style={{ fontFamily: 'Quicksand' }}>Add</span>
      </button>
    </div>
  </div>
);

const MacroVerticalStack = ({ color, val, label }: { color: string, val: string, label: string }) => (
  <div className="flex flex-col items-start gap-1 justify-center">
    <div className="flex items-center gap-1">
      <div className="w-[3px] h-[3px] rounded-full" style={{ backgroundColor: color }}></div>
      <span className="text-[#E9E9E9] text-[10px] font-semibold">{val}<span className="text-[8px] font-medium">g</span></span>
    </div>
    <span className="text-[#CCC] text-[8px] font-medium">{label}</span>
  </div>
);

export default NutritionDashboard;
