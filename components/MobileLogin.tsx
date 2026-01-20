
import React, { useState } from 'react';

interface MobileLoginProps {
  onNext: () => void;
}

const MobileLogin: React.FC<MobileLoginProps> = ({ onNext }) => {
  const [number, setNumber] = useState('');

  const handleKeyPress = (val: string) => {
    if (val === 'back') {
      setNumber(prev => prev.slice(0, -1));
    } else if (number.length < 10) {
      setNumber(prev => prev + val);
    }
  };

  const isComplete = number.length === 10;

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#0F0E11] px-6 pt-12 pb-10">
      {/* Header Navigation */}
      <div className="mb-10">
        <button className="p-2 -ml-2 rounded-full text-white hover:bg-white/5 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-2 mb-14">
        <h2 className="text-white text-[32px] font-bold leading-tight" style={{ fontFamily: 'Quicksand' }}>
          Enter your <br /> mobile number
        </h2>
        <p className="text-[#969696] text-[16px] font-medium" style={{ fontFamily: 'Quicksand' }}>
          We'll send you a verification code
        </p>
      </div>

      {/* Mobile Input Area */}
      <div className="flex items-center gap-5 py-6 border-b border-[#2F2F2F]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-5 rounded-sm bg-blue-600 overflow-hidden relative border border-white/10">
            {/* Simple India Flag Representation */}
            <div className="h-1/3 bg-[#FF9933]"></div>
            <div className="h-1/3 bg-white flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-blue-900"></div>
            </div>
            <div className="h-1/3 bg-[#138808]"></div>
          </div>
          <span className="text-white text-xl font-bold" style={{ fontFamily: 'Lexend' }}>+91</span>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path d="M1 1L5 5L9 1" stroke="#969696" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <div className="h-8 w-[1px] bg-[#2F2F2F]"></div>
        
        <div className="flex-1 overflow-hidden">
          <span className={`text-2xl font-bold tracking-[0.2em] block truncate ${number ? 'text-white' : 'text-[#404040]'}`} style={{ fontFamily: 'Lexend' }}>
            {number || '0000000000'}
          </span>
        </div>
      </div>

      {/* Numeric Keypad Container */}
      <div className="flex-1 flex flex-col justify-end mt-8">
        <div className="grid grid-cols-3 gap-y-4 mb-10">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0].map((val, idx) => (
            <button 
              key={idx}
              onClick={() => val !== '' && handleKeyPress(val.toString())}
              className={`h-14 text-white text-3xl font-medium transition-all active:scale-90 ${val === '' ? 'pointer-events-none' : 'active:text-[#8FFC86]'}`}
              style={{ fontFamily: 'Lexend' }}
            >
              {val}
            </button>
          ))}
          <button 
            onClick={() => handleKeyPress('back')}
            className="h-14 flex items-center justify-center text-white active:scale-90 transition-transform"
          >
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
              <path d="M10 1L2 10L10 19H27V1H10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 7L16 13M16 7L21 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Footer Button */}
        <button 
          disabled={!isComplete}
          onClick={onNext}
          className={`w-full py-5 rounded-[24px] font-bold text-[18px] transition-all duration-300 ${
            isComplete 
              ? 'bg-[#8FFC86] text-[#0F0E11] shadow-[0_10px_40px_rgba(143,252,134,0.3)]' 
              : 'bg-[#222328] text-[#595959] cursor-not-allowed'
          }`}
          style={{ fontFamily: 'Quicksand' }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default MobileLogin;
