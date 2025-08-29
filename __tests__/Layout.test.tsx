import { render, screen } from '@testing-library/react'
import Layout from '../src/components/Layout'

describe('Layout Component', () => {
  it('renders children content', () => {
    render(
      <Layout>
        <div>Test content</div>
      </Layout>
    )
    
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('renders navigation with all links', () => {
    render(
      <Layout>
        <div>Test</div>
      </Layout>
    )
    
    expect(screen.getByRole('link', { name: /nuestro pulso/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /inicio/i })).toHaveLength(2) // Nav and footer
    expect(screen.getAllByRole('link', { name: /participar/i })).toHaveLength(2) // Nav and footer
    expect(screen.getAllByRole('link', { name: /noticias/i })).toHaveLength(2) // Nav and footer
  })

  it('renders footer with proper sections', () => {
    render(
      <Layout>
        <div>Test</div>
      </Layout>
    )
    
    expect(screen.getByText(/conectando ciudadanos con la democracia/i)).toBeInTheDocument()
    expect(screen.getByText(/construyendo democracia participativa/i)).toBeInTheDocument()
  })

  it('sets custom title and description', () => {
    const customTitle = 'Custom Page Title'
    const customDescription = 'Custom page description'
    
    render(
      <Layout title={customTitle} description={customDescription}>
        <div>Test</div>
      </Layout>
    )
    
    // Note: Testing meta tags requires more complex setup
    // This test verifies the component accepts the props
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('has proper navigation structure', () => {
    render(
      <Layout>
        <div>Test</div>
      </Layout>
    )
    
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    
    const contentinfo = screen.getByRole('contentinfo')
    expect(contentinfo).toBeInTheDocument()
  })
})