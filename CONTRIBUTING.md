# Contributing to Nuestro Pulso

Thank you for your interest in contributing to Nuestro Pulso, Colombia's civic engagement platform! 🇨🇴

## Code of Conduct

This project adheres to high standards of civic engagement and democratic values. All contributors are expected to:

- Respect all participants regardless of background
- Focus on constructive dialogue and solutions
- Maintain professionalism in all interactions
- Support Colombian democratic values and transparency

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 8.0.0 or higher
- Git

### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/nuestro-pulso-app.git
   cd nuestro-pulso-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

5. Open http://localhost:3000

### Development Workflow

1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes
3. Run tests and linting:
   ```bash
   npm run lint
   npm run type-check
   npm test
   npm run build
   ```

4. Commit using conventional commits:
   ```bash
   git commit -m "feat: add new civic feature"
   ```

5. Push and create a pull request

## Project Structure

```
src/
├── components/     # Reusable React components
├── pages/          # Next.js pages (routing)
├── styles/         # CSS and styling
├── types/          # TypeScript type definitions
└── utils/          # Utility functions

__tests__/          # Test files
.github/            # GitHub workflows and templates
public/             # Static assets
```

## Coding Standards

### TypeScript
- Use TypeScript for all new files
- Define proper interfaces for all props and data structures
- Avoid `any` type - use proper typing

### React
- Use functional components with hooks
- Follow React best practices
- Ensure all components are accessible (WCAG 2.1)

### Styling
- Use Colombian flag colors: `#fcdb00` (yellow), `#0038a8` (blue), `#ce1126` (red)
- Follow mobile-first responsive design
- Maintain design consistency across components

### Testing
- Write unit tests for all components
- Maintain >80% test coverage
- Test accessibility compliance
- Include integration tests for user workflows

## Colombian Context Guidelines

### Language
- Primary language: Spanish (Colombia)
- Use formal but accessible language
- Avoid technical jargon
- Consider regional Colombian variations

### Cultural Considerations
- Respect Colombian democratic traditions
- Use appropriate governmental terminology
- Consider diverse Colombian communities
- Ensure inclusivity for all citizens

### Legal Compliance
- Respect Colombian data protection laws
- Ensure government information accuracy
- Follow accessibility requirements
- Maintain transparency standards

## Feature Development

### New Features
1. Create GitHub issue describing the feature
2. Discuss approach with maintainers
3. Implement with tests
4. Update documentation
5. Submit pull request

### Bug Fixes
1. Create GitHub issue describing the bug
2. Include reproduction steps
3. Implement fix with test
4. Verify fix doesn't break existing functionality

## Pull Request Process

1. Ensure all tests pass
2. Update documentation if needed
3. Add proper commit messages
4. Request review from maintainers
5. Address feedback promptly

### Pull Request Template
- [ ] Tests pass locally
- [ ] Documentation updated
- [ ] Accessibility tested
- [ ] Colombian context appropriate
- [ ] No breaking changes

## Community

### Getting Help
- Create GitHub issue for bugs
- Use discussions for questions
- Contact maintainers for urgent issues

### Recognition
Contributors are recognized in:
- Repository contributors list
- Release notes
- Annual civic engagement reports

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT).

---

**Together, we're building democratic participation in Colombia!** 🇨🇴