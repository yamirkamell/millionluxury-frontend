import { useState, useCallback, useEffect } from 'react';
import { PropertyDto, PropertyFilters, PropertySearchRequest } from '../types';
import { getProperties, searchProperties } from '../services';

export const useProperties = (initialFilters: PropertyFilters = {}) => {
  const [properties, setProperties] = useState<PropertyDto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<PropertyFilters>(initialFilters);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: 10,
    totalPages: 0,
    totalCount: 0,
  });

  const loadProperties = useCallback(async (currentFilters: PropertyFilters = {}) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await getProperties({
        page: pagination.currentPage,
        pageSize: pagination.pageSize,
        ...currentFilters
      });
      
      setProperties(data.items || []);
      setPagination(prev => ({
        ...prev,
        totalPages: data.totalPages || 0,
        totalCount: data.totalCount || 0,
      }));
      
    } catch (err: any) {
      setError(err.message || 'Error al cargar las propiedades');
    } finally {
      setLoading(false);
    }
  }, [pagination.currentPage, pagination.pageSize]);

  const searchPropertiesManual = useCallback(async (searchFilters: PropertyFilters = {}) => {
    setLoading(true);
    setError(null);
    
    try {
      const searchRequest: PropertySearchRequest = {
        name: searchFilters.name,
        address: searchFilters.address,
        minPrice: searchFilters.minPrice,
        maxPrice: searchFilters.maxPrice,
        page: pagination.currentPage,
        pageSize: pagination.pageSize,
        sortBy: searchFilters.sortBy || 'createdAt',
        sortDirection: searchFilters.sortDirection || 'desc',
      };

      const response = await searchProperties(searchRequest);
      
      if (response && response.items) {
        setProperties(response.items || []);
        setPagination(prev => ({
          ...prev,
          totalPages: response.totalPages || 0,
          totalCount: response.totalCount || 0,
        }));
      } else {
        console.error('Unexpected response structure:', response);
        setError('Estructura de respuesta inesperada');
      }
      
    } catch (err: any) {
      setError(err.message || 'Error al buscar las propiedades');
    } finally {
      setLoading(false);
    }
  }, [pagination.currentPage, pagination.pageSize]);

  const handleFiltersChange = useCallback((newFilters: PropertyFilters) => {
    setFilters(prevFilters => {
      const hasChanged = JSON.stringify(prevFilters) !== JSON.stringify(newFilters);
      return hasChanged ? newFilters : prevFilters;
    });
  }, []);

  const handleClearFilters = useCallback(() => {
    setFilters({});
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setPagination(prev => ({ ...prev, currentPage: page }));
  }, []);

  const handlePageSizeChange = useCallback((pageSize: number) => {
    setPagination(prev => ({ 
      ...prev, 
      pageSize, 
      currentPage: 1
    }));
  }, []);

  const handleSortChange = useCallback((sortBy: string, sortDirection: 'asc' | 'desc') => {
    setFilters(prev => ({
      ...prev,
      sortBy,
      sortDirection,
    }));
  }, []);

  useEffect(() => {
    loadProperties();
  }, [loadProperties]);

  return {
    properties,
    loading,
    error,
    filters,
    pagination,
    loadProperties,
    searchPropertiesManual,
    handleFiltersChange,
    handleClearFilters,
    handlePageChange,
    handlePageSizeChange,
    handleSortChange,
  };
};