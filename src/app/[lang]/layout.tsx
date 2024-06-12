import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Locale } from '@/src/types';
import '@/src/app/globals.css';
import AuthProvider from '../auth/AuthProvider';
import { Toaster } from 'sonner';

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
      <body className={`${inter.className}`}>
        <AuthProvider>
          {children}
          <Toaster
            toastOptions={{
              classNames: { error: 'bg-red-600 text-white' },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
