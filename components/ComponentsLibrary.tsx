
import React from 'react';

interface ComponentsLibraryProps {
  onBack: () => void;
}

const ComponentsLibrary: React.FC<ComponentsLibraryProps> = ({ onBack }) => {
  const functionalBenefits = [
    {
      id: 1,
      text: (
        <>
          This meal provides <span className="font-bold">50 g of protein</span>, which helps build muscles and repair tissues, ensuring your body stays strong and healthy.
        </>
      ),
    },
    {
      id: 2,
      text: (
        <>
          This meal includes <span className="font-bold">85 mg of Vitamin C</span>, which boosts immunity and helps protect your cells from damage.
        </>
      ),
    },
    {
      id: 3,
      text: (
        <>
          This meal provides <span className="font-bold">15 g of fiber</span>, which is essential for improving digestion and promoting gut health.
        </>
      ),
    },
    {
      id: 4,
      text: (
        <>
          This meal provides <span className="font-bold">15 g of fiber</span>, which is essential for improving digestion and promoting gut health.
        </>
      ),
    },
    {
      id: 5,
      text: (
        <>
          This meal provides <span className="font-bold">15 g of fiber</span>, which is essential for improving digestion and promoting gut health.
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-start w-full min-h-screen bg-[#0F0E11] px-6 pt-16 pb-20 overflow-x-hidden">
      <div className="flex items-center gap-4 mb-10">
        <button 
          onClick={onBack}
          className="p-2 rounded-full bg-[#222328] border border-[#2F2F2F] text-[#8FFC86] active:scale-90 transition-transform"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <h1 className="text-white text-3xl font-bold" style={{ fontFamily: 'Lexend' }}>Components</h1>
      </div>

      <div className="flex flex-col w-full gap-12">
        
        {/* Functional Benefits Section */}
        <section className="flex flex-col gap-5 w-full">
          <h2 className="text-[#8FFC86] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
               <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" fillOpacity="0.2"/>
            </svg>
            Functional Benefits
          </h2>
          
          <div className="w-full max-w-[400px] rounded-[24px] border border-[#00C600] bg-[#0C180C]/30 p-5 shadow-[0_0_20px_rgba(0,198,0,0.1)]">
            <div className="flex flex-col">
              {functionalBenefits.map((benefit, index) => (
                <div key={benefit.id} className="flex flex-col">
                  <div className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                    <span className="text-[#8FFC86] text-[24px] font-bold leading-none min-w-[20px] pt-1" style={{ fontFamily: 'Lexend' }}>
                      {benefit.id}
                    </span>
                    <p className="text-[#EFEFEF] text-[14px] leading-relaxed font-medium" style={{ fontFamily: 'Quicksand' }}>
                      {benefit.text}
                    </p>
                  </div>
                  {index < functionalBenefits.length - 1 && (
                    <div className="w-full border-t border-dashed border-[#595959]/40 my-1"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Information & Benefits Section */}
        <section className="flex flex-col gap-5 w-full">
          <h2 className="text-[#8FFC86] text-xs font-bold uppercase tracking-[0.2em]">Information & Benefits</h2>
          <div className="flex flex-col gap-8 w-full max-w-[400px]">
            <div className="flex flex-col w-full rounded-[12px] bg-[#222328] border border-[#2F2F2F] overflow-hidden shadow-xl">
              <div className="flex w-full h-[48px] px-4 items-center border-b border-[#2F2F2F]">
                <span className="text-white text-[16px] font-bold" style={{ fontFamily: 'Quicksand' }}>Benefits</span>
              </div>
              <div className="flex flex-col p-4 gap-5">
                <BenefitRow 
                  icon="💪" 
                  title="Muscle growth" 
                  description="High protein content supports muscle fiber repair and building strength." 
                />
                <BenefitRow 
                  icon="✨" 
                  title="Skin Health" 
                  description="Rich in essential vitamins that promote collagen production and glow." 
                />
                <BenefitRow 
                  icon="🔋" 
                  title="Sustained Energy" 
                  description="Complex carbohydrates provide a steady release of glucose for long-lasting energy." 
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="flex h-6 px-3 py-1 items-center gap-2 rounded-md border border-[#807348] bg-[#2B2413]">
                <span className="text-[#F9E39E] text-[10px] font-bold uppercase tracking-wider">Rich Calcium</span>
              </div>
              <div className="flex h-6 px-3 py-1 items-center gap-2 rounded-md border border-[#488059] bg-[#132B1A]">
                <span className="text-[#9EF9BB] text-[10px] font-bold uppercase tracking-wider">High Fiber</span>
              </div>
            </div>
          </div>
        </section>

        {/* Profile & Account Section */}
        <section className="flex flex-col gap-5 w-full">
          <h2 className="text-[#8FFC86] text-xs font-bold uppercase tracking-[0.2em]">Profile & Account</h2>
          <div className="flex flex-col gap-6 p-6 bg-[#18171C] rounded-[24px] border border-[#2F2F2F] w-full max-w-[400px]">
            <div className="flex w-full h-[56px] justify-between items-center border-b border-[#2F2F2F] pb-2">
              <div className="w-[28px] h-[28px] flex items-center justify-center cursor-pointer">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M17 21L10 14L17 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[#EFEFEF] text-[16px] font-bold" style={{ fontFamily: 'Quicksand' }}>Profile</span>
              <div className="w-8 h-8 rounded-full bg-[#0F0E11] flex items-center justify-center p-2">
                <div className="w-full h-full bg-[#2F2F2F] rounded-full"></div>
              </div>
            </div>
            <div className="flex h-[46px] px-4 py-2.5 justify-between items-center rounded-xl border-[0.7px] border-[#00C600] bg-[#0C180C] w-full">
              <span className="text-white text-[16px] font-normal" style={{ fontFamily: 'Quicksand' }}>Krishna Sabhadi</span>
              <span className="text-[#8FFC86] text-[14px] font-bold underline cursor-pointer active:opacity-70 transition-opacity" style={{ fontFamily: 'Quicksand' }}>Save</span>
            </div>
          </div>
        </section>

        {/* Your Order Items Section */}
        <section className="flex flex-col gap-5 w-full">
          <h2 className="text-[#8FFC86] text-xs font-bold uppercase tracking-[0.2em]">Cart & Orders</h2>
          <div className="w-full flex flex-col items-start">
            <div className="flex flex-col w-full max-w-[358px] overflow-hidden rounded-[12px] bg-[#222328]">
              <div className="flex w-full h-[48px] px-4 items-center justify-between border-b-[0.7px] border-[#2F2F2F]">
                <span className="text-white text-[16px] font-medium" style={{ fontFamily: 'Quicksand' }}>Your Order item (2)</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 15L12 9L6 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col p-4 gap-4">
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-start gap-2 flex-1">
                      <div className="mt-1">
                        <VegIcon />
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="text-[#EFEFEF] text-[12px]" style={{ fontFamily: 'Quicksand' }}>
                          <span className="font-bold">Burger With Meat </span>
                          <span className="font-normal">(Half)</span>
                        </div>
                        <div className="text-[#EFEFEF] text-[12px] font-bold" style={{ fontFamily: 'Quicksand' }}>₹190</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex w-[76px] h-[30px] items-center justify-between px-2 bg-[#EFEFEF] rounded-lg shadow-sm">
                        <button className="text-[#009700] text-lg font-bold">－</button>
                        <span className="text-[#0F0E11] text-[14px] font-bold">2</span>
                        <button className="text-[#0F0E11] text-lg font-bold">＋</button>
                      </div>
                      <div className="text-[#EFEFEF] text-[12px] font-bold" style={{ fontFamily: 'Quicksand' }}>₹190</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      
      <p className="mt-12 text-[#595959] text-[11px] text-center w-full">
        More components will be added here as the design system evolves.
      </p>
    </div>
  );
};

const BenefitRow = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded-full bg-[#18171C] flex items-center justify-center text-xl shrink-0 border border-[#2F2F2F]">
      {icon}
    </div>
    <div className="flex flex-col gap-1">
      <span className="text-white text-[14px] font-bold" style={{ fontFamily: 'Quicksand' }}>{title}</span>
      <span className="text-[#CDCDCD] text-[12px] font-medium leading-relaxed" style={{ fontFamily: 'Quicksand' }}>{description}</span>
    </div>
  </div>
);

const VegIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M10 0H2C0.895431 0 0 0.895431 0 2V10C0 11.1046 0.895431 12 2 12H10C11.1046 12 12 11.1046 12 10V2C12 0.895431 11.1046 0 10 0Z" fill="#FEFEFE" stroke="#008000"/>
    <path d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z" fill="#008000" stroke="#008000"/>
  </svg>
);

export default ComponentsLibrary;
