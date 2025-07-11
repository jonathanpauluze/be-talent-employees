import { render, screen } from '@testing-library/react'
import { Header } from './'

describe('Header', () => {
  it('renderiza header', () => {
    render(<Header />)
    const element = screen.getByRole('banner')
    expect(element).toBeInTheDocument()
  })
})
