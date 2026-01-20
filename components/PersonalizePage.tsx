
import React, { useState, useRef, useEffect } from 'react';

interface PersonalizePageProps {
  onBack: () => void;
  onNext: () => void;
}

const PersonalizePage: React.FC<PersonalizePageProps> = ({ onBack, onNext }) => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activity, setActivity] = useState('Sedentary');
  const [goal, setGoal] = useState('Fat loss');
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isHeightPickerOpen, setIsHeightPickerOpen] = useState(false);
  const [isWeightPickerOpen, setIsWeightPickerOpen] = useState(false);
  
  const [selectedDate, setSelectedDate] = useState({ day: '15', month: 'June', year: '1998' });
  const [selectedHeight, setSelectedHeight] = useState('165');
  const [selectedWeight, setSelectedWeight] = useState('65');
  const [weightUnit, setWeightUnit] = useState<'Kg' | 'Lbs'>('Kg');

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const years = Array.from({ length: 100 }, (_, i) => (2024 - i).toString());
  const heights = Array.from({ length: 151 }, (_, i) => (100 + i).toString());
  const weights = Array.from({ length: 201 }, (_, i) => (30 + i).toString());

  // Reusable Scroll Picker Component
  const ScrollPicker = ({ items, current, onSelect, unit }: { items: string[], current: string, onSelect: (val: string) => void, unit?: string }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (scrollRef.current) {
        const index = items.indexOf(current);
        if (index !== -1) {
          const itemHeight = 46; // h-11 plus small margin
          scrollRef.current.scrollTop = index * itemHeight;
        }
      }
    }, []);

    const handleScroll = () => {
      if (!scrollRef.current) return;
      const itemHeight = 46;
      const index = Math.round(scrollRef.current.scrollTop / itemHeight);
      if (items[index] && items[index] !== current) {
        onSelect(items[index]);
      }
    };

    return (
      <div className="relative h-[180px] flex-1 overflow-hidden">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="h-full overflow-y-auto no-scrollbar scroll-smooth snap-y snap-mandatory py-[67px]"
        >
          {items.map((item) => (
            <div 
              key={item} 
              className={`h-[46px] flex items-center justify-center snap-center transition-all duration-200 ${item === current ? 'text-[#8FFC86] text-[22px] font-bold' : 'text-[#7C7C7C] text-[18px] opacity-40'}`}
            >
              {item}{unit && item === current ? <span className="text-[12px] ml-1 font-normal">{unit}</span> : ''}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#0F0E11] relative">
      <div className="flex flex-col w-full flex-1 px-4 pt-11 pb-10 overflow-y-auto no-scrollbar">
        {/* Header Navigation */}
        <div className="flex h-14 justify-between items-center self-stretch mb-6 shrink-0">
          <button onClick={onBack} className="p-1 text-white active:opacity-50 transition-opacity">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21L10 14L17 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="flex flex-col items-center">
            <h1 className="text-white text-xl font-bold tracking-tight mb-1" style={{ fontFamily: 'Lexend' }}>Boketto</h1>
            <span className="text-[#CCC] text-[10px] font-medium uppercase tracking-wider" style={{ fontFamily: 'Quicksand' }}>Your food intelligence</span>
          </div>

          <button onClick={onNext} className="text-[#8FFC86] text-[16px] font-bold underline underline-offset-4" style={{ fontFamily: 'Quicksand' }}>
            Skip
          </button>
        </div>

        {/* Form Content */}
        <div className="flex flex-col gap-7 w-full mb-10">
          
          {/* Date of Birth Input */}
          <div className="flex flex-col gap-2.5">
            <label className="text-[#EFEFEF] text-[18px] font-bold" style={{ fontFamily: 'Quicksand' }}>Date of birth</label>
            <div 
              onClick={() => setIsDatePickerOpen(true)}
              className="flex h-11 px-3 items-center rounded-xl bg-[#222328] border border-transparent active:border-[#8FFC86]/30 transition-all"
            >
              <span className="text-[#CDCDCD] text-[18px] font-normal" style={{ fontFamily: 'Quicksand' }}>
                {selectedDate.day} / {selectedDate.month} / {selectedDate.year}
              </span>
            </div>
          </div>

          {/* Gender Selection */}
          <div className="flex flex-col gap-2.5">
            <label className="text-[#EFEFEF] text-[18px] font-bold" style={{ fontFamily: 'Quicksand' }}>Gender</label>
            <div className="flex gap-3">
              <button 
                onClick={() => setGender('male')}
                className={`flex-1 h-11 flex justify-center items-center rounded-xl transition-all duration-200 border-[0.6px] ${gender === 'male' ? 'border-[#00C600] bg-[#0C180C]' : 'border-transparent bg-[#222328]'}`}
              >
                <span className={`text-[18px] font-medium ${gender === 'male' ? 'text-white' : 'text-[#CDCDCD]'}`} style={{ fontFamily: 'Quicksand' }}>Male</span>
              </button>
              <button 
                onClick={() => setGender('female')}
                className={`flex-1 h-11 flex justify-center items-center rounded-xl transition-all duration-200 border-[0.6px] ${gender === 'female' ? 'border-[#00C600] bg-[#0C180C]' : 'border-transparent bg-[#222328]'}`}
              >
                <span className={`text-[18px] font-medium ${gender === 'female' ? 'text-white' : 'text-[#CDCDCD]'}`} style={{ fontFamily: 'Quicksand' }}>Female</span>
              </button>
            </div>
          </div>

          {/* Height Input */}
          <div className="flex flex-col gap-2.5">
            <label className="text-[#EFEFEF] text-[18px] font-bold" style={{ fontFamily: 'Quicksand' }}>Height</label>
            <div 
              onClick={() => setIsHeightPickerOpen(true)}
              className="flex h-11 px-3 items-center rounded-xl bg-[#222328] border border-transparent active:border-[#8FFC86]/30 transition-all"
            >
              <span className="text-[#CDCDCD] text-[18px] font-normal" style={{ fontFamily: 'Quicksand' }}>
                {selectedHeight} cm
              </span>
            </div>
          </div>

          {/* Weight Input */}
          <div className="flex flex-col gap-2.5">
            <label className="text-[#EFEFEF] text-[18px] font-bold" style={{ fontFamily: 'Quicksand' }}>Weight</label>
            <div 
              onClick={() => setIsWeightPickerOpen(true)}
              className="flex h-11 px-3 items-center rounded-xl bg-[#222328] border border-transparent active:border-[#8FFC86]/30 transition-all"
            >
              <span className="text-[#CDCDCD] text-[18px] font-normal" style={{ fontFamily: 'Quicksand' }}>
                {selectedWeight} {weightUnit}
              </span>
            </div>
          </div>

          {/* Activity Level */}
          <div className="flex flex-col gap-2.5">
            <label className="text-[#EFEFEF] text-[18px] font-bold" style={{ fontFamily: 'Quicksand' }}>Activity</label>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                {['Sedentary', 'Light', 'Moderate'].map((lvl) => (
                  <button 
                    key={lvl}
                    onClick={() => setActivity(lvl)}
                    className={`flex-1 h-11 px-1 flex justify-center items-center rounded-xl transition-all duration-200 border-[0.6px] ${activity === lvl ? 'border-[#00C600] bg-[#0C180C]' : 'border-transparent bg-[#222328]'}`}
                  >
                    <span className={`text-[16px] font-medium ${activity === lvl ? 'text-white' : 'text-[#CDCDCD]'}`} style={{ fontFamily: 'Quicksand' }}>{lvl}</span>
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                {['Active', 'Very active', 'Super active'].map((lvl) => (
                  <button 
                    key={lvl}
                    onClick={() => setActivity(lvl)}
                    className={`flex-1 h-11 px-1 flex justify-center items-center rounded-xl transition-all duration-200 border-[0.6px] ${activity === lvl ? 'border-[#00C600] bg-[#0C180C]' : 'border-transparent bg-[#222328]'}`}
                  >
                    <span className={`text-[16px] font-medium ${activity === lvl ? 'text-white' : 'text-[#CDCDCD]'}`} style={{ fontFamily: 'Quicksand' }}>{lvl}</span>
                  </button>
                ))}
              </div>
            </div>
            <p className="text-[#CDFFC9] text-[12px] font-medium" style={{ fontFamily: 'Quicksand' }}>
              *{activity === 'Sedentary' ? 'Little or no exercise.' : activity === 'Light' ? 'Light exercise 1-3 days/week.' : 'Intense training/physical job.'}
            </p>
          </div>

          {/* Goal Selection */}
          <div className="flex flex-col gap-2.5">
            <label className="text-[#EFEFEF] text-[18px] font-bold" style={{ fontFamily: 'Quicksand' }}>Goal</label>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                {['Fat loss', 'Muscle gain', 'Healthy eating'].map((g) => (
                  <button 
                    key={g}
                    onClick={() => setGoal(g)}
                    className={`flex-1 h-11 px-1 flex justify-center items-center rounded-xl transition-all duration-200 border-[0.6px] ${goal === g ? 'border-[#00C600] bg-[#0C180C]' : 'border-transparent bg-[#222328]'}`}
                  >
                    <span className={`text-[16px] font-medium ${goal === g ? 'text-white' : 'text-[#CDCDCD]'}`} style={{ fontFamily: 'Quicksand' }}>{g}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <button 
          onClick={onNext}
          className="w-full py-3 bg-[#8FFC86] rounded-xl flex justify-center items-center active:scale-95 transition-transform shrink-0"
        >
          <span className="text-[#242424] text-[18px] font-bold" style={{ fontFamily: 'Quicksand' }}>Next</span>
        </button>
      </div>

      {/* DOB Date Picker Sheet with Scroll Snap */}
      {isDatePickerOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" onClick={() => setIsDatePickerOpen(false)}></div>
          <div className="relative w-full max-w-[390px] bg-[#222328] rounded-t-[24px] border-t-[0.7px] border-[#7C7C7C] flex flex-col shadow-[0_-8px_30px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom duration-300">
            <div className="w-10 h-1 bg-[#404040] rounded-full mx-auto mt-3 mb-2"></div>
            
            <div className="relative flex px-6 py-4 overflow-hidden h-[220px]">
              <div className="absolute top-1/2 left-0 right-0 h-[46px] -translate-y-1/2 border-y border-[#404040]/50 pointer-events-none bg-white/5"></div>
              
              <ScrollPicker items={days} current={selectedDate.day} onSelect={(val) => setSelectedDate(p => ({ ...p, day: val }))} />
              <ScrollPicker items={months} current={selectedDate.month} onSelect={(val) => setSelectedDate(p => ({ ...p, month: val }))} />
              <ScrollPicker items={years} current={selectedDate.year} onSelect={(val) => setSelectedDate(p => ({ ...p, year: val }))} />
            </div>

            <div className="p-4 pt-0">
              <button 
                onClick={() => setIsDatePickerOpen(false)}
                className="w-full py-3 bg-[#8FFC86] rounded-xl text-[#242424] font-bold text-[18px] active:scale-[0.98] transition-all"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Height Picker Sheet with Scroll Snap */}
      {isHeightPickerOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" onClick={() => setIsHeightPickerOpen(false)}></div>
          <div className="relative w-full max-w-[390px] bg-[#222328] rounded-t-[24px] border-t-[0.7px] border-[#7C7C7C] flex flex-col shadow-[0_-8px_30px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom duration-300">
            <div className="w-10 h-1 bg-[#404040] rounded-full mx-auto mt-3 mb-2"></div>
            
            <div className="relative flex px-10 py-4 h-[220px] items-center">
              <div className="absolute top-1/2 left-0 right-0 h-[46px] -translate-y-1/2 border-y border-[#404040]/50 pointer-events-none bg-white/5"></div>
              <ScrollPicker items={heights} current={selectedHeight} unit="cm" onSelect={setSelectedHeight} />
            </div>

            <div className="p-4 pt-0">
              <button 
                onClick={() => setIsHeightPickerOpen(false)}
                className="w-full py-3 bg-[#8FFC86] rounded-xl text-[#242424] font-bold text-[18px] active:scale-[0.98] transition-all"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Weight Picker Sheet with Scroll Snap */}
      {isWeightPickerOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" onClick={() => setIsWeightPickerOpen(false)}></div>
          <div className="relative w-full max-w-[390px] bg-[#222328] rounded-t-[24px] border-t-[0.7px] border-[#7C7C7C] flex flex-col shadow-[0_-8px_30px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom duration-300">
            <div className="w-10 h-1 bg-[#404040] rounded-full mx-auto mt-3 mb-2 shrink-0"></div>
            
            <div className="relative flex px-10 py-4 h-[250px] overflow-hidden">
              <div className="absolute top-1/2 left-0 right-[35%] h-[56px] -translate-y-1/2 border-y border-[#404040]/50 pointer-events-none bg-white/5"></div>
              
              <ScrollPicker items={weights} current={selectedWeight} onSelect={setSelectedWeight} />

              <div className="flex flex-col items-center justify-center gap-6 w-20 shrink-0 border-l border-[#404040]/30 ml-4">
                <button 
                  onClick={() => setWeightUnit('Lbs')}
                  className={`text-[16px] font-semibold transition-colors ${weightUnit === 'Lbs' ? 'text-white' : 'text-[#A2A2A2]'}`}
                >
                  Lbs
                </button>
                <button 
                  onClick={() => setWeightUnit('Kg')}
                  className={`text-[24px] font-bold transition-colors ${weightUnit === 'Kg' ? 'text-white' : 'text-[#A2A2A2]'}`}
                >
                  Kg
                </button>
              </div>
            </div>

            <div className="p-4 pt-0">
              <button 
                onClick={() => setIsWeightPickerOpen(false)}
                className="w-full py-3 bg-[#8FFC86] rounded-xl text-[#242424] font-bold text-[18px] active:scale-[0.98] transition-all"
              >
                Done
              </button>
              <div className="w-[139px] h-[5px] bg-white rounded-full mx-auto mt-4 mb-2 opacity-30"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalizePage;
