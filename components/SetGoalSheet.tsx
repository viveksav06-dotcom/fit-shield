
import React, { useState } from 'react';

interface SetGoalSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const SetGoalSheet: React.FC<SetGoalSheetProps> = ({ isOpen, onClose }) => {
  const [selectedGoal, setSelectedGoal] = useState('Balanced');
  const [kcal, setKcal] = useState('622');
  const [protein, setProtein] = useState(25);
  const [carbs, setCarbs] = useState(90);
  const [fat, setFat] = useState(18);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" onClick={onClose}></div>
      
      {/* Content */}
      <div className="relative w-full max-w-[390px] bg-[#222328] rounded-t-[24px] overflow-hidden flex flex-col items-center animate-in slide-in-from-bottom duration-300">
        {/* Drag Handle */}
        <div className="w-10 h-0.5 bg-[#7C7C7C] rounded-full mt-3 mb-5"></div>

        <div className="w-full px-5 flex flex-col gap-5 pb-9">
          {/* Section: Set Goal */}
          <div className="flex flex-col gap-2.5">
            <h2 className="text-[#EFEFEF] text-[18px] font-bold" style={{ fontFamily: 'Quicksand' }}>Set Goal</h2>
            <div className="flex flex-wrap gap-3">
              {['Balanced', 'Low fat', 'Low carbs', 'High Protein'].map((goal) => (
                <button
                  key={goal}
                  onClick={() => setSelectedGoal(goal)}
                  className={`h-11 px-4 rounded-[12px] flex items-center justify-center transition-all duration-200 border-[0.6px] ${
                    selectedGoal === goal 
                      ? 'border-[#00C600] bg-[#0C180C] text-white shadow-inner' 
                      : 'bg-[#2F2F39] text-[#CDCDCD] border-transparent'
                  }`}
                >
                  <span className="text-[16px] font-medium" style={{ fontFamily: 'Quicksand' }}>{goal}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section: Kcal Input */}
          <div className="flex flex-col gap-2">
            <label className="text-[#CCC] text-[12px] font-medium opacity-90" style={{ fontFamily: 'Quicksand' }}>
              Enter your Kcal goal or adjust macro
            </label>
            <div className="flex h-11 px-3 items-center justify-between rounded-[12px] bg-[#2F2F39]">
              <input 
                type="text" 
                value={kcal}
                onChange={(e) => setKcal(e.target.value)}
                className="bg-transparent border-none outline-none text-white text-[16px] font-semibold w-1/2"
                style={{ fontFamily: 'Quicksand' }}
              />
              <span className="text-white text-[16px] font-semibold" style={{ fontFamily: 'Quicksand' }}>Kcal</span>
            </div>
          </div>

          {/* Section: Macro Sliders */}
          <div className="flex flex-col p-3 gap-6 bg-[#2F2F39] rounded-[12px]">
            <MacroSlider label="Protein" value={protein} unit="g" onChange={setProtein} />
            <MacroSlider label="Carbs" value={carbs} unit="g" onChange={setCarbs} />
            <MacroSlider label="Fat" value={fat} unit="g" onChange={setFat} />
          </div>

          {/* Actions */}
          <div className="flex flex-col items-center gap-4 mt-2">
            <button 
              onClick={onClose}
              className="w-full py-3 bg-[#8FFC86] rounded-[12px] text-[#242424] font-bold text-[18px] active:scale-[0.98] transition-all shadow-lg"
              style={{ fontFamily: 'Quicksand' }}
            >
              Save Goal
            </button>
            <button 
              onClick={() => {
                setKcal('622');
                setProtein(25);
                setCarbs(90);
                setFat(18);
              }}
              className="text-[#8FFC86] text-[14px] font-semibold underline underline-offset-4 active:opacity-60"
              style={{ fontFamily: 'Quicksand' }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MacroSliderProps {
  label: string;
  value: number;
  unit: string;
  onChange: (val: number) => void;
}

const MacroSlider: React.FC<MacroSliderProps> = ({ label, value, unit, onChange }) => {
  return (
    <div className="flex items-center gap-4 w-full">
      <span className="text-white text-[14px] font-bold w-12" style={{ fontFamily: 'Quicksand' }}>{label}</span>
      <div className="relative flex-1 h-[18px] flex items-center">
        {/* Track */}
        <div className="absolute w-full h-3 bg-[#1B1B1C] rounded-full shadow-inner"></div>
        {/* Fill */}
        <div 
          className="absolute h-3 bg-[#67C45F] rounded-full shadow-inner" 
          style={{ width: `${Math.min(100, (value / 200) * 100)}%` }}
        ></div>
        {/* Thumb */}
        <input 
          type="range" 
          min="0" 
          max="200" 
          value={value} 
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="absolute w-full opacity-0 cursor-pointer z-10"
        />
        <div 
          className="absolute w-[18px] h-[18px] bg-[#D9D9D9] rounded-full shadow-md border border-[#2F2F2F] pointer-events-none"
          style={{ left: `calc(${Math.min(100, (value / 200) * 100)}% - 9px)` }}
        ></div>
      </div>
      <span className="text-[#CCC] text-[14px] font-medium w-8 text-right" style={{ fontFamily: 'Quicksand' }}>{value}{unit}</span>
    </div>
  );
};

export default SetGoalSheet;
