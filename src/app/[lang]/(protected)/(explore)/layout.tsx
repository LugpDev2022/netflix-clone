import { Locale } from '@/src/types';
import Spectacular from './components/Spectacular';
import './explore.css';
import { getSliderData } from './lib/getSliderData';

interface Props {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}

const ExploreLayout: React.FC<Props> = async ({
  children,
  params: { lang },
}) => {
  const [err, sliderData] = await getSliderData('mixed', lang);
  console.log(sliderData);

  return (
    <>
      <Spectacular />
      <main className='px-4 md:px-10'>{children}</main>
    </>
  );
};

export default ExploreLayout;
