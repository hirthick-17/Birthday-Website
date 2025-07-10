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

  const defaultContent = `Oyee Bujjikanna ! Hello!Enaku en nu therla mind la epome unna pathi neriya yosichitu irupan ana ethume ipo vara matikitu!
  Nalla Vazha Vazha nu unkita pesuvan,Ana Ipo ethume Vara matikitu!Seri Paravala Irukattum Na start pandran,Konjam apdi ipdi irukum adjust panniko!
  Bhavana na oru tharkuri di!Aakash la unna first time backup class la patha apo enaku ethume theriyala antha time la na ethuku Aakash poran ne theriyama tha
  Vanthan but en nu therla unkita notes kekanum nu pesa start pannen,Ana en nu therla athuku aprm konjam nal Aakash la na class gavanchitu irupan apo thideernu unna papen
  Neriya vathi en ne theriyama class la unna patute irunthan!Like enaku onnume puriyala,Ne class ku varathu porathu la Note pannuven,Ne metro la guddu guduu nu poiduva 
  class mudinja odane madam sight adichite irunthan ana etho manasula thairiyam vara vechitu nanum etho intro la panni comedy a pesunen unkita Weekly namma total ah 10 to 15 minutes 
  than pesave time kedaikum ana athu epo varum nu wait panni irukan,Aakash la sometimes unaku munadi overtake pannitu Metro kita wait panni irukan
  apdi ipdi nu etho kiruku thanam la pannitu irunthan!Unkita etachi pesanum enna pesurathu ne theriyathu analum etho pesunen comedy,Apo enaku feelings irunthuchi
  ana na ethum katikala apo Namma thaniya pesuna aniki kuda enaku feelings irunthuchi but aniki right situation mari enaku therla love panran nu solala
  Nanu!Na oru mental apo solli irukanum!Ana class a discontinue panna odane enaku enna panrathu ne therla unna contact panna enkita entha source um illa,Apdiye
  pochi na etho life la intrest ey ilama en velaya pathutu tharkuri mari suthitu irunthan.Untill July 31,Na college vantha odane oru mari disappointed a tha irunthan college onnum avalo pudikala,
  Ana Na kanavula kuda nenaikala Bhavana Unna document submission apo papen!Iniki nenacha kuda antha moment oru mari sirupu relief cute ah blushing a iruku di
  Antha meetup a enala ipo varaikum epdi da nu mari tha iruku!But i never expected that we meet again and we talk again!Ithelam enaku therila
  Bhavana en enaku nadanthuchi nu But from the moment na enoda life la ivalo santhosama irunthate illa!Serious a soldran dii!Aniki nadantha oru
  Vishayam en life la ivalo periya miracle a nu enaku iniku varaikum therla!Unna pakurathukagave 509 la saptu irupan,Unaku theriyama sight adichi irukan
  Aakash a vida intha time unna bayangarama unconditional love panna start panten!I Love you so muchh dii!,Na unkita avalo va
  Pesunathu kuda illa ana ne enna un friends gang la add panna,Enoda Bag la thukitu vantha,ithelam ne en panna nu therla enaku apdiye thonuchi
  Unna en pudichitu nu therla  unna epo pakanum nu irukum,Patha enna ne thirumbi epo papa nu irukum,Epo chat pannuva nu thonun,na pesuna eppo reply pannuva nu thonum,
  Dress la daily patu patu potutu varuven!Nalla shirt pota unna epdiyachi aniki meet panniranum nu nenaipan,Unkita ipdi pesanum apdi pesanum nu nenaipan,
  Nerla unna patha odane athu ethume pesa maten,Geerthan and Dinesh kita unna pathi pesite irupan!Unkita oru 10 minutes atha nenachite irupan Avanunga kita
  Atha sollite irupan!Ethoo Ethoo pannen di Athan decide panniten Propose pannidalam nu ana athu epdi panrathu nu therla comedy a vanthen un munnadi vanthu
  Loosu mari sonnen!Ne ulunthu ulunthu siricha, puttukicho nu nenachan ana ne mature a aniki deal panna enna pudikum nu sonna athoda santhosathula irunthu
  Veliya varathuke romba nal achi!Ana ne crct a unoda feature plan-goal nu elame sonnen enakum shock a irunthuchi yaru da iva life long onna irukanum nu
  Nenaikurale intha ponnu ivalam enga vechitu irunthinga ivalo nal intha mari ponnungalam innum irukangala intha Boomi la nu thonuchi enaku!Comedy a aniki day
  Mudinjithu aprm enna phone edutha pesite irupom veikave matom sirichi sirichi pesite irupom!Topic thedi thedi pesuvom!First first madam ku namma rendu perum Chemistry
  Exam ku padikira apo enaku therla ipdi oru chemistry Develop aga pogutha nu!Enaku innum nyabagam iruku Bhavana Ne enkita aniki sonna I love you!
  Na apdiye terrace ku oditen Enoda life la Happiest moment la irunthate illa di unkuda irukura apo than enoda life la athelam varave start achi.
  Ana unmela solanum na commit anathuku aprm than di Enaku unmela love romba romba romba ipo varaikumm soldran enaku unmela love increase aite poguthu Bhavana
  I don't know!Na evalo tha loosa iruntalum ne enna oru nal kuda vitu ponathu illa Bhavana!Na evalo thappu pannalum ne accept panni oru chinna kolandha
  kita soldra mari enaku solli kuduthu I am loving myself because of your love!unna mari oru ponnu la yarukum kedaikave matanga di!Ivalo nalla 
  Ponna iruntha avalo than!Uyir Ungalathu Devi!!Commit anom athuku aprm neriya pesunom pesite irunthom!Poga Poga enaku unoda cuteness romba pudichi pochi
  Un Voice ey!Un Smile uh!Unoda Kanna la irunthu apdiye eyebrows a thuki katuva athukula Na flat uhhh di!Unaku cheeks la oru macham irukum atha
  Nan Zoom panni Zoom Panni patutu irupan!Na onnu kekuran enna en di ivalo love panra ne?Every day,Every moment unkuda irunthale na happy a irukan!
  Ne en life la vanthu en life a special a akita di athelam iniki nenachalum anatha kaneer tha varuthu!Chinna chinna vishyam solli kuduthu
  Enkuda life long irukanum Matavanga mari summa irukurom nu ilama ne starting la irunthe crct a iruntha,Intha mari la oru ponnu irukanga nu 
  Intha world ke ne than Bhavana Example!I love you so muchh diii,My Thangoo Bujiii,Ammu,Pattukuttyyyyy,SweetHeart,Bhangarama,Diamond,
  Angel,My Panjumuttai!Nenu Ninu Epudikki Premistunanu RAAAAA`;

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
            Sharing My Feelings
          </h2>
          
          <div
            className="editable-content w-full h-full font-body text-gray-700 leading-relaxed"
            contentEditable="true"
            suppressContentEditableWarning={true}
            style={{ minHeight: '300px' }}
          >
            {defaultContent}
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