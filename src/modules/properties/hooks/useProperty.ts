import { useState, useCallback, useEffect } from 'react';
import { PropertyDto } from '../types';
import { propertyService } from '../services';

export const useProperty = (propertyId: string) => {
  const [property, setProperty] = useState<PropertyDto | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadProperty = useCallback(async () => {
    if (!propertyId) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const data = await propertyService.getPropertyById(propertyId);
      setProperty(data);
    } catch (err: any) {
      setError(err.message || 'Error al cargar la propiedad');
    } finally {
      setLoading(false);
    }
  }, [propertyId]);

  useEffect(() => {
    loadProperty();
  }, [loadProperty]);

  return {
    property,
    loading,
    error,
    loadProperty,
  };
};