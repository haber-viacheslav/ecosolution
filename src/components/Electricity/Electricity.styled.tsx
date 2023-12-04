import styled from 'styled-components';

import { StyledTitle } from '@/components/Title/Title.styled';

export const StyledSection = styled.section`
  padding-top: 36px;
  @media screen and (${(props) => props.theme.media.md}) {
    padding-top: 100px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    padding-top: 120px;
  }
`;

export const StyledElectricityTitle = styled(StyledTitle)`
  position: relative;
  margin: 0 auto;
  width: 332px;
  text-align: center;
  margin-bottom: 96px;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 370px;
    margin-bottom: 135px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    width: 491px;
    margin-bottom: 120px;
  }
  &::after {
    display: block;
    margin: 0 auto;
    position: absolute;
    margin-bottom: 96px;
    top: 79px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 1px;
    height: 48px;
    background-color: ${(props) => props.theme.colors['light-green']};

    @media screen and (${(props) => props.theme.media.md}) {
      height: 87px;
      top: 100px;
    }

    @media screen and (${(props) => props.theme.media.lg}) {
      top: 120px;
    }
  }
`;

export const Enumerator = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (${(props) => props.theme.media.md}) {
    gap: 24px;
  }
`;
export const EnumeratorValue = styled.p`
  font-family: 'Oswald', sans-serif;
  color: ${(props) => props.theme.colors['light-green']};
  text-align: center;
  width: 264px;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 560px;
    font-size: 100px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    width: 890px;
    font-size: 164px;
  }
`;
export const EnumeratorUnits = styled.span`
  font-family: 'Oswald', sans-serif;
  color: ${(props) => props.theme.colors['dark-green']};
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  @media screen and (${(props) => props.theme.media.md}) {
    font-size: 28px;
    line-height: 1.71;
  }

  @media screen and (${(props) => props.theme.media.lg}) {
    font-size: 48px;
    line-height: 1;
  }
`;
