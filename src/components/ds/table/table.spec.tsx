import { render, screen, waitFor, within } from '@testing-library/react'
import { Table } from './'
import type { TableColumn } from './table.types'

interface Employee {
  id: number
  name: string
  role: string
}

const columns: TableColumn<Employee>[] = [
  { key: 'name', label: 'Nome' },
  { key: 'role', label: 'Cargo', mobileVisible: false }
]

const data: Employee[] = [
  { id: 1, name: 'Rodrigo Mota', role: 'Front-end' },
  { id: 2, name: 'Giovana L. Arruda', role: 'Back-end' }
]

describe('Table', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1980
    })
  })

  it('renderiza os headers da tabela (modo desktop)', () => {
    render(<Table columns={columns} data={data} rowKey={(row) => row.id} />)

    const tables = screen.getAllByRole('table')
    const desktopTable = tables.find((t) => t.tagName === 'TABLE')

    expect(desktopTable).toBeTruthy()

    const headers = within(desktopTable!).getAllByRole('columnheader')
    expect(headers).toHaveLength(columns.length)
    expect(headers[0]).toHaveTextContent('Nome')
    expect(headers[1]).toHaveTextContent('Cargo')
  })

  it('renderiza os dados da tabela (modo desktop)', () => {
    render(<Table columns={columns} data={data} rowKey={(row) => row.id} />)

    const tables = screen.getAllByRole('table')
    const desktopTable = tables.find((table) => table.tagName === 'TABLE')!

    const cells = within(desktopTable).getAllByRole('cell')

    expect(cells).toHaveLength(data.length * columns.length)
    expect(cells[0]).toHaveTextContent('Rodrigo Mota')
    expect(cells[1]).toHaveTextContent('Front-end')
    expect(cells[2]).toHaveTextContent('Giovana L. Arruda')
    expect(cells[3]).toHaveTextContent('Back-end')
  })

  it('renderiza os dados no modo mobile', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 720
    })

    render(<Table columns={columns} data={data} rowKey={(row) => row.id} />)

    const buttons = screen.getAllByTestId('mobile-toggle')
    expect(buttons).toHaveLength(2)

    const rows = screen.getAllByTestId('mobile-toggle')
    expect(within(rows[0]).getByText('Rodrigo Mota')).toBeInTheDocument()
    expect(within(rows[1]).getByText('Giovana L. Arruda')).toBeInTheDocument()
  })

  it('expande e colapsa os detalhes no modo mobile', async () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 720
    })
    window.dispatchEvent(new Event('resize'))

    render(<Table columns={columns} data={data} rowKey={(row) => row.id} />)

    const buttons = screen.getAllByTestId('mobile-toggle')
    expect(buttons).toHaveLength(data.length)

    const firstToggle = buttons[0]

    expect(firstToggle).toHaveAttribute('aria-expanded', 'false')

    firstToggle.click()

    await waitFor(() => {
      expect(screen.getByTestId('mobile-toggle-content')).toBeInTheDocument()
    })

    expect(firstToggle).toHaveAttribute('aria-expanded', 'true')

    const content = screen.getByTestId('mobile-toggle-content')
    expect(within(content).getByText('Cargo')).toBeInTheDocument()
    expect(within(content).getByText('Front-end')).toBeInTheDocument()

    firstToggle.click()

    await waitFor(() => {
      expect(
        screen.queryByTestId('mobile-toggle-content')
      ).not.toBeInTheDocument()
    })

    expect(firstToggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('renderiza colunas com render customizado', () => {
    const customColumns: TableColumn<Employee>[] = [
      {
        key: 'name',
        label: 'Nome',
        render: (value) => <span data-testid="custom-name">{value}</span>
      },
      { key: 'role', label: 'Cargo' }
    ]

    render(
      <Table columns={customColumns} data={data} rowKey={(row) => row.id} />
    )

    const customNames = screen.getAllByTestId('custom-name')
    expect(customNames).toHaveLength(data.length)
    expect(customNames[0]).toHaveTextContent('Rodrigo Mota')
  })

  it('não mostra o ícone de toggle se não houver colunas ocultas no mobile', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 720
    })
    window.dispatchEvent(new Event('resize'))

    const allVisibleColumns = columns.map((col) => ({
      ...col,
      mobileVisible: true
    }))

    render(
      <Table columns={allVisibleColumns} data={data} rowKey={(row) => row.id} />
    )

    const buttons = screen.getAllByTestId('mobile-toggle')
    expect(buttons).toHaveLength(data.length)

    const upChevrons = screen.queryAllByTestId('chevron-up-icon')
    expect(upChevrons.length).toBe(0)

    const downChevrons = screen.queryAllByTestId('chevron-down-icon')
    expect(downChevrons.length).toBe(0)
  })
})

it('exibe mensagem de estado vazio quando não há dados', () => {
  render(<Table columns={columns} data={[]} rowKey={(row) => row.id} />)

  expect(screen.getByTestId('empty-state')).toBeInTheDocument()
  expect(screen.getByText('Nenhum dado encontrado.')).toBeInTheDocument()
})
