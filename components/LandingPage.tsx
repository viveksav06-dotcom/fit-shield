
import React from 'react';

interface LandingPageProps {
  onNext: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#0F0E11] overflow-hidden">
      {/* Background Image Area */}
      <div className="relative w-full h-[65vh]">
        <img 
          src="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=600" 
          className="w-full h-full object-cover" 
          alt="Healthy food" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E11] via-[#0F0E11]/40 to-transparent"></div>
        
        {/* Logo Overlay */}
        <div className="absolute bottom-10 left-0 w-full px-6">
          <h1 className="text-[#8FFC86] text-6xl font-bold tracking-tighter" style={{ fontFamily: 'Lexend' }}>Boketto</h1>
          <p className="text-white text-xl mt-2 font-medium" style={{ fontFamily: 'Quicksand' }}>
            Personalized nutrition, <br />tailored for you.
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col justify-end px-6 pb-12 gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-2xl font-bold" style={{ fontFamily: 'Quicksand' }}>Unlock Your Best Self</h2>
          <p className="text-[#969696] text-sm leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
            Join thousands of others who are transforming their lives through data-driven nutrition planning.
          </p>
        </div>

        <button 
          onClick={onNext}
          className="w-full py-4 bg-[#8FFC86] rounded-[20px] text-[#0F0E11] font-bold text-lg shadow-[0_4px_30px_rgba(143,252,134,0.3)] active:scale-95 transition-all"
          style={{ fontFamily: 'Quicksand' }}
        >
          Get Started
        </button>

        <p className="text-center text-[#595959] text-xs">
          By continuing, you agree to our Terms of Service <br /> and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
