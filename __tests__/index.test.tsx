import { render, screen } from '@testing-library/react'
import Home from '~/pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a logo heading', () => {
    render(<Home />)

    const logo = screen.getByRole('heading', {
      name: /f's pg/i,
    })

    expect(logo).toBeInTheDocument()
  })
  it('renders a favourites link', () => {
    render(<Home />)

    const favourites = screen.getByRole('heading', {
      name: /favourites/i,
    })

    expect(favourites).toBeInTheDocument()
  })
})