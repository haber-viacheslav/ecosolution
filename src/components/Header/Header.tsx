import { JSX, useEffect, useState } from 'react';

// import { BurgerMenu } from '@/components/BurgerMenu/BurgerMenu';
import { MenuButton } from '@/components/buttons/buttons';
import { Container } from '@/components/Container/Container';
import {
  StyledHeader,
  StyledHeaderWrapper,
} from '@/components/Header/Header.styled';
import { GetInTouch } from '@/components/links/links';
import { Logo } from '@/components/Logo/Logo';
export const Header = (): JSX.Element => {
  const [color, setColor] = useState('#F3F5FA;');
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 112) {
        setColor('#ffffff');
      } else {
        setColor('#F3F5FA;');
      }
    };
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);
  return (
    <StyledHeader color={color}>
      <Container>
        <StyledHeaderWrapper>
          <Logo />
          <MenuButton />
          <GetInTouch />
        </StyledHeaderWrapper>
      </Container>
    </StyledHeader>
  );
};
