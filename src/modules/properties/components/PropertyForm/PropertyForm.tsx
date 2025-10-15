import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { PropertyCreateRequest, PropertyDto, PropertyUpdateRequest } from '../../types';
import { usePropertyActions } from '../../hooks';
import {
  FormContainer,
  FormTitle,
  FormGrid,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  Button,
  ErrorMessage,
} from './PropertyForm.styled';

interface PropertyFormProps {
  onSuccess?: (property: PropertyCreateRequest | PropertyUpdateRequest) => void;
  onCancel?: () => void;
  isModal?: boolean;
  property?: PropertyDto;
  mode?: 'create' | 'edit';
}

export const PropertyForm: React.FC<PropertyFormProps> = ({
  onSuccess,
  onCancel,
  property,
  mode = 'create',
}) => {
  const { createProperty, updateProperty, loading, error } = usePropertyActions();
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<PropertyCreateRequest>();

  useEffect(() => {
    if (mode === 'edit' && property) {
      setValue('name', property.name);
      setValue('address', property.address);
      setValue('price', property.price);
      setValue('imageUrl', property.imageUrl || '');
    }
  }, [mode, property, setValue]);

  const onSubmit = async (data: PropertyCreateRequest) => {
    try {
      if (mode === 'edit' && property) {
        const updateData: PropertyUpdateRequest = {
          name: data.name,
          address: data.address,
          price: data.price,
          imageUrl: data.imageUrl || undefined,
        };
        const updatedProperty = await updateProperty(property.id, updateData);
        onSuccess?.(updatedProperty);
      } else {
        const newProperty = await createProperty(data);
        reset();
        onSuccess?.(newProperty);
      }
    } catch (err) {
    }
  };

  return (
    <FormContainer>
      <FormTitle>
        {mode === 'edit' ? 'Editar Propiedad' : 'Crear Nueva Propiedad'}
      </FormTitle>
      
      {error && (
        <ErrorMessage>
          {error}
        </ErrorMessage>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGrid>
          <FormGroup>
            <Label htmlFor="name">Nombre de la Propiedad *</Label>
            <Input
              id="name"
              {...register('name', { required: 'El nombre es requerido' })}
              placeholder="Ej: Casa de Lujo en la Playa"
            />
            {errors.name && <span>{errors.name.message}</span>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="address">Dirección *</Label>
            <Input
              id="address"
              {...register('address', { required: 'La dirección es requerida' })}
              placeholder="Ej: Av. Principal 123, Ciudad"
            />
            {errors.address && <span>{errors.address.message}</span>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="price">Precio (EUR) *</Label>
            <Input
              id="price"
              type="number"
              {...register('price', { 
                required: 'El precio es requerido',
                min: { value: 0, message: 'El precio debe ser mayor a 0' }
              })}
              placeholder="500000"
            />
            {errors.price && <span>{errors.price.message}</span>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="imageUrl">URL de la Imagen (Opcional)</Label>
            <Input
              id="imageUrl"
              {...register('imageUrl')}
              placeholder="https://ejemplo.com/imagen.jpg"
            />
            <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
              Si no se proporciona, se mostrará el icono de casa por defecto
            </span>
          </FormGroup>
        </FormGrid>

        <ButtonGroup>
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancelar
          </Button>
          <Button type="submit" variant="primary" disabled={loading}>
            {loading 
              ? (mode === 'edit' ? 'Actualizando...' : 'Creando...') 
              : (mode === 'edit' ? 'Actualizar Propiedad' : 'Crear Propiedad')
            }
          </Button>
        </ButtonGroup>
      </form>
    </FormContainer>
  );
};
