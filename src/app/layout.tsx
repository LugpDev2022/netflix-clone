import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Locale } from '../types';

export const metadata: Metadata = {
  title: 'Netflix | LugpDev2022',
  description: 'A clone of netflix created by LugpDev2022',
};

const NetflixSans = localFont({
  src: [
    {
      path: './fonts/netflix-sans.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}) {
  return (
    <html lang={params.lang}>
      <body className={`w-screen h-screen text-white ${NetflixSans.className}`}>
        {children}
      </body>
    </html>
  );
}
