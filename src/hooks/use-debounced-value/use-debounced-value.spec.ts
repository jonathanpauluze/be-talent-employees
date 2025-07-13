import { renderHook, act } from '@testing-library/react'
import { useDebouncedValue } from './'

vi.useFakeTimers()

describe('useDebouncedValue', () => {
  it('retorna o valor inicial imediatamente', () => {
    const { result } = renderHook(() => useDebouncedValue('test input', 500))
    expect(result.current).toBe('test input')
  })

  it('atualiza o valor apenas após o tempo de debounce', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebouncedValue(value, delay),
      {
        initialProps: { value: 'test input', delay: 500 }
      }
    )

    rerender({ value: 'changed input', delay: 500 })

    expect(result.current).toBe('test input')

    act(() => {
      vi.advanceTimersByTime(500)
    })

    expect(result.current).toBe('changed input')
  })

  it('cancela atualização se o valor mudar antes do tempo', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebouncedValue(value, delay),
      {
        initialProps: { value: 'test input', delay: 500 }
      }
    )

    rerender({ value: 'change', delay: 500 })

    act(() => {
      vi.advanceTimersByTime(300)
    })

    rerender({ value: 'change again', delay: 500 })

    act(() => {
      vi.advanceTimersByTime(500)
    })

    expect(result.current).toBe('change again')
  })
})
