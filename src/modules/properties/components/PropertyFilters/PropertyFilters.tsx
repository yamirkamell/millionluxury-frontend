import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { PropertyFiltersProps, PropertyFilters as PropertyFiltersType } from '../../types';
import {
  FiltersContainer,
  FiltersForm,
  FiltersGrid,
  InputGroup,
  Label,
  Input,
  ButtonGroup,
  Button,
} from './PropertyFilters.styled';

export const PropertyFiltersComponent: React.FC<PropertyFiltersProps> = ({
  filters,
  onFiltersChange,
  onClearFilters,
  onSearch,
}) => {
  const { register, watch, reset, handleSubmit } = useForm<PropertyFiltersType>({
    defaultValues: filters,
  });

  const watchedFilters = watch();

  useEffect(() => {
    onFiltersChange(watchedFilters);
  }, [watchedFilters, onFiltersChange]);

  const handleClearFilters = () => {
    const clearedFilters = {
      name: '',
      address: '',
      minPrice: undefined,
      maxPrice: undefined,
    };
    reset(clearedFilters);
    onClearFilters();
    onSearch(clearedFilters);
  };

  const handleSearch = (data: PropertyFiltersType) => {
    onSearch(data);
  };

  return (
    <FiltersContainer>
      <FiltersForm onSubmit={handleSubmit(handleSearch)}>
        <FiltersGrid>
          <InputGroup>
            <Label htmlFor="name">Nombre de la propiedad</Label>
            <Input
              id="name"
              type="text"
              placeholder="Buscar por nombre..."
              {...register('name')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="address">Dirección</Label>
            <Input
              id="address"
              type="text"
              placeholder="Buscar por dirección..."
              {...register('address')}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="minPrice">Precio mínimo</Label>
            <Input
              id="minPrice"
              type="number"
              placeholder="Precio mínimo"
              {...register('minPrice', { valueAsNumber: true })}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="maxPrice">Precio máximo</Label>
            <Input
              id="maxPrice"
              type="number"
              placeholder="Precio máximo"
              {...register('maxPrice', { valueAsNumber: true })}
            />
          </InputGroup>
        </FiltersGrid>

        <ButtonGroup>
          <Button type="button" onClick={handleClearFilters}>
            Limpiar Filtros
          </Button>
          <Button type="submit" $variant="primary">
            Buscar
          </Button>
        </ButtonGroup>
      </FiltersForm>
    </FiltersContainer>
  );
};