import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import {
  MenuList,
  MenuWrapper,
  MobileMenu,
} from '@/components/BurgerMenu/BurgerMenu.styled';

export const BurgerMenu = () => {
  const [nav, setNav] = useState(false);
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setTextColor('#000000');
      } else {
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  const menuItems = [
    { id: 1, label: 'Main', href: '/#main' },
    { id: 2, label: 'About', href: '/#about' },
    { id: 3, label: 'Cases', href: '/#cases' },
    { id: 4, label: 'FAQ', href: '/#faq' },
    { id: 5, label: 'Contact Us', href: '/#contact' },
  ];

  return (
    <MenuWrapper>
      <MobileMenu style={{ left: nav ? '0' : '-100%' }}>
        <nav>
          {' '}
          <MenuList color={textColor}>
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
  );
};
