import PopularSlider from '@/src/app/[lang]/(protected)/(browse)/components/PopularSlider';
import { getSliderData } from '@/src/app/[lang]/(protected)/(browse)/lib/getSliderData';
import { Locale } from '@/src/types';

interface Props {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}

const SeriesLayout: React.FC<Props> = async ({
  children,
  params: { lang },
}) => {
  const [err, sliderData] = await getSliderData('tv', lang);

  if (err || !sliderData) throw err;

  return (
    <>
      <PopularSlider lang={lang} data={sliderData} />
      <main className='mt-6 pb-5'>{children}</main>
    </>
  );
};

export default SeriesLayout;
