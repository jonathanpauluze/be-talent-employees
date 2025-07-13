import { renderHook, act } from '@testing-library/react'
import { useIsMobile } from './use-is-mobile'

describe('useIsMobile', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024
    })
  })

  it('retorna false se a largura da tela for maior que o breakpoint', () => {
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)
  })

  it('retorna true se a largura da tela for menor que o breakpoint', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 500
    })

    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(true)
  })

  it('atualiza corretamente quando a tela é redimensionada', () => {
    const { result } = renderHook(() => useIsMobile())

    expect(result.current).toBe(false)

    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 600
      })
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toBe(true)
  })

  it('usa o breakpoint customizado corretamente', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 900
    })

    const { result } = renderHook(() => useIsMobile(1000))
    expect(result.current).toBe(true)

    const { result: result2 } = renderHook(() => useIsMobile(800))
    expect(result2.current).toBe(false)
  })
})
