import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterLink,
  FooterText,
  Copyright,
} from './Footer.styled';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Million Luxury</FooterTitle>
          <FooterText>
            Tu destino para encontrar las propiedades más exclusivas y lujosas del mercado.
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Enlaces Rápidos</FooterTitle>
          <FooterLink href="/">Propiedades</FooterLink>
          <FooterLink href="/">Acerca de</FooterLink>
          <FooterLink href="/">Contacto</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contacto</FooterTitle>
          <FooterText><FaPhone /> +1 (555) 123-4567</FooterText>
          <FooterText><FaEnvelope /> info@millionluxury.com</FooterText>
          <FooterText><FaMapMarkerAlt /> Madrid, España</FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Newsletter</FooterTitle>
          <FooterText>Suscríbete para recibir las últimas noticias y ofertas de propiedades</FooterText>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>&copy; 2025 Million Luxury Yk Dev. Todos los derechos reservados.</p>
      </Copyright>
    </FooterContainer>
  );
};


