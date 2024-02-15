import Link from 'next/link';
import styled from 'styled-components';

export const StyledLogo = styled.span`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors['light-green']};
`;

export const StyledLearnMore = styled(Link)`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125;
  letter-spacing: -0.64px;
  display: inline-flex;
  height: 39px;
  padding: 4px 4px 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 500px;
  width: 141px;
  align-self: center;
  background-color: ${(props) => props.theme.colors.transparent};
  border: 1px solid ${(props) => props.theme.colors['light-green']};
  color: ${(props) => props.theme.colors['dark-green']};
  transition: color 0.3s ease-in, background-color 0.3s ease-in;
  @media screen and (${(props) => props.theme.media.md}) {
    align-self: flex-start;
  }
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors['light-green']};
    background-color: ${(props) => props.theme.colors['dark-green']};
  }
`;
export const StyledGetInTouchLogo = styled(StyledLogo)`
  padding: 0;
  width: 14px;
  height: 14px;
  background-color: ${(props) => props.theme.colors['dark-green']};
`;

export const StyledGetInTouch = styled(StyledLearnMore)`
  display: none;
  padding: 10px 16px;
  width: 140px;
  background-color: ${(props) => props.theme.colors['light-green']};
  color: ${(props) => props.theme.colors['dark-green']};
  transition: color 0.3s ease-in, background-color 0.3s ease-in;
  @media screen and (${(props) => props.theme.media.md}) {
    display: inline-flex;
  }
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors['light-green']};
    background-color: ${(props) => props.theme.colors['dark-green']};
    & > ${StyledGetInTouchLogo} {
      background-color: ${(props) => props.theme.colors['light-green']};
    }
  }
`;

export const StyledBackToTopLogo = styled(StyledLogo)`
  display: inline-flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  transition: color 0.3s ease-in, background-color 0.3s ease-in;
  background-color: ${(props) => props.theme.colors['light-green']};
  color: ${(props) => props.theme.colors['dark-green']};
`;
export const StyledBackToTop = styled(Link)`
  position: absolute;

  right: 20px;

  @media screen and (${(props) => props.theme.media.mdToLg}) {
    right: 30px;
  }

  @media screen and (${(props) => props.theme.media.lg}) {
    right: 20px;
  }
  &:hover,
  &:focus {
    & > ${StyledBackToTopLogo} {
      background-color: ${(props) => props.theme.colors['dark-green']};
      color: ${(props) => props.theme.colors['light-green']};
    }
  }
`;
export const StyledLinkToOutLogo = styled(StyledBackToTopLogo)`
  transform: rotate(45deg);
  width: 60px;
  height: 60px;
`;

export const StyledLinkToOut = styled(StyledBackToTop)`
  &:hover,
  &:focus {
    & > ${StyledLinkToOutLogo} {
      background-color: ${(props) => props.theme.colors['dark-green']};
      color: ${(props) => props.theme.colors['light-green']};
    }
  }
`;

export const StyledContactUs = styled(StyledGetInTouch)`
  margin: 0 auto;
  display: flex;
  width: 134px;
`;
