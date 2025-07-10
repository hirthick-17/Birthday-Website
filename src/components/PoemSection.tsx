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
        "Un Anbu endru oru Aruvi\n Athey thedi parakum intha Kuruvi\n Un kadhale athai theda Karuvi\n Athu kedaikuma intha oru Piravii",
        
        "Un nenapula kadhala thedi\nUnna paka vanthen nanum odi\nUnna odane pakanum vaadi\n Enna ne tha enoda jodi",
        
        "Un alagai matum en vai pesum\nEnaku Iruku unmela athigama pasam\n Namma onna irukurom sila masam \nIpdiye irunthuta elame awesome ",
        
        "Un kanngalil nan kanden oru Kadhal\n Athu vendum endrum en manam epothum Thedal\n Unnoda senthu pada vendum 1000 padhal\n Athai keka vendum nam iruduvarai sendral",
        
        "Namma dream destination swissuhh\nWill you be my miss uhh\nI will never feel you missuuuu\nAnd i will give lots of kissuuu",
        
        "Namma ooruku pogalam Franceuhhh\n unna forever sight adipen glance uhh \n Will you give me a chance uhhh \n Let us make some dance uhhh",
        
        "Unna patha odane vanthuchi love uhh\n Na oru loosu ana stove uhhh \n Namma onna parakalam like dove uhhhh \n I always be your glove uhhhh",
        
        "Unkuda spend panra Time uhh\n It's feel like sweet lime uhh \n Unna miss panrathu crime uhhh \n I will give you my prime uhhh",
        
        "Loving you is the best\n You are owner of my chest\n I will go down till earth crust \n For having you till the rest",
        
        "First ne enoda crush uhh \n Ipo en life a paint panna brush uhhh \n Unkuda pesuna enaku varum blushhh uhhh \n Na iruka try panran like lord krishhhhh",
        
        "Un Alagiya Per thaney Bhavana\n Unnai maranthu Nanu vitu povana \n Un arugil Irupen nan Ramana \n Ne ilamal pona Nan Savana",
        
        "Un kanna patha feels like Moon\n Namma success aguvom will be Soon\n Unna pathi nenaipan even in Noon\n Propose panna apo vanthuchi Tycoon"
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
            Kavithai About my Panjumuttai
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