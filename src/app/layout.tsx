import { Metadata } from 'next';
import { ReactNode } from 'react';

import '@/styles/globals.css';

import { fira } from '@/lib/fonts';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={`${fira.variable} font-fira`}>
      <body>{children}</body>
    </html>
  );
}
