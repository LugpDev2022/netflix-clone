import { redirect } from 'next/navigation';
import { Locale } from '@/src/types';

interface Props {
  children: React.ReactNode;
  params: {
    type: string;
    lang: Locale;
  };
}

const DetailsLayout: React.FC<Props> = ({
  children,
  params: { type, lang },
}) => {
  if (type !== 'tv' && type !== 'movie') return redirect(`/${lang}`);

  return <>{children}</>;
};

export default DetailsLayout;
