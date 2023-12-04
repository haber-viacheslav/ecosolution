import styled from 'styled-components';

export const AccordionContainer = styled.ul`
  width: 320px;
  margin-bottom: 36px;

  @media screen and (${(props) => props.theme.media.md}) {
    width: 342px;
  }

  @media screen and (${(props) => props.theme.media.lg}) {
    width: 596px;
  }
`;

export const AccordionItem = styled.li`
  overflow: hidden;
`;

export const AccordionHeader = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
  text-align: left;
  padding: 16px 0;
  border: none;
  border-top: 1px solid ${(props) => props.theme.colors['light-green']};
  background-color: transparent;
  color: ${(props) => props.theme.colors['dark-green']};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  transition: all 0.3s ease;

  @media screen and (${(props) => props.theme.media.md}) {
    width: 298px;
    gap: 16px;
  }

  @media screen and (${(props) => props.theme.media.lg}) {
    width: 544px;
    font-size: 24px;
    gap: 24px;
  }
`;

export const AccordionContent = styled.div`
  color: ${(props) => props.theme.colors['dark-green']};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;
  padding: 0 0 10px 16px;
  display: none;
  transition: all 0.3s ease;

  @media screen and (${(props) => props.theme.media.md}) {
    padding-left: 24px;
    width: 298px;
  }

  @media screen and (${(props) => props.theme.media.lg}) {
    font-size: 16px;
    width: 544px;
    padding-left: 30px;
  }

  &[data-open='true'] {
    display: block;
  }
`;
