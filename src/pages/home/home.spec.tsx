import { render, screen } from '@testing-library/react'
import Home from '.'
import * as useEmployeesModule from '@/domains/employees/hooks/use-employees'

// Mock do layout e componentes internos
vi.mock('@/layouts/default-layout', () => ({
  DefaultLayout: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  )
}))
vi.mock('@/ds/typography', () => ({
  Typography: ({ children }: { children: React.ReactNode }) => (
    <h1>{children}</h1>
  )
}))
vi.mock('@/ds/search', () => ({
  Search: () => <input placeholder="Pesquisar" />
}))
vi.mock('@/domains/employees/components/employees-table', () => ({
  EmployeesTable: ({ data }: { data: unknown[] }) => (
    <div>Table: {data.length} funcionários</div>
  )
}))
vi.mock('@/components/shared/spinner', () => ({
  Spinner: () => <div>Carregando...</div>
}))

describe('<Home />', () => {
  it('exibe o spinner durante o carregamento', () => {
    vi.spyOn(useEmployeesModule, 'useEmployees').mockReturnValue({
      loading: true,
      data: [],
      error: null
    })

    render(<Home />)

    expect(screen.getByText('Funcionários')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Pesquisar')).toBeInTheDocument()
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })

  it('exibe a tabela com dados após carregamento', () => {
    vi.spyOn(useEmployeesModule, 'useEmployees').mockReturnValue({
      loading: false,
      data: [
        {
          id: 1,
          name: 'João',
          job: 'Back-end',
          admission_date: '2019-12-02T00:00:00.000Z',
          phone: '5521999999999',
          image: 'http://mock.image'
        },
        {
          id: 2,
          name: 'Maria',
          job: 'Front-end',
          admission_date: '2019-12-02T00:00:00.000Z',
          phone: '5521999999999',
          image: 'http://mock.image'
        }
      ],
      error: null
    })

    render(<Home />)

    expect(screen.getByText('Funcionários')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Pesquisar')).toBeInTheDocument()
    expect(screen.getByText('Table: 2 funcionários')).toBeInTheDocument()
  })
})
