
import React from 'react';

const FoodDetailSheet: React.FC = () => {
  return (
    <div className="flex flex-col items-start w-full bg-[#222328] rounded-t-[24px] pt-5 pb-8 relative" style={{ height: 'auto' }}>
      {/* Home Indicator */}
      <div className="self-center w-[38px] h-[2px] bg-[#7C7C7C] rounded-[100px] mb-5"></div>

      <div className="flex flex-col w-full gap-5">
        {/* Title Section */}
        <div className="flex items-center gap-3 w-full px-4">
          <h1 className="text-white text-[18px] font-bold" style={{ fontFamily: 'Quicksand' }}>
            Veggie Paradise Cheese Burst
          </h1>
        </div>

        {/* Macro Summary Section */}
        <div className="flex items-center gap-5 w-full px-4">
          <div className="relative w-[67px] h-[67px] flex-shrink-0 flex items-center justify-center">
            <svg width="67" height="67" viewBox="0 0 67 67" fill="none">
              <path d="M33.5 0C37.8993 5.24609e-08 42.2555 0.866503 46.3199 2.55004C50.3843 4.23357 54.0773 6.70116 57.1881 9.81192C60.2988 12.9227 62.7664 16.6157 64.45 20.6801C66.1335 24.7445 67 29.1007 67 33.5L59.63 33.5C59.63 30.0686 58.9541 26.6707 57.641 23.5005C56.3278 20.3302 54.4031 17.4497 51.9767 15.0233C49.5503 12.5969 46.6698 10.6722 43.4995 9.35903C40.3293 8.04587 36.9314 7.37 33.5 7.37V0Z" fill="#FEFFC4" stroke="#2F2F37" strokeWidth="0.8"/>
              <path d="M67 33.5C67 41.649 64.0297 49.5186 58.6452 55.6353C53.2607 61.7519 45.8313 65.6962 37.7481 66.7296C29.6649 67.7629 21.4821 65.8145 14.7321 61.2491C7.98198 56.6838 3.12743 49.8145 1.07739 41.9276L8.21036 40.0735C9.8094 46.2253 13.5959 51.5833 18.861 55.1443C24.1261 58.7053 30.5086 60.2251 36.8135 59.4191C43.1184 58.613 48.9133 55.5365 53.1132 50.7655C57.3131 45.9945 59.63 39.8562 59.63 33.5H67Z" fill="#AED2FF" stroke="#2F2F37" strokeWidth="0.8"/>
              <path d="M1.50139 43.4166C0.134026 39.0044 -0.306098 34.3572 0.208669 29.7667C0.723436 25.1763 2.18197 20.7419 4.49264 16.7422L10.8743 20.4289C9.07194 23.5487 7.93428 27.0075 7.53276 30.588C7.13124 34.1686 7.47454 37.7935 8.54109 41.2349L1.50139 43.4166Z" fill="#BCA2FF" stroke="#2F2F37" strokeWidth="0.8"/>
              <path d="M4.33889 17.0112C7.27377 11.8208 11.5409 7.50768 16.6996 4.51732C21.8583 1.52696 27.7217 -0.0323096 33.6844 0.000507362L33.6438 7.3704C28.9929 7.3448 24.4195 8.56103 20.3957 10.8935C16.3719 13.226 13.0435 16.5902 10.7543 20.6388L4.33889 17.0112Z" fill="#FFABF4" stroke="#2F2F37" strokeWidth="0.8"/>
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="lexend font-medium text-[16px] text-white leading-none">634</span>
              <span className="lexend text-[12px] text-[#CCCCCC]">Kcal</span>
            </div>
          </div>

          <div className="flex flex-1 justify-between items-center pr-2">
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FEFFC4]"></div>
                <div className="flex items-baseline">
                  <span className="text-[#CCC] text-[16px] font-bold" style={{ fontFamily: 'Quicksand' }}>25</span>
                  <span className="text-[#CCC] text-[12px] font-medium ml-0.5" style={{ fontFamily: 'Quicksand' }}>g</span>
                </div>
              </div>
              <span className="text-[#CCC] text-[14px] font-medium" style={{ fontFamily: 'Quicksand' }}>Protein</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#AED2FF]"></div>
                <div className="flex items-baseline">
                  <span className="text-[#CCC] text-[16px] font-bold" style={{ fontFamily: 'Quicksand' }}>23</span>
                  <span className="text-[#CCC] text-[12px] font-medium ml-0.5" style={{ fontFamily: 'Quicksand' }}>g</span>
                </div>
              </div>
              <span className="text-[#CCC] text-[14px] font-medium" style={{ fontFamily: 'Quicksand' }}>Carb</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#BCA2FF]"></div>
                <div className="flex items-baseline">
                  <span className="text-[#CCC] text-[16px] font-bold" style={{ fontFamily: 'Quicksand' }}>52</span>
                  <span className="text-[#CCC] text-[12px] font-medium ml-0.5" style={{ fontFamily: 'Quicksand' }}>g</span>
                </div>
              </div>
              <span className="text-[#CCC] text-[14px] font-medium" style={{ fontFamily: 'Quicksand' }}>Fat</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFABF4]"></div>
                <div className="flex items-baseline">
                  <span className="text-[#CCC] text-[16px] font-bold" style={{ fontFamily: 'Quicksand' }}>1</span>
                  <span className="text-[#CCC] text-[12px] font-medium ml-0.5" style={{ fontFamily: 'Quicksand' }}>g</span>
                </div>
              </div>
              <span className="text-[#CCC] text-[14px] font-medium" style={{ fontFamily: 'Quicksand' }}>Fiber</span>
            </div>
          </div>
        </div>

        {/* Size Selection */}
        <div className="flex flex-col gap-4 px-4">
          <div className="w-full p-3 rounded-[12px] bg-[#2F2F39] flex flex-col gap-2.5">
            <div className="flex flex-col gap-1.5">
              <span className="text-white text-[16px] font-bold" style={{ fontFamily: 'Quicksand' }}>Size</span>
              <div className="flex items-center gap-1">
                <span className="text-[#CCC] text-[12px] font-bold" style={{ fontFamily: 'Quicksand' }}>Required</span>
                <div className="w-0.5 h-0.5 rounded-full bg-[#D9D9D9]"></div>
                <span className="text-[#CCC] text-[12px] font-bold" style={{ fontFamily: 'Quicksand' }}>Select any 1 option</span>
              </div>
            </div>
            <div className="h-[0.3px] bg-[#4D5055] w-full"></div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <span className="text-white text-[14px] font-semibold" style={{ fontFamily: 'Quicksand' }}>Regular</span>
                    <div className="flex h-[24px] px-1.5 py-0.5 justify-center items-center gap-1.5 rounded-[4px] border border-[#83B4D6] bg-[#303A40]">
                      <span className="text-white text-[8px] font-bold" style={{ fontFamily: 'Quicksand' }}>Best Match</span>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5.48277 0.518481L6.61064 2.80384C6.68907 2.96279 6.84072 3.07292 7.01615 3.09837L9.53826 3.46487C9.98006 3.52912 10.1563 4.07188 9.83676 4.38331L8.01177 6.1622C7.88494 6.2859 7.82695 6.46425 7.85699 6.63884L8.28773 9.15073C8.36325 9.59065 7.90142 9.92607 7.50634 9.71852L5.25061 8.53267C5.09374 8.45027 4.90622 8.45027 4.74935 8.53267L2.49362 9.71852C2.09854 9.92628 1.63671 9.59065 1.71222 9.15073L2.14297 6.63884C2.17301 6.46425 2.11502 6.2859 1.98819 6.1622L0.163202 4.38331C-0.156364 4.07167 0.0198979 3.52891 0.4617 3.46487L2.98381 3.09837C3.15924 3.07292 3.31089 2.96279 3.38932 2.80384L4.51719 0.518481C4.71452 0.118189 5.28523 0.118189 5.48277 0.518481Z" fill="url(#starGrad)"/>
                        <defs><linearGradient id="starGrad" x1="5" y1="0.2" x2="5" y2="9.8" gradientUnits="userSpaceOnUse"><stop stopColor="#E6CD3D"/><stop offset="1" stopColor="#ED9915"/></linearGradient></defs>
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white text-[14px] font-semibold" style={{ fontFamily: 'Quicksand' }}>₹250</span>
                    <div className="w-5 h-5 rounded-full border-2 border-[#8FFC86] flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#8FFC86]"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#CCC] text-[12px] font-medium" style={{ fontFamily: 'Quicksand' }}>250g</span>
                  <div className="w-[3px] h-[3px] rounded-full bg-[#D9D9D9]"></div>
                  <span className="text-[#CCC] text-[12px] font-medium" style={{ fontFamily: 'Quicksand' }}>1 serve</span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 opacity-60">
                <div className="flex justify-between items-center">
                  <span className="text-white text-[14px] font-semibold" style={{ fontFamily: 'Quicksand' }}>Medium</span>
                  <div className="flex items-center gap-2">
                    <span className="text-white text-[14px] font-semibold" style={{ fontFamily: 'Quicksand' }}>₹500</span>
                    <div className="w-5 h-5 rounded-full border-2 border-[#8FFC86]"></div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#CCC] text-[12px] font-medium" style={{ fontFamily: 'Quicksand' }}>500g</span>
                  <div className="w-[3px] h-[3px] rounded-full bg-[#D9D9D9]"></div>
                  <span className="text-[#CCC] text-[12px] font-medium" style={{ fontFamily: 'Quicksand' }}>2 serve</span>
                </div>
              </div>
            </div>
          </div>

          {/* Crust Selection */}
          <div className="w-full p-3 rounded-[12px] bg-[#2F2F39] flex flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <span className="text-white text-[16px] font-bold" style={{ fontFamily: 'Quicksand' }}>Crust</span>
              <div className="flex items-center gap-1">
                <span className="text-[#CCC] text-[12px] font-medium" style={{ fontFamily: 'Quicksand' }}>Required</span>
                <div className="w-[3px] h-[3px] rounded-full bg-[#D9D9D9]"></div>
                <span className="text-[#CCC] text-[12px] font-medium" style={{ fontFamily: 'Quicksand' }}>Select any 1 option</span>
              </div>
            </div>
            <div className="h-[0.3px] bg-[#4D5055] w-full"></div>
            
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-white text-[14px] font-semibold" style={{ fontFamily: 'Quicksand' }}>Korean Sweet Chili Cheese Burst</span>
                  <div className="w-5 h-5 rounded-full border-2 border-[#8FFC86] flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#8FFC86]"></div>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <MacroMini color="#FEFFC4" val="24" label="Protein" />
                  <MacroMini color="#AED2FF" val="24" label="Carb" />
                  <MacroMini color="#BCA2FF" val="24" label="Fat" />
                </div>
              </div>

              <div className="flex flex-col gap-2 opacity-60">
                <div className="flex justify-between items-center">
                  <span className="text-white text-[14px] font-semibold" style={{ fontFamily: 'Quicksand' }}>Cheese Bust</span>
                  <div className="w-5 h-5 rounded-full border-2 border-[#8FFC86]"></div>
                </div>
                <div className="flex items-center gap-5">
                  <MacroMini color="#FEFFC4" val="24" label="Protein" />
                  <MacroMini color="#AED2FF" val="24" label="Carb" />
                  <MacroMini color="#BCA2FF" val="24" label="Fat" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2 opacity-60">
                <div className="flex justify-between items-center">
                  <span className="text-white text-[14px] font-semibold" style={{ fontFamily: 'Quicksand' }}>Hot n Fiery Chasse Burst</span>
                  <div className="w-5 h-5 rounded-full border-2 border-[#8FFC86]"></div>
                </div>
                <div className="flex items-center gap-5">
                  <MacroMini color="#FEFFC4" val="24" label="Protein" />
                  <MacroMini color="#AED2FF" val="24" label="Carb" />
                  <MacroMini color="#BCA2FF" val="24" label="Fat" />
                </div>
              </div>
            </div>
          </div>

          {/* Extra Toppings */}
          <div className="w-full p-3 rounded-[12px] bg-[#2F2F39] flex flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <span className="text-white text-[16px] font-bold" style={{ fontFamily: 'Quicksand' }}>Extra Cheese Regular</span>
              <span className="text-[#CCC] text-[12px] font-medium" style={{ fontFamily: 'Quicksand' }}>Select up to 8 option</span>
            </div>
            <div className="h-[0.3px] bg-[#4D5055] w-full"></div>
            
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-white text-[14px] font-semibold" style={{ fontFamily: 'Quicksand' }}>Onion</span>
                  <div className="flex items-center gap-2">
                    <span className="text-white text-[14px] font-semibold" style={{ fontFamily: 'Quicksand' }}>₹34</span>
                    <div className="w-5 h-5 rounded-[2px] border-2 border-[#8FFC86]"></div>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <MacroMini color="#FEFFC4" val="24" label="Protein" />
                  <MacroMini color="#AED2FF" val="24" label="Carb" />
                  <MacroMini color="#BCA2FF" val="24" label="Fat" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-white text-[14px] font-semibold" style={{ fontFamily: 'Quicksand' }}>Black Olive</span>
                  <div className="flex items-center gap-2">
                    <span className="text-white text-[14px] font-semibold" style={{ fontFamily: 'Quicksand' }}>₹34</span>
                    <div className="w-5 h-5 rounded-[2px] bg-[#8FFC86] flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10l4 4 8-8" stroke="#242424" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <MacroMini color="#FEFFC4" val="24" label="Protein" />
                  <MacroMini color="#AED2FF" val="24" label="Carb" />
                  <MacroMini color="#BCA2FF" val="24" label="Fat" />
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-1 pt-1 cursor-pointer">
              <span className="text-white text-[12px] font-bold" style={{ fontFamily: 'Quicksand' }}>+4 more</span>
              <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
                <path d="M1 1l4.5 4.5L10 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-8 px-4 w-full">
        <button className="w-full py-3 bg-[#8FFC86] rounded-[12px] shadow-lg flex items-center justify-center">
          <span className="text-[#242424] text-[18px] font-bold" style={{ fontFamily: 'Quicksand' }}>Add Item</span>
        </button>
      </div>
    </div>
  );
};

const MacroMini = ({ color, val, label }: { color: string, val: string, label: string }) => (
  <div className="flex items-center gap-1.5 h-3.5">
    <div className="w-[4px] h-[4px] rounded-full flex-shrink-0" style={{ backgroundColor: color }}></div>
    <div className="flex items-baseline gap-1">
      <span className="text-[#CCC] text-[12px] font-bold" style={{ fontFamily: 'Quicksand' }}>{val}g</span>
      <span className="text-[#CCC] text-[12px] font-medium" style={{ fontFamily: 'Quicksand' }}>{label}</span>
    </div>
  </div>
);

export default FoodDetailSheet;
