
import React, { useState } from 'react';

interface CartPageProps {
  onFinish: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ onFinish }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Hyderabadi Biryani",
      price: 320,
      kcal: 458,
      qty: 1,
      image: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=200",
      macros: { p: 24, c: 56, f: 22, fi: 5 }
    },
    {
      id: 2,
      title: "Grilled Paneer Tikka",
      price: 240,
      kcal: 634,
      qty: 1,
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=200",
      macros: { p: 25, c: 13, f: 52, fi: 2 }
    }
  ]);

  const updateQty = (id: number, delta: number) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const totalKcal = items.reduce((acc, item) => acc + (item.kcal * item.qty), 0);
  const totalPrice = items.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <div className="flex flex-col items-center w-full bg-[#0F0E11] min-h-screen pt-20 px-4 pb-40 gap-6">
      {/* Header Extension for "Clear" */}
      <div className="absolute top-0 right-0 h-16 flex items-center pr-4 z-[60]">
        <button className="text-[#8FFC86] text-[14px] font-bold" style={{ fontFamily: 'Quicksand' }}>Clear</button>
      </div>

      {/* Goal Impact Summary */}
      <div className="w-full p-5 rounded-[24px] bg-[#222328] flex flex-col gap-5 border border-[#2F2F2F] shadow-xl">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <span className="text-white text-[16px] font-bold" style={{ fontFamily: 'Quicksand' }}>Goal Impact</span>
            <span className="text-[#969696] text-[12px] font-medium" style={{ fontFamily: 'Quicksand' }}>Review how these selections fit your target</span>
          </div>
          <div className="w-6 h-6 rounded-full border border-[#2F2F2F] flex items-center justify-center">
             <span className="text-[#969696] text-[10px]">i</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative w-[86px] h-[86px] flex-shrink-0 flex items-center justify-center">
            <svg width="86" height="86" viewBox="0 0 67 67" fill="none" className="scale-[1.28]">
               <path d="M33.5 0C37.8993 5.24609e-08 42.2555 0.866503 46.3199 2.55004C50.3843 4.23357 54.0773 6.70116 57.1881 9.81192C60.2988 12.9227 62.7664 16.6157 64.45 20.6801C66.1335 24.7445 67 29.1007 67 33.5L59.63 33.5C59.63 30.0686 58.9541 26.6707 57.641 23.5005C56.3278 20.3302 54.4031 17.4497 51.9767 15.0233C49.5503 12.5969 46.6698 10.6722 43.4995 9.35903C40.3293 8.04587 36.9314 7.37 33.5 7.37V0Z" fill="#FEFFC4" stroke="#2F2F37" strokeWidth="0.8"/>
               <path d="M67 33.5C67 41.649 64.0297 49.5186 58.6452 55.6353C53.2607 61.7519 45.8313 65.6962 37.7481 66.7296C29.6649 67.7629 21.4821 65.8145 14.7321 61.2491C7.98198 56.6838 3.12743 49.8145 1.07739 41.9276L8.21036 40.0735C9.8094 46.2253 13.5959 51.5833 18.861 55.1443C24.1261 58.7053 30.5086 60.2251 36.8135 59.4191C43.1184 58.613 48.9133 55.5365 53.1132 50.7655C57.3131 45.9945 59.63 39.8562 59.63 33.5H67Z" fill="#AED2FF" stroke="#2F2F37" strokeWidth="0.8"/>
               <path d="M1.50139 43.4166C0.134026 39.0044 -0.306098 34.3572 0.208669 29.7667C0.723436 25.1763 2.18197 20.7419 4.49264 16.7422L10.8743 20.4289C9.07194 23.5487 7.93428 27.0075 7.53276 30.588C7.13124 34.1686 7.47454 37.7935 8.54109 41.2349L1.50139 43.4166Z" fill="#BCA2FF" stroke="#2F2F37" strokeWidth="0.8"/>
               <path d="M4.33889 17.0112C7.27377 11.8208 11.5409 7.50768 16.6996 4.51732C21.8583 1.52696 27.7217 -0.0323096 33.6844 0.000507362L33.6438 7.3704C28.9929 7.3448 24.4195 8.56103 20.3957 10.8935C16.3719 13.226 13.0435 16.5902 10.7543 20.6388L4.33889 17.0112Z" fill="#FFABF4" stroke="#2F2F37" strokeWidth="0.8"/>
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="lexend font-bold text-[20px] text-white leading-tight">{totalKcal}</span>
              <span className="lexend text-[10px] text-[#CCCCCC] font-medium tracking-tight">Kcal Impact</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 flex-1">
             <ProgressItem color="#FEFFC4" label="Protein" current={49} total={120} />
             <ProgressItem color="#AED2FF" label="Carbs" current={69} total={250} />
             <ProgressItem color="#BCA2FF" label="Fats" current={74} total={120} />
             <ProgressItem color="#FFABF4" label="Fiber" current={7} total={35} />
          </div>
        </div>
      </div>

      {/* Cart Items List */}
      <div className="w-full flex flex-col gap-4">
        <h3 className="text-white text-[18px] font-bold px-1" style={{ fontFamily: 'Quicksand' }}>Selected Items</h3>
        {items.map(item => (
          <CartItemCard 
            key={item.id}
            item={item} 
            onQtyChange={(delta: number) => updateQty(item.id, delta)}
          />
        ))}
      </div>

      {/* Special Instruction */}
      <div className="w-full flex flex-col gap-3">
         <h3 className="text-white text-[16px] font-bold px-1" style={{ fontFamily: 'Quicksand' }}>Add a note</h3>
         <div className="w-full h-[86px] p-4 bg-[#222328] rounded-[16px] border border-[#2F2F2F]">
           <textarea 
             placeholder="E.g. Make it extra spicy, No onions..." 
             className="w-full h-full bg-transparent border-none outline-none text-[#CDCDCD] text-[14px] placeholder:text-[#595959] resize-none"
             style={{ fontFamily: 'Quicksand' }}
           />
         </div>
      </div>

      {/* Floating Action Button Bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[390px] mx-auto p-4 z-[100]">
        <div className="flex flex-col gap-4 bg-[#222328] p-5 rounded-[24px] border border-[#2F2F2F] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-[#969696] text-[12px] font-bold uppercase tracking-wider">Estimated Total</span>
              <span className="text-white text-[24px] font-bold" style={{ fontFamily: 'Lexend' }}>₹{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[#8FFC86] text-[16px] font-bold" style={{ fontFamily: 'Lexend' }}>{totalKcal} Kcal</span>
              <span className="text-[#969696] text-[10px] uppercase font-bold tracking-tighter">Total impact</span>
            </div>
          </div>
          <button 
            onClick={onFinish}
            className="w-full py-4 bg-[#8FFC86] rounded-[16px] text-[#0F0E11] font-bold text-[18px] shadow-[0_4px_20px_rgba(143,252,134,0.3)] active:scale-95 transition-all flex items-center justify-center gap-2"
            style={{ fontFamily: 'Quicksand' }}
          >
            Confirm & Log Meals
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const ProgressItem = ({ color, label, current, total }: any) => (
  <div className="flex flex-col gap-1.5">
    <div className="flex justify-between items-baseline">
      <span className="text-[10px] text-[#969696] uppercase font-bold tracking-wider" style={{ fontFamily: 'Quicksand' }}>{label}</span>
      <span className="text-[11px] text-white font-bold" style={{ fontFamily: 'Lexend' }}>{current}g</span>
    </div>
    <div className="h-[5px] w-full bg-[#18171C] rounded-full overflow-hidden">
      <div className="h-full rounded-full transition-all duration-300" style={{ width: `${Math.min(100, (current / total) * 100)}%`, backgroundColor: color }}></div>
    </div>
  </div>
);

const CartItemCard = ({ item, onQtyChange }: any) => (
  <div className="w-full p-4 bg-[#18171C] rounded-[24px] border border-[#2F2F2F] flex flex-col gap-4 shadow-md">
    <div className="flex items-center gap-4">
      <div className="w-[72px] h-[72px] rounded-[16px] overflow-hidden border border-[#2F2F2F] flex-shrink-0">
        <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
      </div>
      <div className="flex flex-col flex-1 gap-1">
        <div className="flex justify-between items-start">
           <h4 className="text-white text-[16px] font-bold" style={{ fontFamily: 'Quicksand' }}>{item.title}</h4>
           <button className="p-1 opacity-40 hover:opacity-100 transition-opacity">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D50A0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/>
              </svg>
           </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#8FFC86] text-[13px] font-bold" style={{ fontFamily: 'Lexend' }}>{item.kcal} Kcal</span>
          <div className="w-1 h-1 rounded-full bg-[#2F2F2F]"></div>
          <span className="text-[#969696] text-[13px] font-medium">₹{item.price}</span>
        </div>
      </div>
    </div>

    <div className="flex justify-between items-center bg-[#222328] rounded-[16px] p-3 border border-[#2F2F2F]/50">
       <div className="flex gap-4">
          <MacroDot color="#FEFFC4" val={item.macros.p} />
          <MacroDot color="#AED2FF" val={item.macros.c} />
          <MacroDot color="#BCA2FF" val={item.macros.f} />
       </div>
       <div className="flex items-center gap-3">
          <div className="flex h-[36px] items-center justify-between w-[90px] px-3 rounded-[10px] bg-[#18171C] border border-[#2F2F2F]">
            <button onClick={() => onQtyChange(-1)} className="text-[#8FFC86] font-bold text-xl active:scale-90 transition-transform">-</button>
            <span className="text-white font-bold text-sm" style={{ fontFamily: 'Lexend' }}>{item.qty}</span>
            <button onClick={() => onQtyChange(1)} className="text-[#8FFC86] font-bold text-xl active:scale-90 transition-transform">+</button>
          </div>
       </div>
    </div>
  </div>
);

const MacroDot = ({ color, val }: { color: string, val: number }) => (
  <div className="flex items-center gap-1.5">
    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }}></div>
    <span className="text-white text-[12px] font-bold" style={{ fontFamily: 'Lexend' }}>{val}g</span>
  </div>
);

export default CartPage;
