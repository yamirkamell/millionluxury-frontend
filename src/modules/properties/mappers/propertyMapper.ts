import { PropertyCreateRequest, PropertyUpdateRequest, PropertyDto } from '../types';

interface PropertyCreateRequestFull {
  id: string;
  idOwner: string;
  name: string;
  address: string;
  price: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

export class PropertyMapper {

  static toCreateRequest(property: PropertyCreateRequest): PropertyCreateRequestFull {
    return {
      id: '',
      idOwner: '1',
      name: property.name,
      address: property.address,
      price: property.price,
      imageUrl: property.imageUrl && property.imageUrl.trim() !== '' ? property.imageUrl : '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: true,
    };
  }

  static toUpdateRequest(
    property: PropertyUpdateRequest, 
    currentProperty: PropertyDto
  ): PropertyDto {
    return {
      id: currentProperty.id,
      idOwner: currentProperty.idOwner,
      name: property.name ?? currentProperty.name,
      address: property.address ?? currentProperty.address,
      price: property.price ?? currentProperty.price,
      imageUrl: property.imageUrl && property.imageUrl.trim() !== '' ? property.imageUrl : '',
      createdAt: currentProperty.createdAt,
      updatedAt: new Date().toISOString(),
      isActive: property.isActive ?? currentProperty.isActive,
    };
  }

  static isValidImageUrl(imageUrl?: string): boolean {
    return !!(imageUrl && imageUrl.trim() !== '');
  }

  static normalizeImageUrl(imageUrl?: string): string {
    return this.isValidImageUrl(imageUrl) ? imageUrl!.trim() : '';
  }
}
