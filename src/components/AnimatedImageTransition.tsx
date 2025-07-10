import React, { useEffect, useState } from 'react';

interface AnimatedImageTransitionProps {
  onAnimationEnd: () => void;
}

import birthdayImg from '../Assets/1.png';

const AnimatedImageTransition: React.FC<AnimatedImageTransitionProps> = ({ onAnimationEnd }) => {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade in and scale in
    setTimeout(() => setVisible(true), 100); // slight delay for effect
    // Hold for 2.5s, then fade out (4s fade in + 2.5s hold + 3s fade out)
    const holdTimeout = setTimeout(() => {
      setFadeOut(true);
      // After fade out, call onAnimationEnd
      setTimeout(() => {
        onAnimationEnd();
      }, 3000);
    }, 4000 + 2500);
    return () => clearTimeout(holdTimeout);
  }, [onAnimationEnd]);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-br from-pink-500 via-pink-600 to-fuchsia-600 transition-colors duration-700 overflow-hidden">
      {/* Confetti and sparkles overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Simple confetti dots */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-yellow-300 opacity-70"
            style={{
              width: `${8 + Math.random() * 12}px`,
              height: `${8 + Math.random() * 12}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(0.5px)',
              zIndex: 1,
            }}
          />
        ))}
        {/* Simple sparkles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white opacity-60"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(1.5px)',
              zIndex: 1,
            }}
          />
        ))}
        {/* Animated hearts moving up */}
        {[...Array(12)].map((_, i) => {
          const left = Math.random() * 100;
          const delay = Math.random() * 3;
          const duration = 4 + Math.random() * 3;
          return (
            <div
              key={`heart-${i}`}
              className="absolute animate-heart-float"
              style={{
                left: `${left}%`,
                bottom: '-40px',
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                zIndex: 0,
                fontSize: `${24 + Math.random() * 18}px`,
                color: '#ec4899',
                opacity: 0.7 + Math.random() * 0.3,
              }}
            >
              496
            </div>
          );
        })}
        {/* Animated bulbs moving up */}
        {[...Array(8)].map((_, i) => {
          const left = Math.random() * 100;
          const delay = Math.random() * 3;
          const duration = 5 + Math.random() * 3;
          return (
            <div
              key={`bulb-${i}`}
              className="absolute animate-bulb-float"
              style={{
                left: `${left}%`,
                bottom: '-40px',
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                zIndex: 0,
                fontSize: `${22 + Math.random() * 14}px`,
                color: '#facc15',
                opacity: 0.8,
              }}
            >
              4a1
            </div>
          );
        })}
      </div>
      <img
        src={birthdayImg}
        alt="Birthday Transition"
        className={`rounded-xl shadow-2xl border-4 border-white transition-all
          duration-[4000ms] ${visible && !fadeOut ? 'opacity-100 scale-100' : 'opacity-0 scale-85'}
          ${fadeOut ? 'transition-all duration-[3000ms] opacity-0 scale-90' : ''}
        `}
        style={{ width: 520, height: 520, objectFit: 'cover', display: 'block', zIndex: 2 }}
      />
    </div>
  );
};

export default AnimatedImageTransition; 