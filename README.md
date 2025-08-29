# Nuestro Pulso - Plataforma de Participación Ciudadana

![Colombian Flag Colors](https://img.shields.io/badge/Colombia-🇨🇴-yellow?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Descripción

**Nuestro Pulso** es una plataforma digital moderna diseñada para facilitar la participación ciudadana en Colombia. Conecta ciudadanos con su gobierno local y nacional, promoviendo la democracia participativa y la transparencia gubernamental.

### 🎯 Características Principales

- 🔐 **Autenticación segura** con JWT y bcrypt
- 🎨 **Diseño responsivo** inspirado en los colores de la bandera colombiana
- 🛡️ **Seguridad robusta** con headers de seguridad y validación de entrada
- ⚡ **Rendimiento optimizado** con código dividido y carga diferida
- 🐳 **Containerizado** para deployment fácil
- 🚀 **CI/CD automatizado** con GitHub Actions
- 📊 **Dashboard intuitivo** para gestión de participación
- 🌐 **PWA-ready** para acceso móvil

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js 18+ 
- npm 8+
- Git

### Instalación Local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Colombia-cyber/nuestro-pulso-app.git
   cd nuestro-pulso-app
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   # Editar .env.local con tus valores
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

### 🐳 Con Docker

1. **Construir la imagen**
   ```bash
   npm run docker:build
   ```

2. **Ejecutar el contenedor**
   ```bash
   npm run docker:run
   ```

3. **Con Docker Compose (recomendado)**
   ```bash
   npm run docker:compose
   ```

## 📁 Estructura del Proyecto

```
nuestro-pulso-app/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── api/               # API Routes
│   │   ├── auth/              # Páginas de autenticación
│   │   ├── dashboard/         # Dashboard protegido
│   │   └── layout.tsx         # Layout principal
│   ├── components/            # Componentes reutilizables
│   │   ├── ui/               # Componentes base UI
│   │   ├── layout/           # Componentes de layout
│   │   ├── sections/         # Secciones de página
│   │   └── providers/        # Context providers
│   ├── lib/                  # Utilidades y configuraciones
│   ├── hooks/                # Custom React hooks
│   ├── types/                # Definiciones de TypeScript
│   └── styles/               # Estilos globales
├── public/                   # Archivos estáticos
├── .github/                  # GitHub Actions workflows
├── docker-compose.yml        # Docker Compose para desarrollo
├── Dockerfile               # Imagen Docker para producción
├── vercel.json             # Configuración de Vercel
└── README.md              # Este archivo
```

## 🛠️ Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run start` | Inicia servidor de producción |
| `npm run lint` | Ejecuta ESLint |
| `npm run test` | Ejecuta tests con Jest |
| `npm run type-check` | Verifica tipos de TypeScript |
| `npm run docker:build` | Construye imagen Docker |
| `npm run deploy` | Despliega a Vercel |

## 🔐 Autenticación

La aplicación incluye un sistema completo de autenticación:

### Demo Credentials
```
Email: admin@nuestropulso.co
Password: password
```

### Endpoints API

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/api/auth/login` | POST | Iniciar sesión |
| `/api/auth/register` | POST | Registro de usuario |
| `/api/auth/verify` | GET | Verificar token JWT |
| `/api/health` | GET | Estado de salud de la aplicación |

## 🚀 Deployment

### Vercel (Recomendado)

1. **Conectar repositorio en Vercel**
2. **Configurar variables de entorno**
3. **Deploy automático en cada push a main**

### Variables de Entorno para Producción

```bash
NODE_ENV=production
JWT_SECRET=your-super-secret-jwt-key
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-nextauth-secret
```

### Docker en Producción

```bash
# Construir para producción
docker build -t nuestro-pulso .

# Ejecutar en producción
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  -e JWT_SECRET=your-secret \
  nuestro-pulso
```

## 🔒 Seguridad

### Medidas Implementadas

- ✅ **Headers de Seguridad**: X-Frame-Options, CSP, XSS Protection
- ✅ **Autenticación JWT**: Tokens seguros con expiración
- ✅ **Hashing de Contraseñas**: bcrypt con salt rounds
- ✅ **Validación de Entrada**: Zod schemas para validación
- ✅ **CORS Configurado**: Para APIs externas
- ✅ **Rate Limiting**: Protección contra ataques

### Auditoría de Seguridad

```bash
# Auditoría de dependencias
npm run security:audit

# Scan de vulnerabilidades
npx audit-ci --moderate
```

## 🧪 Testing

### Ejecutar Tests

```bash
# Tests unitarios
npm run test

# Tests con coverage
npm run test:coverage

# Tests en modo watch
npm run test:watch
```

### Estructura de Tests

```
src/__tests__/
├── components/          # Tests de componentes
├── pages/              # Tests de páginas
├── api/                # Tests de API
└── utils/              # Tests de utilidades
```

## 🎨 Diseño y UI

### Paleta de Colores

Inspirada en la bandera de Colombia:

- **Amarillo**: `#FDE047` (Optimismo y riqueza)
- **Azul**: `#1E40AF` (Cielo y mar)
- **Rojo**: `#DC2626` (Sangre derramada por la patria)

### Componentes UI

- Basados en Radix UI para accesibilidad
- Estilizados con Tailwind CSS
- Totalmente responsivos
- Soporte para modo oscuro

## 📊 Monitoreo y Analytics

### Métricas de Aplicación

- Health checks en `/api/health`
- Logs estructurados para debugging
- Métricas de rendimiento con Next.js

### Configuración de Monitoreo

```bash
# Variables para Sentry (opcional)
SENTRY_DSN=your-sentry-dsn

# Google Analytics (opcional)
GOOGLE_ANALYTICS_ID=your-ga-id
```

## 🤝 Contribuir

### Guía de Contribución

1. **Fork el repositorio**
2. **Crear rama feature**: `git checkout -b feature/nueva-funcionalidad`
3. **Commit cambios**: `git commit -m 'feat: nueva funcionalidad'`
4. **Push a la rama**: `git push origin feature/nueva-funcionalidad`
5. **Crear Pull Request**

### Convenciones de Código

- Usar TypeScript para todo el código
- Seguir las reglas de ESLint configuradas
- Escribir tests para nuevas funcionalidades
- Usar conventional commits

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

## 🆘 Soporte

### Problemas Comunes

| Problema | Solución |
|----------|----------|
| Error de build | Ejecutar `npm run clean && npm install` |
| Variables de entorno | Verificar `.env.local` existe y tiene valores correctos |
| Docker failing | Verificar Docker está ejecutándose |
| Auth not working | Verificar JWT_SECRET está configurado |

### Contacto

- **Email**: contacto@nuestropulso.co
- **Issues**: [GitHub Issues](https://github.com/Colombia-cyber/nuestro-pulso-app/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Colombia-cyber/nuestro-pulso-app/discussions)

---

**Hecho con ❤️ para Colombia** 🇨🇴

*Fomentando la participación ciudadana a través de la tecnología*