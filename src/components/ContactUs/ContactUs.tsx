import { Container } from '@/components/Container/Container';
import { Form } from '@/components/Form/Form';
import { Social } from '@/components/Social/Social';

import {
  ContactCategory,
  ContactInfo,
  ContactItem,
  ContactList,
  ContactText,
  StyledContainer,
  StyledPhoneItem,
  StyledPhoneList,
  StyledSection,
  StyledSocial,
  StyledTitle,
} from './ContactUs.styled';

import Phone from '~/svg/call.svg';
import Mail from '~/svg/letter.svg';
import Map from '~/svg/map.svg';

export const ContactUs = () => {
  return (
    <StyledSection id='contact'>
      <Container>
        <StyledTitle>Contact Us</StyledTitle>
        <StyledContainer>
          <ContactList>
            <ContactInfo>
              <ContactCategory>Phone:</ContactCategory>
              <StyledPhoneList>
                <StyledPhoneItem>
                  <ContactItem href='tel:380981234567'>
                    <Phone width={24} height={24} />
                    <ContactText>38 (098) 12 34 567</ContactText>
                  </ContactItem>
                </StyledPhoneItem>
                <StyledPhoneItem>
                  <ContactItem href='tel:380931234567'>
                    <Phone width={24} height={24} />
                    <ContactText>38 (093) 12 34 567</ContactText>
                  </ContactItem>
                </StyledPhoneItem>
              </StyledPhoneList>
            </ContactInfo>
            <ContactInfo>
              <ContactCategory>E-mail:</ContactCategory>
              <ContactItem href='mailto:office@ecosolution.com'>
                <Mail width={24} height={24} />
                <ContactText>office@ecosolution.com</ContactText>
              </ContactItem>
            </ContactInfo>
            <ContactInfo>
              <ContactCategory>Address:</ContactCategory>
              <ContactItem
                href='https://maps.app.goo.gl/VetCRL1nfsCvXd8i7'
                target='_blank'
                rel='noopener nofollow noreferrer'
              >
                <Map width={24} height={24} />
                <ContactText>
                  79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                </ContactText>
              </ContactItem>
            </ContactInfo>
            <ContactInfo>
              <StyledSocial>Social Networks:</StyledSocial>
              <Social variant='wide' />
            </ContactInfo>
          </ContactList>
          <Form />
        </StyledContainer>
      </Container>
    </StyledSection>
  );
};
