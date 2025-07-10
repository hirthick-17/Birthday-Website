import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import img5 from '../Assets/Image-Gallery/5-Imag.jpg'

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
                src={img5}
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
              
              <div className="text-center bg-gradient-to-r from-hotpink to-pink-500 text-white rounded-2xl p-8 my-8">
                <h3 className="font-poppins font-bold text-2xl mb-4">Today and Always</h3>
                <p className="text-lg leading-relaxed">
                  Na unkuda sandha potu irukan,,Kiruku thanama pesi irukan,,i am sometimes not being good,But na epome en Bhavana kuda oru future la nalla irukanum namma rendu perum namala nalla patukanum Yarum namala kora solla kudathu namma life la achieve panra success pathu namala yarume thappa pesatha Alavuku Namma Varanum..Sathiyama Soldran !  Enga Amma mela Sathiyama soldran Unna epome vitu poga maten...Ne ye poga sonalum etachi panni na convience pannuven,Vitra Maten Bhavana!I Love you,Seriously A Girl Like you Seriously deserve to be treated like queen and i will try to be my best version to be with you and make us Happier Forever Bhavana!Na etachi Thappu panna I am sorry di!Unkita na oru nal ego paka maten,jealousy pada maten,toxic masculinity la iruka maten,Unoda Future ku kandipa support pannuven athuku epome enala unoda carrier ku problem vara veika matan,Unna thita Maten,Poi solla maten,En mela thappu nu iruntha sorry kepan,Unna Judge panna maten epome,Unna yar kitayum vitu kuduka maten,Inimel thappa nadanthuka maten!I always think abou your safety,comfort and happyness.Thank you for being My Partner,My Girlfriend,My Best Friend,My Supporter,My Caretaker,My Teacher,My Motivator,My Stressbuster,My Comfortable Person and Will you be My WIFE?? Enala ipo avalo va konja mudiyala college la irukurom but future la kandipa na konjura konjura la ne daily blushing la tha thunguva!I will guarentee that!                </p>
              </div>

              {/* After Today and Always, remove everything except Forever Yours and Happy Birthday Beautiful Panjumuttai */}
              <div className="text-center">
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