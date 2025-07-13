import { render, screen } from '@testing-library/react'
import { Header } from './'

describe('Header', () => {
  it('renderiza o header', () => {
    render(<Header />)
    const element = screen.getByRole('banner')
    expect(element).toBeInTheDocument()
  })

  it('renderiza o logo', () => {
    render(<Header />)
    expect(screen.getByTestId('logo')).toBeInTheDocument()
  })
})
