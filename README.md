# Nuestro Pulso 🇨🇴

**Plataforma de Participación Ciudadana Colombiana**

Una plataforma digital moderna que fortalece la democracia colombiana a través de la participación ciudadana activa.

## 🚀 Características

- **💬 Chat Comunitario**: Conecta con ciudadanos de toda Colombia
- **🗣️ Debates Democráticos**: Participa en debates sobre temas nacionales
- **📊 Encuestas Ciudadanas**: Comparte tu opinión en encuestas oficiales
- **📰 Noticias Verificadas**: Mantente informado con fuentes confiables
- **👥 Comunidad**: Espacios para la participación comunitaria
- **⚙️ Panel de Administración**: Herramientas para gestionar la plataforma

## 🌟 Funcionalidades Principales

### Diseño Colombiano Auténtico
- Colores de la bandera colombiana integrados en toda la interfaz
- Diseño responsive optimizado para uso móvil
- Interfaz bilingüe (Español/Inglés)

### Participación Ciudadana
- Sistema de chat en tiempo real para discusiones constructivas
- Plataforma de debates estructurados sobre temas nacionales
- Sistema de encuestas para recopilar opiniones ciudadanas
- Centro de noticias con fuentes verificadas

### Tecnología Moderna
- Construido con React 18 y Vite
- Diseño responsive con Tailwind CSS
- Configuración optimizada para GitHub Pages
- Arquitectura escalable y mantenible

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 18 o superior
- npm o yarn

### Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/Colombia-cyber/nuestro-pulso-app.git

# Navegar al directorio
cd nuestro-pulso-app

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

### Scripts Disponibles

```bash
# Desarrollo local
npm run dev

# Construir para producción
npm run build

# Vista previa de la build
npm run preview
```

## 🌐 Despliegue

### GitHub Pages (Automático)

La aplicación se despliega automáticamente en GitHub Pages cuando se hace push a la rama `main`. El sitio estará disponible en:

```
https://colombia-cyber.github.io/nuestro-pulso-app/
```

### Despliegue Manual

1. Construir la aplicación:
```bash
npm run build
```

2. Los archivos compilados estarán en la carpeta `dist/`

3. Subir el contenido de `dist/` a tu servidor web

## 📁 Estructura del Proyecto

```
nuestro-pulso-app/
├── public/                 # Archivos públicos
├── src/
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── .github/
│   └── workflows/
│       └── deploy.yml     # CI/CD para GitHub Pages
├── dist/                  # Build de producción
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Personalización

### Colores de Colombia
Los colores de la bandera colombiana están definidos en `tailwind.config.js`:

```javascript
colors: {
  colombia: {
    yellow: '#FCDD09',
    blue: '#003893',
    red: '#CE1126',
    gold: '#FFD700',
  }
}
```

### Componentes Personalizados
La aplicación incluye componentes CSS personalizados en `src/index.css`:

- `.btn-colombia` - Botones con colores de Colombia
- `.card-colombia` - Tarjetas con estilo colombiano
- `.gradient-colombia` - Gradiente con colores de la bandera

## 🌍 Internacionalización

La aplicación soporta español e inglés. Las traducciones se gestionan en el objeto `translations` dentro de `App.jsx`.

Para agregar un nuevo idioma:

1. Añadir las traducciones al objeto `translations`
2. Actualizar el selector de idioma en el componente `Navigation`

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Organización**: Colombia-cyber
- **Repositorio**: [nuestro-pulso-app](https://github.com/Colombia-cyber/nuestro-pulso-app)
- **Sitio Web**: https://colombia-cyber.github.io/nuestro-pulso-app/

## 🙏 Reconocimientos

Desarrollado con ❤️ para fortalecer la democracia colombiana a través de la tecnología.

---

**¡Tu voz importa! Participa en Nuestro Pulso y construyamos juntos el futuro de Colombia! 🇨🇴**