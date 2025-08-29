# Copilot Instructions for Nuestro Pulso App

## Project Overview
Nuestro Pulso is a Colombian civic engagement platform that enables citizens to participate in democratic processes through polls, feedback, and community engagement tools.

## Development Guidelines

### Code Style and Standards
- Use TypeScript for all new code
- Follow React/Next.js best practices
- Use Tailwind CSS for styling
- Implement responsive design patterns
- Follow accessibility guidelines (WCAG 2.1)

### Security Requirements
- Always validate user input
- Use proper authentication and authorization
- Implement CSRF protection
- Follow OWASP security guidelines
- Never expose sensitive data in client-side code

### Colombian Context
- Spanish language support (es-CO locale)
- Colombian timezone support (America/Bogota)
- Integration with Colombian civic data when available
- Cultural sensitivity in UX/UI design
- Support for Colombian government standards

### Architecture Patterns
- Use Next.js App Router
- Implement proper error boundaries
- Use React Server Components when appropriate
- Implement proper loading and error states
- Follow clean architecture principles

### Performance Requirements
- Optimize for mobile devices (primary user base)
- Implement image optimization
- Use proper caching strategies
- Minimize bundle size
- Implement lazy loading for large components

### Testing Guidelines
- Write unit tests for utility functions
- Implement integration tests for critical paths
- Use accessibility testing tools
- Test on multiple devices and browsers
- Include performance testing

### Deployment and CI/CD
- Use GitHub Actions for CI/CD
- Deploy to Vercel for production
- Use GitHub Pages for documentation
- Implement proper environment management
- Monitor deployment health

### Data Management
- Use proper database schemas
- Implement data validation
- Follow GDPR and Colombian data protection laws
- Implement proper backup strategies
- Use proper migration strategies

## File Structure
```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
├── lib/                # Utility functions and configurations
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── styles/             # Global styles and Tailwind config
└── __tests__/          # Test files
```

## Key Features to Implement
1. **Civic Polls**: Create and participate in community polls
2. **Feedback System**: Submit feedback to local government
3. **Community Forums**: Discussion spaces for civic topics
4. **Event Management**: Civic events and meetings
5. **Resource Library**: Educational civic materials
6. **User Dashboard**: Personal civic engagement tracking

## Colombian Government Integration
- Support for national ID verification
- Integration with municipal systems where possible
- Compliance with Colombian digital government standards
- Multi-language support (Spanish primary, indigenous languages)

## Accessibility Requirements
- Screen reader compatibility
- Keyboard navigation
- High contrast mode support
- Text size adjustment
- Support for assistive technologies

## Mobile-First Approach
- Responsive design for all screen sizes
- Touch-friendly interfaces
- Offline capability for core features
- Progressive Web App (PWA) features
- Fast loading on slow connections

Remember: This platform serves Colombian citizens and should reflect their needs, culture, and civic processes.