# 🇨🇴 Nuestro Pulso - Plataforma Democrática Digital

Una plataforma completa de engagement cívico diseñada específicamente para la comunidad colombiana, que integra herramientas modernas de participación democrática con un diseño sofisticado inspirado en la identidad nacional.

## 🌐 Demostraciones en Vivo

- **GitHub Pages**: [https://colombia-cyber.github.io/nuestro-pulso-app](https://colombia-cyber.github.io/nuestro-pulso-app)
- **Vercel**: [Configuración disponible](#deployment-on-vercel)

## ✨ Características Principales

### 🎨 Diseño Colombiano Sofisticado
- **Tema Nacional**: Colores de la bandera colombiana (Amarillo #FFD100, Azul #0038A8, Rojo #CE1126)
- **Glass Morphism**: Efectos de cristal con fondo sutil de la bandera
- **Responsive Design**: Optimizado para móviles (alta penetración móvil en Colombia)
- **Interfaz Bilingüe**: Español primario con soporte para inglés

### 🚀 Herramientas de Participación Cívica

#### 💬 Chat Comunitario
- Sistema de chat en tiempo real con timestamps en zona horaria de Bogotá
- Autenticación de usuarios con roles (ciudadano/moderador)
- Interfaz intuitiva con temas colombianos
- Moderación integrada

#### 🗣️ Plataforma de Debates
- Debates estructurados sobre temas cívicos colombianos
- Sistema de comentarios con likes y timestamps
- Moderación en vivo por facilitadores
- Temas sugeridos por la comunidad

#### 📊 Sistema de Encuestas Democráticas
- Encuestas públicas sobre temas de importancia nacional
- Resultados transparentes en tiempo real
- Creación de encuestas por usuarios
- Análisis estadístico visual

#### 📰 Centro de Noticias Integrado
- Noticias de Colombia, Australia y Estados Unidos
- Categorización por temas políticos y cívicos
- Integración con debates y discusiones
- Fuentes verificadas y confiables

#### 👥 Panel de Administración
- Herramientas de moderación comunitaria
- Gestión de usuarios activos
- Cola de revisión de contenido
- Estadísticas de participación

## 🛠️ Stack Tecnológico

- **Frontend**: React 18 con React Router DOM
- **Styling**: Tailwind CSS con temas personalizados colombianos
- **Build Tool**: Vite para desarrollo y construcción optimizada
- **Deployment**: GitHub Pages + Vercel
- **Package Manager**: npm

## 📦 Instalación y Desarrollo

### Prerrequisitos

- Node.js 18 o superior
- npm

### Configuración Local

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Colombia-cyber/nuestro-pulso-app.git
   cd nuestro-pulso-app
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:3000/nuestro-pulso-app/`

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo con hot-reload
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción localmente
- `npm run deploy` - Despliega a GitHub Pages (manual)

## 🚀 Despliegue

### Despliegue Automático en GitHub Pages

El proyecto incluye un workflow de GitHub Actions que despliega automáticamente a GitHub Pages cuando se hace push a la rama `main`:

1. Los cambios se pushean a `main`
2. GitHub Actions ejecuta el build
3. El sitio se despliega automáticamente a GitHub Pages

### Despliegue en Vercel

1. **Conectar repositorio**:
   - Importa el proyecto desde GitHub en Vercel
   - Vercel detectará automáticamente la configuración

2. **Configuración automática**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Variables de entorno** (opcional):
   ```
   VITE_BASE_URL=/
   ```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Background.jsx          # Wrapper de fondo colombiano
│   ├── Navigation.jsx          # Navegación con tema nacional
│   ├── EnhancedHome.jsx        # Página principal mejorada
│   ├── EnhancedChat.jsx        # Chat con timestamps
│   ├── EnhancedDebate.jsx      # Plataforma de debates
│   ├── EnhancedSurvey.jsx      # Sistema de encuestas
│   └── NewsComponent.jsx       # Centro de noticias
├── App.jsx                     # Componente principal con routing
├── index.jsx                   # Punto de entrada
└── index.css                   # Estilos globales y tema colombiano

public/
├── images/
│   ├── colombian-flag.svg      # Bandera de Colombia
│   └── angry-crowd-silhouette.svg # Elementos decorativos
└── index.html                  # HTML base

.github/
└── workflows/
    └── deploy.yml              # CI/CD para GitHub Pages
```

## 🎯 Características de Participación Cívica

### Autenticación y Roles
- **Ciudadanos**: Pueden participar en chats, debates y encuestas
- **Moderadores**: Acceso a herramientas de administración
- **Sistema simple**: Username "admin" obtiene privilegios de moderador

### Temas de Debate Incluidos
1. **Reforma Política en Colombia**
2. **Implementación del Acuerdo de Paz**
3. **Políticas de Seguridad Ciudadana**

### Fuentes de Noticias
- **Colombia**: El Tiempo, Semana, El Espectador
- **Australia**: ABC News, The Guardian Australia
- **Estados Unidos**: Associated Press, Reuters

## 🔧 Configuración

### Variables CSS Personalizadas
```css
:root {
  --colombian-yellow: #FFD100;
  --colombian-blue: #0038A8;
  --colombian-red: #CE1126;
  --colombian-gold: #d4af37;
}
```

### Configuración de Vite
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/nuestro-pulso-app/',
  build: {
    outDir: 'dist'
  }
})
```

## 🤝 Contribución

1. **Fork** el repositorio
2. **Crea** una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. **Commit** tus cambios (`git commit -m 'Agregar nueva característica'`)
4. **Test** localmente con `npm run dev`
5. **Build** y verifica con `npm run build && npm run preview`
6. **Push** a la rama (`git push origin feature/nueva-caracteristica`)
7. **Crea** un Pull Request

### Guías de Contribución

- Mantén el tema colombiano en nuevas características
- Sigue las convenciones de nomenclatura existentes
- Incluye documentación para nuevas funcionalidades
- Asegúrate de que el build pase antes de crear PR

## 📄 Licencia

Este proyecto está disponible bajo la [Licencia MIT](LICENSE).

## 🙏 Reconocimientos

- Inspirado en las mejores prácticas de participación democrática digital
- Diseño basado en elementos culturales colombianos
- Construido con amor para fortalecer la democracia 🇨🇴

---

**Construyendo democracia digital, una conversación a la vez.** 💫