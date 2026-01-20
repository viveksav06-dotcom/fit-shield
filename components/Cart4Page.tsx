
import React from 'react';

interface Cart4PageProps {
  onFinish: () => void;
}

const Cart4Page: React.FC<Cart4PageProps> = ({ onFinish }) => {
  return (
    <div className="flex flex-col items-center w-full bg-[#0F0E11] min-h-screen pt-20 gap-6 pb-40 overflow-hidden">
      {/* Active Selection Summary */}
      <div className="w-full px-4">
        <div className="w-full p-5 rounded-[24px] bg-[#18171C] border border-[#2F2F2F] flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h3 className="text-white text-lg font-bold" style={{ fontFamily: 'Quicksand' }}>Order Review</h3>
            <span className="text-[#8FFC86] text-sm font-bold">2 Items</span>
          </div>
          <div className="flex -space-x-3 overflow-hidden">
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-[#18171C]" src="https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=100" alt="" />
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-[#18171C]" src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=100" alt="" />
          </div>
        </div>
      </div>

      {/* Recommended For You - The core part of this update */}
      <div className="w-full flex flex-col gap-4">
        <div className="px-4 flex justify-between items-center">
          <h2 className="text-[#EFEFEF] text-[16px] font-semibold" style={{ fontFamily: 'Inter' }}>Recommended For You</h2>
        </div>
        
        <div className="flex w-full gap-3 overflow-x-auto no-scrollbar px-4">
          <RecommendationCard 
            title="Veg Puff" 
            sub="Half" 
            price="120" 
            kcal="340" 
            image="https://api.builder.io/api/v1/image/assets/TEMP/746508f8fb2f0d84eb1320e309d1a97733cbe2d0?width=126" 
          />
          <RecommendationCard 
            title="Cheese Patty" 
            sub="Mini" 
            price="80" 
            kcal="210" 
            image="https://api.builder.io/api/v1/image/assets/TEMP/6c92f224e688e10dda7e86f4c914c99ab51dae4b?width=126" 
          />
          <RecommendationCard 
            title="Garlic Bread" 
            sub="2 Pcs" 
            price="150" 
            kcal="420" 
            image="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&q=80&w=200" 
          />
        </div>
      </div>

      {/* Payment Summary Section */}
      <div className="w-full px-4 flex flex-col gap-3">
         <div className="w-full p-5 rounded-[24px] bg-[#222328] border border-[#2F2F2F] flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <span className="text-[#969696] text-sm">Item Total</span>
                <span className="text-white text-sm font-bold">₹560.00</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-[#969696] text-sm">Taxes & Charges</span>
                <span className="text-white text-sm font-bold">₹42.50</span>
            </div>
            <div className="h-[0.5px] bg-[#2F2F2F] w-full"></div>
            <div className="flex justify-between items-center">
                <span className="text-white font-bold">Grand Total</span>
                <span className="text-[#8FFC86] text-lg font-bold" style={{ fontFamily: 'Lexend' }}>₹602.50</span>
            </div>
         </div>
      </div>

      {/* Final Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[390px] mx-auto p-4 z-[100]">
        <div className="bg-[#222328] p-5 rounded-[24px] border border-[#2F2F2F] shadow-2xl flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
               <div className="w-10 h-10 rounded-xl bg-[#18171C] flex items-center justify-center border border-[#2F2F2F]">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8FFC86" strokeWidth="2">
                   <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
                 </svg>
               </div>
               <div className="flex flex-col">
                 <span className="text-white text-xs font-bold">VISA ... 4242</span>
                 <span className="text-[#969696] text-[10px] uppercase">Payment Mode</span>
               </div>
            </div>
            <button className="text-[#8FFC86] text-xs font-bold underline">Change</button>
          </div>
          <button 
            onClick={onFinish}
            className="w-full py-4 bg-[#8FFC86] rounded-[16px] text-[#0F0E11] font-bold text-[18px] shadow-[0_4px_20px_rgba(143,252,134,0.3)] active:scale-95 transition-all"
            style={{ fontFamily: 'Quicksand' }}
          >
            Pay & Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

const RecommendationCard = ({ title, sub, price, kcal, image }: any) => (
  <div className="flex flex-shrink-0 w-[240px] p-3 items-center gap-2 rounded-xl bg-[#222328] border border-[#2F2F2F]">
    <div className="flex flex-col flex-1 gap-3 items-start">
      <div className="flex flex-col gap-2 w-full">
        {/* Macros */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-start gap-1">
             <div className="flex items-center gap-1">
                <div className="w-[3px] h-[3px] rounded-full bg-[#FEFF87]"></div>
                <span className="text-[#E9E9E9] text-[10px] font-semibold">24<span className="text-[8px] font-medium">g</span></span>
             </div>
             <span className="text-[#CCC] text-[8px] font-medium">Protein</span>
          </div>
          <div className="flex flex-col items-center gap-1">
             <div className="flex items-center gap-1">
                <div className="w-[3px] h-[3px] rounded-full bg-[#AED2FF]"></div>
                <span className="text-[#E9E9E9] text-[10px] font-semibold text-center">24<span className="text-[8px] font-medium">g</span></span>
             </div>
             <span className="text-[#CCC] text-[8px] font-medium">Carb</span>
          </div>
          <div className="flex flex-col items-center gap-1">
             <div className="flex items-center gap-1">
                <div className="w-[3px] h-[3px] rounded-full bg-[#AED2FF]"></div>
                <span className="text-[#E9E9E9] text-[10px] font-semibold text-center">24<span className="text-[8px] font-medium">g</span></span>
             </div>
             <span className="text-[#CCC] text-[8px] font-medium">Fat</span>
          </div>
        </div>
        {/* Calories */}
        <span className="text-[#26D326] text-[12px] font-medium capitalize" style={{ fontFamily: 'Quicksand' }}>
          {kcal} kcal
        </span>
      </div>

      <div className="flex flex-col gap-1 w-full">
        <div className="text-[#CCC] text-[10px] font-normal truncate" style={{ fontFamily: 'Quicksand' }}>
          <span className="text-[#EEE] font-medium">{title}</span> <span className="text-[#CCC] font-normal">({sub})</span>
        </div>
        <span className="text-[#DDD] text-[10px] font-normal" style={{ fontFamily: 'Quicksand' }}>₹{price}</span>
      </div>
    </div>

    <div className="flex flex-col justify-between items-center h-full">
      <img className="w-[63px] h-[62px] rounded-md border border-[#494949] object-cover mb-2" src={image} alt={title} />
      <button className="flex w-[62px] h-[28px] items-center justify-center rounded-lg border border-[#2F2F2F] bg-[#222328] shadow-[0_4px_26px_0_rgba(0,0,0,0.45)]">
        <span className="text-[#00C600] text-[14px] font-bold" style={{ fontFamily: 'Quicksand' }}>Add</span>
      </button>
    </div>
  </div>
);

export default Cart4Page;
