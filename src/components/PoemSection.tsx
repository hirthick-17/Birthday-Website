import React, { useState, useEffect, useRef } from 'react';
import { Heart, Loader2 } from 'lucide-react';

interface PoemSectionProps {
  isVisible: boolean;
}

const PoemSection: React.FC<PoemSectionProps> = ({ isVisible }) => {
  const [poems, setPoems] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPoems, setShowPoems] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const generatePoems = async () => {
    if (hasGenerated) return; // Prevent multiple generations
    
    setLoading(true);
    setError(null);
    setHasGenerated(true);

    try {
      const mockPoems = [
        "In your eyes, I see my future bright,\nWith you, every day feels so right.\nYour smile melts my heart away,\nHappy Birthday, love, this special day.",
        
        "Like flowers bloom in morning dew,\nMy heart opens wide for you.\nIn your laugh, I find my peace,\nMay your joy never cease.",
        
        "Dancing through life hand in hand,\nTogether we make the perfect band.\nYour love is my sweetest song,\nWith you is where I belong.",
        
        "Stars above pale next to you,\nYour beauty shines in all you do.\nEvery moment spent with you,\nMakes my wildest dreams come true.",
        
        "Coffee tastes better with your kiss,\nEvery morning filled with bliss.\nYour presence makes my soul complete,\nLife with you is oh so sweet.",
        
        "In your arms, I've found my home,\nNo more shall my heart roam.\nYour love guides me through each day,\nIn your heart, I want to stay.",
        
        "Like puzzle pieces, we fit right,\nYou make my darkness turn to light.\nWith every breath, I love you more,\nYou're everything I'm living for.",
        
        "Your laughter is my favorite sound,\nIn your love, I am found.\nEvery day with you's a gift,\nMy spirits, you always lift.",
        
        "Through seasons change and years go by,\nOur love will reach up to the sky.\nYou are my sun, my moon, my star,\nPerfect just the way you are.",
        
        "In this world of endless noise,\nYou are my heart's favorite voice.\nWith you, life's an endless dance,\nBlessed by this sweet romance.",
        
        "Your touch ignites my very soul,\nWith you, I feel completely whole.\nEvery kiss, a sweet surprise,\nParadise within your eyes.",
        
        "Today we celebrate your birth,\nAn angel walking on this earth.\nMy love for you will never end,\nMy lover, partner, and best friend."
      ];

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setPoems(mockPoems);
      
      // Show poems with a slight delay for smooth transition
      setTimeout(() => {
        setShowPoems(true);
        
        // Trigger staggered animation for poem cards
        setTimeout(() => {
          const poemCards = document.querySelectorAll('.poem-card');
          poemCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('visible');
            }, index * 150);
          });
        }, 100);
      }, 300);
      
    } catch (err) {
      setError('Failed to generate poems. Please try again.');
      setHasGenerated(false); // Allow retry
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isVisible && !hasGenerated) {
      generatePoems();
    }
  }, [isVisible, hasGenerated]);

  const handleRetry = () => {
    setHasGenerated(false);
    setPoems([]);
    setShowPoems(false);
    generatePoems();
  };

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-lightpink to-softpink py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-handwriting font-bold text-hotpink mb-4">
            Poems From My Heart to Yours
          </h2>
          <Heart className="text-hotpink mx-auto mb-8" size={40} />
        </div>

        {loading && (
          <div className="text-center py-16 transition-all duration-500 ease-in-out">
            <Loader2 className="animate-spin text-hotpink mx-auto mb-4" size={48} />
            <p className="text-hotpink font-handwriting text-xl">
              Crafting poems filled with love...
            </p>
          </div>
        )}

        {error && (
          <div className="text-center py-16 transition-all duration-500 ease-in-out">
            <p className="text-red-500 font-body text-lg mb-4">{error}</p>
            <button
              onClick={handleRetry}
              className="bg-hotpink text-white px-6 py-3 rounded-full font-body hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Try Again
            </button>
          </div>
        )}

        {showPoems && poems.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poems.map((poem, index) => (
              <div
                key={index}
                className="poem-card bg-white bg-opacity-90 rounded-2xl shadow-lg p-6 backdrop-blur-sm hover:shadow-xl transition-all duration-500 ease-out transform hover:scale-105"
              >
                <div className="text-center mb-4">
                  <Heart className="text-hotpink mx-auto mb-2 transition-transform duration-300 hover:scale-110" size={24} />
                  <div className="w-12 h-0.5 bg-hotpink mx-auto"></div>
                </div>
                <p className="text-gray-700 font-body leading-relaxed text-center whitespace-pre-line">
                  {poem}
                </p>
                <div className="text-center mt-4">
                  <div className="w-12 h-0.5 bg-hotpink mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PoemSection;