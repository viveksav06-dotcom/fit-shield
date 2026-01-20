
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
        
        {/* Hunger Level Selection UI */}
        <section className="flex flex-col gap-5 w-full">
          <h2 className="text-[#8FFC86] text-xs font-bold uppercase tracking-[0.2em]">Hunger Level Options</h2>
          <div className="flex flex-col gap-4 w-full max-w-[400px]">
             {/* High Level Selected */}
             <div className="flex w-full h-[46px] items-center gap-3 rounded-xl border border-[#00C600] bg-[#222328]/50 backdrop-blur-md px-4 shadow-[0_0_15px_rgba(0,198,0,0.2)]">
                <div className="w-8 h-8 flex items-center justify-center">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                     <rect x="2" y="6" width="18" height="12" rx="2" stroke="#00C600" strokeWidth="1.5" />
                     <path d="M22 10V14" stroke="#00C600" strokeWidth="1.5" strokeLinecap="round" />
                     <rect x="4" y="8" width="14" height="8" rx="1" fill="#00C600" />
                   </svg>
                </div>
                <span className="text-white text-lg font-bold font-['Quicksand']">Full</span>
                <div className="ml-auto w-5 h-5 rounded-full bg-[#00C600] flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0F0E11" strokeWidth="4">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
             </div>

             {/* Medium Level Normal */}
             <div className="flex w-full h-[46px] items-center gap-3 rounded-xl border border-transparent bg-[#222328] px-4">
                <div className="w-8 h-8 flex items-center justify-center">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                     <rect x="2" y="6" width="18" height="12" rx="2" stroke="#969696" strokeWidth="1.5" />
                     <path d="M22 10V14" stroke="#969696" strokeWidth="1.5" strokeLinecap="round" />
                     <rect x="4" y="8" width="6" height="8" rx="1" fill="#FF8C00" />
                     <rect x="11" y="8" width="6" height="8" rx="1" fill="#FF8C00" />
                   </svg>
                </div>
                <span className="text-[#CDCDCD] text-lg font-medium font-['Quicksand']">Medium</span>
             </div>
          </div>
        </section>

        {/* Preferences & Allergies Selection UI */}
        <section className="flex flex-col gap-5 w-full">
          <h2 className="text-[#8FFC86] text-xs font-bold uppercase tracking-[0.2em]">Preferences & Selection</h2>
          <div className="flex flex-col gap-6 p-6 bg-[#18171C] rounded-[24px] border border-[#2F2F2F] w-full max-w-[400px]">
             {/* Selected Tag Component */}
             <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#222328] w-fit border border-[#2F2F2F]">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/milk-icon" className="w-4 h-4" alt="" />
                <span className="text-white text-[14px] font-medium" style={{ fontFamily: 'Quicksand' }}>Milk</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="opacity-50">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
             </div>

             {/* Search Bar Component */}
             <div className="flex w-full h-[46px] px-4 items-center gap-2 rounded-full bg-[#222328] border border-[#2F2F2F]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#969696" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
                <span className="text-[#969696] text-[14px]">Search ...</span>
             </div>

             {/* List Item - Normal */}
             <div className="flex w-full h-[46px] px-4 items-center gap-3 rounded-xl bg-[#222328]">
                <div className="w-6 h-6 rounded-md bg-[#18171C] flex items-center justify-center text-[10px]">🥜</div>
                <span className="text-[#CDCDCD] text-[18px] font-medium" style={{ fontFamily: 'Quicksand' }}>Peanuts</span>
             </div>

             {/* List Item - Selected */}
             <div className="flex w-full h-[46px] px-4 items-center gap-3 rounded-xl bg-[#0C180C] border border-[#00C600]/30 shadow-[0_0_15px_rgba(0,198,0,0.1)]">
                <div className="w-6 h-6 rounded-md bg-[#18171C] flex items-center justify-center text-[10px]">🍄</div>
                <span className="text-white text-[18px] font-medium" style={{ fontFamily: 'Quicksand' }}>Mushroom</span>
                <div className="ml-auto w-5 h-5 rounded-full bg-[#8FFC86] flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0F0E11" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
             </div>
          </div>
        </section>

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

export default ComponentsLibrary;
