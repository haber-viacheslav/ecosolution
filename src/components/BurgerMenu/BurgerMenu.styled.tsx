import styled from 'styled-components';

export const MenuWrapper = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 320px;
  height: 701px;
  border-radius: 25px;
  backdrop-filter: blur(12.5px);
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors['burger-bg']};
  text-align: center;
  transition: left 0.3s ease-in;
  z-index: 20;
`;

export const MenuList = styled.ul`
  color: ${(props) => props.color};
  display: none;
  @media (min-width: 640px) {
    display: flex;
  }
  a {
    cursor: pointer;
  }
`;
