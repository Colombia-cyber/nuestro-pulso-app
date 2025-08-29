# 🇨🇴 Nuestro Pulso - Plataforma de Participación Ciudadana

[![CI/CD Pipeline](https://github.com/Colombia-cyber/nuestro-pulso-app/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/Colombia-cyber/nuestro-pulso-app/actions/workflows/ci-cd.yml)
[![Deploy to GitHub Pages](https://github.com/Colombia-cyber/nuestro-pulso-app/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Colombia-cyber/nuestro-pulso-app/actions/workflows/pages/pages-build-deployment)

Una plataforma digital moderna diseñada para fortalecer la participación ciudadana y la democracia en Colombia, proporcionando herramientas accesibles para que todos los ciudadanos puedan contribuir al desarrollo de sus comunidades.

## 🌟 Características Principales

- **📊 Encuestas Cívicas**: Participa en consultas sobre temas importantes de tu comunidad
- **💬 Sistema de Retroalimentación**: Envía comentarios y sugerencias directamente a autoridades
- **👥 Foros Comunitarios**: Espacio de discusión y debate sobre asuntos cívicos
- **📅 Eventos Cívicos**: Información sobre reuniones y actividades comunitarias
- **📚 Biblioteca de Recursos**: Materiales educativos sobre participación ciudadana
- **📈 Panel Personal**: Seguimiento de tu actividad y participación cívica

## 🚀 Tecnologías Utilizadas

- **Framework**: [Next.js 15](https://nextjs.org/) con App Router
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Iconos**: [Heroicons](https://heroicons.com/)
- **Linting**: ESLint + Prettier
- **CI/CD**: GitHub Actions
- **Despliegue**: GitHub Pages + Vercel

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js 18 o superior
- npm o yarn

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

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev           # Servidor de desarrollo
npm run build         # Construcción para producción
npm run start         # Servidor de producción
npm run export        # Exportación estática

# Calidad de código
npm run lint          # Ejecutar ESLint
npm run lint:fix      # Corregir errores de ESLint automáticamente
npm run type-check    # Verificar tipos TypeScript

# Testing
npm run test          # Ejecutar pruebas
npm run test:watch    # Pruebas en modo observación
```

## 🏗️ Arquitectura del Proyecto

```
src/
├── app/                 # Páginas con App Router de Next.js
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página de inicio
│   └── about/           # Página "Acerca de"
├── components/          # Componentes reutilizables React
├── lib/                # Utilidades y configuraciones
├── hooks/              # Custom React hooks
├── types/              # Definiciones de tipos TypeScript
└── styles/             # Estilos globales y configuración Tailwind
```

## 🎨 Guía de Estilos

### Colores Temáticos

Basados en los colores de la bandera colombiana:

- **Amarillo Primario**: `#ffc107` - Botones principales y destacados
- **Azul Secundario**: `#2196f3` - Enlaces y elementos secundarios
- **Naranja de Acento**: `#ff9800` - Elementos de énfasis

### Componentes CSS Personalizados

```css
.civic-card      # Tarjetas de contenido con estilo colombiano
.civic-button    # Botones con colores de la bandera
.civic-input     # Campos de entrada estilizados
```

## 🚀 Despliegue

### GitHub Pages (Automático)

El proyecto se despliega automáticamente en GitHub Pages cuando se hace push a la rama `main`.

**URL de producción**: `https://colombia-cyber.github.io/nuestro-pulso-app/`

### Vercel (Opcional)

1. Conectar el repositorio en [Vercel](https://vercel.com)
2. Configurar las variables de entorno necesarias
3. El despliegue se realizará automáticamente

### Configuración Manual

Para despliegue manual:

```bash
npm run build
npm run export
# Los archivos estáticos estarán en ./out/
```

## 🔒 Seguridad

### Características de Seguridad Implementadas

- **Headers de Seguridad**: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- **Auditorías Automáticas**: Verificación de vulnerabilidades en CI/CD
- **Validación de Tipos**: TypeScript para prevenir errores en tiempo de ejecución
- **Sanitización**: Configuración segura para entrada de usuarios

### Variables de Entorno

Crear un archivo `.env.local` para desarrollo:

```env
# Ejemplo de variables (ajustar según necesidades)
NEXT_PUBLIC_API_URL=https://api.ejemplo.com
NEXT_PUBLIC_ANALYTICS_ID=tu-id-analytics
```

## 🧪 Testing

### Configuración de Pruebas

- **Framework**: Jest + Testing Library
- **Cobertura**: Configurada para componentes críticos
- **CI/CD**: Ejecución automática en pull requests

### Ejecutar Pruebas

```bash
npm test              # Ejecutar todas las pruebas
npm run test:watch    # Modo observación
npm run test:coverage # Con reporte de cobertura
```

## 🤝 Contribución

### Cómo Contribuir

1. **Fork** el repositorio
2. **Crear** una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **Abrir** un Pull Request

### Estándares de Código

- Seguir las reglas de ESLint configuradas
- Usar TypeScript para todas las nuevas funcionalidades
- Mantener cobertura de pruebas > 80%
- Documentar funciones complejas
- Seguir convenciones de nombres en español para UI

### Issues y Bug Reports

Usa las plantillas proporcionadas en `.github/` para reportar bugs o solicitar funcionalidades.

## 📱 Responsive Design

La aplicación está optimizada para:

- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px  
- **Desktop**: 1024px+

### Principios de Diseño

- **Mobile-first**: Diseño prioritario para dispositivos móviles
- **Accesibilidad**: Cumple estándares WCAG 2.1
- **Performance**: Optimización para conexiones lentas
- **UX Colombiano**: Adaptado a patrones de uso locales

## 🌍 Internacionalización

### Idiomas Soportados

- **Español (es-CO)**: Idioma principal
- Preparado para expansión a idiomas indígenas

### Localización

- Formato de fechas colombiano
- Zona horaria: America/Bogota
- Moneda: COP (Peso Colombiano)
- Números: Formato latino

## 📊 Analytics y Monitoreo

### Métricas Clave

- Participación ciudadana
- Uso de funcionalidades
- Performance de la aplicación
- Errores y problemas técnicos

## 🆘 Soporte y Ayuda

### Documentación Adicional

- [Guía de Usuario](./docs/user-guide.md)
- [API Documentation](./docs/api.md)
- [Deployment Guide](./docs/deployment.md)

### Contacto

- **Issues**: [GitHub Issues](https://github.com/Colombia-cyber/nuestro-pulso-app/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Colombia-cyber/nuestro-pulso-app/discussions)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- Comunidad colombiana de desarrolladores
- Contributors del proyecto
- Organizaciones cívicas que inspiraron esta plataforma

---

**Nuestro Pulso** - Fortaleciendo la democracia colombiana a través de la tecnología 🇨🇴

*Desarrollado con ❤️ para Colombia*