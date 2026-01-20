
import React from 'react';

interface OrderSummaryPageProps {
  onBack: () => void;
  onAddMore: () => void;
}

const OrderSummaryPage: React.FC<OrderSummaryPageProps> = ({ onBack, onAddMore }) => {
  const orderItems = [
    { title: "Hyderabadi Biryani", sub: "(Half)", notes: "[ Tomato, Extra cheese, olives ]", qty: 1 },
    { title: "Broccoli Almond Soup", sub: "(Half)", qty: 1 },
    { title: "Fruit Salad", qty: 1 },
    { title: "Peri Peri fries", qty: 1 },
    { title: "Peach Tea", qty: 1 },
    { title: "Veg Pizza", qty: 1 },
    { title: "Paneer Chilly", qty: 1 },
  ];

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#0F0E11] pt-12 pb-10">
      {/* Top Navigation */}
      <div className="flex w-full justify-between items-center px-4 mb-6 h-[56px]">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-white/5 transition-colors">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M17 21L10 14L17 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className="text-[#EFEFEF] text-[16px] font-bold" style={{ fontFamily: 'Quicksand' }}>Order Summary</span>
        <div className="w-[28px]"></div> {/* Spacer for symmetry */}
      </div>

      <div className="flex flex-col items-center gap-10 w-full">
        
        {/* Add More Section */}
        <button onClick={onAddMore} className="flex flex-col items-center gap-1.5 group active:scale-95 transition-transform">
          <div className="w-8 h-8 rounded-full border border-[#8FFC86]/30 flex items-center justify-center group-hover:bg-[#8FFC86]/10 transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4.16663V15.8333M4.16699 9.99996H15.8337" stroke="#8FFC86" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[#8FFC86] text-[16px] font-semibold underline decoration-solid underline-offset-4" style={{ fontFamily: 'Quicksand' }}>
            Add More
          </span>
        </button>

        {/* The Receipt Card */}
        <div className="w-[358px] rounded-[20px] border border-[#3CFF00] bg-black/50 shadow-[inset_0_0_37px_#2E4B12] relative overflow-hidden">
          <div className="flex flex-col p-5 gap-6">
            {orderItems.map((item, idx) => (
              <div key={idx} className="flex justify-between items-start w-full">
                <div className="flex flex-col gap-1.5 flex-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-white text-[16px] font-semibold" style={{ fontFamily: 'Quicksand' }}>{item.title}</span>
                    {item.sub && <span className="text-white/80 text-[14px] font-normal" style={{ fontFamily: 'Quicksand' }}>{item.sub}</span>}
                  </div>
                  {item.notes && (
                    <span className="text-white/70 text-[12px] font-normal italic" style={{ fontFamily: 'Quicksand' }}>{item.notes}</span>
                  )}
                </div>
                <span className="text-white text-[16px] font-bold" style={{ fontFamily: 'Quicksand' }}>{item.qty}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tips / Extra Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-l-full bg-gradient-to-r from-[#2D4712] to-[#253C0F]/50 border-l border-t border-b border-[#3A3A3A] shadow-[-4px_4px_4px_rgba(0,0,0,0.25)] ml-auto mr-4">
           <div className="w-[30px] h-[30px] rounded-full bg-[#0F1806] shadow-[inset_0_4px_4px_rgba(108,108,108,0.25)] flex items-center justify-center p-1.5">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/92a2b05dce9f67b04c982dc6f3ef180b4b1fcbbe?width=41" alt="Tip" className="w-full h-full object-contain" />
           </div>
           <span className="text-white text-[14px] font-medium underline decoration-solid underline-offset-4" style={{ fontFamily: 'Inter' }}>Tips</span>
        </div>

        {/* Confidence Footer */}
        <div className="flex flex-col items-center gap-3 px-10 text-center mt-4">
          <h2 className="text-[22px] font-bold leading-tight bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent" style={{ fontFamily: 'Inter' }}>
            You’re Confident
          </h2>
          <p className="text-white text-[13px] font-medium leading-normal opacity-90" style={{ fontFamily: 'Inter' }}>
            Show this card to captain to place order
          </p>
        </div>

      </div>
    </div>
  );
};

export default OrderSummaryPage;
