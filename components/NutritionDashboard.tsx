
import React from 'react';

const NutritionDashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-4 py-6 w-full">
      {/* Header */}
      <div className="flex w-full h-[56px] justify-between items-center self-stretch">
        <div className="flex items-center gap-1">
          <svg width="100" height="20" viewBox="0 0 100 20" fill="none">
            <text x="0" y="16" fill="white" className="font-semibold text-base" style={{ fontFamily: 'Quicksand' }}>Boketto</text>
            <path d="M74.2351 3.19259C75.3965 3.63973 76.6235 3.92858 77.8581 4.07906C77.881 4.08187 77.9038 4.08468 77.9274 4.08757C78.0377 4.10103 78.1479 4.11384 78.2584 4.12573C78.713 4.17863 79.0543 4.32066 79.3491 4.6801C79.518 4.90939 79.6215 5.14875 79.6224 5.43462C79.6226 5.47039 79.6228 5.50615 79.623 5.543C79.623 5.5821 79.623 5.6212 79.6231 5.66148C79.6232 5.70281 79.6234 5.74413 79.6236 5.7867C79.624 5.90017 79.6242 6.01364 79.6243 6.12711C79.6244 6.19835 79.6246 6.2696 79.6247 6.34084C79.6252 6.56472 79.6255 6.7886 79.6256 7.01248C79.6258 7.26898 79.6263 7.52547 79.6273 7.78197C79.628 7.98127 79.6283 8.18056 79.6284 8.37986C79.6284 8.49833 79.6286 8.61679 79.6292 8.73525C79.6369 10.3693 79.3015 11.9609 78.3708 13.3308C78.3579 13.3502 78.3449 13.3695 78.3315 13.3895C77.8655 14.082 77.2643 14.7308 76.5989 15.234C76.5696 15.2577 76.5403 15.2813 76.5102 15.3057C75.8471 15.8342 75.1139 16.265 74.3654 16.6594C74.3346 16.6757 74.3037 16.692 74.272 16.7088C73.7979 16.9551 73.3987 17.081 72.8692 16.943C72.6708 16.8789 72.4897 16.782 72.3063 16.684C72.2646 16.662 72.2228 16.6401 72.181 16.6181C71.4476 16.2296 70.7516 15.7828 70.1016 15.2668C70.0714 15.243 70.0411 15.2191 70.01 15.1945C69.5053 14.7896 69.0197 14.3369 68.625 13.823C68.6108 13.8046 68.5966 13.7862 68.582 13.7673C68.3547 13.4702 68.1525 13.1642 67.9687 12.8386C67.9564 12.8172 67.9442 12.7958 67.9315 12.7738C67.4828 11.9861 67.2199 11.1068 67.0827 10.2134C67.0772 10.179 67.0717 10.1445 67.066 10.109C67.0018 9.64859 67.0063 9.18696 67.0061 8.72299C67.006 8.65127 67.0059 8.57955 67.0057 8.50783C67.0051 8.25677 67.0048 8.00572 67.0049 7.75467C67.0049 7.52187 67.0042 7.28907 67.0032 7.05628C67.0023 6.85508 67.002 6.65389 67.002 6.4527C67.0021 6.33309 67.0019 6.2135 67.0012 6.09389C67.0004 5.96066 67.0007 5.82745 67.0011 5.69422C67.0007 5.65528 67.0004 5.61633 67 5.57621C67.0033 5.13766 67.1587 4.785 67.4724 4.47591C67.8161 4.19593 68.2252 4.14149 68.6501 4.09223C68.8114 4.07334 68.9723 4.05216 69.1333 4.03086C69.1656 4.0266 69.1979 4.02233 69.2311 4.01794C70.2979 3.87402 71.339 3.58801 72.3482 3.21758C73.0737 2.95129 73.5117 2.91377 74.2351 3.19259Z" fill="#AFCC1E"/>
            <path d="M76.403 7.29833C76.5979 7.38599 76.7227 7.53278 76.8303 7.71376C76.881 7.93153 76.8748 8.11207 76.771 8.31368C76.6568 8.48888 76.4984 8.63025 76.3499 8.77626C76.3132 8.81282 76.2765 8.84942 76.2398 8.88604C76.1631 8.9625 76.0862 9.03874 76.0091 9.11481C75.9109 9.21168 75.8131 9.30891 75.7154 9.40627C75.6215 9.49992 75.5273 9.5934 75.4332 9.68685C75.4067 9.71314 75.4067 9.71314 75.3797 9.73995C75.0663 10.051 75.0663 10.051 74.9123 10.1829C74.7614 10.3124 74.6234 10.4539 74.4843 10.5957C74.4358 10.645 74.3871 10.6943 74.3384 10.7435C74.2002 10.8831 74.062 11.0228 73.9244 11.1631C73.8397 11.2494 73.7547 11.3354 73.6694 11.4211C73.6373 11.4536 73.6053 11.4862 73.5734 11.5189C73.1942 11.9075 73.1942 11.9075 72.9018 11.954C72.8677 11.9537 72.8335 11.9533 72.7983 11.953C72.747 11.9535 72.747 11.9535 72.6947 11.954C72.4338 11.9125 72.2619 11.7633 72.0835 11.578C72.0512 11.5453 72.0512 11.5453 72.0181 11.5118C71.9497 11.4425 71.8818 11.3727 71.8138 11.3028C71.7458 11.2334 71.6777 11.1641 71.6096 11.0949C71.5674 11.052 71.5253 11.009 71.4833 10.9658C71.3614 10.8413 71.2354 10.7243 71.103 10.6109C71.0044 10.525 70.9117 10.4334 70.8192 10.341C70.8008 10.323 70.7825 10.3051 70.7636 10.2866C70.572 10.0957 70.4819 9.93484 70.4746 9.66212C70.4774 9.45492 70.526 9.33616 70.6714 9.19041C70.827 9.0512 70.9482 8.97362 71.1617 8.96686C71.1932 8.96517 71.2248 8.96348 71.2573 8.96173C71.5435 9.016 71.764 9.22603 71.9607 9.42908C71.9836 9.45211 72.0064 9.47514 72.03 9.49887C72.1018 9.57143 72.1732 9.64445 72.2445 9.71749C72.2936 9.76721 72.3427 9.8169 72.3918 9.86656C72.5113 9.98744 72.6303 10.1087 72.7491 10.2302C72.938 10.0965 73.103 9.95047 73.2649 9.7853C73.2879 9.76208 73.3109 9.73887 73.3347 9.71496C73.4076 9.64144 73.4803 9.56771 73.553 9.49394C73.6257 9.42032 73.6985 9.34675 73.7713 9.27328C73.8164 9.22779 73.8614 9.18221 73.9063 9.13653C74.0309 9.0107 74.1595 8.89244 74.2935 8.77681C74.3938 8.6882 74.4876 8.59354 74.5815 8.49823C74.6017 8.47798 74.6218 8.45773 74.6425 8.43686C74.706 8.37297 74.7694 8.30897 74.8328 8.24494C75.3368 7.73555 75.3368 7.73555 75.5711 7.53944C75.6122 7.50331 75.6532 7.46709 75.6941 7.43074C75.8992 7.2491 76.1393 7.22519 76.403 7.29833Z" fill="#161616"/>
          </svg>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[30px] h-[30px] overflow-hidden relative flex items-center justify-center">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M13 -0.5C20.4558 -0.5 26.5 5.54416 26.5 13C26.5 20.4558 20.4558 26.5 13 26.5C5.54416 26.5 -0.5 20.4558 -0.5 13C-0.5 5.54416 5.54416 -0.5 13 -0.5Z" fill="#86A788" stroke="#2F2F2F" strokeWidth="1"/>
            </svg>
            <span className="absolute text-[12px] font-semibold text-black" style={{ fontFamily: 'Quicksand' }}>K</span>
          </div>
        </div>
      </div>

      {/* Search Bar & Veg Toggle */}
      <div className="flex w-full items-start gap-3">
        <div className="flex flex-1 h-[46px] px-3 items-center gap-2 rounded-[24px] bg-[#222328]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="#ABB7C2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.7504 15.7499L12.5254 12.5249" stroke="#ABB7C2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input 
            type="text" 
            placeholder="Search ... " 
            className="bg-transparent border-none outline-none text-[#969696] text-[14px] font-semibold flex-1" 
            style={{ fontFamily: 'Quicksand' }}
          />
        </div>
        <div className="flex flex-col justify-between items-center h-[46px]">
          <span className="text-[12px] font-bold text-white uppercase tracking-wider">VEG</span>
          <svg width="30" height="24" viewBox="0 0 30 24" fill="none">
            <rect y="6" width="26" height="12" rx="6" fill="#1F9653"/>
            <circle cx="20.7266" cy="12" r="8" fill="white" stroke="#1F9653" strokeWidth="2"/>
            <path d="M25.0449 12.0022C25.0449 14.4875 23.0302 16.5022 20.5449 16.5022C18.0596 16.5022 16.0449 14.4875 16.0449 12.0022C16.0449 9.51692 18.0596 7.5022 20.5449 7.5022C23.0302 7.5022 25.0449 9.51692 25.0449 12.0022Z" fill="#1F9653"/>
          </svg>
        </div>
      </div>

      {/* Goal Card */}
      <div className="flex w-full p-3 flex-col items-start gap-[7px] rounded-[12px] bg-[#222328]">
        <div className="flex justify-between items-start w-full">
          <span className="text-[#EFEFEF] text-[14px] font-medium" style={{ fontFamily: 'Quicksand' }}>Your Dinner Goal</span>
          <span className="text-[#8FFC86] text-[14px] font-semibold underline cursor-pointer" style={{ fontFamily: 'Quicksand' }}>Edit</span>
        </div>
        <div className="flex items-center gap-3 w-full">
          {/* Circular Chart */}
          <div className="relative w-[67px] h-[67px] flex items-center justify-center">
            <svg width="67" height="67" viewBox="0 0 67 67" fill="none">
              <path d="M33.5 0C37.8993 5.24609e-08 42.2555 0.866503 46.3199 2.55004C50.3843 4.23357 54.0773 6.70116 57.1881 9.81192C60.2988 12.9227 62.7664 16.6157 64.45 20.6801C66.1335 24.7445 67 29.1007 67 33.5L59.63 33.5C59.63 30.0686 58.9541 26.6707 57.641 23.5005C56.3278 20.3302 54.4031 17.4497 51.9767 15.0233C49.5503 12.5969 46.6698 10.6722 43.4995 9.35903C40.3293 8.04587 36.9314 7.37 33.5 7.37V0Z" fill="#FEFFC4" stroke="#2F2F37" strokeWidth="0.8"/>
              <path d="M67 33.5C67 41.649 64.0297 49.5186 58.6452 55.6353C53.2607 61.7519 45.8313 65.6962 37.7481 66.7296C29.6649 67.7629 21.4821 65.8145 14.7321 61.2491C7.98198 56.6838 3.12743 49.8145 1.07739 41.9276L8.21036 40.0735C9.8094 46.2253 13.5959 51.5833 18.861 55.1443C24.1261 58.7053 30.5086 60.2251 36.8135 59.4191C43.1184 58.613 48.9133 55.5365 53.1132 50.7655C57.3131 45.9945 59.63 39.8562 59.63 33.5H67Z" fill="#AED2FF" stroke="#2F2F37" strokeWidth="0.8"/>
              <path d="M1.50139 43.4166C0.134026 39.0044 -0.306098 34.3572 0.208669 29.7667C0.723436 25.1763 2.18197 20.7419 4.49264 16.7422L10.8743 20.4289C9.07194 23.5487 7.93428 27.0075 7.53276 30.588C7.13124 34.1686 7.47454 37.7935 8.54109 41.2349L1.50139 43.4166Z" fill="#BCA2FF" stroke="#2F2F37" strokeWidth="0.8"/>
              <path d="M4.33889 17.0112C7.27377 11.8208 11.5409 7.50768 16.6996 4.51732C21.8583 1.52696 27.7217 -0.0323096 33.6844 0.000507362L33.6438 7.3704C28.9929 7.3448 24.4195 8.56103 20.3957 10.8935C16.3719 13.226 13.0435 16.5902 10.7543 20.6388L4.33889 17.0112Z" fill="#FFABF4" stroke="#2F2F37" strokeWidth="0.8"/>
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="lexend font-medium text-[16px] text-white leading-none">622</span>
              <span className="lexend text-[12px] text-[#CCCCCC]">Kcal</span>
            </div>
          </div>

          {/* Detailed Macro panel */}
          <div className="flex flex-1 h-[56px] px-3 justify-between items-center rounded-[12px] border-[0.6px] border-[#2F2F2F] bg-[#18171C]">
            <MacroItem color="#FEFFC4" val="25" label="Protein" />
            <div className="w-[1px] h-[14px] bg-[#3E3E3E]"></div>
            <MacroItem color="#AED2FF" val="90" label="Carb" />
            <div className="w-[1px] h-[14px] bg-[#3E3E3E]"></div>
            <MacroItem color="#BCA2FF" val="18" label="Fat" />
            <div className="w-[1px] h-[14px] bg-[#3E3E3E]"></div>
            <MacroItem color="#FFABF4" val="18" label="Fiber" />
          </div>
        </div>
      </div>

      {/* Chips Filters */}
      <div className="flex w-full gap-2 overflow-x-auto no-scrollbar py-2">
        <Chip label="All" />
        <Chip label="For You" active={true} showStar={true} />
        <Chip label="High Protein" />
        <Chip label="Low Kcal" />
        <Chip label="Gluten Free" />
      </div>

      {/* Recommendation Header */}
      <div className="flex flex-col w-full gap-2 mt-4">
        <h2 className="text-white text-[18px] font-semibold" style={{ fontFamily: 'Quicksand' }}>For You</h2>
        <div className="flex items-start gap-2">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-0.5">
            <circle cx="6" cy="6" r="5.5" stroke="white" strokeWidth="0.8" />
            <path d="M6 3.5V6.5M6 8.5H6.01" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <p className="text-[10px] text-[#EFEFEF] leading-tight">
            This recommendation is based on your personal <span className="font-bold underline decoration-[#8FFC86]">Nutritional profile</span> matching
          </p>
        </div>
      </div>

      {/* Food Items List */}
      <div className="flex flex-col w-full gap-4 mt-2">
        <FoodItem 
          title="Grilled Paneer Tikka" 
          price="240" 
          calories="634" 
          macros={{ p: '25', c: '13', f: '52' }}
          badge="Best Match"
          tag="Rich Calcium"
          veg={true}
          image="https://api.builder.io/api/v1/image/assets/TEMP/cd5de1ef1f42243c430cc5372280dca47ed6264b?width=160"
        />
        
        {/* Section Divider */}
        <div className="flex w-full pt-4 flex-col items-start gap-4 bg-[#1B1B1B] -mx-4 px-4">
          <div className="flex justify-between items-center w-full px-5">
            <span className="text-white text-[18px] font-semibold">Starter</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="rotate-180">
              <path d="M5 12.5L10 7.5L15 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <FoodItem 
            title="Hyderabadi Biryani" 
            price="240" 
            calories="158" 
            macros={{ p: '24', c: '24', f: '24', fi: '24' }}
            badge="Best Match"
            tag="Rich Calcium"
            veg={true}
            offer="25% OFF"
            image="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=160"
            isCustom={true}
          />
        </div>
      </div>
    </div>
  );
};

// Sub-components

const MacroItem = ({ color, val, label }: { color: string, val: string, label: string }) => (
  <div className="flex flex-col items-center justify-center gap-1">
    <div className="flex items-center gap-1">
      <div className="w-[5px] h-[5px] rounded-full" style={{ backgroundColor: color }}></div>
      <div className="lexend text-[12px] font-medium text-white">{val}<span className="text-[10px] font-light text-[#CCC]">gm</span></div>
    </div>
    <span className="lexend text-[12px] text-[#CCC] font-normal">{label}</span>
  </div>
);

const Chip = ({ label, active = false, showStar = false }: { label: string, active?: boolean, showStar?: boolean }) => (
  <div className={`flex items-center gap-2 h-[32px] px-3 rounded-[16px] whitespace-nowrap border-[0.4px] ${active ? 'bg-[#0C180C] border-[#00C600]' : 'bg-[#222328] border-transparent'}`}>
    {showStar && (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8.77243 0.48035L10.577 4.13692C10.7025 4.39124 10.9451 4.56746 11.2258 4.60817L15.2612 5.19457C15.9681 5.29737 16.2501 6.16579 15.7388 6.66408L12.8188 9.5103C12.6159 9.70821 12.5231 9.99357 12.5712 10.2729L13.2604 14.2919C13.3812 14.9958 12.6423 15.5325 12.0101 15.2004L8.40096 13.303C8.14998 13.1712 7.84994 13.1712 7.59896 13.303L3.98978 15.2004C3.35766 15.5328 2.61874 14.9958 2.73955 14.2919L3.42875 10.2729C3.47681 9.99357 3.38403 9.70821 3.1811 9.5103L0.261123 6.66408C-0.250182 6.16545 0.0318366 5.29704 0.73872 5.19457L4.7741 4.60817C5.05478 4.56746 5.29742 4.39124 5.42291 4.13692L7.22749 0.48035C7.54322 -0.160117 8.45636 -0.160117 8.77243 0.48035Z" fill="url(#chipStarGrad)"/>
        <defs>
          <linearGradient id="chipStarGrad" x1="8" y1="0" x2="8" y2="15.3" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E6CD3D"/>
            <stop offset="1" stopColor="#ED9915"/>
          </linearGradient>
        </defs>
      </svg>
    )}
    <span className={`text-[12px] font-medium ${active ? 'text-white' : 'text-[#CDCDCD]'}`}>{label}</span>
  </div>
);

const FoodItem = ({ title, price, calories, macros, badge, tag, veg, offer, image, isCustom = false }: any) => (
  <div className="flex w-full p-4 flex-col gap-3 rounded-[6px] border-b-[0.7px] border-dashed border-[#1B1B1B] bg-[#18191B]">
    <div className="flex justify-between items-start self-stretch">
      <div className="flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2">
          {badge && (
            <div className="flex h-6 px-1.5 py-0.5 justify-center items-center gap-1.5 rounded-[4px] border border-[#83B4D6] bg-[#1E272C]">
              <span className="text-white text-[12px] font-bold">Best Match</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7.67588 0.725971L9.25489 3.92547C9.3647 4.148 9.577 4.30219 9.8226 4.33782L13.3536 4.85092C13.9721 4.94086 14.2188 5.70073 13.7715 6.13673L11.2165 8.62718C11.0389 8.80035 10.9577 9.05004 10.9998 9.29447L11.6028 12.8111C11.7085 13.427 11.062 13.8966 10.5089 13.606L7.35085 11.9458C7.13124 11.8305 6.8687 11.8305 6.64909 11.9458L3.49106 13.606C2.93795 13.8969 2.29139 13.427 2.39711 12.8111L3.00016 9.29447C3.04221 9.05004 2.96102 8.80035 2.78347 8.62718L0.228483 6.13673C-0.21891 5.70044 0.0278571 4.94057 0.64638 4.85092L4.17734 4.33782C4.42294 4.30219 4.63524 4.148 4.74505 3.92547L6.32406 0.725971C6.60032 0.165562 7.39932 0.165562 7.67588 0.725971Z" fill="url(#foodBadgeGrad)"/>
                <defs>
                  <linearGradient id="foodBadgeGrad" x1="7" y1="0.3" x2="7" y2="13.7" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E6CD3D"/><stop offset="1" stopColor="#ED9915"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f" className="w-5 h-5" />
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f" className="w-5 h-5 opacity-90" />
            <div className="w-5 h-5 p-0.5 border border-[#23A323] rounded-[2px] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#23A323]"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3.5">
            <MacroLine color="#FEFFC4" val={macros.p} label="Protein" />
            <MacroLine color="#AED2FF" val={macros.c} label="Carb" />
            <MacroLine color="#BCA2FF" val={macros.f} label="Fat" />
          </div>
          <span className="text-[#26D326] text-[12px] font-medium">{calories} kcal</span>
        </div>

        <div className="inline-flex h-[18px] px-1.5 items-center gap-2 rounded-[6px] border-[0.2px] border-[#807348] bg-[#2B2413] w-fit">
          <span className="text-[#F9E39E] text-[10px] font-medium">{tag}</span>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-[#E8E8E8] text-[14px] font-medium">{title}</h3>
          <div className="flex items-center gap-2">
            <span className="text-[#CBCBCB] text-[12px]">₹{price}</span>
            {offer && (
              <div className="flex px-1 py-0.5 rounded-[2px] bg-[#D50A0D]">
                <span className="text-white text-[10px] font-medium">{offer}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="w-20 h-20 relative">
          <img src={image} className="w-full h-full object-cover rounded-[12px] border border-[#2F2F2F]" />
          <div className="absolute top-0 left-0 w-full h-[27px] rounded-t-[12px] bg-gradient-to-b from-black to-transparent"></div>
        </div>
        <div className="flex flex-col items-center gap-1">
           {isCustom ? (
             <div className="flex w-20 h-[38px] justify-between items-center px-3 rounded-[8px] bg-[#8FFC86] shadow-lg">
                <span className="text-black font-bold">-</span>
                <span className="text-black font-bold">1</span>
                <span className="text-black font-bold">+</span>
             </div>
           ) : (
             <div className="flex w-20 h-[38px] items-center justify-center rounded-[8px] border border-[#2F2F2F] bg-[#222328] shadow-lg">
                <span className="text-[#00C600] font-semibold">Add</span>
             </div>
           )}
           <span className="text-[#EFEFEF] text-[10px]">Customisable</span>
        </div>
      </div>
    </div>
  </div>
);

const MacroLine = ({ color, val, label }: any) => (
  <div className="flex items-center gap-1 h-3.5">
    <div className="flex items-center gap-1">
      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: color }}></div>
      <span className="text-white text-[15px] font-bold">{val}<span className="text-[10px] font-medium">g</span></span>
    </div>
    <span className="text-[#EFEFEF] text-[12px] font-normal">{label}</span>
  </div>
);

export default NutritionDashboard;
