# Nuestro Pulso App

Nuestro Pulso is a React-based community platform for news, debates, events, and chat functionality. It uses Create React App, Tailwind CSS for styling, React Router for navigation, and includes Firebase integration capabilities.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap, build, and test the repository:
- NEVER CANCEL: `npm install` -- takes 2-3 minutes. Set timeout to 300+ seconds.
- NEVER CANCEL: `npm run build` -- takes 5-10 seconds. Build is fast for this project.
- Run tests: `npm test -- --watchAll=false --passWithNoTests` (no tests exist currently)
- Check for linting issues: `npx eslint src/`

### Run the application:
- Development server: `npm start` -- starts on http://localhost:3000
- Production build: After `npm run build`, install serve globally with `npm install -g serve` then run `serve -s build`
- ALWAYS run `npm install` first before any other commands if starting fresh

### Key Dependencies
The application requires these main dependencies (already configured in package.json):
- React 18.2.0
- React Router DOM 6.8.0  
- React Scripts 5.0.1 (Create React App)
- Firebase 9.17.0
- Tailwind CSS 3.3.0

## Validation

### Manual Testing Scenarios
ALWAYS test these scenarios after making changes:
1. **Home Page Navigation**: Visit http://localhost:3000 and verify the main page loads with "Nuestro Pulso" title and navigation buttons
2. **Chat Functionality**: Click "Join Chat" button, enter a username, join chat, and send a test message
3. **Debate Pages**: Navigate to /debate and /survey routes to ensure they load properly
4. **Admin Controls**: Test admin functionality by logging in as "adriana-charry" user
5. **Responsive Design**: Verify the application works on different screen sizes

### Build Validation
- ALWAYS run `npm run build` after making changes to ensure production build succeeds
- Test production build with `serve -s build` to verify optimized version works
- Check that no console errors appear in browser developer tools

## Common Tasks

### Fixing Common Issues
- **Duplicate code errors**: The original codebase had duplicate exports and imports. Look for and remove duplicate function definitions or import statements
- **Missing dependencies**: If imports fail, check package.json and run `npm install`
- **Tailwind not working**: Verify postcss.config.js exists and contains proper Tailwind configuration

### Key Files and Locations

#### Repository Root
```
.
├── README.md (minimal project description)
├── package.json (React app with Tailwind dependencies)
├── package-lock.json (auto-generated after npm install)
├── postcss.config.js (Tailwind CSS configuration)
├── tailwind.config.js (Tailwind configuration)
├── public/
│   └── index.html (main HTML template)
├── src/
│   ├── App.js (main app component with routing)
│   ├── index.js (React app entry point)
│   ├── index.css (Tailwind imports and custom styles)
│   ├── HomePage.js (home page component)
│   ├── ChatPage.js (chat functionality)
│   └── firebase.js v (Firebase configuration template)
└── build/ (created after npm run build)
```

#### Main Components
- **App.js**: Contains the main application with React Router setup, error boundary, navigation, and all page components
- **HomePage.js**: Landing page with gradient styling
- **ChatPage.js**: Real-time chat interface with username login
- **firebase.js v**: Firebase configuration template (requires actual Firebase credentials to work)

### Understanding the Application Structure

#### Routes Available
- `/` - Home page with platform introduction
- `/chat` - Chat interface requiring username login
- `/debate` - Weekly debate page hosted by Adriana Charry
- `/survey` - Debate survey creation and voting
- `/admin` - Admin controls (only accessible to host user)

#### Special Users
- **Host user**: "adriana-charry" has special privileges for hosting debates and accessing admin controls
- **Default users**: "user1", "user2" are configured for testing

#### Styling
- Uses Tailwind CSS extensively with custom gradient backgrounds
- Custom scrollbar styling for chat interface  
- Responsive design with mobile-friendly layouts
- Custom CSS animations for fade-in effects

## Development Workflow

### Making Changes
1. Always run `npm start` to test changes in development mode
2. Test all major user flows manually in browser
3. Run `npm run build` to verify production build works
4. Use `npx eslint src/` to check for code quality issues
5. No specific test suite exists, so manual testing is critical

### Firebase Integration
- Firebase is included as a dependency but requires configuration
- Update `src/firebase.js v` with actual Firebase project credentials
- Currently configured for Realtime Database

### Performance Notes
- Development server starts in ~10-15 seconds
- Build process is very fast (~5-10 seconds) due to small codebase
- npm install takes 2-3 minutes on first run
- Production bundle size is ~56KB (gzipped)

## Troubleshooting

### Common Build Errors
- **Duplicate exports**: Remove duplicate function definitions or export statements
- **Missing imports**: Ensure all React Router and React imports are present
- **Tailwind not loading**: Verify postcss.config.js exists and index.css imports Tailwind

### Development Server Issues
- Port 3000 conflicts: Change port with `PORT=3001 npm start`
- Clear cache if needed: Delete node_modules and package-lock.json, then `npm install`

### Production Build Issues
- Build folder missing: Run `npm run build` first
- Serve command not found: Install with `npm install -g serve`

Remember: This is a single-page application (SPA) using React Router, so all routing is handled client-side. Direct URL access to routes like /chat or /debate will work in development but may need server configuration for production deployment.