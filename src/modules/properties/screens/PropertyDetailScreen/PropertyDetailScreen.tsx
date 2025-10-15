import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useProperty } from '../../hooks';
import { withLoading } from '@/shared/components/hoc/withLoading';
import { withError } from '@/shared/components/hoc/withError';
import { FaHome, FaArrowLeft } from 'react-icons/fa';
import { Modal } from '@/shared/components/ui/Modal';
import { ConfirmationModal } from '@/shared/components/ui/ConfirmationModal';
import { PropertyForm } from '../../components/PropertyForm';
import {
  ScreenContainer,
  Content,
  Container,
  BackButton,
  PropertyDetailContainer,
  ImageSection,
  PlaceholderIcon,
  DetailsSection,
  PropertyTitle,
  PropertyAddress,
  PropertyPrice,
  PropertyInfo,
  InfoItem,
  InfoLabel,
  InfoValue,
  StatusBadge,
  ActionButtons,
  Button,
} from './PropertyDetailScreen.styled';

interface PropertyDetailScreenProps {
  propertyId: string;
}

const PropertyDetailContent: React.FC<PropertyDetailScreenProps> = ({ propertyId }) => {
  const router = useRouter();
  const { property, loading, error, loadProperty } = useProperty(propertyId);
  const [imageError, setImageError] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  if (!property) {
    return <div>Propiedad no encontrada</div>;
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleBack = () => {
    router.back();
  };

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleEditSuccess = () => {
    setIsEditModalOpen(false);
    loadProperty();
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    if (!property) return;
    
    setIsDeleting(true);
    try {
      const { deleteProperty } = await import('../../services');
      await deleteProperty(property.id);
      
      setIsDeleteModalOpen(false);
      router.push('/');
    } catch (error) {
      console.error('Error al eliminar la propiedad:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const hasValidImage = property.imageUrl && !imageError && property.imageUrl !== '/placeholder-property.jpg';

  return (
    <ScreenContainer>
      <Content>
        <Container>
          <BackButton onClick={handleBack}>
            <FaArrowLeft />
            Volver
          </BackButton>

          <PropertyDetailContainer>
            <ImageSection>
              {!hasValidImage ? (
                <PlaceholderIcon>
                  <FaHome size={80} />
                </PlaceholderIcon>
              ) : (
                <Image
                  src={property.imageUrl}
                  alt={property.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  onError={handleImageError}
                />
              )}
            </ImageSection>

            <DetailsSection>
              <PropertyTitle>{property.name}</PropertyTitle>
              <PropertyAddress>{property.address}</PropertyAddress>
              <PropertyPrice>{formatPrice(property.price)}</PropertyPrice>

              <PropertyInfo>
                <InfoItem>
                  <InfoLabel>ID de Propiedad</InfoLabel>
                  <InfoValue>{property.id}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>ID del Propietario</InfoLabel>
                  <InfoValue>{property.idOwner}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Estado</InfoLabel>
                  <StatusBadge $active={property.isActive}>
                    {property.isActive ? 'Activa' : 'Inactiva'}
                  </StatusBadge>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Fecha de Creación</InfoLabel>
                  <InfoValue>{formatDate(property.createdAt)}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Última Actualización</InfoLabel>
                  <InfoValue>{formatDate(property.updatedAt)}</InfoValue>
                </InfoItem>
              </PropertyInfo>

              <ActionButtons>
                <Button $variant="primary" onClick={handleEdit}>
                  Editar Propiedad
                </Button>
                <Button $variant="secondary" onClick={handleDelete}>
                  Eliminar Propiedad
                </Button>
              </ActionButtons>
            </DetailsSection>
          </PropertyDetailContainer>
        </Container>
      </Content>

      <Modal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        title="Editar Propiedad"
        size="large"
      >
        <PropertyForm
          mode="edit"
          property={property}
          onSuccess={handleEditSuccess}
          onCancel={handleCloseEditModal}
          isModal={true}
        />
      </Modal>

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
        title="¿Eliminar Propiedad?"
        message={`¿Estás seguro de que quieres eliminar la propiedad "${property.name}"? Esta acción no se puede deshacer.`}
        confirmText="Eliminar"
        cancelText="Cancelar"
        variant="danger"
        loading={isDeleting}
      />
    </ScreenContainer>
  );
};

const PropertyDetailWithLoading = withLoading(PropertyDetailContent);
const PropertyDetailWithError = withError(PropertyDetailWithLoading);

export const PropertyDetailScreen: React.FC<PropertyDetailScreenProps> = (props) => {
  const { loading, error, loadProperty } = useProperty(props.propertyId);

  const handleRetry = () => {
    loadProperty();
  };

  return (
    <PropertyDetailWithError
      {...props}
      loading={loading}
      error={error}
      onRetry={handleRetry}
    />
  );
};
