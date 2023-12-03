import Link from 'next/link';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  padding: 24px 0;
  &::before {
    display: block;
    margin: 0 auto;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 320px;
    height: 1px;
    background-color: ${(props) => props.theme.colors['light-green']};
    @media screen and (${(props) => props.theme.media.mToMd}) {
      width: 440px;
    }
    @media screen and (${(props) => props.theme.media.mdToLg}) {
      width: 708px;
    }

    @media screen and (${(props) => props.theme.media.lg}) {
      width: 1240px;
    }
  }
`;
export const StyledFooterWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;
export const ContactList = styled.ul`
  display: flex;
  align-items: center;

  flex-direction: column;
  gap: 16px;
`;
export const ContactItem = styled(Link)`
  color: ${(props) => props.theme.colors['dark-green']};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;
