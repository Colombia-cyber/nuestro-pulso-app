import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    
    const heading = screen.getByRole('heading', {
      name: /nuestro pulso/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders the hero section', () => {
    render(<Home />)
    
    const heroHeading = screen.getByRole('heading', {
      name: /conectando ciudadanos con la democracia/i,
    })

    expect(heroHeading).toBeInTheDocument()
  })

  it('renders feature cards', () => {
    render(<Home />)
    
    expect(screen.getByRole('heading', { name: /🗳️ participación/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /📢 noticias/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /💬 comunidad/i })).toBeInTheDocument()
  })

  it('renders navigation links', () => {
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
})