import Link from 'next/link';
import styled from 'styled-components';

import { StyledCardShield } from '@/components/CardShield/CardShield.styled';
export const StyledCardLink = styled(Link)`
  &:hover,
  &:focus {
    & ${StyledCardShield} {
      color: ${(props) => props.theme.colors['light-green']};
      background-color: ${(props) => props.theme.colors['dark-green']};
      cursor: pointer;
    }
    &:where(svg) {
      stroke: currentColor;
    }
  }
`;
export const StyledImage = styled.div`
  height: 100%;
  width: 320px;
`;

export const StyledContentContainer = styled.div`
  padding: 14px 12px 12px 12px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors['slate-200']};
  @media screen and (${(props) => props.theme.media.md}) {
    padding-top: 24px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    padding: 36px 48px;
  }
`;
export const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 21px;
  @media screen and (${(props) => props.theme.media.md}) {
    margin-bottom: 16px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    margin-bottom: 36px;
  }
`;

export const StyledCardTitle = styled.h3`
  color: ${(props) => props.theme.colors['dark-green']};
  font-family: 'Fira Sans', sans-serif;
  text-align: justify;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  max-width: 175px;
  @media screen and (${(props) => props.theme.media.md}) {
    font-size: 20px;
    max-width: 194px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    font-size: 24px;
    max-width: 357px;
  }
`;

export const StyledCardFooter = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  &::before {
    display: block;
    margin: 0 auto;
    position: absolute;
    top: -12px;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors['light-green']};
  }
`;
export const StyledCardDescription = styled.p`
  color: ${(props) => props.theme.colors['dark-green']};
  text-align: justify;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  @media screen and (${(props) => props.theme.media.md}) {
    font-size: 14px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    font-size: 16px;
  }
`;
