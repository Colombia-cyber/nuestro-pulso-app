# Guía de Deployment - Nuestro Pulso

Esta guía te llevará paso a paso para desplegar la aplicación Nuestro Pulso en diferentes plataformas.

## 📋 Tabla de Contenidos

- [Preparación General](#preparación-general)
- [Deployment en Vercel](#deployment-en-vercel)
- [Deployment con Docker](#deployment-con-docker)
- [CI/CD con GitHub Actions](#cicd-con-github-actions)
- [Variables de Entorno](#variables-de-entorno)
- [Troubleshooting](#troubleshooting)

## 🔧 Preparación General

### 1. Verificar el Build Local

Antes de hacer deployment, asegúrate de que la aplicación compile correctamente:

```bash
# Instalar dependencias
npm install

# Verificar tipos
npm run type-check

# Ejecutar linting
npm run lint

# Ejecutar tests
npm run test

# Build de producción
npm run build
```

### 2. Configurar Variables de Entorno

Copia y configura las variables necesarias:

```bash
cp .env.example .env.local
```

Variables mínimas requeridas:
```env
NODE_ENV=production
JWT_SECRET=tu-jwt-secret-super-seguro
NEXTAUTH_URL=https://tu-dominio.vercel.app
NEXTAUTH_SECRET=tu-nextauth-secret-seguro
```

## 🚀 Deployment en Vercel

### Opción 1: Dashboard de Vercel (Recomendado)

1. **Conectar Repositorio**
   - Ir a [vercel.com](https://vercel.com)
   - Conectar tu cuenta de GitHub
   - Seleccionar el repositorio `nuestro-pulso-app`

2. **Configurar Proyecto**
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Variables de Entorno**
   ```
   NODE_ENV=production
   JWT_SECRET=generated-secure-secret
   NEXTAUTH_URL=https://your-app.vercel.app
   NEXTAUTH_SECRET=generated-nextauth-secret
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel automáticamente construirá y desplegará

### Opción 2: Vercel CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login a Vercel
vercel login

# Deploy a staging
vercel

# Deploy a producción
vercel --prod
```

### 3. Configuración Post-Deploy

- **Custom Domain**: Configurar dominio personalizado en Vercel dashboard
- **SSL**: Automáticamente configurado por Vercel
- **Analytics**: Habilitar Vercel Analytics para métricas

## 🐳 Deployment con Docker

### 1. Build Local

```bash
# Construir imagen
docker build -t nuestro-pulso .

# Verificar imagen
docker images | grep nuestro-pulso

# Test local
docker run -p 3000:3000 -e JWT_SECRET=test-secret nuestro-pulso
```

### 2. Docker Compose para Producción

Crear `docker-compose.prod.yml`:

```yaml
version: '3.8'

services:
  app:
    image: nuestro-pulso:latest
    ports:
      - "80:3000"
    environment:
      - NODE_ENV=production
      - JWT_SECRET=${JWT_SECRET}
      - NEXTAUTH_URL=${NEXTAUTH_URL}
      - NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/api/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  nginx:
    image: nginx:alpine
    ports:
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - app
```

### 3. Deploy a Servidor

```bash
# En tu servidor
git clone https://github.com/Colombia-cyber/nuestro-pulso-app.git
cd nuestro-pulso-app

# Configurar variables
cp .env.example .env
# Editar .env con valores de producción

# Deploy
docker-compose -f docker-compose.prod.yml up -d
```

## ⚙️ CI/CD con GitHub Actions

### 1. Configurar Secrets

En tu repositorio GitHub, ir a Settings > Secrets and variables > Actions:

```
VERCEL_TOKEN=tu-vercel-token
VERCEL_ORG_ID=tu-org-id
VERCEL_PROJECT_ID=tu-project-id
DOCKER_HUB_USERNAME=tu-docker-username
DOCKER_HUB_ACCESS_TOKEN=tu-docker-token
```

### 2. Workflow Automático

El workflow en `.github/workflows/ci-cd.yml` se ejecuta automáticamente:

- **Push a `main`**: Deploy a producción
- **Push a `develop`**: Deploy a staging
- **Pull Requests**: Solo CI (tests, linting)

### 3. Monitorear Deployments

- GitHub Actions tab para logs
- Vercel dashboard para deployment status
- Docker Hub para imágenes

## 🔐 Variables de Entorno

### Producción Requeridas

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `NODE_ENV` | Entorno de ejecución | `production` |
| `JWT_SECRET` | Secret para JWT tokens | `super-secret-key-256-bits` |
| `NEXTAUTH_URL` | URL de la aplicación | `https://nuestropulso.vercel.app` |
| `NEXTAUTH_SECRET` | Secret para NextAuth | `nextauth-secret-key` |

### Opcional (Funcionalidades Avanzadas)

| Variable | Descripción | Cuándo usar |
|----------|-------------|-------------|
| `DATABASE_URL` | URL de base de datos | Con PostgreSQL/MySQL |
| `SENTRY_DSN` | Error tracking | Monitoreo en producción |
| `GOOGLE_ANALYTICS_ID` | Analytics ID | Métricas de uso |
| `REDIS_URL` | Cache URL | Para caching avanzado |

### Generación de Secrets

```bash
# JWT Secret (256 bits)
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# NextAuth Secret
openssl rand -base64 32
```

## 🐛 Troubleshooting

### Problemas Comunes

#### Build Fallando

```bash
# Error: Out of memory
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build

# Error: TypeScript
npm run type-check
# Corregir errores antes de build
```

#### Variables de Entorno No Funcionan

```bash
# Verificar en runtime
curl https://tu-app.vercel.app/api/health

# Logs de Vercel
vercel logs tu-app.vercel.app

# Docker logs
docker logs container-name
```

#### Performance Issues

```bash
# Analizar bundle
npm run analyze

# Lighthouse audit
npx lighthouse https://tu-app.vercel.app --view
```

### Health Checks

La aplicación incluye endpoints para monitoreo:

```bash
# Health check básico
curl https://tu-app.vercel.app/api/health

# Response esperado:
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "version": "1.0.0",
  "environment": "production"
}
```

### Logs y Monitoreo

#### Vercel Logs

```bash
# Ver logs en tiempo real
vercel logs tu-app.vercel.app --follow

# Logs de función específica
vercel logs tu-app.vercel.app --since=1h
```

#### Docker Logs

```bash
# Ver logs del contenedor
docker logs -f nuestro-pulso

# Logs de compose
docker-compose logs -f app
```

### Rollback

#### Vercel

```bash
# Listar deployments
vercel list

# Promover deployment anterior
vercel promote deployment-url
```

#### Docker

```bash
# Rollback a imagen anterior
docker tag nuestro-pulso:previous nuestro-pulso:latest
docker-compose up -d
```

## 📊 Monitoreo Post-Deploy

### Métricas Importantes

1. **Response Time**: < 200ms para páginas estáticas
2. **API Latency**: < 500ms para endpoints
3. **Error Rate**: < 1% de requests
4. **Uptime**: > 99.9%

### Alertas Recomendadas

- Error rate > 5%
- Response time > 1s
- Health check failing
- Memory usage > 80%

## 🔄 Proceso de Release

### 1. Preparación

```bash
# Feature branch
git checkout -b feature/nueva-funcionalidad

# Desarrollo y testing
npm run test
npm run build

# Commit y push
git commit -m "feat: nueva funcionalidad"
git push origin feature/nueva-funcionalidad
```

### 2. Review

- Crear Pull Request
- Code review por equipo
- CI/CD automático ejecuta tests

### 3. Deploy

```bash
# Merge a main
git checkout main
git merge feature/nueva-funcionalidad

# Push trigger auto-deploy
git push origin main
```

### 4. Verificación

- Smoke tests en producción
- Monitoreo de métricas
- Rollback si es necesario

---

**¿Necesitas ayuda?** Revisa la sección de [troubleshooting](#troubleshooting) o abre un issue en GitHub.