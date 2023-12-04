import { JSX } from 'react';

import { FooterContainer } from '@/components/Container/Container';
import {
  ContactItem,
  ContactList,
  StyledCopyRight,
  StyledFooter,
  StyledFooterWrapper,
  StyledWrapper,
} from '@/components/Footer/Footer.styled';
import { BackToTop } from '@/components/links/links';
import { Logo } from '@/components/Logo/Logo';
import { SocialNarrow } from '@/components/Social/Social';
import { copyrightSymbol } from '@/constant/constant';
import { year } from '@/helpers/getYear';
export const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <FooterContainer>
        <BackToTop />
        <StyledWrapper>
          <Logo />
          <SocialNarrow />
        </StyledWrapper>

        <StyledFooterWrapper>
          <address>
            <ContactList>
              <li>
                <ContactItem
                  href='https://maps.app.goo.gl/VetCRL1nfsCvXd8i7'
                  target='_blank'
                  rel='noopener nofollow noreferrer'
                >
                  79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                </ContactItem>
              </li>
              <li>
                <ContactItem href='mailto:office@ecosolution.com'>
                  office@ecosolution.com
                </ContactItem>
              </li>
            </ContactList>
          </address>
          <StyledCopyRight>
            ecosolution {copyrightSymbol} {year}
          </StyledCopyRight>
        </StyledFooterWrapper>
      </FooterContainer>
    </StyledFooter>
  );
};
