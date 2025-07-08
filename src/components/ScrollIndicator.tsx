import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  isVisible: boolean;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ isVisible }) => {
  return (
    <div className={`text-center py-8 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex flex-col items-center">
        <ChevronDown className="text-hotpink animate-bounce-slow mb-2" size={32} />
        <p className="text-hotpink font-handwriting text-xl">
          Scroll down for more...
        </p>
      </div>
    </div>
  );
};

export default ScrollIndicator;