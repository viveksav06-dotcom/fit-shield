
import React from 'react';

interface MenuDesign2Props {
  onBack: () => void;
}

const MenuDesign2: React.FC<MenuDesign2Props> = ({ onBack }) => {
  const categories = [
    { name: "Signature", count: 20, isSignature: true },
    { name: "Recommended for you", count: 25 },
    { name: "Newly Launched", count: 30 },
    { name: "Burgers With Milet Bun", count: 6 },
    { name: "Group Sharing Combos", count: 27 },
    { name: "McSaver Combos (2 Pc Meals)", count: 66 },
    { name: "Burger Combos (3 Pc Meals)", count: 45 },
    { name: "Burgers & Wraps", count: 34 },
    { name: "Fries & Sides", count: 17 },
    { name: "Coffee & Beverages (Hot and Cold)", count: 44 },
    { name: "Cakes Brownies and Cookies", count: 12 },
    { name: "Desserts", count: 9 },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-black/40 backdrop-blur-sm px-4">
      <div className="flex flex-col w-full max-w-[358px] gap-[12px] items-center">
        {/* Main List Container */}
        <div className="flex flex-col items-start gap-[20px] self-stretch p-[12px] rounded-[12px] bg-[#222328] relative">
          {categories.map((cat, index) => (
            <div 
              key={index}
              className="flex justify-between items-center self-stretch relative cursor-pointer active:opacity-60 transition-opacity"
            >
              <span 
                className={`font-semibold leading-normal ${cat.isSignature ? 'text-[#8FFC86] text-[16px]' : 'text-white text-[14px] font-medium'}`} 
                style={{ fontFamily: 'Quicksand' }}
              >
                {cat.name}
              </span>
              <span 
                className={`font-semibold leading-normal ${cat.isSignature ? 'text-[#8FFC86] text-[16px]' : 'text-white text-[12px] font-medium'}`}
                style={{ fontFamily: 'Quicksand' }}
              >
                {cat.count}
              </span>
            </div>
          ))}
        </div>

        {/* Close Button */}
        <button 
          onClick={onBack}
          className="flex w-[100px] h-[32px] p-[8px_18px] justify-center items-center gap-[10px] rounded-[8px] bg-[#CECECE] relative active:scale-95 transition-transform"
          style={{ boxShadow: '0 0 20px 0 #242424' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_close)">
              <path d="M11.3331 4.66663L4.6665 11.3332" stroke="#242424" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M4.6665 4.66663L11.3331 11.3332" stroke="#242424" strokeWidth="1.5" strokeLinecap="round"/>
            </g>
            <defs>
              <clipPath id="clip0_close">
                <rect width="16" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <span 
            className="text-[#242424] text-center text-[14px] font-semibold leading-normal" 
            style={{ fontFamily: 'Quicksand' }}
          >
            Close
          </span>
        </button>
      </div>
    </div>
  );
};

export default MenuDesign2;
