import React, { MouseEvent, useEffect, useState } from 'react';

import {
  MenuLink,
  MenuList,
  MenuWrapper,
  MobileMenu,
} from '@/components/BurgerMenu/BurgerMenu.styled';
import { CloseButton } from '@/components/buttons/buttons';
import { SocialBurger } from '@/components/Social/Social';

import ArrowDiagonal from '~/svg/arrow-right-top.svg';
interface MenuItem {
  id: number;
  label: string;
  href: string;
}

interface BurgerMenuProps {
  onClick: () => void;
  isShow: boolean;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClick, isShow }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    onClick();
  };

  useEffect(() => {
    const handleEscDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape' && isShow) {
        onClick();
      }
    };

    window.addEventListener('keydown', handleEscDown);

    return () => {
      window.removeEventListener('keydown', handleEscDown);
    };
  }, [onClick, isShow]);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  const menuItems: MenuItem[] = [
    { id: 1, label: 'Main', href: '/#main' },
    { id: 2, label: 'About', href: '/#about' },
    { id: 3, label: 'Cases', href: '/#cases' },
    { id: 4, label: 'FAQ', href: '/#faq' },
    { id: 5, label: 'Contact Us', href: '/#contact' },
  ];

  return isShow ? (
    <MenuWrapper onClick={handleBackdropClick}>
      <MobileMenu>
        <CloseButton onClick={onClick} />
        <nav>
          <MenuList>
            {menuItems.map((item) => (
              <li key={item.id}>
                <MenuLink href={item.href} onClick={handleNav}>
                  {item.label}
                  <ArrowDiagonal width={16} height={16} />
                </MenuLink>
              </li>
            ))}
          </MenuList>
        </nav>
        <SocialBurger />
      </MobileMenu>
    </MenuWrapper>
  ) : null;
};
