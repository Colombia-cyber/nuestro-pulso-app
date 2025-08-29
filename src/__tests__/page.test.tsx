import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

// Mock the auth provider
jest.mock('@/components/providers/auth-provider', () => ({
  AuthProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useAuth: () => ({
    user: null,
    login: jest.fn(),
    logout: jest.fn(),
    loading: false,
  }),
}));

// Mock the toast provider
jest.mock('@/components/providers/toast-provider', () => ({
  ToastProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />);
    
    const heading = screen.getByRole('heading', { 
      name: /tu voz importa en colombia/i 
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the call-to-action buttons', () => {
    render(<HomePage />);
    
    const joinButton = screen.getByRole('link', { name: /únete ahora/i });
    const learnMoreButton = screen.getByRole('link', { name: /conoce más/i });
    
    expect(joinButton).toBeInTheDocument();
    expect(learnMoreButton).toBeInTheDocument();
  });

  it('displays statistics', () => {
    render(<HomePage />);
    
    expect(screen.getByText('10,000+')).toBeInTheDocument();
    expect(screen.getByText('Ciudadanos Activos')).toBeInTheDocument();
    expect(screen.getByText('500+')).toBeInTheDocument();
    expect(screen.getByText('Propuestas Ciudadanas')).toBeInTheDocument();
  });
});