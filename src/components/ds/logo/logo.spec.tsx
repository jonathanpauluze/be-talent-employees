import { render, screen } from '@testing-library/react'
import { Logo } from './'

describe('Logo', () => {
  it('renderiza logo', () => {
    render(<Logo />)
    const element = screen.getByTestId('logo')
    expect(element).toBeInTheDocument()
  })

  it('aceita e aplica className customizado', () => {
    render(<Logo className="custom-class" />)
    const element = screen.getByTestId('logo')
    expect(element).toHaveClass('custom-class')
  })
})
