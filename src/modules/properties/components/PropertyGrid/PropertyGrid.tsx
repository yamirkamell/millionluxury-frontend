import React from 'react';
import { PropertyDto } from '../../types';
import { PropertyCard } from '../PropertyCard';
import { GridContainer } from './PropertyGrid.styled';

interface PropertyGridProps {
  properties: PropertyDto[];
  onViewDetails: (id: string) => void;
}

export const PropertyGrid: React.FC<PropertyGridProps> = ({
  properties,
  onViewDetails,
}) => {
  return (
    <GridContainer>
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          onClick={() => onViewDetails(property.id)}
        />
      ))}
    </GridContainer>
  );
};
