import {
  StyledBackToTop,
  StyledBackToTopLogo,
  StyledContactUs,
  StyledGetInTouch,
  StyledGetInTouchLogo,
  StyledLearnMore,
  StyledLinkToOut,
  StyledLinkToOutLogo,
  StyledLogo,
} from '@/components/links/links.styled';

import ArrowDown from '~/svg/arrow-dawn.svg';
import ArrowRight from '~/svg/arrow-right.svg';
import ArrowTop from '~/svg/arrow-top.svg';
export const LearnMore = () => {
  return (
    <StyledLearnMore href='/#cases'>
      Learn More
      <StyledLogo>
        <ArrowRight width='16' height='16' />
      </StyledLogo>
    </StyledLearnMore>
  );
};

export const GetInTouch = () => {
  return (
    <StyledGetInTouch href='/#contact'>
      Get in touch
      <StyledGetInTouchLogo>
        <ArrowDown width='14' height='14' />
      </StyledGetInTouchLogo>
    </StyledGetInTouch>
  );
};

export const BackToTop = () => {
  return (
    <StyledBackToTop href='/#main'>
      <StyledBackToTopLogo>
        <ArrowTop width='16' height='16' />
      </StyledBackToTopLogo>
    </StyledBackToTop>
  );
};

export const LinkToOut = () => {
  return (
    <StyledLinkToOut href='#'>
      <StyledLinkToOutLogo>
        <ArrowTop width='28' height='28' />
      </StyledLinkToOutLogo>
    </StyledLinkToOut>
  );
};

export const ContactUs = () => {
  return (
    <StyledContactUs href='/#form'>
      Contact Us
      <StyledGetInTouchLogo>
        <ArrowDown width='14' height='14' />
      </StyledGetInTouchLogo>
    </StyledContactUs>
  );
};
