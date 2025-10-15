import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { 
  PropertyFilters as PropertyFiltersComponent,
  PropertyGrid,
  PropertyListState,
  PropertyForm
} from '../../components';
import { useProperties } from '../../hooks';
import { Modal, Pagination } from '@/shared/components/ui';
import {
  ScreenContainer,
  Content,
  Container,
  HeaderSection,
  FiltersWrapper,
  ButtonWrapper,
  CreateButton,
} from './PropertyListScreen.styled';

export const PropertyListScreen: React.FC = () => {
  const router = useRouter();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const {
    properties,
    loading,
    error,
    filters,
    pagination,
    handleFiltersChange,
    handleClearFilters,
    handlePageChange,
    handlePageSizeChange,
    loadProperties,
    searchPropertiesManual,
  } = useProperties();

  const handleViewDetails = useCallback((id: string) => {
    router.push(`/properties/${id}`);
  }, [router]);

  const handleCreateProperty = useCallback(() => {
    setIsCreateModalOpen(true);
  }, []);

  const handleCloseCreateModal = useCallback(() => {
    setIsCreateModalOpen(false);
  }, []);

  const handleCreateSuccess = useCallback(() => {
    setIsCreateModalOpen(false);
    loadProperties(filters);
  }, [loadProperties, filters]);

  const handleSearch = useCallback((searchFilters: any) => {
    searchPropertiesManual(searchFilters);
  }, [searchPropertiesManual]);


  return (
    <ScreenContainer>
      <Content>
        <Container>
          <HeaderSection>
            <FiltersWrapper>
              <PropertyFiltersComponent
                filters={filters}
                onFiltersChange={handleFiltersChange}
                onClearFilters={handleClearFilters}
                onSearch={handleSearch}
              />
            </FiltersWrapper>
            <ButtonWrapper>
              <CreateButton onClick={handleCreateProperty}>
                + Nueva Propiedad
              </CreateButton>
            </ButtonWrapper>
          </HeaderSection>
          
          <PropertyListState
            loading={loading}
            error={error}
            hasProperties={properties.length > 0}
          />
          
          {!loading && !error && properties.length > 0 && (
            <PropertyGrid
              properties={properties}
              onViewDetails={handleViewDetails}
            />
          )}

          {!loading && !error && properties.length > 0 && (
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages || 1}
              totalCount={pagination.totalCount}
              onPageChange={handlePageChange}
              onPageSizeChange={handlePageSizeChange}
              itemsPerPage={pagination.pageSize}
            />
          )}
        </Container>
      </Content>

      <Modal
        isOpen={isCreateModalOpen}
        onClose={handleCloseCreateModal}
        title="Crear Nueva Propiedad"
        size="large"
      >
        <PropertyForm
          onSuccess={handleCreateSuccess}
          onCancel={handleCloseCreateModal}
          isModal={true}
        />
      </Modal>
    </ScreenContainer>
  );
};
