
import React from 'react';

interface IngredientsPageProps {
  onBack: () => void;
  onAdd: () => void;
}

const IngredientsPage: React.FC<IngredientsPageProps> = ({ onBack, onAdd }) => {
  const ingredients = [
    { name: "Amul fresh paneer", weight: "115g" },
    { name: "Yogurt", weight: "29g" },
    { name: "Bell pappers green", weight: "14g" },
    { name: "Onions", weight: "14g" },
    { name: "Spices turmeric", weight: "1g" },
    { name: "Spices cumin seed", weight: "1g" },
    { name: "Coriander poweder", weight: "1g" },
    { name: "Spices chili powder", weight: "1g" },
    { name: "Garam masala", weight: "1g" },
    { name: "Salt", weight: "2g" },
    { name: "Black pepper", weight: "1g" },
    { name: "Ginger garlic paste", weight: "5g" },
    { name: "Lemon juice", weight: "5ml" },
    { name: "Vegetable oil", weight: "10ml" },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#0F0E11] relative">
      {/* Background Dimmer/Overlay Effect */}
      <div className="fixed inset-0 bg-black/60 z-0" onClick={onBack}></div>

      {/* Main Bottom Sheet Container */}
      <div className="mt-auto w-full bg-[#222328] rounded-t-[24px] relative z-10 flex flex-col items-center pt-[21px] pb-[40px] shadow-2xl overflow-hidden">
        {/* Drag Handle */}
        <div className="w-[38px] h-[2px] bg-[#7C7C7C] rounded-[100px] mb-[20px]"></div>

        {/* Content Wrapper */}
        <div className="flex flex-col w-full gap-[24px]">
          
          {/* Header Section: Image + Title + Desc */}
          <div className="flex px-4 items-start gap-[12px]">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/bb563290769c7d847264ea504fac17814da7e2b3?width=220" 
              className="w-[110px] h-[110px] rounded-[12px] border border-[#7C7C7C] object-cover flex-shrink-0"
              alt="Grilled Paneer Tikka"
            />
            <div className="flex flex-col items-start gap-[6px] flex-1">
              <h2 className="text-white text-[18px] font-bold" style={{ fontFamily: 'Quicksand' }}>Grilled Paneer Tikka</h2>
              <p className="text-[#EFEFEF] text-[10px] font-medium leading-normal text-justify" style={{ fontFamily: 'Quicksand' }}>
                Grilled paneer tikka is a popular indian vegetarian starter featuring marinated cubes of paneer and vegetables, skewered and grilled to perfection.
              </p>
              <div className="flex items-center gap-[6px] cursor-pointer">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path d="M5.87938 8.41159L10.069 12.5551L14.2126 8.36548" stroke="#8FFC86" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.0689 12.5551L10.0136 2.5553" stroke="#8FFC86" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5688 12.5137L17.5872 15.847C17.5897 16.289 17.4164 16.7139 17.1056 17.0281C16.7948 17.3424 16.3718 17.5204 15.9298 17.5228L4.26332 17.5874C3.8213 17.5898 3.39641 17.4166 3.08213 17.1057C2.76784 16.7949 2.58991 16.372 2.58746 15.93L2.56902 12.5967" stroke="#8FFC86" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[#8FFC86] text-[12px] font-semibold underline" style={{ fontFamily: 'Quicksand' }}>Trust Certificate</span>
              </div>
            </div>
          </div>

          {/* Nutritional Info Section */}
          <div className="flex flex-col px-4 gap-[16px]">
            <div className="flex items-center gap-[20px]">
              {/* Gauge */}
              <div className="relative w-[68px] h-[68px] flex items-center justify-center">
                <svg width="68" height="68" viewBox="0 0 68 68" fill="none" className="transform -rotate-90">
                  <path d="M34 4C49.464 4 62 16.536 62 32" stroke="#2F2F37" strokeWidth="6" fill="none" strokeLinecap="round"/>
                  {/* Multi-segmented paths matching design colors */}
                  <circle cx="34" cy="34" r="30" stroke="#2F2F37" strokeWidth="8" fill="none" />
                  <path d="M64 34C64 17.4315 50.5685 4 34 4" stroke="#FEFFC4" strokeWidth="8" fill="none" />
                  <path d="M34 64C50.5685 64 64 50.5685 64 34" stroke="#AED2FF" strokeWidth="8" fill="none" />
                  <path d="M4 34C4 50.5685 17.4315 64 34 64" stroke="#BCA2FF" strokeWidth="8" fill="none" />
                  <path d="M34 4C17.4315 4 4 17.4315 4 34" stroke="#FFABF4" strokeWidth="8" fill="none" />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-white text-[16px] font-medium leading-none" style={{ fontFamily: 'Lexend' }}>634</span>
                  <span className="text-[#CCCCCC] text-[12px]" style={{ fontFamily: 'Lexend' }}>Kcal</span>
                </div>
              </div>

              {/* Macro Grid */}
              <div className="flex flex-1 justify-between items-center gap-2">
                <MacroCell color="#FEFFC4" val="25" label="Protein" />
                <MacroCell color="#AED2FF" val="23" label="Carb" />
                <MacroCell color="#BCA2FF" val="52" label="Fat" />
                <MacroCell color="#FFABF4" val="1" label="Fiber" />
              </div>
            </div>
          </div>

          {/* Ingredients Section */}
          <div className="flex flex-col gap-[16px]">
            <h3 className="px-4 text-white text-[18px] font-bold" style={{ fontFamily: 'Quicksand' }}>Ingredients</h3>
            <div className="bg-[#2F2F39] rounded-t-[12px] p-[12px_16px_0_16px] flex flex-col gap-[16px] min-h-[300px]">
              {ingredients.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center w-full">
                  <span className="text-[#EFEFEF] text-[16px] font-medium" style={{ fontFamily: 'Quicksand' }}>{item.name}</span>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-[#EFEFEF] text-[14px] font-medium" style={{ fontFamily: 'Quicksand' }}>
                      {item.weight.replace(/\D/g, '')}
                    </span>
                    <span className="text-[#EFEFEF] text-[10px] font-medium" style={{ fontFamily: 'Quicksand' }}>
                      {item.weight.replace(/\d/g, '')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const MacroCell = ({ color, val, label }: { color: string, val: string, label: string }) => (
  <div className="flex flex-col items-center gap-[6px]">
    <div className="flex items-center gap-[4px]">
      <div className="w-[7px] h-[7px] rounded-full" style={{ backgroundColor: color }}></div>
      <div className="flex items-baseline">
        <span className="text-[#CCCCCC] text-[16px] font-bold leading-none" style={{ fontFamily: 'Quicksand' }}>{val}</span>
        <span className="text-[#CCCCCC] text-[12px] font-medium ml-0.5" style={{ fontFamily: 'Quicksand' }}>g</span>
      </div>
    </div>
    <span className="text-[#CCCCCC] text-[14px] font-medium text-center" style={{ fontFamily: 'Quicksand' }}>{label}</span>
  </div>
);

export default IngredientsPage;
