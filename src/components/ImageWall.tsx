import React, { useState, useEffect } from 'react';

import img1 from '../Assets/Image-Gallery/WhatsApp Image 2025-07-08 at 21.28.31_936c1eb7.jpg';
import img2 from '../Assets/Image-Gallery/WhatsApp Image 2025-07-08 at 21.28.32_005668a5.jpg';
import img3 from '../Assets/Image-Gallery/WhatsApp Image 2025-07-08 at 21.28.32_ad257de8.jpg';
import img4 from '../Assets/Image-Gallery/WhatsApp Image 2025-07-10 at 13.06.18_29acb5db.jpg';

interface ImageWallProps {
  isVisible: boolean;
}

const ImageWall: React.FC<ImageWallProps> = ({ isVisible }) => {
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowImages(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const images = [
    {
      src: img1,
      title: 'Our Second Date',
      description: 'Marina Mall Date live la marakave mudiyatha romba special ana moment'
    },
    {
      src: img2,
      title: 'Pongal apo Duet uhhh',
      description: 'Namma rendu perum intha mari photoshoot pannuvom nu kanavula kuda expect pannala'
    },
    {
      src: img3,
      title: 'Panjumuttaiyum Paradesiyum',
      description: 'Rendu Perum intha mari enaku ne unaku na nu epome irukanum dii'
    },
    {
      src: img4,
      title: 'Lifting the Statue of Cuteness',
      description: 'Serious a soldran antha photo la irukura mari unoda siripa na lifelong pakanum Bhavana'
    }
  ];

  return (
    <div className={`transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 mb-12">
        {images.map((image, index) => (
          <div
            key={index}
            className={`group transition-all duration-1000 ease-in-out ${
              showImages 
                ? 'opacity-100 transform scale-100' 
                : 'opacity-0 transform scale-95'
            }`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:rotate-2 hover:shadow-xl">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-handwriting text-hotpink text-lg font-semibold mb-1">
                  {image.title}
                </h3>
                <p className="text-gray-600 text-sm font-body">
                  {image.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageWall;