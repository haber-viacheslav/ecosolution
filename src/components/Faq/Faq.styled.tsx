import styled from 'styled-components';

export const FaqSection = styled.section`
  padding-top: 36px;
  @media screen and (${(props) => props.theme.media.md}) {
    padding-top: 100px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    padding-top: 120px;
  }
`;
export const StyledAnswer = styled.p`
  color: ${(props) => props.theme.colors['dark-green']};
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  margin-bottom: 12px;
`;
