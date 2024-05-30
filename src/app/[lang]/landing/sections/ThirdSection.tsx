import { getDictionary } from '@/src/app/[lang]/dictionaries';
import { Locale } from '@/src/types';
import Image from 'next/image';

interface Props {
  lang: Locale;
}

const ThirdSection: React.FC<Props> = ({ lang }) => {
  return (
    <section className='landing-section-container'>
      <div className='landing-section'>
        <div className='lg:order-1'>
          <h2>Watch everywhere</h2>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>

        <div className='landing-img-container'>
          <Image src='/device-pile.png' alt='TV' width={530} height={400} />
          <video
            src='/video-devices.m4v'
            className='top-[7%] w-[62%] left-1/2 -translate-x-1/2'
            loop
            autoPlay
            playsInline
            muted
          ></video>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
