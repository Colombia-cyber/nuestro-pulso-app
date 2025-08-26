# Nuestro Pulso App

Nuestro Pulso is a React-based community platform for news, debates, events, and real-time chat. It uses Create React App with Tailwind CSS for styling and React Router for navigation.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Bootstrap and Setup
- `npm install` -- installs all dependencies. Takes ~2 minutes. NEVER CANCEL. Set timeout to 300+ seconds.
- Run the development server: `npm start` -- starts on http://localhost:3000. Takes ~15-20 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
- Build the application: `npm run build` -- creates production build. Takes ~30-60 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
- Run tests: `npm test -- --watchAll=false --passWithNoTests` -- runs test suite. Takes ~5-10 seconds.
- Lint code: `npx eslint src/ --fix` -- automatically fixes linting issues. Takes ~5-10 seconds.

### Development Workflow
- ALWAYS run `npm install` first after cloning the repository
- ALWAYS start the development server with `npm start` for testing changes
- ALWAYS run `npx eslint src/ --fix` before committing changes
- ALWAYS test the build with `npm run build` before finalizing changes

## Validation Scenarios

**CRITICAL: Always manually validate functionality through complete user scenarios after making changes.**

### Required Validation Steps:
1. **Home Page Navigation**: Visit http://localhost:3000 and verify all navigation links work (Home, Chat, Debate, Survey, Admin)
2. **Chat System End-to-End**:
   - Click "Chat" or "Join Chat" 
   - Enter username (min 3 chars) and password (min 5 chars)
   - Click "Join Chat" button
   - Send a test message and verify it appears in the chat
3. **Debate Feature**: Navigate to /debate and verify the debate host information displays
4. **Survey Feature**: Navigate to /survey and verify the survey interface loads
5. **Admin Feature**: Navigate to /admin and verify the admin panel loads

### Authentication Requirements:
- Chat login requires username ≥ 3 characters and password ≥ 5 characters
- Use test credentials: username: "testuser", password: "password123"

## Project Structure

### Key Files and Directories:
- `src/App.js` -- Main application component with routing, chat, debate, and survey functionality
- `src/ChatPage.js` -- Alternative chat component with Tailwind styling
- `src/HomePage.js` -- Home page component
- `src/index.js` -- React application entry point
- `src/index.css` -- Tailwind CSS imports and custom styles
- `public/index.html` -- HTML template
- `package.json` -- Dependencies and build scripts
- `tailwind.config.js` -- Tailwind CSS configuration
- `postcss.config.js` -- PostCSS configuration for Tailwind

### Dependencies:
- **React 18.2.0** with React Router 6.8.0 for navigation
- **react-scripts 5.0.1** for Create React App tooling
- **Tailwind CSS 3.3.0** for styling with PostCSS and Autoprefixer
- **ESLint** included via react-scripts for code linting

## Common Tasks

### Repository Structure
```
.
├── README.md
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── public/
│   └── index.html
└── src/
    ├── App.js
    ├── ChatPage.js
    ├── HomePage.js
    ├── index.css
    └── index.js
```

### Application Features:
- **Home Page**: Landing page with navigation to chat and debate features
- **Chat System**: Real-time community chat with user authentication
- **Weekly Debate**: Debate platform with host information (Adriana Charry)
- **Survey System**: Survey creation and voting functionality
- **Admin Controls**: Administrative interface for user management

### Navigation:
- All pages accessible via top navigation bar: Home, Chat, Debate, Survey, Admin
- React Router handles client-side routing
- Chat requires authentication before access

### Styling:
- Tailwind CSS for responsive design and modern UI
- Custom scrollbar styling for chat interface
- Gradient backgrounds and hover effects
- Mobile-responsive layout

## Troubleshooting

### Common Issues:
- **Build failures**: Ensure all dependencies are installed with `npm install`
- **ESLint errors**: Run `npx eslint src/ --fix` to auto-fix most issues
- **Chat not working**: Verify username ≥ 3 chars and password ≥ 5 chars
- **Missing styles**: Ensure Tailwind CSS is properly configured and PostCSS is working

### Expected Warnings:
- React DevTools warning in console (normal for development)
- React Router future flag warnings (non-breaking)
- Autocomplete attribute warnings for password fields (cosmetic)

### Development Server Notes:
- Runs on port 3000 by default
- Hot reload enabled for development
- Console warnings about React DevTools are normal
- External image placeholder URLs may be blocked by browser (does not affect functionality)

## Performance Notes:
- **Installation**: ~2 minutes
- **Development server startup**: ~15-20 seconds  
- **Production build**: ~30-60 seconds
- **Test execution**: ~5-10 seconds
- **Linting**: ~5-10 seconds

**NEVER CANCEL long-running commands. Wait for completion.**