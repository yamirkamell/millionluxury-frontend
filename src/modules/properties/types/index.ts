import { BaseEntity, FilterParams } from '@/core/types';

export interface Property extends BaseEntity {
  idOwner: string;
  name: string;
  address: string;
  price: number;
  image: string;
}

export interface Owner extends BaseEntity {
  name: string;
  email: string;
  phone: string;
}

export interface PropertyDto {
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

export interface PropertyFilters extends FilterParams {
  name?: string;
  address?: string;
  minPrice?: number;
  maxPrice?: number;
  idOwner?: string;
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

export interface PropertyListResponse {
  items: PropertyDto[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface PropertyCardProps {
  property: PropertyDto;
  onClick: () => void;
}

export interface PropertyFiltersProps {
  filters: PropertyFilters;
  onFiltersChange: (filters: PropertyFilters) => void;
  onClearFilters: () => void;
  onSearch: (filters: PropertyFilters) => void;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  errors?: string[];
  statusCode: number;
  timestamp: string;
}

export interface PropertyCreateRequest {
  name: string;
  address: string;
  price: number;
  imageUrl?: string;
}


export interface PropertyUpdateRequest {
  name?: string;
  address?: string;
  price?: number;
  imageUrl?: string;
  isActive?: boolean;
}

export interface PropertySearchRequest {
  name?: string;
  address?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

export interface PropertySearchResponse {
  success: boolean;
  message: string;
  data: {
    items: PropertyDto[];
    totalCount: number;
    page: number;
    pageSize: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
  errors?: string[];
  statusCode: number;
  timestamp: string;
}
