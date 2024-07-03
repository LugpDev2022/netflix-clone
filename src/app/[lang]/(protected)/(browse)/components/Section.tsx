import Carousel from '@/src/app/[lang]/(protected)/(browse)/components/Carousel';
import { Locale, TMDBData } from '@/src/types';

interface Props {
  fetchDataFn: (lang: Locale) => Promise<[Error?, TMDBData[]?]>;
  lang: Locale;
  title: string;
}

const Section: React.FC<Props> = async ({ fetchDataFn, lang, title }) => {
  const [err, data] = await fetchDataFn(lang);

  if (err || !data) {
    return <></>;
  }

  return (
    <>
      <h2 className='category-subtitle px-4 md:px-10'>{title}</h2>
      <Carousel data={data} lang={lang} />
    </>
  );
};

export default Section;
