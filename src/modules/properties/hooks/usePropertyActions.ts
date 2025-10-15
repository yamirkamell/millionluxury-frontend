import { useState, useCallback } from 'react';
import { PropertyCreateRequest, PropertyUpdateRequest } from '../types';
import { createProperty as createPropertyService, updateProperty as updatePropertyService, deleteProperty as deletePropertyService } from '../services';

export const usePropertyActions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createProperty = useCallback(async (propertyData: PropertyCreateRequest) => {
    setLoading(true);
    setError(null);
    
    try {
      const newProperty = await createPropertyService(propertyData);
      return newProperty;
    } catch (err: any) {
      setError(err.message || 'Error al crear la propiedad');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateProperty = useCallback(async (id: string, propertyData: PropertyUpdateRequest) => {
    setLoading(true);
    setError(null);
    
    try {
      const updatedProperty = await updatePropertyService(id, propertyData);
      return updatedProperty;
    } catch (err: any) {
      setError(err.message || 'Error al actualizar la propiedad');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteProperty = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    
    try {
      await deletePropertyService(id);
    } catch (err: any) {
      setError(err.message || 'Error al eliminar la propiedad');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    loading,
    error,
    createProperty,
    updateProperty,
    deleteProperty,
    clearError,
  };
};
