
import React from 'react';

interface RecommendationsPageProps {
  onBack: () => void;
  onAdd: () => void;
}

const RecommendationsPage: React.FC<RecommendationsPageProps> = ({ onBack, onAdd }) => {
  const recommendations = [
    { title: "Veg Puff", sub: "Half", price: "120", kcal: "340", macros: { p: '24', c: '24', f: '24' }, image: "https://api.builder.io/api/v1/image/assets/TEMP/746508f8fb2f0d84eb1320e309d1a97733cbe2d0?width=126" },
    { title: "Cheese Croissant", sub: "Regular", price: "180", kcal: "420", macros: { p: '12', c: '35', f: '28' }, image: "https://api.builder.io/api/v1/image/assets/TEMP/6c92f224e688e10dda7e86f4c914c99ab51dae4b?width=126" },
    { title: "Grilled Paneer", sub: "Whole", price: "240", kcal: "560", macros: { p: '28', c: '10', f: '45' }, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=200" },
    { title: "Bowl of Fruit", sub: "Large", price: "150", kcal: "180", macros: { p: '2', c: '42', f: '1' }, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=200" },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#0F0E11]">
      {/* Header Navigation */}
      <div className="flex items-center gap-4 px-4 h-[56px] sticky top-0 bg-[#0F0E11]/90 backdrop-blur-md z-50">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-white/5">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M17 21L10 14L17 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className="text-[#EFEFEF] text-[16px] font-bold" style={{ fontFamily: 'Quicksand' }}>Recommendations</span>
      </div>

      <div className="flex flex-col gap-5 px-4 py-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-[#EFEFEF] text-[18px] font-semibold" style={{ fontFamily: 'Inter' }}>Recommended For You</h2>
          <p className="text-[#969696] text-[13px] font-medium" style={{ fontFamily: 'Quicksand' }}>
            Tailored meal choices to meet your nutritional targets.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {recommendations.map((item, idx) => (
            <RefinedVerticalCard 
              key={idx}
              {...item}
              onAdd={onAdd}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const RefinedVerticalCard = ({ title, sub, price, kcal, macros, image, onAdd }: any) => (
  <div className="flex w-full p-3 items-center gap-2 rounded-xl bg-[#222328] border border-[#2F2F2F]">
    {/* Left Column: Stats and Info */}
    <div className="flex flex-col flex-1 items-flex-start gap-4">
      <div className="flex flex-col gap-2 self-stretch">
        <div className="flex items-center gap-4">
          <MacroVerticalStack color="#FEFF87" val={macros.p} label="Protein" />
          <MacroVerticalStack color="#AED2FF" val={macros.c} label="Carb" />
          <MacroVerticalStack color="#AED2FF" val={macros.f} label="Fat" />
        </div>
        <span className="text-[#26D326] text-[13px] font-bold" style={{ fontFamily: 'Quicksand' }}>
          {kcal} kcal
        </span>
      </div>

      <div className="flex flex-col gap-1 self-stretch">
        <div className="text-[#CCC] text-[14px] font-medium" style={{ fontFamily: 'Quicksand' }}>
          <span className="text-[#EEE] font-bold">{title}</span> <span className="text-[#969696]">({sub})</span>
        </div>
        <span className="text-[#DDD] text-[13px] font-semibold" style={{ fontFamily: 'Quicksand' }}>₹{price}</span>
      </div>
    </div>

    {/* Right Column: Image and Action */}
    <div className="flex flex-col justify-between items-center self-stretch gap-3">
      <img className="w-[80px] h-[78px] rounded-lg border border-[#494949] object-cover" src={image} alt={title} />
      <button 
        onClick={onAdd}
        className="flex w-[80px] h-[32px] items-center justify-center rounded-lg border border-[#2F2F2F] bg-[#18171C] shadow-[0_4px_26px_0_rgba(0,0,0,0.45)] active:scale-95 transition-transform"
      >
        <span className="text-[#00C600] text-[14px] font-bold" style={{ fontFamily: 'Quicksand' }}>Add</span>
      </button>
    </div>
  </div>
);

const MacroVerticalStack = ({ color, val, label }: { color: string, val: string, label: string }) => (
  <div className="flex flex-col items-start gap-1 justify-center">
    <div className="flex items-center gap-1.5">
      <div className="w-[4px] h-[4px] rounded-full" style={{ backgroundColor: color }}></div>
      <span className="text-[#E9E9E9] text-[12px] font-bold">{val}<span className="text-[9px] font-medium">g</span></span>
    </div>
    <span className="text-[#CCC] text-[9px] font-medium uppercase tracking-tighter">{label}</span>
  </div>
);

export default RecommendationsPage;
