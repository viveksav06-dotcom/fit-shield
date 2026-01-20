
import React from 'react';

interface RecommendationsPageProps {
  onBack: () => void;
  onAdd: () => void;
}

const RecommendationsPage: React.FC<RecommendationsPageProps> = ({ onBack, onAdd }) => {
  const recommendations = [
    { 
      id: 1,
      title: "Veg Puff", 
      sub: "Half", 
      price: "120", 
      kcal: "340", 
      macros: { p: '24', c: '24', f: '24' }, 
      image: "https://api.builder.io/api/v1/image/assets/353068b6bf3d41a2be9b91dec5080793/70a79495f695dda9a2fe6d94d8ce54be25cf1ed0?placeholderIfAbsent=true" 
    },
    { 
      id: 2,
      title: "Chicken Burger", 
      sub: "Large", 
      price: "180", 
      kcal: "420", 
      macros: { p: '32', c: '40', f: '18' }, 
      image: "https://api.builder.io/api/v1/image/assets/353068b6bf3d41a2be9b91dec5080793/cd07f9141e8e2eb93285113fa84e7c9f4dfd4559?placeholderIfAbsent=true" 
    },
    { 
      id: 3,
      title: "Paneer Wrap", 
      sub: "Full", 
      price: "150", 
      kcal: "310", 
      macros: { p: '18', c: '35', f: '12' }, 
      image: "https://api.builder.io/api/v1/image/assets/353068b6bf3d41a2be9b91dec5080793/5ec0d65dbeaec6cf988505e28995d029ce9185e1?placeholderIfAbsent=true" 
    },
    { 
      id: 4,
      title: "Garden Salad", 
      sub: "Bowl", 
      price: "110", 
      kcal: "120", 
      macros: { p: '4', c: '15', f: '2' }, 
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=200" 
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#0F0E11] pb-10">
      {/* Header Navigation */}
      <div className="flex items-center gap-4 px-4 h-[56px] sticky top-0 bg-[#0F0E11]/90 backdrop-blur-md z-50">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-white/5 transition-colors active:scale-90">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M17 21L10 14L17 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className="text-[#EFEFEF] text-[16px] font-bold" style={{ fontFamily: 'Quicksand' }}>Explore Meals</span>
      </div>

      <div className="flex flex-col gap-6 px-4 py-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-[#EFEFEF] text-[16px] font-semibold" style={{ fontFamily: 'Inter' }}>Recommended For You</h2>
        </div>

        {/* Grid layout for the new vertical cards */}
        <div className="grid grid-cols-2 gap-4">
          {recommendations.map((item) => (
            <FigmaRecommendationCard 
              key={item.id}
              {...item}
              onAdd={onAdd}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FigmaRecommendationCard = ({ title, sub, price, kcal, macros, image, onAdd }: any) => (
  <div className="flex flex-col min-h-[192px] w-full p-3 rounded-[16px] bg-[#222328] border border-transparent hover:border-[#2F2F2F] transition-all">
    {/* Product Image */}
    <div className="relative w-full aspect-[122/78] mb-2">
      <img 
        className="w-full h-full rounded-[8px] object-cover bg-[#18171C]" 
        src={image} 
        alt={title} 
      />
      {/* Mini Macro Overlay */}
      <div className="absolute top-1 left-1 flex flex-col gap-0.5">
         <div className="bg-black/60 backdrop-blur-sm px-1 rounded flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-[#8FFC86]"></div>
            <span className="text-[8px] text-white font-bold">{kcal}</span>
         </div>
      </div>
    </div>

    {/* Info Section */}
    <div className="flex flex-col gap-0.5 mb-3">
      <div className="text-white text-[12px] font-semibold truncate" style={{ fontFamily: 'Quicksand' }}>
        {title} <span className="text-[#CCC] font-normal">({sub})</span>
      </div>
      <div className="text-white text-[12px] font-normal" style={{ fontFamily: 'Quicksand' }}>
        ₹{price}
      </div>
    </div>

    {/* Macros Breakdown (Simplified for grid) */}
    <div className="flex justify-between items-center mb-3 px-0.5">
       <div className="flex flex-col items-center">
          <span className="text-[9px] text-[#8FFC86] font-bold leading-none">{macros.p}g</span>
          <span className="text-[7px] text-[#969696] uppercase font-bold">Prot</span>
       </div>
       <div className="w-[1px] h-4 bg-[#2F2F2F]"></div>
       <div className="flex flex-col items-center">
          <span className="text-[9px] text-[#AED2FF] font-bold leading-none">{macros.c}g</span>
          <span className="text-[7px] text-[#969696] uppercase font-bold">Carb</span>
       </div>
       <div className="w-[1px] h-4 bg-[#2F2F2F]"></div>
       <div className="flex flex-col items-center">
          <span className="text-[9px] text-[#FFABF4] font-bold leading-none">{macros.f}g</span>
          <span className="text-[7px] text-[#969696] uppercase font-bold">Fat</span>
       </div>
    </div>

    {/* Add Button */}
    <button 
      onClick={onAdd}
      className="w-full py-1.5 rounded-[8px] border border-[#2F2F2F] bg-[#222328] shadow-[0_4px_26px_rgba(0,0,0,0.45)] active:scale-95 transition-all text-[#00C600] text-[16px] font-bold"
      style={{ fontFamily: 'Quicksand' }}
    >
      Add
    </button>
  </div>
);

export default RecommendationsPage;
