import Image from 'next/image';

import { getDictionary } from '@/src/app/[lang]/dictionaries';
import { Locale } from '@/src/types';

interface Props {
  lang: Locale;
}

const FourthSection: React.FC<Props> = async ({ lang }) => {
  const dict = await getDictionary(lang);

  return (
    <section className='landing-section-container'>
      <div className='landing-section'>
        <div>
          <h2>{dict.landing.section4.title}</h2>
          <p>{dict.landing.section4.subtitle}</p>
        </div>

        <div className='landing-img-container'>
          <Image src='/kids.png' alt='Kids' width={530} height={400} />
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
