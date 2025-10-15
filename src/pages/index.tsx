import React from 'react';
import Head from 'next/head';
import { PropertyListScreen } from '@/modules/properties';
import { Header } from '@/shared/components/layout/Header';
import { Footer } from '@/shared/components/layout/Footer';
import styled from 'styled-components';

const MainContainer = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.lg} 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const PageTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const PageSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Million Luxury - Propiedades de Lujo</title>
        <meta name="description" content="Descubre las mejores propiedades de lujo en nuestra plataforma" />
        <meta name="keywords" content="propiedades, lujo, casas, apartamentos, venta, alquiler" />
        <meta property="og:title" content="Million Luxury - Propiedades de Lujo" />
        <meta property="og:description" content="Descubre las mejores propiedades de lujo" />
        <meta property="og:type" content="website" />
      </Head>

      <MainContainer>
        <Header />
        
        <Content>
          <Container>
            <PageTitle>Million Luxury</PageTitle>
            <PageSubtitle>
              Descubre las propiedades más exclusivas y lujosas del mercado
            </PageSubtitle>
            
            <PropertyListScreen />
          </Container>
        </Content>
        
        <Footer />
      </MainContainer>
    </>
  );
}
