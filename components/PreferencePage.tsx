
import React, { useState } from 'react';

interface PreferencePageProps {
  onBack: () => void;
  onNext: () => void;
}

const ALL_INGREDIENTS = [
  { id: 'none', name: 'No Restrictions', icon: null },
  { id: 'peanuts', name: 'Peanuts', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/348c98f16b3385d02a844e601c8076d81869801d' }, // Placeholder icons
  { id: 'milk', name: 'Milk', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/milk-icon' },
  { id: 'onion', name: 'Onion', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/53d13c8cafb74363650acead666f3c457faecac7' },
  { id: 'garlic', name: 'Garlic', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/0123edc090cbb1cb5a5d6c9d624d2b442343dd28' },
  { id: 'refined_flour', name: 'Refined flour', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/41370779724b4cb9b6b13a9c0231a7cefb83d970' },
  { id: 'potato', name: 'Potato', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/155e6a6615125f8134d3389a393abd87e8250030' },
  { id: 'soy', name: 'Soy', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/348c98f16b3385d02a844e601c8076d81869801d' },
  { id: 'mushroom', name: 'Mushroom', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/8035dc15caf2cbdde912e5a49871ebca313bea90' },
];

const PreferencePage: React.FC<PreferencePageProps> = ({ onBack, onNext }) => {
  const [search, setSearch] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>(['milk', 'onion']);

  const filteredIngredients = ALL_INGREDIENTS.filter(ing => 
    ing.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleIngredient = (id: string) => {
    if (id === 'none') {
      setSelectedIds([]);
      return;
    }
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const selectedList = ALL_INGREDIENTS.filter(ing => selectedIds.includes(ing.id));

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#0F0E11] relative overflow-hidden">
      {/* Header */}
      <div className="flex w-full h-14 items-center justify-between px-5 sticky top-0 bg-[#0F0E11] z-10">
        <button onClick={onBack} className="p-1 -ml-1 text-white active:scale-90 transition-transform">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M17 21L10 14L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button onClick={onNext} className="text-[#8FFC86] text-[14px] font-semibold underline underline-offset-4 active:opacity-70 transition-opacity">
          Skip
        </button>
      </div>

      <div className="flex flex-col px-4 pt-4 gap-6">
        <h1 className="text-white text-[24px] font-bold leading-tight" style={{ fontFamily: 'Quicksand' }}>
          Any ingredients you want to avoid?
        </h1>

        {/* Selected Tags */}
        {selectedList.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedList.map(ing => (
              <div key={ing.id} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#222328]">
                <div className="flex items-center gap-1">
                   {ing.icon ? (
                     <img src={ing.icon} className="w-4 h-4 object-contain" alt={ing.name} />
                   ) : null}
                   <span className="text-white text-[14px] font-medium" style={{ fontFamily: 'Quicksand' }}>{ing.name}</span>
                </div>
                <button onClick={() => toggleIngredient(ing.id)} className="text-white opacity-60 hover:opacity-100">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Search Bar */}
        <div className="flex w-full h-[46px] px-4 items-center gap-2 rounded-full bg-[#222328]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#969696" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <input 
            type="text" 
            placeholder="Search ..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white text-[14px] font-medium placeholder:text-[#969696]"
            style={{ fontFamily: 'Quicksand' }}
          />
        </div>

        {/* List of ingredients */}
        <div className="flex flex-col gap-3 pb-10">
          {filteredIngredients.map(ing => (
            <button 
              key={ing.id}
              onClick={() => toggleIngredient(ing.id)}
              className={`flex w-full h-[46px] px-4 items-center gap-3 rounded-xl transition-all duration-200 ${
                selectedIds.includes(ing.id) ? 'bg-[#0C180C] border border-[#00C600]/30 shadow-[0_0_15px_rgba(0,198,0,0.1)]' : 'bg-[#222328]'
              }`}
            >
              {ing.icon ? (
                <img src={ing.icon} className="w-6 h-6 object-contain" alt={ing.name} />
              ) : (
                <div className="w-6 h-6 rounded-md bg-[#18171C] flex items-center justify-center">
                  <span className="text-[10px] text-[#CDCDCD]">🚫</span>
                </div>
              )}
              <span className={`text-[18px] font-medium ${selectedIds.includes(ing.id) ? 'text-white' : 'text-[#CDCDCD]'}`} style={{ fontFamily: 'Quicksand' }}>
                {ing.name}
              </span>
              {selectedIds.includes(ing.id) && (
                <div className="ml-auto w-5 h-5 rounded-full bg-[#8FFC86] flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0F0E11" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Bottom CTA to proceed */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[390px] mx-auto p-4 z-20">
         <button 
           onClick={onNext}
           className="w-full py-4 bg-[#8FFC86] rounded-[20px] text-[#0F0E11] font-bold text-lg shadow-[0_4px_30px_rgba(143,252,134,0.3)] active:scale-95 transition-all"
           style={{ fontFamily: 'Quicksand' }}
         >
           Confirm Preferences
         </button>
      </div>
    </div>
  );
};

export default PreferencePage;
