# MillionLuxury Frontend

Aplicación web para gestión de propiedades inmobiliarias desarrollada con Next.js 14, TypeScript y arquitectura modular.

## 🏗️ Arquitectura

Este proyecto implementa **Arquitectura Modular** con las siguientes capas:

- **Core**: Configuración base, API client, interceptores y utilidades
- **Shared**: Componentes reutilizables, hooks, HOCs y servicios compartidos
- **Modules**: Módulos específicos de dominio (properties)
- **Pages**: Páginas de Next.js y enrutamiento

## 🚀 Tecnologías Utilizadas

- **Next.js 14**: Framework de React con App Router
- **TypeScript**: Tipado estático
- **React Icons**: Librería de iconos vectoriales
- **Styled Components**: CSS-in-JS para estilos
- **React Hook Form**: Manejo de formularios
- **Axios**: Cliente HTTP
- **Redux Toolkit**: Gestión de estado (configurado)
- **Jest**: Framework de pruebas unitarias

## 📋 Características

### Funcionalidades Principales
- ✅ CRUD completo de propiedades inmobiliarias
- ✅ Búsqueda y filtrado avanzado (nombre, dirección, rango de precios)
- ✅ Paginación de resultados
- ✅ Ordenamiento personalizable
- ✅ Vista de detalle de propiedades
- ✅ Modales de creación y edición
- ✅ Modal de confirmación para eliminación
- ✅ Tema claro/oscuro
- ✅ Diseño responsive
- ✅ Manejo de errores robusto
- ✅ Validación de formularios
- ✅ Carga de imágenes con fallback

### Componentes UI
- **PropertyCard**: Tarjeta de propiedad con imagen y datos
- **PropertyFilters**: Filtros de búsqueda horizontales
- **PropertyForm**: Formulario reutilizable para crear/editar
- **PropertyDetail**: Vista detallada de propiedad
- **Modal**: Modal reutilizable con diferentes tamaños
- **ConfirmationModal**: Modal de confirmación para acciones destructivas
- **ThemeToggle**: Toggle para cambiar tema
- **Pagination**: Componente de paginación

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Backend API funcionando

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd millionluxury-frontend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   
   Configurar en `.env.local`:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:7000/api
   ```

4. **Ejecutar la aplicación**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. **Acceder a la aplicación**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:7000/api`

## 📊 Estructura del Proyecto

```
millionluxury-frontend/
├── src/
│   ├── core/                    # Configuración base
│   │   ├── api/                 # Cliente HTTP y configuración
│   │   └── theme/               # Configuración de temas
│   ├── shared/                  # Componentes compartidos
│   │   ├── components/          # Componentes UI reutilizables
│   │   │   ├── ui/              # Componentes base (Modal, Button, etc.)
│   │   │   └── layout/          # Componentes de layout (Header, Footer)
│   │   ├── hooks/               # Hooks personalizados
│   │   └── hoc/                 # Higher-Order Components
│   ├── modules/                 # Módulos de dominio
│   │   └── properties/          # Módulo de propiedades
│   │       ├── components/      # Componentes específicos
│   │       ├── screens/         # Pantallas/páginas
│   │       ├── services/        # Servicios HTTP
│   │       ├── hooks/           # Hooks del módulo
│   │       ├── types/           # Tipos TypeScript
│   │       └── mappers/         # Transformación de datos
│   └── pages/                   # Páginas de Next.js
│       ├── _app.tsx             # Configuración global
│       ├── _document.tsx        # HTML personalizado
│       ├── index.tsx            # Página principal
│       └── properties/          # Páginas de propiedades
├── public/                      # Archivos estáticos
├── styles/                      # Estilos globales
└── README.md
```

## 🔧 Configuración

### Variables de Entorno

Configurar en `.env.local`:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:7000/api

# Next.js Configuration
NEXT_PUBLIC_APP_NAME=MillionLuxury
NEXT_PUBLIC_APP_VERSION=1.0.0
```

### Configuración de API

El cliente HTTP está configurado en `src/core/api/client.ts`:

```typescript
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
```

## 📚 Funcionalidades por Módulo

### Módulo Properties

#### Componentes
- **PropertyListScreen**: Lista paginada de propiedades
- **PropertyDetailScreen**: Vista detallada de propiedad
- **PropertyCard**: Tarjeta individual de propiedad
- **PropertyFilters**: Filtros de búsqueda
- **PropertyForm**: Formulario de creación/edición

#### Servicios
- **propertyService**: Llamadas HTTP a la API
- **PropertyMapper**: Transformación de datos

#### Hooks
- **useProperties**: Gestión de estado de propiedades
- **useProperty**: Gestión de propiedad individual
- **usePropertyActions**: Acciones CRUD

## 🎨 Sistema de Diseño

### Temas
- **Tema Claro**: Colores claros para uso diurno
- **Tema Oscuro**: Colores oscuros para uso nocturno
- **Toggle**: Cambio dinámico entre temas

### Componentes Base
- **Button**: Botones con variantes (primary, secondary, danger)
- **Modal**: Modales con diferentes tamaños
- **Input**: Campos de entrada con validación
- **Card**: Tarjetas para contenido

### Responsive Design
- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: Tablet (768px), Desktop (1024px)
- **Grid System**: Layout flexible y responsive

## 🧪 Pruebas

### Ejecutar Pruebas
```bash
npm test
# o
yarn test
```

### Ejecutar Pruebas con Cobertura
```bash
npm run test:coverage
# o
yarn test:coverage
```

## 📝 Modelo de Datos

### Property Interface
```typescript
interface PropertyDto {
  id: string;           // ID único
  idOwner: string;      // ID del propietario
  name: string;         // Nombre de la propiedad
  address: string;      // Dirección
  price: number;        // Precio
  imageUrl: string;     // URL de imagen
  createdAt: string;    // Fecha de creación
  updatedAt: string;    // Fecha de actualización
  isActive: boolean;    // Estado activo
}
```

### Filtros de Búsqueda
```typescript
interface PropertyFilters {
  name?: string;        // Filtro por nombre
  address?: string;     // Filtro por dirección
  minPrice?: number;    // Precio mínimo
  maxPrice?: number;    // Precio máximo
  sortBy?: string;      // Campo de ordenamiento
  sortDirection?: 'asc' | 'desc'; // Dirección de ordenamiento
}
```

## 🔒 Seguridad y Mejores Prácticas

- ✅ Validación de formularios con React Hook Form
- ✅ Manejo global de errores con interceptores
- ✅ Tipado estático con TypeScript
- ✅ Componentes reutilizables y modulares
- ✅ Separación de responsabilidades
- ✅ Mappers para transformación de datos
- ✅ Hooks personalizados para lógica reutilizable
- ✅ Styled Components para estilos encapsulados
- ✅ Responsive design
- ✅ Accesibilidad básica

## 🚀 Despliegue

### Build de Producción
```bash
npm run build
# o
yarn build
```

### Iniciar Servidor de Producción
```bash
npm start
# o
yarn start
```

### Variables de Entorno de Producción
```env
NEXT_PUBLIC_API_URL=https://api.millionluxury.com/api
```

## 📱 Características de UX/UI

### Experiencia de Usuario
- **Navegación intuitiva**: Flujo claro entre listado y detalle
- **Búsqueda eficiente**: Filtros horizontales con búsqueda manual
- **Feedback visual**: Estados de carga, errores y confirmaciones
- **Responsive**: Funciona en todos los dispositivos
- **Accesibilidad**: Navegación por teclado y lectores de pantalla

### Interacciones
- **Modales**: Creación y edición en modales
- **Confirmaciones**: Modal de confirmación para eliminación
- **Validaciones**: Validación en tiempo real de formularios
- **Estados de carga**: Indicadores visuales durante operaciones
- **Manejo de errores**: Mensajes claros de error

## 🔄 Integración con Backend

### Endpoints Utilizados
- `GET /api/properties` - Listar propiedades
- `GET /api/properties/{id}` - Obtener propiedad por ID
- `POST /api/properties/search` - Buscar propiedades
- `POST /api/properties` - Crear propiedad
- `PUT /api/properties/{id}` - Actualizar propiedad
- `DELETE /api/properties/{id}` - Eliminar propiedad

