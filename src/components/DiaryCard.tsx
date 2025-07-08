import React, { useState, useEffect } from 'react';

interface DiaryCardProps {
  isVisible: boolean;
}

const DiaryCard: React.FC<DiaryCardProps> = ({ isVisible }) => {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowCard(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const defaultContent = `My dearest love,

Every moment with you feels like a beautiful dream that I never want to wake up from. You bring sunshine to my cloudy days and make every ordinary moment extraordinary just by being there.

I love the way you laugh at my silly jokes, how you scrunch your nose when you're thinking hard, and the way your eyes light up when you talk about something you're passionate about. You are the most beautiful person I know, both inside and out.

Thank you for being my partner in all of life's adventures, big and small. From our quiet morning coffee moments to our spontaneous dance parties in the living room, every memory with you is precious.

On this special day, I want you to know how grateful I am to have you in my life. You make me want to be a better person every single day.

Happy Birthday, beautiful. Here's to many more years of love, laughter, and endless adventures together.

All my love,
Your devoted partner ❤️`;

  return (
    <div className={`transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div 
        className={`max-w-4xl mx-auto px-4 transition-all duration-1000 ease-in-out ${
          showCard 
            ? 'opacity-100 transform scale-100' 
            : 'opacity-0 transform scale-95'
        }`}
      >
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-handwriting font-bold text-hotpink text-center mb-8">
            Sharing My Heart's Pages
          </h2>
          
          <div className="diary-lines rounded-lg bg-white bg-opacity-50">
            <div
              className="editable-content w-full h-full font-body text-gray-700 leading-relaxed"
              contentEditable="true"
              suppressContentEditableWarning={true}
              style={{ minHeight: '300px' }}
            >
              {defaultContent}
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500 font-body italic">
              Click above to personalize your message ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryCard;