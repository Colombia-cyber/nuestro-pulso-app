# Nuestro Pulso App

Una aplicación React para monitorear el pulso de nuestra comunidad.

## 🚀 Tecnologías

- **React 18** - Biblioteca de UI
- **Vite** - Herramienta de construcción rápida
- **Tailwind CSS** - Framework de CSS utilitario
- **PostCSS** - Procesador de CSS

## 📦 Instalación

```bash
npm install
```

## 🛠️ Desarrollo

```bash
npm run dev
```

La aplicación se ejecutará en `http://localhost:3000`

## 🏗️ Construcción

```bash
npm run build
```

Los archivos construidos se generarán en el directorio `dist/`

## 🌐 Despliegue en Vercel

Esta aplicación está configurada para desplegarse automáticamente en Vercel:

### Configuración incluida:
- ✅ `vercel.json` con configuración de build y rutas
- ✅ Node.js versión 18.17.0 especificada
- ✅ Scripts de build optimizados
- ✅ Configuración de Vite para Vercel
- ✅ Manejo de SPA (Single Page Application)

### Variables de entorno:
- `NODE_VERSION`: 18.17.0 (definida en vercel.json)

### Comandos de despliegue:
1. **Build Command**: `npm run build`
2. **Output Directory**: `dist`
3. **Install Command**: `npm install`

## 📁 Estructura del proyecto

```
nuestro-pulso-app/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── dist/              # Directorio de build (generado)
├── index.html
├── package.json
├── vite.config.js
├── vercel.json        # Configuración de Vercel
├── tailwind.config.js
├── postcss.config.js
├── .nvmrc            # Versión de Node.js
└── .gitignore
```

## 🔧 Resolución de problemas de despliegue

### Issues comunes resueltos:
1. ✅ Package.json malformado (corregido)
2. ✅ Dependencias faltantes (añadidas)
3. ✅ Configuración de Vercel (creada)
4. ✅ Versión de Node.js especificada
5. ✅ Estructura de archivos completa
6. ✅ Configuración de build optimizada

### Si hay problemas de despliegue:
1. Verificar que `npm run build` funcione localmente
2. Revisar la configuración en `vercel.json`
3. Confirmar que la versión de Node.js sea compatible (18.17.0)
4. Verificar que todas las dependencias estén en `package.json`

## 📝 Licencia

Este proyecto está bajo licencia MIT.