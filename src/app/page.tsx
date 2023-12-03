'use client';

import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/lib/theme';

import { About } from '@/components/About/About';
import { Cases } from '@/components/Cases/Cases';
import { ContactUs } from '@/components/ContactUs/ContactUs';
import { Electricity } from '@/components/Electricity/Electricity';
import { Faq } from '@/components/Faq/Faq';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Main } from '@/components/Main/Main';

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <main>
        <Main />
        <About />
        <Electricity />
        <Cases />
        <Faq />
        <ContactUs />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
