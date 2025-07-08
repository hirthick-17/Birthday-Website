import React, { useState, useEffect } from 'react';

interface BirthdayWishProps {
  onAnimationComplete: () => void;
}

const BirthdayWish: React.FC<BirthdayWishProps> = ({ onAnimationComplete }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start the animation after a brief delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Notify parent when animation completes - increased time to see the message
    const completeTimer = setTimeout(() => {
      onAnimationComplete();
    }, 5000); // Increased from 4000ms to 5000ms

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onAnimationComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-hotpink via-pink-400 to-softpink flex items-center justify-center z-50">
      <div className="text-center px-4 max-w-4xl mx-auto">
        <h1 
          className={`text-5xl md:text-7xl lg:text-8xl font-handwriting font-normal text-white mb-6 transition-all duration-2000 ease-out drop-shadow-2xl ${
            isVisible 
              ? 'opacity-100 transform translate-y-0 scale-100' 
              : 'opacity-0 transform translate-y-full scale-95'
          }`}
        >
          Happy Birthday
        </h1>
        <h2 
          className={`text-4xl md:text-6xl lg:text-7xl font-poppins font-bold text-white transition-all duration-2000 ease-out drop-shadow-2xl ${
            isVisible 
              ? 'opacity-100 transform translate-y-0 scale-100' 
              : 'opacity-0 transform translate-y-full scale-95'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          Panjumuttai ❤️
        </h2>
        
        {/* Decorative hearts */}
        <div className={`flex justify-center space-x-4 mt-8 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} style={{ transitionDelay: '1s' }}>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="text-white text-2xl animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              💖
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BirthdayWish;