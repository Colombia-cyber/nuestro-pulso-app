# Nuestro Pulso 🇨🇴

**Una plataforma de participación ciudadana para fortalecer las comunidades colombianas**

[![Deploy to GitHub Pages](https://github.com/Colombia-cyber/nuestro-pulso-app/actions/workflows/deploy.yml/badge.svg)](https://github.com/Colombia-cyber/nuestro-pulso-app/actions/workflows/deploy.yml)
[![Vercel](https://img.shields.io/badge/vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## 🌟 Características

- **💬 Chat Comunitario**: Comunicación en tiempo real entre miembros
- **🗣️ Debates**: Espacios para discusión constructiva sobre temas importantes
- **📊 Encuestas**: Recolección de opiniones y retroalimentación ciudadana
- **📰 Noticias**: Centro de información comunitaria actualizada
- **🤝 Comunidad**: Eventos, grupos y conexiones entre miembros
- **⚙️ Administración**: Panel completo para gestión comunitaria

## 🌐 Características Técnicas

- **🚀 Moderno**: Construido con React 18, TypeScript y Vite
- **🎨 Diseño Responsivo**: Interfaz adaptable con Tailwind CSS
- **🌍 Bilingüe**: Soporte completo para Español e Inglés
- **📱 Mobile-First**: Optimizado para dispositivos móviles
- **⚡ Rápido**: Optimización de rendimiento y carga rápida
- **🔧 Mantenible**: Arquitectura escalable y código limpio

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18 o superior
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Colombia-cyber/nuestro-pulso-app.git

# Navegar al directorio
cd nuestro-pulso-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Previsualizar build de producción
npm run lint         # Ejecutar linter
```

## 🏗️ Arquitectura

```
src/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes de interfaz básicos
│   ├── layout/         # Componentes de diseño
│   └── features/       # Componentes específicos por funcionalidad
├── pages/              # Páginas principales de la aplicación
├── hooks/              # Custom React hooks
├── lib/                # Utilidades y funciones auxiliares
├── types/              # Definiciones de tipos TypeScript
├── i18n/               # Configuración de internacionalización
│   └── locales/        # Archivos de traducción
├── store/              # Gestión de estado
└── assets/             # Recursos estáticos
```

## 🎨 Sistema de Diseño

El proyecto utiliza un sistema de diseño basado en Tailwind CSS con:

- **Colores**: Paleta principal con variantes primarias y secundarias
- **Tipografía**: Sistema jerárquico con fuente Inter
- **Espaciado**: Sistema consistente de márgenes y padding
- **Componentes**: Librería de componentes reutilizables
- **Modo Oscuro**: Preparado para implementación futura

## 🌍 Internacionalización

La aplicación soporta múltiples idiomas usando react-i18next:

- **Español (es)**: Idioma principal (por defecto)
- **Inglés (en)**: Idioma secundario
- **Fácil extensión**: Estructura preparada para más idiomas

## 🚀 Despliegue

### GitHub Pages

```bash
npm run build
# Los archivos se generan en dist/
```

El despliegue automático está configurado con GitHub Actions.

### Vercel

```bash
npm run deploy:vercel
```

O conecta el repositorio directamente en el panel de Vercel.

### Otras Plataformas

El proyecto está optimizado para despliegue en:
- Netlify
- Firebase Hosting
- AWS S3 + CloudFront
- Cualquier hosting de archivos estáticos

## 🛠️ Desarrollo

### Estructura de Componentes

```typescript
// Ejemplo de componente
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';

export function MiComponente() {
  const { t } = useTranslation();
  
  return (
    <div className="p-4">
      <h1>{t('titulo')}</h1>
      <Button onClick={handleClick}>
        {t('boton')}
      </Button>
    </div>
  );
}
```

### Añadir Nuevas Funcionalidades

1. **Crear página**: Añadir en `src/pages/`
2. **Añadir ruta**: Actualizar `src/App.tsx`
3. **Componentes**: Crear en `src/components/features/`
4. **Traducciones**: Actualizar archivos en `src/i18n/locales/`
5. **Tipos**: Definir en `src/types/`

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`)
3. Confirma tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

### Guías de Contribución

- Usa TypeScript para nuevos archivos
- Sigue las convenciones de naming establecidas
- Añade traducciones para nuevos textos
- Incluye tests cuando sea apropiado
- Mantén la documentación actualizada

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Reconocimientos

### Desarrollado por
- **Colombia-cyber** - Desarrollador principal y arquitecto del proyecto

### Tecnologías Utilizadas
- [React](https://reactjs.org/) - Librería de interfaz de usuario
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [Vite](https://vitejs.dev/) - Herramienta de build rápida
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [React Router](https://reactrouter.com/) - Enrutamiento para React
- [React i18next](https://react.i18next.com/) - Internacionalización
- [Lucide React](https://lucide.dev/) - Iconos

### Inspiración
Este proyecto está inspirado en la necesidad de fortalecer la participación ciudadana y la cohesión comunitaria en Colombia, promoviendo espacios digitales seguros para el diálogo y la colaboración.

---

**Hecho con ❤️ para las comunidades colombianas**

[![Colombia](https://img.shields.io/badge/🇨🇴-Hecho_en_Colombia-yellow)](https://github.com/Colombia-cyber/nuestro-pulso-app)
