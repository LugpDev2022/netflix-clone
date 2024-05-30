import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Locale } from '../types';
import './globals.css';

export const metadata: Metadata = {
  title: 'Netflix | LugpDev2022',
  description: 'A clone of netflix created by LugpDev2022',
};

const inter = Inter({
  subsets: ['latin'],
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
      <body className={`text-white ${inter.className}`}>{children}</body>
    </html>
  );
}
