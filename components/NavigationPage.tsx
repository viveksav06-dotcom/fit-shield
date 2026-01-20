
import React from 'react';

interface NavigationPageProps {
  onNavigate: (page: 'nutrition' | 'detail' | 'hunger' | 'log' | 'cart' | 'cart4' | 'menu' | 'menu2' | 'ingredients' | 'summary' | 'recommendations' | 'profile') => void;
}

const NavigationPage: React.FC<NavigationPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-start w-full min-h-screen bg-[#0F0E11] px-6 pt-16 pb-10">
      <header className="mb-10">
        <h1 className="text-[#8FFC86] text-4xl font-bold mb-2" style={{ fontFamily: 'Lexend' }}>Boketto</h1>
        <p className="text-[#CCC] text-lg" style={{ fontFamily: 'Quicksand' }}>Krishna's Nutrition Plan</p>
      </header>

      <div className="flex flex-col w-full gap-4">
        <NavCard 
          title="My Profile" 
          description="View and edit your personal details (Node 134-24287)"
          icon="👤"
          onClick={() => onNavigate('profile')}
        />
        <NavCard 
          title="Recommendations" 
          description="Personalized meal suggestions (Node 1618877431)"
          icon="✨"
          onClick={() => onNavigate('recommendations')}
        />
        <NavCard 
          title="Order Summary" 
          description="Final receipt view for kitchen staff (Node 117-8006)"
          icon="📄"
          onClick={() => onNavigate('summary')}
        />
        <NavCard 
          title="Ingredients" 
          description="Detailed view of dish components (Node 113-53902)"
          icon="🥑"
          onClick={() => onNavigate('ingredients')}
        />
        <NavCard 
          title="Menu Design 2" 
          description="Category Selector Overlay (Frame 1618877364)"
          icon="📋"
          onClick={() => onNavigate('menu2')}
        />
        <NavCard 
          title="Full Menu" 
          description="Interactive food menu (Node 112-38014)"
          icon="🍴"
          onClick={() => onNavigate('menu')}
        />
        <NavCard 
          title="Daily Meal Log" 
          description="View and log your daily consumption"
          icon="📅"
          onClick={() => onNavigate('log')}
        />
        <NavCard 
          title="Nutrition Discovery Dashboard" 
          description="Explore personalized meal recommendations"
          icon="📊"
          onClick={() => onNavigate('nutrition')}
        />
        <NavCard 
          title="Cart 2" 
          description="Review your meal selections and macros"
          icon="🛒"
          onClick={() => onNavigate('cart')}
        />
        <NavCard 
          title="Cart 4" 
          description="Checkout with recommendations"
          icon="🛍️"
          onClick={() => onNavigate('cart4')}
        />
        <NavCard 
          title="Food Customizer" 
          description="Tailor meals to your macro goals"
          icon="🍕"
          onClick={() => onNavigate('detail')}
        />
        <NavCard 
          title="Hunger Analysis" 
          description="Check your metabolic status"
          icon="🔋"
          onClick={() => onNavigate('hunger')}
        />
      </div>

      <footer className="mt-auto pt-10 w-full text-center">
        <span className="text-[#595959] text-[10px] tracking-widest uppercase">Pixel Perfect Design System v1.0</span>
      </footer>
    </div>
  );
};

const NavCard = ({ title, description, icon, onClick }: { title: string, description: string, icon: string, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="flex items-center w-full p-5 bg-[#222328] rounded-[24px] border border-[#2F2F2F] hover:border-[#8FFC86] transition-all group active:scale-95 text-left shadow-xl"
  >
    <div className="w-14 h-14 rounded-2xl bg-[#18171C] flex items-center justify-center text-2xl mr-4 shadow-inner border border-[#2F2F2F]">
      {icon}
    </div>
    <div className="flex-1">
      <h3 className="text-white text-lg font-bold group-hover:text-[#8FFC86] transition-colors" style={{ fontFamily: 'Quicksand' }}>{title}</h3>
      <p className="text-[#969696] text-xs font-medium" style={{ fontFamily: 'Quicksand' }}>{description}</p>
    </div>
    <div className="text-[#8FFC86] transform group-hover:translate-x-1 transition-all">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </div>
  </button>
);

export default NavigationPage;
