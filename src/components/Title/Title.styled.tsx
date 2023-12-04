import styled from 'styled-components';

export const StyledTitle = styled.h2`
  color: ${(props) => props.theme.colors['dark-green']};
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 24px;
  @media screen and (${(props) => props.theme.media.md}) {
    font-size: 36px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    font-size: 48px;
  }
`;
