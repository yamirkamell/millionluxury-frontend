import { axiosInstance } from '@/core/api/client';
import {
  PropertyDto,
  PropertyFilters,
  PropertyListResponse,
  PropertyCreateRequest,
  PropertyUpdateRequest,
  PropertySearchRequest,
} from '../types';
import { PropertyMapper } from '../mappers';

export async function getProperties(filters: PropertyFilters = {}) {
  const response = await axiosInstance.get<PropertyListResponse>('/Properties', {
    params: filters
  });
  return response.data;
}

export async function getPropertyById(id: string) {
  const response = await axiosInstance.get<PropertyDto>(`/Properties/${id}`);
  return response.data;
}

export async function createProperty(property: PropertyCreateRequest) {
  const fullProperty = PropertyMapper.toCreateRequest(property);
  const response = await axiosInstance.post<PropertyDto>('/Properties', fullProperty);
  return response.data;
}

export async function updateProperty(id: string, property: PropertyUpdateRequest) {
  const currentProperty = await getPropertyById(id);
  const fullProperty = PropertyMapper.toUpdateRequest(property, currentProperty);
  const response = await axiosInstance.put<PropertyDto>(`/Properties/${id}`, fullProperty);
  return response.data;
}

export async function deleteProperty(id: string) {
  const response = await axiosInstance.delete(`/Properties/${id}`);
  return response.data;
}

export async function searchProperties(searchRequest: PropertySearchRequest) {
  const response = await axiosInstance.post<PropertyListResponse>('/Properties/search', searchRequest);
  return response.data;
}

export const propertyService = {
  getProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
  searchProperties,
};
