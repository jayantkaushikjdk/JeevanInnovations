import { useState, useEffect } from 'react';
import logoImage from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-surface/95 backdrop-blur-md shadow-elevated' 
          : 'bg-surface/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div 
            className="flex items-center space-x-3 cursor-pointer logo-hover"
            onClick={scrollToTop}
          >
            <img 
              src={logoImage} 
              alt="Jeevan Innovation Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold text-cyan-primary">
              Jeevan Innovations
            </span>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="nav-link text-foreground hover:text-cyan-primary"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="nav-link text-foreground hover:text-cyan-primary"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('marketplace')}
              className="nav-link text-foreground hover:text-cyan-primary"
            >
              Marketplace
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-link text-foreground hover:text-cyan-primary"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-link text-foreground hover:text-cyan-primary"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('quote')}
              className="btn-primary"
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-cyan-primary text-2xl">☰</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;