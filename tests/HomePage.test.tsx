import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import HomePage from '../src/pages/HomePage'
import { it, expect } from 'vitest'

it('renders home page with Colombian civic engagement content', () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  )
  expect(screen.getByText('Nuestro Pulso')).toBeInTheDocument()
  expect(screen.getByText('Plataforma de Participación Ciudadana Colombiana')).toBeInTheDocument()
})