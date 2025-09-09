import { useEffect, useRef, useState, ReactNode } from 'react';
import './styles.css';

interface FadeInSectionProps {
  children: ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Trigger only once
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? 'fade-in-visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
