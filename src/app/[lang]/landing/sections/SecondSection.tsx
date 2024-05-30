import Image from 'next/image';

import { getDictionary } from '@/src/app/[lang]/dictionaries';
import { Locale } from '@/src/types';

interface Props {
  lang: Locale;
}

const SecondSection: React.FC<Props> = async ({ lang }) => {
  const dict = await getDictionary(lang);

  return (
    <section className='landing-section-container'>
      <div className='landing-section'>
        <div>
          <h2>{dict.landing.section2.title}</h2>
          <p>{dict.landing.section2.subtitle}</p>
        </div>

        <div className='landing-img-container'>
          <Image src='/tv.png' alt='TV' width={530} height={400} />
          <video
            src='/video-tv.m4v'
            className='top-[20%] w-3/4 left-1/2 -translate-x-1/2'
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

export default SecondSection;
