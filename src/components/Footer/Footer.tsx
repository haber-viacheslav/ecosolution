import { JSX } from 'react';

import { FooterContainer } from '@/components/Container/Container';
import {
  ContactItem,
  ContactList,
  StyledFooter,
  StyledFooterWrapper,
} from '@/components/Footer/Footer.styled';
import { BackToTop } from '@/components/links/links';
import { Logo } from '@/components/Logo/Logo';
import { Social } from '@/components/Social/Social';

export const Footer = (): JSX.Element => {
  const date = new Date();
  const year = date.getFullYear();
  const copyrightSymbol = '\u00A9';
  return (
    <StyledFooter>
      <FooterContainer>
        <BackToTop />
        <Logo />
        <Social variant='narrow' />
        <StyledFooterWrapper>
          <address>
            <ContactList>
              <li>
                {' '}
                <ContactItem
                  href='https://maps.app.goo.gl/VetCRL1nfsCvXd8i7'
                  target='_blank'
                  rel='noopener nofollow noreferrer'
                >
                  79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                </ContactItem>
              </li>
              <li>
                {' '}
                <ContactItem href='mailto:office@ecosolution.com'>
                  office@ecosolution.com
                </ContactItem>
              </li>
            </ContactList>
          </address>
          <p>
            ecosolution {copyrightSymbol} {year}
          </p>
        </StyledFooterWrapper>
      </FooterContainer>
    </StyledFooter>
  );
};
