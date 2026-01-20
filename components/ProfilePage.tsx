
import React from 'react';

interface ProfilePageProps {
  onBack: () => void;
  onPersonalize: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onBack, onPersonalize }) => {
  return (
    <div className="flex flex-col items-start w-full min-h-screen bg-[#0F0E11] px-4 pt-11 pb-10">
      {/* Top Navigation */}
      <div className="flex h-14 justify-between items-center self-stretch mb-5">
        <button onClick={onBack} className="p-1 -ml-1 text-white active:opacity-50 transition-opacity">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21L10 14L17 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className="text-[#EFEFEF] text-[16px] font-bold leading-6" style={{ fontFamily: 'Quicksand' }}>Profile </span>
        <div className="w-8 h-8 rounded-full bg-[#0F0E11] flex items-center justify-center">
        </div>
      </div>

      {/* Profile Fields */}
      <div className="flex flex-col items-center gap-6 self-stretch w-full">
        <div className="flex flex-col items-start gap-4 self-stretch w-full">
          {/* Phone Field */}
          <div className="flex h-11 px-3 py-2.5 flex-col justify-center items-center gap-3 self-stretch rounded-xl bg-[#222328]">
            <div className="flex justify-between items-center self-stretch">
              <div className="flex items-center gap-2.5">
                <span className="text-[#CDCDCD] text-center text-[16px] font-medium leading-normal" style={{ fontFamily: 'Quicksand' }}>
                  99000 65277
                </span>
              </div>
            </div>
          </div>

          {/* Name Field with Edit */}
          <div className="flex h-11 px-3 py-2.5 flex-col justify-center items-center gap-3 self-stretch rounded-xl bg-[#222328]">
            <div className="flex justify-between items-center self-stretch">
              <div className="flex items-center gap-2.5">
                <span className="text-[#CDCDCD] text-center text-[16px] font-medium leading-normal" style={{ fontFamily: 'Quicksand' }}>
                  Krishna
                </span>
              </div>
              <button className="text-[#8FFC86] active:scale-90 transition-transform">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.33398 2.66665H2.66732C2.3137 2.66665 1.97456 2.80713 1.72451 3.05718C1.47446 3.30723 1.33398 3.64637 1.33398 3.99999V13.3333C1.33398 13.6869 1.47446 14.0261 1.72451 14.2761C1.97456 14.5262 2.3137 14.6667 2.66732 14.6667H12.0007C12.3543 14.6667 12.6934 14.5262 12.9435 14.2761C13.1935 14.0261 13.334 13.6869 13.334 13.3333V8.66666M12.334 1.66665C12.5992 1.40144 12.9589 1.25244 13.334 1.25244C13.7091 1.25244 14.0688 1.40144 14.334 1.66665C14.5992 1.93187 14.7482 2.29158 14.7482 2.66665C14.7482 3.04173 14.5992 3.40144 14.334 3.66665L8.00065 9.99999L5.33398 10.6667L6.00065 7.99999L12.334 1.66665Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Personalisation Navigation Field */}
          <button 
            onClick={onPersonalize}
            className="flex h-11 px-3 py-2.5 flex-col justify-center items-center gap-3 self-stretch rounded-xl bg-[#222328] active:bg-[#2F2F39] transition-colors group"
          >
            <div className="flex justify-between items-center self-stretch">
              <div className="flex items-center gap-2.5">
                <span className="text-[#CDCDCD] text-center text-[16px] font-medium leading-normal" style={{ fontFamily: 'Quicksand' }}>
                  Personalisation
                </span>
              </div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 3L14 10L7 17" stroke="#CDCDCD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>

          {/* Preference Navigation Field */}
          <button className="flex h-11 px-3 py-2.5 flex-col justify-center items-center gap-3 self-stretch rounded-xl bg-[#222328] active:bg-[#2F2F39] transition-colors group">
            <div className="flex justify-between items-center self-stretch">
              <div className="flex items-center gap-2.5">
                <span className="text-[#CDCDCD] text-center text-[16px] font-medium leading-normal" style={{ fontFamily: 'Quicksand' }}>
                  Preference
                </span>
              </div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 3L14 10L7 17" stroke="#CDCDCD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
