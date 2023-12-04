import { accordionData } from '@/__mocks__/data';
import { Accordion } from '@/components/Accordion/Accordion';
import { Container } from '@/components/Container/Container';
import {
  FaqSection,
  FaqStyledWrap,
  FaqTitle,
  StyledAnswer,
  StyledBottomWrap,
} from '@/components/Faq/Faq.styled';
import { ContactUs } from '@/components/links/links';

export const Faq = () => {
  return (
    <FaqSection id='#faq'>
      <Container>
        <FaqStyledWrap>
          <FaqTitle>Frequently Asked Questions</FaqTitle>
          <Accordion items={accordionData} />
          <StyledBottomWrap>
            <StyledAnswer>
              Didn't find the answer to your question?
            </StyledAnswer>
            <ContactUs />
          </StyledBottomWrap>
        </FaqStyledWrap>
      </Container>
    </FaqSection>
  );
};
