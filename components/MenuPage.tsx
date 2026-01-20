import React from 'react';

interface MenuPageProps {
  onBack: () => void;
  onCart: () => void;
  onCustomise: () => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ onBack, onCart, onCustomise }) => {
  return (
    <div className="flex flex-col items-center w-full bg-[#0F0E11] min-h-screen px-0 pb-32 gap-6 relative">
      {/* Sticky Header */}
      <div className="sticky top-0 z-[60] bg-[#0F0E11]/95 backdrop-blur-md flex w-full justify-between items-center py-4 px-4 border-b border-[#1B1B1B]">
        <div className="flex items-center gap-1">
          <button onClick={onBack} className="p-2 -ml-2 text-white active:scale-90 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <span className="text-white text-xl font-bold tracking-tight" style={{ fontFamily: 'Lexend' }}>Boketto</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={onCart} className="relative active:scale-90 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#8FFC86] rounded-full flex items-center justify-center">
              <span className="text-[10px] text-black font-bold">2</span>
            </div>
          </button>
          <div className="w-8 h-8 rounded-full bg-[#222328] border border-[#2F2F2F] flex items-center justify-center overflow-hidden">
            <span className="text-white text-xs font-bold">K</span>
          </div>
        </div>
      </div>

      {/* Search & Veg Toggle */}
      <div className="flex w-full gap-3 px-4 pt-2">
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

      {/* Calories Progress Bar (Frame 1618877150) */}
      <div className="w-full px-4 flex flex-col gap-2">
        <div className="flex flex-col w-full gap-2">
          <div className="relative h-[19px] w-full bg-[#222328] rounded-[6px] overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full rounded-[6px] transition-all duration-700 ease-out" 
              style={{ 
                width: '50%', 
                background: 'linear-gradient(90deg, #098909 0%, #00C500 100%)' 
              }}
            />
          </div>
          <div className="flex justify-between px-2">
            <div className="flex items-center gap-1">
              <span className="text-white text-[14px] font-medium" style={{ fontFamily: 'Lexend' }}>666</span>
              <span className="text-white text-[12px] opacity-70" style={{ fontFamily: 'Lexend' }}>Kcal</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-white text-[14px] font-medium" style={{ fontFamily: 'Lexend' }}>1332</span>
              <span className="text-white text-[12px] opacity-70" style={{ fontFamily: 'Lexend' }}>Kcal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Your Dinner Goal Card */}
      <div className="w-full px-4">
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
      </div>

      {/* Category Chips */}
      <div className="w-full flex gap-2 overflow-x-auto no-scrollbar py-1 px-4">
        <CategoryChip label="All" />
        <CategoryChip label="For You" active={true} showStar={true} />
        <CategoryChip label="High Protein" />
        <CategoryChip label="Low Kcal" />
        <CategoryChip label="Gluten Free" />
      </div>

      {/* For You Section */}
      <div className="w-full flex flex-col gap-2 mt-2 px-4">
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
      <div className="w-full flex flex-col">
        <FoodItemCard 
          title="Grilled Paneer Tikka"
          price="240"
          kcal="634"
          macros={{ p: 25, c: 13, f: 52 }}
          badge="Best Match"
          tag="Rich Calcium"
          image="https://api.builder.io/api/v1/image/assets/TEMP/cd5de1ef1f42243c430cc5372280dca47ed6264b?width=160"
          onAdd={onCustomise}
        />

        <div className="w-full">
           <div className="flex justify-between items-center px-4 py-4">
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
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
        <path d="M8.77243 0.48035L10.577 4.13692C10.7025 4.39124 10.9451 4.56746 11.2258 4.60817L15.2612 5.19457C15.9681 5.29737 16.2501 6.16579 15.7388 6.66408L12.8188 9.5103C12.6159 9.70821 12.5231 9.99357 12.5712 10.2729L13.2604 14.2919C13.3812 14.9958 12.6423 15.5325 12.0101 15.2004L8.40096 13.303C8.14998 13.1712 7.84994 13.1712 7.59896 13.303L3.98978 15.2004C3.35766 15.5328 2.61874 14.9958 2.73955 14.2919L3.42875 10.2729C3.47681 9.99357 3.38403 9.70821 3.1811 9.5103L0.261123 6.66408C-0.250182 6.16545 0.0318366 5.29704 0.73872 5.19457L4.7741 4.60817C5.05478 4.56746 5.29742 4.39124 5.42291 4.13692L7.22749 0.48035C7.54322 -0.160117 8.45636 -0.160117 8.77243 0.48035Z" fill="url(#star_grad_chip)"/>
        <defs>
          <linearGradient id="star_grad_chip" x1="8" y1="0" x2="8" y2="15.3" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E6CD3D"/>
            <stop offset="1" stopColor="#ED9915"/>
          </linearGradient>
        </defs>
      </svg>
    )}
    <span className="text-xs font-bold" style={{ fontFamily: 'Quicksand' }}>{label}</span>
  </button>
);

const FoodItemCard = ({ title, price, kcal, macros, badge, tag, image, onAdd, offer }: any) => (
  <div className="flex p-3 flex-col justify-center items-start gap-3 self-stretch border-b-[0.7px] border-dashed border-[#1B1B1B] bg-[#18191B] relative">
    <div className="flex flex-col items-start gap-3 self-stretch">
      <div className="flex items-center gap-4 self-stretch relative">
        {/* Stats Column */}
        <div className="flex flex-col items-start gap-3 flex-1 relative">
          <div className="flex flex-col items-start gap-3 relative">
            <div className="flex items-center gap-2 relative">
              {/* Best Match Badge Component if present */}
              {badge && (
                <div className="flex h-6 px-1.5 py-0.5 justify-center items-center gap-1.5 rounded-[4px] border border-[#83B4D6] bg-[#1E272C]">
                  <span className="text-white text-center text-[12px] font-bold" style={{ fontFamily: 'Quicksand' }}>{badge}</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7.67588 0.725971L9.25489 3.92547C9.3647 4.148 9.577 4.30219 9.8226 4.33782L13.3536 4.85092C13.9721 4.94086 14.2188 5.70073 13.7715 6.13673L11.2165 8.62718C11.0389 8.80035 10.9577 9.05004 10.9998 9.29447L11.6028 12.8111C11.7085 13.427 11.062 13.8966 10.5089 13.606L7.35085 11.9458C7.13124 11.8305 6.8687 11.8305 6.64909 11.9458L3.49106 13.606C2.93795 13.8969 2.29139 13.427 2.39711 12.8111L3.00016 9.29447C3.04221 9.05004 2.96102 8.80035 2.78347 8.62718L0.228483 6.13673C-0.21891 5.70044 0.0278571 4.94057 0.64638 4.85092L4.17734 4.33782C4.42294 4.30219 4.63524 4.148 4.74505 3.92547L6.32406 0.725971C6.60032 0.165562 7.39932 0.165562 7.67588 0.725971Z" fill="url(#star_grad_card)"/>
                    <defs>
                      <linearGradient id="star_grad_card" x1="7" y1="0.3" x2="7" y2="13.7" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#E6CD3D"/>
                        <stop offset="1" stopColor="#ED9915"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}
            </div>
            
            <div className="flex flex-col items-start gap-2 relative">
              <div className="flex items-center gap-3.5 relative">
                <div className="flex items-center gap-1 relative">
                  <div className="w-1 h-1 rounded-full bg-[#FEFFC4]"></div>
                  <span className="text-white text-[10px] font-medium" style={{ fontFamily: 'Quicksand' }}>
                    <span className="text-[15px] font-bold">{macros.p}</span>g <span className="text-[#EFEFEF] font-normal text-[12px] ml-1">Protein</span>
                  </span>
                </div>
                <div className="flex items-center gap-1 relative ml-1">
                  <div className="w-1 h-1 rounded-full bg-[#AED2FF]"></div>
                  <span className="text-white text-[10px] font-medium" style={{ fontFamily: 'Quicksand' }}>
                    <span className="text-[15px] font-bold">{macros.c}</span>g <span className="text-[#EFEFEF] font-normal text-[12px] ml-1">Carb</span>
                  </span>
                </div>
                <div className="flex items-center gap-1 relative ml-1">
                  <div className="w-1 h-1 rounded-full bg-[#BCA2FF]"></div>
                  <span className="text-white text-[10px] font-medium" style={{ fontFamily: 'Quicksand' }}>
                    <span className="text-[15px] font-bold">{macros.f}</span>g <span className="text-[#EFEFEF] font-normal text-[12px] ml-1">Fat</span>
                  </span>
                </div>
              </div>
              <span className="text-[#26D326] text-[12px] font-medium capitalize" style={{ fontFamily: 'Quicksand' }}>{kcal} kcal</span>
            </div>
          </div>
          
          <div className="flex h-6 px-1.5 py-1 justify-center items-center gap-2 rounded-[6px] border border-[#807348] bg-[#2B2413]">
            <span className="text-[#F9E39E] text-[10px] font-medium capitalize" style={{ fontFamily: 'Quicksand' }}>{tag}</span>
          </div>

          <div className="flex flex-col items-start gap-1 self-stretch">
            <span className="text-[#E8E8E8] text-[14px] font-medium" style={{ fontFamily: 'Quicksand' }}>{title}</span>
            <div className="flex items-center gap-2 self-stretch">
              <span className="text-[#CBCBCB] text-[12px] font-normal" style={{ fontFamily: 'Quicksand' }}>₹{price}</span>
              {offer && <span className="px-1.5 py-0.5 bg-[#D50A0D] text-white text-[9px] font-bold rounded-[2px]">{offer}</span>}
            </div>
          </div>
        </div>

        {/* Right Side: Image and Add Button */}
        <div className="flex flex-col items-center gap-3 self-stretch relative">
          <div className="w-20 h-20 relative">
            <img className="w-20 h-20 rounded-[12px] border border-[#2F2F2F] object-cover" src={image} alt={title} />
            <div className="absolute top-0 left-0 w-full h-[27px] rounded-t-[12px] bg-gradient-to-b from-black to-transparent"></div>
            {/* Top Image Icons */}
            <div className="absolute top-1.5 left-0 right-0 flex justify-center gap-1.5">
               <img src="https://api.builder.io/api/v1/image/assets/TEMP/6c58789e3f5a0378e36694369f59f80da900db07" className="w-3 h-3" alt="bestseller" />
               <img src="https://api.builder.io/api/v1/image/assets/TEMP/435d0536cfceeea8ca9bcc904c45c656007f2473" className="w-3 h-3" alt="rating" />
               <div className="w-3 h-3 border border-[#23A323] flex items-center justify-center rounded-[2px] bg-transparent">
                  <div className="w-1 h-1 rounded-full bg-[#23A323]"></div>
               </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-1 self-stretch">
            <button 
              onClick={onAdd}
              className="flex w-20 h-[38px] justify-center items-center rounded-[8px] border border-[#2F2F2F] bg-[#222328] shadow-[0_4px_26px_0_rgba(0,0,0,0.45)] active:scale-95 transition-transform"
            >
              <span className="text-[#00C600] text-[16px] font-semibold" style={{ fontFamily: 'Quicksand' }}>Add</span>
            </button>
            <span className="text-[#EFEFEF] text-center text-[10px] font-normal" style={{ fontFamily: 'Quicksand' }}>Customisable</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MenuPage;
