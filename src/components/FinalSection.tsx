import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface FinalSectionProps {
  isVisible: boolean;
}

const FinalSection: React.FC<FinalSectionProps> = ({ isVisible }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-softpink via-lightpink to-pink-100 py-16 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`transition-all duration-1000 ease-in-out ${showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          
          {/* Main Image */}
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <img
                src="https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Beautiful moment together"
                className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-8 border-white transform hover:scale-105 transition-all duration-500"
              />
              <div className="absolute -top-4 -right-4 bg-hotpink rounded-full p-3 shadow-lg animate-pulse">
                <Heart className="text-white" size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                <Sparkles className="text-hotpink" size={24} />
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="bg-white bg-opacity-95 rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-hotpink mb-4">
                My Promise to You
              </h2>
              <div className="w-24 h-1 bg-hotpink mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6 text-gray-700 font-body leading-relaxed">
              <p className="text-lg md:text-xl text-center">
                As we celebrate another year of your beautiful existence, I want you to know that my love for you grows stronger with each passing day. This website is just a small token of the infinite love I carry in my heart for you.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-pink-50 rounded-2xl p-6">
                  <h3 className="font-poppins font-semibold text-hotpink text-xl mb-3">My Commitment</h3>
                  <p className="text-gray-600">
                    I promise to love you unconditionally, support your dreams, celebrate your victories, and stand by you through every challenge. You are my forever person, and I choose you every single day.
                  </p>
                </div>
                
                <div className="bg-pink-50 rounded-2xl p-6">
                  <h3 className="font-poppins font-semibold text-hotpink text-xl mb-3">Our Future</h3>
                  <p className="text-gray-600">
                    Together, we'll create countless more memories, explore new adventures, and build a life filled with laughter, love, and endless possibilities. The best is yet to come, my darling.
                  </p>
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-hotpink to-pink-500 text-white rounded-2xl p-8 my-8">
                <h3 className="font-poppins font-bold text-2xl mb-4">Today and Always</h3>
                <p className="text-lg leading-relaxed">
                  On this special day, I celebrate not just your birthday, but the incredible person you are. Your kindness, your strength, your beautiful soul - everything about you makes my world brighter. You deserve all the happiness, love, and joy that life has to offer.
                </p>
              </div>

              <div className="text-center">
                <p className="text-xl font-handwriting text-hotpink mb-4">
                  "In a sea of people, my eyes will always search for you."
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Thank you for being my anchor, my inspiration, and my greatest blessing. Here's to celebrating you today and loving you for all the tomorrows to come.
                </p>
                
                <div className="flex items-center justify-center space-x-2 text-hotpink">
                  <Heart size={20} />
                  <span className="font-poppins font-semibold text-lg">Forever Yours</span>
                  <Heart size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="text-center mt-12">
            <div className="flex justify-center space-x-4 mb-6">
              {[...Array(5)].map((_, i) => (
                <Heart 
                  key={i} 
                  className="text-hotpink animate-pulse" 
                  size={16}
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <p className="font-handwriting text-2xl text-hotpink">
              Happy Birthday, My Beautiful Panjumuttai! 🎉✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalSection;