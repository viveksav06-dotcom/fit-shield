import React from 'react';

interface CartPageProps {
  onFinish: () => void;
  onAddMore?: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ onFinish, onAddMore }) => {
  const cartItems = [
    {
      name: "Hyderabadi Biryani",
      price: 280,
      quantity: 2,
      isVeg: true
    },
    {
      name: "Broccoli Almond Soup",
      price: 280,
      quantity: 1,
      isVeg: true
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-black/60 relative justify-end">
      {/* Semi-transparent background to show it's a sheet */}
      <div className="absolute inset-0 z-0" onClick={onFinish}></div>

      {/* Main Bottom Sheet */}
      <div className="relative z-10 flex flex-col items-start w-full bg-[#222328] rounded-t-[24px] overflow-hidden animate-in slide-in-from-bottom duration-300 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col items-center w-full px-4 pt-5 pb-9 gap-5">
          
          {/* Home Indicator */}
          <div className="w-[38px] h-[2px] bg-[#7C7C7C] rounded-[100px]"></div>

          <div className="flex flex-col items-center gap-5 self-stretch">
            {/* Title */}
            <div className="flex items-center gap-1.5 self-stretch">
              <h2 className="text-white text-[18px] font-bold" style={{ fontFamily: 'Quicksand' }}>Your Cart</h2>
            </div>

            {/* Items List */}
            <div className="flex flex-col items-center gap-3 self-stretch border-b border-dashed border-[#595959] py-3">
              {cartItems.map((item, idx) => (
                <div key={idx} className="flex flex-col items-start gap-3 self-stretch pt-3 first:pt-0">
                  <div className="flex items-start gap-3 self-stretch">
                    <div className="flex flex-1 items-start gap-2">
                      <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center gap-1.5">
                          {/* Veg/Non-veg Icon */}
                          <div className="w-3 h-3 border border-green-800 bg-white rounded-sm flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-800"></div>
                          </div>
                          <span className="text-white text-[12px] font-bold" style={{ fontFamily: 'Quicksand' }}>{item.name}</span>
                        </div>
                        <div className="text-white text-[12px] font-semibold" style={{ fontFamily: 'Quicksand' }}>₹{item.price}</div>
                        
                        {/* Edit Button */}
                        <div className="flex items-center gap-1 cursor-pointer active:opacity-60 transition-opacity">
                          <span className="text-white text-[12px] font-semibold" style={{ fontFamily: 'Quicksand' }}>Edit</span>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M3.36452 10.4795C3.5831 10.5306 3.82626 10.4841 3.97099 10.3635L8.3346 6.72706C8.49394 6.59426 8.49394 6.40553 8.33456 6.27273L3.97095 2.63649C3.86542 2.54853 3.7075 2.5 3.54492 2.5C3.48463 2.5 3.42361 2.50669 3.36448 2.52053C3.14587 2.57164 2.99957 2.70924 2.99957 2.86366L2.99958 10.1364C2.99961 10.2908 3.1459 10.4284 3.36452 10.4795ZM4.09051 3.90029L4.09051 6.49998L4.09051 9.09968L4.09051 3.90029Z" fill="#009700"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center justify-center w-[76px] h-[30px] rounded-[8px] bg-[#EFEFEF] shadow-md">
                      <button className="flex-1 flex justify-center items-center text-[#0F0E11] font-bold text-lg active:scale-90">-</button>
                      <span className="flex-1 text-center text-[#0F0E11] text-[14px] font-semibold" style={{ fontFamily: 'Quicksand' }}>{item.quantity}</span>
                      <button className="flex-1 flex justify-center items-center text-[#0F0E11] font-bold text-lg active:scale-90">+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add New Item Link */}
            <div 
              onClick={onAddMore}
              className="text-[#8FFC86] text-[14px] font-bold underline underline-offset-4 cursor-pointer active:opacity-70 transition-opacity self-start ml-1" 
              style={{ fontFamily: 'Quicksand' }}
            >
              +Add new item
            </div>

            {/* Footer Continue Button */}
            <div className="flex flex-col items-center gap-5 self-stretch pt-4">
              <div className="flex justify-between items-center self-stretch rounded-lg px-1">
                <div className="text-white text-[16px] font-medium" style={{ fontFamily: 'Quicksand' }}>
                  <span className="font-bold">2</span> Items
                </div>
                <div className="w-[1px] h-9 bg-[#7C7C7C]"></div>
                <button 
                  onClick={onFinish}
                  className="px-3 py-2 bg-[#8FFC86] rounded-lg shadow-lg active:scale-95 transition-transform"
                >
                  <span className="text-[#242424] text-[16px] font-semibold" style={{ fontFamily: 'Quicksand' }}>Continue</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Home Indicator Spacer */}
        <div className="h-9 w-full flex items-center justify-center">
          <div className="w-[139px] h-[5px] bg-white rounded-full opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
