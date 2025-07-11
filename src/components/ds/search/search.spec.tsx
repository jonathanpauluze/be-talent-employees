import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Search } from './search'

describe('Search', () => {
  it('renderiza com placeholder e valor inicial', () => {
    render(<Search value="abc" onChange={() => {}} placeholder="Buscar algo" />)
    const input = screen.getByPlaceholderText('Buscar algo')
    expect(input).toBeInTheDocument()
    expect((input as HTMLInputElement).value).toBe('abc')
  })

  it('chama onChange imediatamente sem debounce', () => {
    const handleChange = vi.fn()
    render(<Search value="" onChange={handleChange} />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'Jon' } })
    expect(handleChange).toHaveBeenCalledWith('Jon')
  })

  it('chama onChange com atraso quando debounce é usado', async () => {
    const handleChange = vi.fn()
    render(<Search value="" onChange={handleChange} debounceTime={300} />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'Dev' } })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith('')

    await waitFor(
      () => {
        expect(handleChange).toHaveBeenCalledWith('Dev')
      },
      { timeout: 500 }
    )
  })
})
