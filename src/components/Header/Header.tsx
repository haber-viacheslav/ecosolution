import { JSX, useEffect, useState } from 'react';

import { BurgerMenu } from '@/components/BurgerMenu/BurgerMenu';
import { MenuButton } from '@/components/buttons/buttons';
import { Container } from '@/components/Container/Container';
import {
  StyledHeader,
  StyledHeaderWrapper,
} from '@/components/Header/Header.styled';
import { GetInTouch } from '@/components/links/links';
import { Logo } from '@/components/Logo/Logo';
export const Header = (): JSX.Element => {
  const [isShow, setIsShow] = useState(false);
  const [color, setColor] = useState('#F3F5FA;');

  const onClose = () => {
    return setIsShow(!isShow);
  };
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
          <MenuButton onClick={onClose} />
          <GetInTouch />
        </StyledHeaderWrapper>
        {/* <BurgerMenu onClick={onClose} isOpen={isOpen} /> */}
      </Container>
    </StyledHeader>
  );
};
