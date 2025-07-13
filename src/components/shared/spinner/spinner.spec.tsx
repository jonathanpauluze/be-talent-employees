import { render, screen } from '@testing-library/react'
import { Spinner } from '.'

describe('Spinner', () => {
  it('renderiza o spinner corretamente', () => {
    render(<Spinner />)

    const spinner = screen.getByRole('status', { name: /carregando/i })
    expect(spinner).toBeInTheDocument()
  })

  it('possui a classe de estilo correta', () => {
    render(<Spinner />)

    const spinner = screen.getByRole('status', { name: /carregando/i })
    expect(spinner.className).toMatch(/spinner/)
  })
})
