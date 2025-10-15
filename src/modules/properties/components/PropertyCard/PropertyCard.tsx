import React, { useState } from 'react';
import Image from 'next/image';
import { PropertyDto } from '../../types';
import {
  Card,
  ImageContainer,
  PlaceholderIcon,
  CardContent,
  PropertyName,
  PropertyAddress,
  PropertyPrice,
} from './PropertyCard.styled';
import { FaHome } from 'react-icons/fa';

interface PropertyCardProps {
  property: PropertyDto;
  onClick: () => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onClick,
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const hasValidImage = property.imageUrl && !imageError && property.imageUrl.trim() !== '';

  return (
    <Card onClick={onClick}>
      <ImageContainer>
        {!hasValidImage ? (
          <PlaceholderIcon>
            <FaHome size={48} />
          </PlaceholderIcon>
        ) : (
          <Image
            src={property.imageUrl}
            alt={property.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            onError={handleImageError}
          />
        )}
      </ImageContainer>
      <CardContent>
        <PropertyName>{property.name}</PropertyName>
        <PropertyAddress>{property.address}</PropertyAddress>
        <PropertyPrice>
          {new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR',
          }).format(property.price)}
        </PropertyPrice>
      </CardContent>
    </Card>
  );
};