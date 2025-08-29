import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    
    const heading = screen.getByRole('heading', {
      name: /conectando ciudadanos con la democracia/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders the navigation', () => {
    render(<Home />)
    
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    
    expect(screen.getByRole('link', { name: /nuestro pulso/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /inicio/i })).toHaveLength(2) // Nav and footer
    expect(screen.getAllByRole('link', { name: /participar/i })).toHaveLength(3) // Nav, footer, and CTA button
    expect(screen.getAllByRole('link', { name: /noticias/i })).toHaveLength(3) // Nav, footer, and CTA button
  })

  it('renders feature cards', () => {
    render(<Home />)
    
    expect(screen.getByRole('heading', { name: /🗳️ participación/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /📢 noticias/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /💬 comunidad/i })).toBeInTheDocument()
  })

  it('renders call-to-action buttons', () => {
    render(<Home />)
    
    const participarLink = screen.getByRole('link', {
      name: /comenzar a participar/i,
    })
    const noticiasLink = screen.getByRole('link', {
      name: /ver noticias/i,
    })

    expect(participarLink).toBeInTheDocument()
    expect(noticiasLink).toBeInTheDocument()
  })

  it('renders stats section', () => {
    render(<Home />)
    
    expect(screen.getByText(/impacto de la participación ciudadana/i)).toBeInTheDocument()
    expect(screen.getByText(/25M/)).toBeInTheDocument()
    expect(screen.getByText(/150\+/)).toBeInTheDocument()
    expect(screen.getByText(/89%/)).toBeInTheDocument()
  })

  it('renders footer', () => {
    render(<Home />)
    
    expect(screen.getByText(/construyendo democracia participativa en colombia/i)).toBeInTheDocument()
  })
})