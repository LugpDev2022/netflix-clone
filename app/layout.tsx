import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

export const metadata: Metadata = {
  title: 'Netflix | LugpDev2022',
  description: 'A clone of netflix created to practice my programming skills',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`w-screen h-screen text-white ${NetflixSans.className}`}>
        {children}
      </body>
    </html>
  );
}
