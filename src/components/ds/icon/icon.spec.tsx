import { render, screen } from '@testing-library/react'
import { Icon } from './icon'

describe('Icon', () => {
  it('renderiza o ícone "search"', () => {
    render(<Icon name="search" />)
    const icon = screen.getByRole('img', { hidden: true })
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('width', '24')
    expect(icon).toHaveAttribute('height', '24')
  })

  it('renderiza o ícone com tamanho pequeno (sm)', () => {
    render(<Icon name="chevron-down" size="sm" />)
    const icon = screen.getByRole('img', { hidden: true })
    expect(icon).toHaveAttribute('width', '16')
    expect(icon).toHaveAttribute('height', '16')
  })

  it('renderiza o ícone com tamanho grande (lg)', () => {
    render(<Icon name="chevron-down" size="lg" />)
    const icon = screen.getByRole('img', { hidden: true })
    expect(icon).toHaveAttribute('width', '32')
    expect(icon).toHaveAttribute('height', '32')
  })

  it('renderiza com className customizada', () => {
    render(<Icon name="chevron-up" className="custom-class" />)
    const icon = screen.getByRole('img', { hidden: true })
    expect(icon).toHaveClass('custom-class')
  })

  it('não quebra se nome inválido for passado', () => {
    // @ts-expect-error: testando nome inválido
    render(<Icon name="inexistente" />)
    expect(screen.queryByRole('img', { hidden: true })).not.toBeInTheDocument()
  })
})
