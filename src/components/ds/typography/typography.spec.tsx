import { render, screen } from '@testing-library/react'
import { Typography } from './typography'

describe('Typography', () => {
  it('renderiza como parágrafo padrão', () => {
    render(<Typography>Texto padrão</Typography>)
    const element = screen.getByText('Texto padrão')
    expect(element.tagName.toLowerCase()).toBe('p')
  })

  it('renderiza como heading h1', () => {
    render(<Typography as="h1">Título</Typography>)
    const element = screen.getByRole('heading', { level: 1 })
    expect(element).toBeInTheDocument()
  })

  it('aceita e aplica className customizado', () => {
    render(<Typography className="custom-class">Com classe</Typography>)
    const element = screen.getByText('Com classe')
    expect(element).toHaveClass('custom-class')
  })
})
