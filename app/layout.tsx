import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Clonfix | LugpDev2022',
  description: 'A clone of netflix created to practice my programming skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
