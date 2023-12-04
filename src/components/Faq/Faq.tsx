import { accordionData } from '@/__mocks__/data';
import { Accordion } from '@/components/Accordion/Accordion';
import { Container } from '@/components/Container/Container';
import { FaqSection, StyledAnswer } from '@/components/Faq/Faq.styled';
import { ContactUs } from '@/components/links/links';
import { Title } from '@/components/Title/Title';
export const Faq = () => {
  return (
    <FaqSection id='#faq'>
      <Container>
        <Title>Frequently Asked Questions</Title>
        <Accordion items={accordionData} />
        <StyledAnswer>Didn't find the answer to your question?</StyledAnswer>
        <ContactUs />
      </Container>
    </FaqSection>
  );
};
