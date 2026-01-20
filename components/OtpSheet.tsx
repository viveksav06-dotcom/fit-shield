
import React, { useState, useRef } from 'react';

interface OtpSheetProps {
  onNext: () => void;
  onBack: () => void;
}

const OtpSheet: React.FC<OtpSheetProps> = ({ onNext, onBack }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Move to next input
    if (value && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const isComplete = otp.every(digit => digit !== '');

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#0F0E11] relative overflow-hidden">
      {/* Background Dimmer */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 grayscale" 
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=600)' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E11] via-transparent to-transparent"></div>

      <button 
        onClick={onBack}
        className="absolute top-12 left-6 p-2 rounded-full bg-[#222328] border border-[#2F2F2F] text-white z-10 active:scale-90 transition-transform"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>

      {/* Bottom Sheet */}
      <div className="mt-auto w-full bg-[#222328] rounded-t-[24px] pt-5 pb-9 flex flex-col items-center gap-5 relative z-20 shadow-[0_-10px_40_rgba(0,0,0,0.5)] border-t border-[#404040]/30 animate-in slide-in-from-bottom duration-500">
        
        {/* Drag Handle */}
        <div className="w-[38px] h-[2px] bg-[#7C7C7C] rounded-[100px]"></div>

        <div className="flex flex-col items-center gap-5 w-full px-4">
          
          {/* Logo Branding */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-center gap-2">
              <svg width="89" height="18" viewBox="0 0 89 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 17.7995H3.25514V11.0694H8.32323V8.25964H3.25514V4.47042H9.75262V1.66064H0V17.7995Z" fill="#00C600"/>
                <path d="M14.6005 4.84814H11.3428V17.7993H14.6005V4.84814Z" fill="white"/>
                <path d="M12.9925 0C12.4376 0 11.962 0.1928 11.5835 0.575835C11.2051 0.958869 11.0107 1.43445 11.0107 1.99229C11.0107 2.55014 11.2025 3.02829 11.5835 3.40875C11.962 3.78922 12.4376 3.98201 12.9925 3.98201C13.532 3.98201 13.9999 3.78921 14.3784 3.40618C14.7568 3.02572 14.9512 1.98972C14.9512 1.43188 14.7594 0.953733 14.3784 0.573269C13.9974 0.192805 13.5346 0 12.9925 0Z" fill="white"/>
                <path d="M20.8322 1.81494H17.554V4.84837H16.1221V7.65815H17.554V14.0361C17.554 15.3394 17.9018 16.306 18.5845 16.9075C19.2545 17.4988 20.2108 17.797 21.4305 17.797H23.7856V14.9435H21.8703C21.4689 14.9435 21.1723 14.8741 21.0342 14.7456C20.868 14.5913 20.8347 14.2726 20.8347 14.0361V7.65815H23.7856V4.84837H20.8347V1.81494H20.8322Z" fill="white"/>
                <path d="M32.82 10.7147C32.2396 10.4653 31.4929 10.216 30.6082 9.97946C29.9587 9.7918 29.4651 9.63498 29.1353 9.51159C28.8463 9.40362 28.6009 9.25452 28.4014 9.06943C28.2403 8.91776 28.1662 8.74552 28.1662 8.52444C28.1662 8.23395 28.2838 8.01544 28.5369 7.83292C28.8233 7.62984 29.2631 7.52443 29.841 7.52443C30.424 7.52443 30.8869 7.66068 31.2142 7.92804C31.5313 8.18768 31.7026 8.52958 31.7384 8.97431L31.7665 9.31879H35.014L34.9961 8.92547C34.9321 7.61184 34.431 6.55528 33.5053 5.78664C32.595 5.03086 31.3932 4.65039 29.9305 4.65039C28.9589 4.65039 28.0818 4.81748 27.3275 5.14653C26.5552 5.4833 25.9518 5.95374 25.5298 6.545C25.1028 7.14654 24.888 7.82006 24.888 8.545C24.888 9.42932 25.1309 10.162 25.6066 10.7172C26.0617 11.2468 26.6089 11.6478 27.2328 11.9049C27.8158 12.1466 28.5804 12.3959 29.4984 12.6504C30.4087 12.9075 31.0787 13.144 31.4903 13.3548C31.7997 13.5116 31.9353 13.7224 31.9353 14.0386C31.9353 14.3419 31.7997 14.5784 31.5108 14.7841C31.1886 15.0103 30.7079 15.126 30.084 15.126C29.4882 15.126 29.01 14.982 28.6264 14.6838C28.2608 14.4011 28.0664 14.0643 28.0332 13.653L28.0051 13.3111H24.6758L24.6911 13.7018C24.7244 14.5116 24.9852 15.2571 25.4685 15.9126C25.9441 16.5605 26.5987 17.0772 27.4093 17.4473C28.2122 17.815 29.1276 18 30.13 18C31.117 18 31.9941 17.8329 32.7356 17.5039C33.4925 17.1671 34.0883 16.6916 34.5077 16.0926C34.9321 15.4859 35.1495 14.7867 35.1495 14.0103C35.1341 13.1414 34.8887 12.4268 34.4182 11.8869C33.9732 11.3753 33.4337 10.9795 32.82 10.7147Z" fill="white"/>
                <path d="M46.418 5.29292C45.6407 4.86619 44.7457 4.65025 43.7613 4.65025C42.9379 4.65025 42.1657 4.80192 41.4676 5.10012C41.0636 5.27493 40.6954 5.49344 40.368 5.75308V0.663086H37.1104V17.7994H40.368V10.604C40.368 9.61685 40.611 8.85849 41.0917 8.34949C41.5724 7.84049 42.2168 7.59113 43.0581 7.59113C43.8968 7.59113 44.536 7.83792 45.0117 8.34692C45.4847 8.85592 45.7251 9.61427 45.7251 10.604V17.7994H48.9598V10.2287C48.9598 9.06415 48.7347 8.05129 48.2872 7.21581C47.8372 6.37262 47.2082 5.72737 46.418 5.29292Z" fill="white"/>
                <path d="M53.0579 0C52.503 0 52.0274 0.1928 51.649 0.575835C51.2705 0.958869 51.0107 1.43445 51.0107 1.99229C51.0107 2.55014 51.2025 3.02829 51.5835 3.40875C51.962 3.78922 52.4376 3.98201 53.0579 3.98201C53.5974 3.98201 54.0654 3.78921 54.4438 3.40618C54.8223 3.02572 55.0166 2.54756 55.0166 1.98972C55.0166 1.43188 54.8248 0.953733 54.4438 0.573269C54.0654 0.192805 53.5974 0 53.0579 0Z" fill="white"/>
                <path d="M54.6639 4.84814H51.4062V17.7993H54.6639V4.84814Z" fill="white"/>
                <path d="M66.0581 5.44988C65.1094 4.91774 64.0201 4.65039 62.8158 4.65039C61.5679 4.65039 60.4428 4.92803 59.4711 5.47302C58.4943 6.02315 57.7272 6.81492 57.1877 7.82777C56.6532 8.83035 56.3848 10.0026 56.3848 11.3137C56.3848 12.6273 56.6635 13.8021 57.2132 14.8047C57.7656 15.8149 58.5404 16.6093 59.5146 17.1646C60.4837 17.7173 61.596 18 62.8158 18C64.3142 18 65.5927 17.6144 66.6181 16.8535C67.6384 16.0926 68.3543 15.1029 68.743 13.9126L68.9041 13.4216H65.447L65.3447 13.6299C64.8512 14.635 64.0227 15.126 62.8158 15.126C61.9643 15.126 61.2687 14.8689 60.6883 14.3368C60.1999 13.8921 59.9033 13.3342 59.7805 12.6427H68.9501L69.0013 12.3265C69.0626 11.9383 69.0933 11.5013 69.0933 11.0283C69.0933 9.78922 68.8248 8.67354 68.2981 7.7121C67.7637 6.74551 67.0093 5.98458 66.0581 5.44988ZM60.7292 8.26222C61.279 7.76865 61.9259 7.52701 62.7058 7.52701C63.5752 7.52701 64.2809 7.77122 64.8614 8.27765C65.3396 8.69153 65.6132 9.21082 65.6976 9.85606H59.8214C59.9697 9.19539 60.2689 8.67354 60.7292 8.26222Z" fill="white"/>
                <path d="M74.0692 0.663086H70.8115V17.7994H74.0692V0.663086Z" fill="white"/>
                <path d="M85.7217 0.663342V6.01297C85.3432 5.69678 84.9034 5.42429 84.4073 5.20064C83.5916 4.83303 82.7503 4.64793 81.9091 4.64793C80.7737 4.64793 79.7279 4.93071 78.7997 5.48598C77.8715 6.04125 77.1299 6.83303 76.593 7.83303C76.0585 8.83047 75.79 9.98471 75.79 11.2649C75.79 12.5451 76.0611 13.7097 76.593 14.7277C77.1274 15.7508 77.8715 16.558 78.7971 17.1313C79.7254 17.7045 80.7661 17.995 81.8886 17.995C82.8859 17.995 83.7834 17.7868 84.5607 17.3755C84.998 17.1441 85.3867 16.8742 85.7217 16.5683V17.7945H88.9998V0.658203H85.7217V0.663342ZM85.7217 11.3138C85.7217 12.0875 85.5631 12.7662 85.2511 13.3369C84.9417 13.9025 84.5326 14.3343 84.0365 14.6223C83.0546 15.1955 81.8349 15.2135 80.8095 14.612C80.3058 14.3163 79.8941 13.8768 79.5822 13.3061C79.2702 12.7302 79.1117 12.0464 79.1117 11.2701C79.1117 10.4989 79.2702 9.82533 79.5796 9.27263C79.889 8.7225 80.2981 8.3009 80.7942 8.01812C81.2928 7.73535 81.8375 7.59139 82.4179 7.59139C82.9958 7.59139 83.5405 7.73792 84.0365 8.02841C84.5326 8.3189 84.9417 8.7482 85.2537 9.30348C85.5631 9.86646 85.7217 10.5426 85.7217 11.3138Z" fill="white"/>
              </svg>
              <span className="text-[#CCC] text-[10px] font-medium tracking-tight uppercase" style={{ fontFamily: 'Quicksand' }}>Your food intelligence</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-white text-[20px] font-bold text-center" style={{ fontFamily: 'Quicksand' }}>
            Verify OTP
          </h2>

          {/* Description */}
          <p className="text-[#CCC] text-[12px] font-medium text-center px-6 leading-normal" style={{ fontFamily: 'Quicksand' }}>
            Enter the 4-digit code sent to your mobile number
          </p>

          {/* OTP Input Fields */}
          <div className="flex gap-4 mt-2">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                // Fix: ref callback should return void.
                ref={el => { inputs.current[idx] = el; }}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(e.target.value, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className="w-12 h-14 bg-[#2F2F39] border border-transparent focus:border-[#8FFC86] rounded-xl text-white text-2xl font-bold text-center outline-none transition-all"
                style={{ fontFamily: 'Lexend' }}
              />
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 w-full mt-4">
            <button 
              disabled={!isComplete}
              onClick={onNext}
              className={`w-full py-3 rounded-[12px] text-[18px] font-bold transition-all duration-300 ${
                isComplete 
                  ? 'bg-[#8FFC86] text-[#242424] shadow-lg active:scale-95' 
                  : 'bg-[#515151] text-white opacity-50 cursor-not-allowed'
              }`}
              style={{ fontFamily: 'Quicksand' }}
            >
              Verify & Continue
            </button>
            
            <button className="text-[#8FFC86] text-[14px] font-semibold underline underline-offset-4 active:opacity-60 transition-opacity">
              Resend Code
            </button>
          </div>
        </div>

        {/* iOS style home indicator */}
        <div className="mt-2 w-[139px] h-[5px] bg-white rounded-full mx-auto opacity-80"></div>
      </div>
    </div>
  );
};

export default OtpSheet;
