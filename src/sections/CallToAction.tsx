import ArrowRight from '@/assets/arrow-right.svg';
import starImage from '@/assets/star.png';
import springImage from '@/assets/spring.png';
import Image from 'next/image';
import BubbleText from '@/components/BubbleText1/BubbleText';

export const CallToAction = () => {
  return(
    <section className="bg-[#eae8e4] py-24 overflow-x-clip">
      <div className="container p-0">
      <div className="flex h-30 mt-5 items-center justify-center">
        <h2 className="section-title">Our Creative Solutions</h2>
      </div>
        <div className="section-heading relative">
        
        <h2 className="section-title">

          <BubbleText/>
        </h2>
        <p className="section-description mt-5 mx-5 text-black z-30">Whenever you are looking for professional headshots or event coverage, we offer services that align with your needs. Sign up today to discover the perfect package for you.</p>

<Image src={starImage} alt="star" width={360} className="absolute -left-[350px] -top-[137px] lg:-left-[300px]  lg:-top-[137px]" />
<Image src={springImage} alt="spring" width={360} className="absolute -right-[331px] -top-[19px] lg:-right-[251px] lg:-top-[19px]" />

        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text text-black"><span>Learn more</span>
          <ArrowRight className="h-5 w-5 gap-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
