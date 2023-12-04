import Link from 'next/link';
import React, { MouseEvent, useEffect, useState } from 'react';

import {
  MenuList,
  MenuWrapper,
  MobileMenu,
} from '@/components/BurgerMenu/BurgerMenu.styled';

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
  };

  useEffect(() => {
    const handleEscDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClick();
      }
    };

    window.addEventListener('keydown', handleEscDown);

    return () => {
      window.removeEventListener('keydown', handleEscDown);
    };
  }, [onClick]);

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
      <MobileMenu
        style={{ left: nav ? '0' : '-100%' }}
        onClick={handleBackdropClick}
      >
        <nav>
          <MenuList>
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link href={item.href} onClick={handleNav}>
                  {item.label}
                </Link>
              </li>
            ))}
          </MenuList>
        </nav>
      </MobileMenu>
    </MenuWrapper>
  ) : null;
};
