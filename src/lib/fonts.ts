import { Fira_Sans, Oswald } from 'next/font/google';

export const oswald = Oswald({
  subsets: ['latin'],
  style: 'normal',
  weight: ['400', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

export const fira = Fira_Sans({
  subsets: ['latin'],
  style: 'normal',
  weight: ['300', '400'],
  variable: '--font-fira-sans',
  display: 'swap',
});
