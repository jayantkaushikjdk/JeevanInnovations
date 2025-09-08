import { useEffect } from 'react';
import heroBackground from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  useEffect(() => {
    // Add AOS initialization effect
    const heroElements = document.querySelectorAll('[data-aos]');
    heroElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('aos-animate');
      }, index * 300);
    });
  }, []);

  const scrollToQuote = () => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 32, 44, 0.8), rgba(26, 32, 44, 0.8)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial pulse-glow opacity-30"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 
          className="text-5xl md:text-7xl font-bold text-foreground mb-6 fade-in"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Empowering{' '}
          <span className="text-cyan-primary bg-gradient-to-r from-cyan-primary to-cyan-glow bg-clip-text text-transparent">
            Startups
          </span>{' '}
          for a Digital Future
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed fade-in"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          style={{ animationDelay: '0.5s' }}
        >
          We transform innovative ideas into powerful digital solutions. From web development 
          to mobile apps and UI/UX design, we're your partner in building the next big thing.
        </p>
        
        <button 
          onClick={scrollToQuote}
          className="btn-primary text-lg px-8 py-4 animate-bounce hover:animate-none fade-in"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="600"
          style={{ animationDelay: '1s' }}
        >
          Get a Free Quote
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-primary animate-bounce"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-cyan-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-primary rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;