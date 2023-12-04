import Image from 'next/image';
import { useEffect, useState } from 'react';

import { valuesMobileData, valuesTabletData } from '@/__mocks__/data';
import {
  AboutDescr,
  AboutDescription,
  AboutHeader,
  AboutHeaderTitle,
  AboutItem,
  AboutList,
  AboutSection,
  AboutTitle,
} from '@/components/About/About.styled';
interface Card {
  id: number;
  title: string;
  description: string;
  svg: string;
}
import { Container } from '@/components/Container/Container';
interface Card {
  id: number;
  title: string;
  description: string;
  svg: string;
}

export const About = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 767);
  const [valuesData] = useState<Card[]>(
    isMobile ? valuesMobileData : valuesTabletData
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <AboutSection id='about'>
      <Container>
        <AboutTitle>Main values of our company</AboutTitle>
        <AboutDescription>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </AboutDescription>
        <AboutList>
          {valuesData.map((value) => (
            <AboutItem key={value.id}>
              {value.title ? (
                <>
                  <AboutHeader>
                    <Image
                      alt={value.description}
                      src={value.svg}
                      quality={100}
                      width={16}
                      height={16}
                    />
                    <AboutHeaderTitle>{value.title}</AboutHeaderTitle>
                  </AboutHeader>
                  <AboutDescr>{value.description}</AboutDescr>
                </>
              ) : (
                <Image
                  alt={value.description}
                  src={value.svg}
                  quality={80}
                  sizes='100%'
                  fill
                />
              )}
            </AboutItem>
          ))}
        </AboutList>
      </Container>
    </AboutSection>
  );
};
