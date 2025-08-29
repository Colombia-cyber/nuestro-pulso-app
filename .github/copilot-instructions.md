# Copilot Instructions for Nuestro Pulso

This repository contains the **Nuestro Pulso** Colombian civic engagement platform, designed to enhance democratic participation through digital tools.

## About This Project

Nuestro Pulso is a web application that enables Colombian citizens to:
- Participate in government consultations and polls
- Stay informed about government news and local updates
- Connect with fellow citizens in civic engagement
- Access bilingual content (Spanish/English)

## Architecture

- **Framework**: Next.js 14 with TypeScript
- **Styling**: CSS3 with Colombian flag-inspired design (🇨🇴 colors)
- **Deployment**: GitHub Pages with static export
- **Testing**: Jest with React Testing Library

## Development Guidelines

### Code Style
- Use TypeScript for all new files
- Follow Next.js best practices for pages and components
- Maintain accessibility standards (WCAG 2.1)
- Use semantic HTML and proper ARIA labels
- Follow Colombian flag color scheme: `#fcdb00` (yellow), `#0038a8` (blue), `#ce1126` (red)

### File Organization
```
src/
├── pages/          # Next.js pages (routing)
├── components/     # Reusable React components
├── styles/         # Global and component styles
└── types/          # TypeScript type definitions
```

### Key Features to Implement
1. **Civic Participation Module**: Voting interface for polls and consultations
2. **News Integration**: Government and local news aggregation
3. **Community Features**: Citizen discussion forums and chat
4. **Bilingual Support**: Spanish (primary) and English
5. **Accessibility**: Full WCAG 2.1 AA compliance
6. **Mobile-First**: Responsive design for all devices

### Technical Requirements
- Maintain static export compatibility for GitHub Pages
- Ensure SSG (Static Site Generation) for optimal performance
- Implement proper SEO meta tags
- Use CSS modules or styled-components for component styling
- Maintain high test coverage (>80%)

### Colombian Context
- Use Colombian peso (COP) for any financial displays
- Include Colombian government colors and symbols appropriately
- Respect Colombian cultural norms and language preferences
- Consider Colombian internet infrastructure (optimize for slower connections)

## Common Tasks

### Adding New Pages
1. Create file in `src/pages/`
2. Add proper TypeScript types
3. Include Colombian-themed styling
4. Add navigation links where appropriate
5. Write tests in `__tests__/`

### Adding Components
1. Create in `src/components/`
2. Use TypeScript interfaces for props
3. Include accessibility attributes
4. Add responsive CSS
5. Export from component index file

### Internationalization
- Prepare all strings for i18n (future implementation)
- Use clear, governmental-appropriate Spanish
- Avoid complex technical jargon
- Consider regional Colombian variations

## Testing Strategy
- Unit tests for all components
- Integration tests for page functionality
- Accessibility testing with jest-axe
- Performance testing for mobile devices

## Deployment
- Auto-deploy to GitHub Pages on main branch
- Staging environment on develop branch
- Manual review required for production releases

## Contributing
Follow the established patterns in the codebase and ensure all changes support the mission of enhancing democratic participation in Colombia.

---

**Mission**: Building democratic participation in Colombia, one citizen at a time. 🇨🇴