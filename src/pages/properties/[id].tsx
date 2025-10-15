import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Header, Footer } from '@/shared/components/layout';
import { PropertyDetailScreen } from '@/modules/properties/screens';
import styled from 'styled-components';

const MainContainer = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== 'string') {
    return (
      <>
        <Head>
          <title>Propiedad no encontrada - Million Luxury</title>
          <meta name="description" content="La propiedad solicitada no fue encontrada" />
        </Head>
        <MainContainer>
          <Header />
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Propiedad no encontrada</h1>
            <p>La propiedad solicitada no existe o ha sido eliminada.</p>
          </div>
          <Footer />
        </MainContainer>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Detalle de Propiedad - Million Luxury</title>
        <meta name="description" content="Detalles completos de la propiedad seleccionada" />
      </Head>

      <MainContainer>
        <Header />
        
        <PropertyDetailScreen propertyId={id} />
        
        <Footer />
      </MainContainer>
    </>
  );
}
