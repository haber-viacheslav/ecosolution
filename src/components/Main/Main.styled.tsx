import Image from 'next/image';
import styled from 'styled-components';

import {
  ContactItem,
  ContactList,
  StyledCopyRight,
} from '@/components/Footer/Footer.styled';
export const StyledMainSection = styled.section`
  margin-top: 112px;
  padding-top: 110px;
`;

export const StyledMainTitle = styled.h1`
  color: ${(props) => props.theme.colors['dark-green']};
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  width: 300px;
  padding-bottom: 24px;
  @media screen and (${(props) => props.theme.media.md}) {
    padding-bottom: 0;
    font-size: 48px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    width: 485px;
    font-size: 64px;
  }
`;

export const StyledMainDescription = styled.p`
  color: ${(props) => props.theme.colors['dark-green']};
  font-size: 16px;
  text-align: justify;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  width: 307px;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 342px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    width: 363px;
  }
`;

export const StyledMainWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (${(props) => props.theme.media.md}) {
    display: inline-flex;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
  }
`;

export const StyledTopWrap = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors['light-green']};
  padding-bottom: 24px;
  @media screen and (${(props) => props.theme.media.md}) {
    display: flex;
    align-items: center;
    gap: 65px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    gap: 296px;
  }
`;

export const MainContactList = styled(ContactList)`
  padding: 24px 0;
  gap: 8px;
  @media screen and (${(props) => props.theme.media.md}) {
    flex-direction: row;
    gap: 77px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    gap: 492px;
  }
`;

export const StyledAddress = styled.address`
  @media screen and (${(props) => props.theme.media.md}) {
    display: flex;
    align-items: center;
    gap: 50px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    flex-direction: row;
  }
`;

export const MainContactItem = styled(ContactItem)``;

export const MainStyledCopyRight = styled(StyledCopyRight)`
  display: none;
  @media screen and (${(props) => props.theme.media.md}) {
    display: block;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    margin-left: auto;
  }
`;

export const StyledBg = styled(Image)`
  width: 319px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 708px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    width: 1240px;
  }
`;
