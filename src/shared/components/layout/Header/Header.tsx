import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Nav,
  NavLink,
  HeaderActions,
} from './Header.styled';

const ThemeToggle = dynamic(() => import('@/shared/components/ui/ThemeToggle').then(mod => ({ default: mod.ThemeToggle })), {
  ssr: false,
});

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo as={Link} href="/">
          Million Luxury
        </Logo>
        
        <Nav>
            <NavLink as={Link} href="/">Inicio</NavLink>
            <HeaderActions>
                <ThemeToggle />
            </HeaderActions>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};


