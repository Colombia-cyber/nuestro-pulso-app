# Nuestro Pulso - Community Platform

**ALWAYS reference these instructions first and only fallback to search or bash commands when you encounter unexpected information that contradicts what is documented here.**

Nuestro Pulso is a React 18 single-page application built with Vite, featuring community chat, weekly debates, surveys, and admin controls. It's deployed automatically to GitHub Pages.

## Working Effectively

### Bootstrap, Build, and Run the Application
- **Install dependencies**: `npm install` -- takes ~8 seconds. NEVER CANCEL.
- **Build for production**: `npm run build` -- takes ~2 seconds. NEVER CANCEL.
- **Start development server**: `npm run dev` -- starts immediately on port 3000
- **Preview production build**: `npm run preview` -- starts immediately on port 4173

### Development Server Requirements
- **CRITICAL**: Development server runs on `http://localhost:3000/nuestro-pulso-app/` (note the base path)
- **DO NOT** use `http://localhost:3000/` directly - it will show routing errors
- The base path `/nuestro-pulso-app/` is required due to GitHub Pages deployment configuration

### Build and Deployment
- **Manual deployment**: `npm run deploy` -- builds and deploys to GitHub Pages using gh-pages
- **Automatic deployment**: Pushes to `main` branch trigger GitHub Actions workflow (.github/workflows/deploy.yml)
- **Build output**: Files are generated in `dist/` directory

## Validation

### Required User Scenarios to Test After Changes
Always manually test these complete workflows to ensure the application functions correctly:

1. **Navigation Test**: 
   - Visit `http://localhost:3000/nuestro-pulso-app/`
   - Click through Home, Chat, Debate, Survey, Admin navigation links
   - Verify all pages load without errors

2. **Chat Functionality Test**:
   - Navigate to Chat page
   - Enter any username and password in login form
   - Click "Join Chat" button
   - Type a test message and click "Send"
   - Verify message appears in chat history

3. **Application Routes Test**:
   - Test `/` (Home) - should show "Nuestro Pulso" heading
   - Test `/chat` - should show login form or chat interface
   - Test `/debate` - should show "Weekly Debate" with host info
   - Test `/survey` - should show "Debate Survey" interface
   - Test `/admin` - should show admin controls (if logged in as host)

### NO Testing Framework
- **No unit tests**: No Jest, Vitest, or testing libraries are configured
- **No test commands**: `npm test` does not exist
- **No linting**: No ESLint or Prettier configuration exists
- Manual validation through user scenarios is the only testing approach

## Technology Stack and Architecture

### Dependencies
- **React 18**: Main UI framework with React Router DOM for client-side routing
- **Vite**: Build tool and development server (very fast builds)
- **Tailwind CSS**: Utility-first CSS framework for styling
- **gh-pages**: Deployment to GitHub Pages

### Project Structure
```
src/
├── App.jsx          # Main application with routing and all components
├── index.jsx        # Application entry point
├── index.css        # Global styles and Tailwind imports
├── ChatPage.jsx     # Alternative chat implementation (not currently used)
├── HomePage.jsx     # Homepage component (not currently used)
└── (firebase.js - referenced but doesn't exist)

Root files:
├── index.html           # HTML template
├── vite.config.js       # Vite configuration with GitHub Pages base path
├── tailwind.config.js   # Tailwind CSS configuration
├── package.json         # Dependencies and scripts
└── .github/workflows/deploy.yml  # GitHub Actions deployment workflow
```

### Key Components in App.jsx
- **ErrorBoundary**: React error boundary wrapper
- **Navbar**: Navigation component with routing links
- **ChatAuthGate**: Login form for chat access
- **ChatComponent**: Main chat interface with messaging
- **WeeklyDebate**: Debate hosting interface
- **DebateSurvey**: Survey creation and voting system
- **AdminControls**: Moderator tools (mute, kick, ban users)
- **Home**: Landing page component
- **NotFound**: 404 error page

### Configuration Details
- **GitHub Pages Base**: `/nuestro-pulso-app/` (configured in vite.config.js)
- **Development Port**: 3000 (configured in vite.config.js)
- **Preview Port**: 4173 (Vite default)
- **Homepage URL**: `https://colombia-cyber.github.io/nuestro-pulso-app`

## Common Tasks

### Development Workflow
1. **Start development**: `npm install && npm run dev`
2. **Access application**: Navigate to `http://localhost:3000/nuestro-pulso-app/`
3. **Make changes**: Edit files in `src/` directory
4. **Test changes**: Use manual validation scenarios above
5. **Build for production**: `npm run build`
6. **Preview production**: `npm run preview` then visit `http://localhost:4173/nuestro-pulso-app/`

### Available npm Scripts
```bash
npm run dev       # Start development server
npm run build     # Build for production  
npm run preview   # Preview production build
npm run deploy    # Deploy to GitHub Pages
npm run predeploy # Runs automatically before deploy (npm run build)
```

### Files Output from Common Commands

#### Repository Root Contents
```
.git/
.github/
.gitignore
README.md
index.html
package-lock.json
package.json
src/
tailwind.config.js
vite.config.js
node_modules/
dist/               # Created after npm run build
```

#### After `npm run build` - dist/ Contents
```
dist/
├── index.html
└── assets/
    ├── index-[hash].css    # Compiled Tailwind styles (~0.66 kB)
    └── index-[hash].js     # Bundled React app (~174 kB)
```

## Important Notes

### Authentication System
- **Chat login**: Accepts any username/password - no real authentication
- **Admin access**: Only user with username "adriana-charry" can access admin controls
- **User state**: Managed locally in React state, not persisted

### Known Behaviors
- **Chat messages**: Stored in local component state only (not persisted)
- **Survey data**: Stored in local component state only (not persisted)  
- **External images**: Uses placehold.co for avatar placeholders
- **Console warnings**: React Router future flag warnings are normal and expected

### Deployment Configuration
- **Automatic deployment**: GitHub Actions deploys on push to main branch
- **Node.js version**: Uses Node.js 18 in CI/CD pipeline
- **Build artifacts**: Only `dist/` folder is deployed to GitHub Pages
- **Branch protection**: Changes should go through pull requests to main branch

### Performance Expectations
- **Install time**: ~8 seconds for `npm install`
- **Build time**: ~2 seconds for `npm run build`
- **Dev server startup**: Near-instant startup
- **Hot reload**: Vite provides fast hot module replacement during development

Always verify your changes work by running through the complete user scenarios above, especially the chat login and messaging flow.