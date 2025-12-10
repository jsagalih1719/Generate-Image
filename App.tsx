import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { NavItem } from './types';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [activeItem, setActiveItem] = useState<NavItem>(NavItem.PRODUCT_STUDIO);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-white rounded-lg shadow-md text-gray-700"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <Sidebar 
        activeItem={activeItem} 
        setActiveItem={(item) => {
          setActiveItem(item);
          setIsMobileMenuOpen(false); // Close menu on selection
        }}
        isOpen={isMobileMenuOpen}
      />
      
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <MainContent activeItem={activeItem} />
    </div>
  );
};

export default App;
