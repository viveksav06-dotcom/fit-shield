
import React, { useState } from 'react';
import NutritionDashboard from './components/NutritionDashboard';
import FoodDetailSheet from './components/FoodDetailSheet';
import HungerDashboard from './components/HungerDashboard';
import NavigationPage from './components/NavigationPage';
import MealLog from './components/MealLog';
import CartPage from './components/CartPage';
import Cart4Page from './components/Cart4Page';
import MenuPage from './components/MenuPage';
import MenuDesign2 from './components/MenuDesign2';
import IngredientsPage from './components/IngredientsPage';
import OrderSummaryPage from './components/OrderSummaryPage';
import RecommendationsPage from './components/RecommendationsPage';
import ProfilePage from './components/ProfilePage';

type Page = 'nav' | 'nutrition' | 'detail' | 'hunger' | 'log' | 'cart' | 'cart4' | 'menu' | 'menu2' | 'ingredients' | 'summary' | 'recommendations' | 'profile';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('nav');

  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return <MenuPage onBack={() => setCurrentPage('nav')} onCart={() => setCurrentPage('cart')} onCustomise={() => setCurrentPage('detail')} />;
      case 'menu2':
        return <MenuDesign2 onBack={() => setCurrentPage('menu')} />;
      case 'ingredients':
        return <IngredientsPage onBack={() => setCurrentPage('menu')} onAdd={() => setCurrentPage('cart')} />;
      case 'summary':
        return <OrderSummaryPage onBack={() => setCurrentPage('cart')} onAddMore={() => setCurrentPage('menu')} />;
      case 'recommendations':
        return <RecommendationsPage onBack={() => setCurrentPage('nav')} onAdd={() => setCurrentPage('cart')} />;
      case 'profile':
        return <ProfilePage onBack={() => setCurrentPage('nav')} />;
      case 'nutrition':
        return (
          <div className="relative pb-20">
            <Header onBack={() => setCurrentPage('nav')} title="Dashboard" onCart={() => setCurrentPage('cart')} />
            <NutritionDashboard />
          </div>
        );
      case 'detail':
        return (
          <div className="relative pb-20">
            <Header onBack={() => setCurrentPage('menu')} title="Customize" />
            <FoodDetailSheet />
          </div>
        );
      case 'hunger':
        return (
          <div className="relative flex flex-col items-center pt-20 pb-20">
            <Header onBack={() => setCurrentPage('nav')} title="Hunger Level" />
            <HungerDashboard />
          </div>
        );
      case 'log':
        return (
          <div className="relative pb-20">
            <Header onBack={() => setCurrentPage('nav')} title="Daily Log" />
            <MealLog />
          </div>
        );
      case 'cart':
        return (
          <div className="relative pb-20">
            <Header onBack={() => setCurrentPage('menu')} title="My Cart" />
            <CartPage onFinish={() => setCurrentPage('summary')} />
          </div>
        );
      case 'cart4':
        return (
          <div className="relative pb-20">
            <Header onBack={() => setCurrentPage('cart')} title="Checkout" />
            <Cart4Page onFinish={() => setCurrentPage('log')} />
          </div>
        );
      case 'nav':
        return <NavigationPage onNavigate={setCurrentPage} />;
      default:
        return <NavigationPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center bg-[#0F0E11]">
      <div className="w-full max-w-[390px] min-h-screen relative overflow-y-auto no-scrollbar border-x border-[#1a1b1f]">
        {renderPage()}
      </div>
    </div>
  );
};

const Header = ({ onBack, title, onCart }: { onBack: () => void, title: string, onCart?: () => void }) => (
  <div className="absolute top-0 left-0 w-full h-16 flex justify-between items-center px-4 z-50 bg-[#0F0E11]/80 backdrop-blur-md">
    <div className="flex items-center">
      <button 
        onClick={onBack}
        className="p-2 rounded-full bg-[#222328] border border-[#2F2F2F] text-[#8FFC86] hover:bg-[#2F2F39] transition-colors mr-4"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>
      <span className="text-white font-bold text-lg" style={{ fontFamily: 'Quicksand' }}>{title}</span>
    </div>
    {onCart && (
      <button 
        onClick={onCart}
        className="p-2 rounded-full bg-[#222328] border border-[#2F2F2F] text-[#8FFC86] hover:bg-[#2F2F39] transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      </button>
    )}
  </div>
);

export default App;
