import React, { useState } from 'react';

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

  const heights = Array.from({ length: 151 }, (_, i) => (100 + i).toString());
  const weights = Array.from({ length: 201 }, (_, i) => (30 + i).toString());

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
          
          {/* Date of Birth */}
          <div className="flex flex-col gap-2.5">
            <label className="text-[#EFEFEF] text-[18px] font-bold" style={{ fontFamily: 'Quicksand' }}>Date of birth</label>
            <div 
              onClick={() => setIsDatePickerOpen(true)}
              className="flex h-11 px-3 items-center rounded-xl bg-[#222328] cursor-pointer active:bg-[#2a2b30] transition-colors"
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

          {/* Height */}
          <div className="flex flex-col gap-2.5">
            <label className="text-[#EFEFEF] text-[18px] font-bold" style={{ fontFamily: 'Quicksand' }}>Height</label>
            <div 
              onClick={() => setIsHeightPickerOpen(true)}
              className="flex h-11 px-3 items-center rounded-xl bg-[#222328] cursor-pointer active:bg-[#2a2b30] transition-colors"
            >
              <span className="text-[#CDCDCD] text-[18px] font-normal" style={{ fontFamily: 'Quicksand' }}>
                {selectedHeight} cm
              </span>
            </div>
          </div>

          {/* Weight */}
          <div className="flex flex-col gap-2.5">
            <label className="text-[#EFEFEF] text-[18px] font-bold" style={{ fontFamily: 'Quicksand' }}>Weight</label>
            <div 
              onClick={() => setIsWeightPickerOpen(true)}
              className="flex h-11 px-3 items-center rounded-xl bg-[#222328] cursor-pointer active:bg-[#2a2b30] transition-colors"
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
            <span className="text-[#CDFFC9] text-[12px] font-medium" style={{ fontFamily: 'Quicksand' }}>
              *{activity === 'Sedentary' ? 'Little or no exercise.' : activity === 'Light' ? 'Light exercise 1-3 days/week.' : 'Intense training/physical job.'}
            </span>
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

      {/* DOB Date Picker Sheet */}
      {isDatePickerOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" 
            onClick={() => setIsDatePickerOpen(false)}
          ></div>
          <div className="relative w-full max-w-[390px] h-[300px] bg-[#222328] rounded-t-[24px] border-t-[0.7px] border-[#7C7C7C] flex flex-col shadow-[0_-8px_30px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom duration-300">
            <div className="w-10 h-1 bg-[#404040] rounded-full mx-auto mt-3 mb-4"></div>
            <div className="flex-1 flex px-6 overflow-hidden">
              <div className="flex-1 flex flex-col items-center overflow-y-auto no-scrollbar py-10">
                {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
                  <div 
                    key={d}
                    onClick={() => setSelectedDate(prev => ({ ...prev, day: d.toString() }))}
                    className={`py-3 text-[20px] font-medium cursor-pointer transition-colors ${selectedDate.day === d.toString() ? 'text-[#8FFC86]' : 'text-[#7C7C7C]'}`}
                    style={{ fontFamily: 'Lexend' }}
                  >
                    {d}
                  </div>
                ))}
              </div>
              <div className="flex-[1.5] flex flex-col items-center overflow-y-auto no-scrollbar py-10 border-x border-[#404040]/30">
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
                  <div 
                    key={m}
                    onClick={() => setSelectedDate(prev => ({ ...prev, month: m }))}
                    className={`py-3 text-[18px] font-medium cursor-pointer transition-colors ${selectedDate.month === m ? 'text-[#8FFC86]' : 'text-[#7C7C7C]'}`}
                    style={{ fontFamily: 'Quicksand' }}
                  >
                    {m}
                  </div>
                ))}
              </div>
              <div className="flex-1 flex flex-col items-center overflow-y-auto no-scrollbar py-10">
                {Array.from({ length: 100 }, (_, i) => 2024 - i).map(y => (
                  <div 
                    key={y}
                    onClick={() => setSelectedDate(prev => ({ ...prev, year: y.toString() }))}
                    className={`py-3 text-[20px] font-medium cursor-pointer transition-colors ${selectedDate.year === y.toString() ? 'text-[#8FFC86]' : 'text-[#7C7C7C]'}`}
                    style={{ fontFamily: 'Lexend' }}
                  >
                    {y}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-[138px] left-0 right-0 h-[46px] border-y border-[#404040]/30 pointer-events-none"></div>
            <div className="p-4 border-t border-[#404040]/30">
              <button 
                onClick={() => setIsDatePickerOpen(false)}
                className="w-full py-2.5 bg-[#8FFC86] rounded-xl text-[#242424] font-bold text-[16px] active:scale-[0.98] transition-all"
                style={{ fontFamily: 'Quicksand' }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Height Picker Sheet */}
      {isHeightPickerOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" 
            onClick={() => setIsHeightPickerOpen(false)}
          ></div>
          <div className="relative w-full max-w-[390px] h-[300px] bg-[#222328] rounded-t-[24px] border-t-[0.7px] border-[#7C7C7C] flex flex-col shadow-[0_-8px_30px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom duration-300">
            <div className="w-10 h-1 bg-[#404040] rounded-full mx-auto mt-3 mb-4"></div>
            
            <div className="flex-1 flex px-10 overflow-hidden relative">
              <div className="flex-1 flex flex-col items-center overflow-y-auto no-scrollbar py-20">
                {heights.map(h => (
                  <div 
                    key={h}
                    onClick={() => setSelectedHeight(h)}
                    className={`py-4 text-[24px] font-semibold cursor-pointer transition-colors ${selectedHeight === h ? 'text-[#8FFC86]' : 'text-[#7C7C7C]'}`}
                    style={{ fontFamily: 'Lexend' }}
                  >
                    {h}
                  </div>
                ))}
              </div>
              <div className="absolute right-[25%] top-[50%] -translate-y-[50%]">
                <span className="text-white text-[18px] font-bold" style={{ fontFamily: 'Quicksand' }}>cm</span>
              </div>
            </div>

            <div className="absolute top-[127px] left-0 right-0 h-[56px] border-y border-[#404040]/30 pointer-events-none"></div>

            <div className="p-4 border-t border-[#404040]/30">
              <button 
                onClick={() => setIsHeightPickerOpen(false)}
                className="w-full py-2.5 bg-[#8FFC86] rounded-xl text-[#242424] font-bold text-[16px] active:scale-[0.98] transition-all"
                style={{ fontFamily: 'Quicksand' }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Weight Picker Sheet */}
      {isWeightPickerOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" 
            onClick={() => setIsWeightPickerOpen(false)}
          ></div>
          <div className="relative w-full max-w-[390px] h-[336px] bg-[#222328] rounded-t-[24px] border-t-[0.7px] border-[#7C7C7C] flex flex-col shadow-[0_-8px_30px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom duration-300">
            <div className="w-10 h-1 bg-[#404040] rounded-full mx-auto mt-3 mb-4 shrink-0"></div>
            
            <div className="flex-1 flex px-10 overflow-hidden relative">
              {/* Central Scroller */}
              <div className="flex-1 flex flex-col items-center overflow-y-auto no-scrollbar py-24 scroll-smooth">
                {weights.map(w => (
                  <div 
                    key={w}
                    onClick={() => setSelectedWeight(w)}
                    className={`py-2 text-center transition-all duration-200 cursor-pointer ${
                      selectedWeight === w 
                        ? 'text-white text-[36px] font-bold h-[54px] flex items-center' 
                        : Math.abs(parseInt(selectedWeight) - parseInt(w)) === 1
                        ? 'text-[#FCFCFC] text-[26px] font-semibold opacity-80 h-[40px] flex items-center'
                        : Math.abs(parseInt(selectedWeight) - parseInt(w)) === 2
                        ? 'text-[#E6E6E6] text-[16px] font-semibold opacity-60 h-[28px] flex items-center'
                        : 'text-[#868686] text-[12px] font-semibold opacity-40 h-[20px] flex items-center'
                    }`}
                    style={{ fontFamily: 'Quicksand' }}
                  >
                    {w}
                  </div>
                ))}
              </div>

              {/* Units Selection Column */}
              <div className="absolute right-[15%] top-[50%] -translate-y-[50%] flex flex-col items-center gap-6">
                <button 
                  onClick={() => setWeightUnit('Lbs')}
                  className={`text-[16px] font-semibold transition-colors ${weightUnit === 'Lbs' ? 'text-white' : 'text-[#A2A2A2]'}`}
                  style={{ fontFamily: 'Quicksand' }}
                >
                  Lbs
                </button>
                <button 
                  onClick={() => setWeightUnit('Kg')}
                  className={`text-[24px] font-bold transition-colors ${weightUnit === 'Kg' ? 'text-white' : 'text-[#A2A2A2]'}`}
                  style={{ fontFamily: 'Quicksand' }}
                >
                  Kg
                </button>
              </div>
            </div>

            {/* Visual Selection Guides */}
            <div className="absolute top-[141px] left-[5%] right-[35%] h-[0.7px] bg-[#434343] pointer-events-none"></div>
            <div className="absolute top-[195px] left-[5%] right-[35%] h-[0.7px] bg-[#434343] pointer-events-none"></div>

            {/* Home Indicator Styled Done Button */}
            <div className="p-4 mt-auto">
              <button 
                onClick={() => setIsWeightPickerOpen(false)}
                className="w-full py-3 bg-[#8FFC86] rounded-xl text-[#242424] font-bold text-[18px] active:scale-[0.98] transition-all flex items-center justify-center relative overflow-hidden"
              >
                <span className="relative z-10">Done</span>
              </button>
              <div className="w-[139px] h-[5px] bg-white rounded-full mx-auto mt-4 mb-2"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalizePage;