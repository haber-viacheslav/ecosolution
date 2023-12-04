import Link from 'next/link';
import styled from 'styled-components';

export const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden auto;
  z-index: 15;
  background-color: ${(props) => props.theme.colors['backdrop-bg']};
`;

export const MobileMenu = styled.div`
  position: absolute;
  width: 320px;
  top: 36px;
  right: 20px;
  max-width: 460px;
  height: 700px;
  border-radius: 25px;
  padding: 24px;
  padding-top: 65px;
  backdrop-filter: blur(12.5px);
  background-color: ${(props) => props.theme.colors['burger-bg']};
  z-index: 20;
  @media screen and (${(props) => props.theme.media.lg}) {
    width: 365px;
    height: 873px;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  color: rgba(255, 255, 255, 0.25);
  & > a {
    cursor: pointer;
  }
`;

export const MenuLink = styled(Link)`
  color: rgba(255, 255, 255, 0.25);
  font-family: 'Fira Sans', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.96px;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors['light-green']};
    cursor: pointer;
  }
  &:active {
    color: ${(props) => props.theme.colors.white};
  }
`;
