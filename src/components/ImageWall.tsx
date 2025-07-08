import React, { useState, useEffect } from 'react';

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
      src: 'https://placehold.co/300x300/fce7f3/FF69B4?text=Our+First+Date',
      title: 'Our First Date',
      description: 'The moment that started it all ✨'
    },
    {
      src: 'https://placehold.co/300x300/fce7f3/FF69B4?text=Adventures+Together',
      title: 'Adventures Together',
      description: 'Every journey with you is magical 🌟'
    },
    {
      src: 'https://placehold.co/300x300/fce7f3/FF69B4?text=Cozy+Moments',
      title: 'Cozy Moments',
      description: 'Home is wherever you are 🏡'
    },
    {
      src: 'https://placehold.co/300x300/fce7f3/FF69B4?text=Celebrating+Us',
      title: 'Celebrating Us',
      description: 'Every day with you is a celebration 🎉'
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