import { render, screen } from '@testing-library/react'
import { Icon } from './icon'

describe('Icon', () => {
  it('renderiza o ícone com tamanho padrão (md)', () => {
    render(<Icon name="search" />)
    const icon = screen.getByTestId('search-icon')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('width', '24')
    expect(icon).toHaveAttribute('height', '24')
  })

  it('renderiza com tamanho pequeno (sm)', () => {
    render(<Icon name="chevron-down" size="sm" />)
    const icon = screen.getByTestId('chevron-down-icon')
    expect(icon).toHaveAttribute('width', '16')
  })

  it('renderiza com className customizada', () => {
    render(<Icon name="chevron-up" className="custom-class" />)
    const icon = screen.getByTestId('chevron-up-icon')
    expect(icon).toHaveClass('custom-class')
  })

  it('não renderiza nada se o nome for inválido', () => {
    // @ts-expect-error: testando nome inválido
    render(<Icon name="fake" />)
    const icon = screen.queryByTestId('fake-icon')
    expect(icon).not.toBeInTheDocument()
  })
})
