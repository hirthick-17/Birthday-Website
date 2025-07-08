import React, { useState, useEffect } from 'react';
import BirthdayWish from './components/BirthdayWish';
import ImageWall from './components/ImageWall';
import DiaryCard from './components/DiaryCard';
import ScrollIndicator from './components/ScrollIndicator';
import PoemSection from './components/PoemSection';
import FinalSection from './components/FinalSection';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

function App() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [showBirthdayWish, setShowBirthdayWish] = useState(true);
  
  const [poemSectionRef, isPoemSectionVisible] = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: '0px'
  });

  const [finalSectionRef, isFinalSectionVisible] = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: '0px'
  });

  const handleBirthdayWishComplete = () => {
    setShowMainContent(true);
    // Hide the birthday wish after a longer delay to ensure smooth transition
    setTimeout(() => {
      setShowBirthdayWish(false);
    }, 1500);
  };

  useEffect(() => {
    // Animate poem cards when they become visible
    if (isPoemSectionVisible) {
      const poemCards = document.querySelectorAll('.poem-card');
      poemCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 100);
      });
    }
  }, [isPoemSectionVisible]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-softpink to-lightpink font-body">
      {/* Birthday Wish Overlay */}
      {showBirthdayWish && (
        <BirthdayWish onAnimationComplete={handleBirthdayWishComplete} />
      )}

      {/* Main Content */}
      <div className={`transition-all duration-1000 ease-in-out ${showMainContent ? 'opacity-100' : 'opacity-0'}`}>
        {/* Page 1: Introduction & Personal Touch */}
        <div className="min-h-screen flex flex-col justify-center py-16">
          <div className="flex-1 flex flex-col justify-center">
            {/* Image Wall */}
            <div className="mb-16">
              <ImageWall isVisible={showMainContent} />
            </div>

            {/* Diary Card */}
            <div className="mb-16">
              <DiaryCard isVisible={showMainContent} />
            </div>

            {/* Scroll Indicator */}
            <ScrollIndicator isVisible={showMainContent} />
          </div>
        </div>

        {/* Page 2: Poems from the Heart */}
        <div ref={poemSectionRef}>
          <PoemSection isVisible={isPoemSectionVisible} />
        </div>

        {/* Page 3: Final Section with Image and Message */}
        <div ref={finalSectionRef}>
          <FinalSection isVisible={isFinalSectionVisible} />
        </div>
      </div>
    </div>
  );
}

export default App;