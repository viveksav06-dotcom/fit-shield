
import React from 'react';

interface MenuPageProps {
  onBack: () => void;
  onCart: () => void;
  onCustomise: () => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ onBack, onCart, onCustomise }) => {
  return (
    <div className="flex flex-col items-center w-full bg-[#0F0E11] min-h-screen px-4 pb-32 pt-4 gap-6 relative">
      {/* Header */}
      <div className="flex w-full justify-between items-center py-2">
        <div className="flex items-center gap-1">
          <button onClick={onBack} className="p-2 -ml-2 text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <span className="text-white text-xl font-bold tracking-tight" style={{ fontFamily: 'Lexend' }}>Boketto</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={onCart} className="relative">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#8FFC86] rounded-full flex items-center justify-center">
              <span className="text-[10px] text-black font-bold">2</span>
            </div>
          </button>
          <div className="w-8 h-8 rounded-full bg-[#222328] border border-[#2F2F2F] flex items-center justify-center">
            <span className="text-white text-xs font-bold">K</span>
          </div>
        </div>
      </div>

      {/* Search & Veg Toggle */}
      <div className="flex w-full gap-3">
        <div className="flex flex-1 h-[48px] px-4 items-center gap-3 rounded-[24px] bg-[#222328] border border-[#2F2F2F]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="#969696" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.7504 15.7499L12.5254 12.5249" stroke="#969696" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input 
            type="text" 
            placeholder="Search ... " 
            className="bg-transparent border-none outline-none text-[#CDCDCD] text-sm flex-1 font-medium" 
            style={{ fontFamily: 'Quicksand' }}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-[10px] font-bold text-white uppercase tracking-widest">VEG</span>
          <div className="w-[42px] h-[22px] rounded-full bg-[#1F9653] p-0.5 relative cursor-pointer">
            <div className="absolute right-0.5 top-0.5 w-[18px] h-[18px] rounded-full bg-white flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1F9653]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Your Dinner Goal Card */}
      <div className="w-full p-4 rounded-[16px] bg-[#222328] border border-[#2F2F2F]">
        <div className="flex justify-between items-center mb-4">
          <span className="text-white text-sm font-semibold" style={{ fontFamily: 'Quicksand' }}>Your Dinner Goal</span>
          <span className="text-[#8FFC86] text-sm font-bold underline cursor-pointer" style={{ fontFamily: 'Quicksand' }}>Edit</span>
        </div>
        <div className="flex items-center gap-5">
          {/* Progress Ring */}
          <div className="relative w-[72px] h-[72px] flex items-center justify-center">
            <svg width="72" height="72" viewBox="0 0 72 72" className="transform -rotate-90">
              <circle cx="36" cy="36" r="34" stroke="#18171C" strokeWidth="4" fill="none" />
              <circle cx="36" cy="36" r="34" stroke="#FEFFC4" strokeWidth="4" strokeDasharray="213" strokeDashoffset="160" fill="none" />
              <circle cx="36" cy="36" r="34" stroke="#AED2FF" strokeWidth="4" strokeDasharray="213" strokeDashoffset="100" strokeDashoffset-delay="20" fill="none" />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-white text-lg font-bold" style={{ fontFamily: 'Lexend' }}>622</span>
              <span className="text-[#969696] text-[10px]" style={{ fontFamily: 'Lexend' }}>Kcal</span>
            </div>
          </div>

          {/* Macro Panel */}
          <div className="flex-1 grid grid-cols-2 gap-x-4 gap-y-2 py-2 px-4 rounded-[12px] bg-[#18171C] border border-[#2F2F2F]">
            <GoalMacroItem color="#FEFFC4" val="25" label="Protein" />
            <GoalMacroItem color="#AED2FF" val="90" label="Carb" />
            <GoalMacroItem color="#BCA2FF" val="18" label="Fat" />
            <GoalMacroItem color="#FFABF4" val="18" label="Fiber" />
          </div>
        </div>
      </div>

      {/* Category Chips */}
      <div className="w-full flex gap-2 overflow-x-auto no-scrollbar py-1">
        <CategoryChip label="All" />
        <CategoryChip label="For You" active={true} showStar={true} />
        <CategoryChip label="High Protein" />
        <CategoryChip label="Low Kcal" />
        <CategoryChip label="Gluten Free" />
      </div>

      {/* For You Section */}
      <div className="w-full flex flex-col gap-2 mt-2">
        <h2 className="text-white text-lg font-bold" style={{ fontFamily: 'Quicksand' }}>For You</h2>
        <div className="flex gap-2 items-start">
          <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center mt-0.5">
            <span className="text-[10px] text-white">i</span>
          </div>
          <p className="text-[11px] text-[#EFEFEF] leading-snug">
            This recommendation is based on your personal <span className="text-[#8FFC86] font-bold underline">Nutritional profile</span> matching
          </p>
        </div>
      </div>

      {/* Food Items */}
      <div className="w-full flex flex-col gap-6">
        <FoodItemCard 
          title="Grilled Paneer Tikka"
          price="240"
          kcal="634"
          macros={{ p: 25, c: 13, f: 52 }}
          badge="Best Match"
          tag="Rich Calcium"
          image="https://api.builder.io/api/v1/image/assets/TEMP/cd5de1ef1f42243c430cc5372280dca47ed6264b"
          onAdd={onCustomise}
        />

        <div className="w-full">
           <div className="flex justify-between items-center px-2 py-4">
              <h3 className="text-white text-lg font-bold">Starter</h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
           </div>
           <FoodItemCard 
            title="Hyderabadi Biryani"
            price="320"
            kcal="458"
            macros={{ p: 24, c: 56, f: 22 }}
            badge="Healthy Choice"
            tag="High Fiber"
            image="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f"
            onAdd={onCustomise}
            offer="25% OFF"
          />
        </div>
      </div>
    </div>
  );
};

const GoalMacroItem = ({ color, val, label }: any) => (
  <div className="flex items-center gap-2">
    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }}></div>
    <div className="flex flex-col">
      <span className="text-white text-xs font-bold" style={{ fontFamily: 'Lexend' }}>{val}g</span>
      <span className="text-[#969696] text-[8px] uppercase tracking-tighter" style={{ fontFamily: 'Lexend' }}>{label}</span>
    </div>
  </div>
);

const CategoryChip = ({ label, active = false, showStar = false }: any) => (
  <button className={`flex items-center gap-2 px-4 py-2 rounded-full border whitespace-nowrap transition-all ${
    active ? 'bg-[#0C180C] border-[#00C600] text-white' : 'bg-[#222328] border-transparent text-[#CDCDCD]'
  }`}>
    {showStar && (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="#E6CD3D">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )}
    <span className="text-xs font-bold" style={{ fontFamily: 'Quicksand' }}>{label}</span>
  </button>
);

const FoodItemCard = ({ title, price, kcal, macros, badge, tag, image, onAdd, offer }: any) => (
  <div className="w-full flex p-4 gap-4 rounded-[16px] bg-[#18191B] border border-[#2F2F2F]">
    <div className="flex-1 flex flex-col gap-3">
      {badge && (
        <div className="inline-flex items-center px-2 py-0.5 rounded-[4px] border border-[#83B4D6] bg-[#1E272C] w-fit">
          <span className="text-white text-[10px] font-bold uppercase">{badge}</span>
        </div>
      )}
      
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
           <div className="flex items-center gap-1">
             <div className="w-1 h-1 rounded-full bg-[#FEFFC4]"></div>
             <span className="text-white text-sm font-bold">{macros.p}g</span>
           </div>
           <div className="flex items-center gap-1">
             <div className="w-1 h-1 rounded-full bg-[#AED2FF]"></div>
             <span className="text-white text-sm font-bold">{macros.c}g</span>
           </div>
           <div className="flex items-center gap-1">
             <div className="w-1 h-1 rounded-full bg-[#BCA2FF]"></div>
             <span className="text-white text-sm font-bold">{macros.f}g</span>
           </div>
        </div>
        <span className="text-[#26D326] text-xs font-bold">{kcal} Kcal</span>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 border border-[#23A323] flex items-center justify-center rounded-[2px]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#23A323]"></div>
          </div>
          <span className="text-[#CBCBCB] text-[10px] font-bold bg-[#2B2413] border border-[#807348] px-1.5 py-0.5 rounded-[4px]">{tag}</span>
        </div>
        <h4 className="text-[#E8E8E8] text-base font-bold" style={{ fontFamily: 'Quicksand' }}>{title}</h4>
        <div className="flex items-center gap-2">
           <span className="text-[#CDCDCD] text-sm font-bold">₹{price}</span>
           {offer && <span className="px-1.5 py-0.5 bg-[#D50A0D] text-white text-[9px] font-bold rounded-[2px]">{offer}</span>}
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center gap-2">
      <div className="w-24 h-24 rounded-[12px] overflow-hidden border border-[#2F2F2F] relative">
        <img src={image} className="w-full h-full object-cover" alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <button 
          onClick={onAdd}
          className="w-24 py-2 bg-[#222328] border border-[#2F2F2F] rounded-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.5)] active:scale-95 transition-all"
        >
          <span className="text-[#00C600] font-bold text-sm">ADD</span>
        </button>
        <span className="text-[#EFEFEF] text-[9px] font-medium">Customisable</span>
      </div>
    </div>
  </div>
);

export default MenuPage;
