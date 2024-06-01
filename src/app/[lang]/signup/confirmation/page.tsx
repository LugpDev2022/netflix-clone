import { getDictionary } from '@/src/app/[lang]/dictionaries';
import { Locale } from '@/src/types';

interface Props {
  params: {
    lang: Locale;
  };
}

const ConfirmationPage: React.FC<Props> = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return (
    <main className='sign-up-main max-w-[550px]'>
      <span className='step-indicator'>
        {dict.signUp.step} <strong>3</strong> {dict.signUp.of}{' '}
        <strong>3</strong>
      </span>

      <h1 className='step-title'>Subscription confirmation</h1>

      <table>
        <tbody>
          <tr>
            <th>Email</th>
            <th>example@gmail.com</th>
          </tr>
          <tr>
            <th>Plan</th>
            <th>Premium</th>
          </tr>
          <tr>
            <th>Pricing</th>
            <th>MXN 299</th>
          </tr>
        </tbody>
      </table>

      <button>Next</button>
    </main>
  );
};

export default ConfirmationPage;
