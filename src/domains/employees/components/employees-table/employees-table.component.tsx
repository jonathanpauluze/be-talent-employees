import { Table, type TableColumn } from '@/ds/table'
import styles from './employees-table.module.scss'
import { type Employee } from '@/domains/employees'

interface EmployeesTableProps {
  data: Employee[]
}

export function EmployeesTable(props: Readonly<EmployeesTableProps>) {
  const { data } = props

  const columns: TableColumn<Employee>[] = [
    {
      key: 'image',
      label: 'Foto',
      width: '64px',
      className: styles.avatarCol,
      render: (value) => (
        <img src={value as string} alt="avatar" width={32} height={32} />
      ),
      mobileVisible: true
    },
    {
      key: 'name',
      label: 'Nome',
      mobileVisible: true
    },
    {
      key: 'job',
      label: 'Cargo',
      mobileVisible: false
    },
    {
      key: 'admission_date',
      label: 'Admissão',
      render: (value) => {
        return new Intl.DateTimeFormat('pt-BR').format(new Date(value))
      },
      mobileVisible: false
    },
    {
      key: 'phone',
      label: 'Telefone',
      render: (value) => {
        const phone = value as string
        return `(${phone.slice(3, 5)}) ${phone.slice(5, 10)}-${phone.slice(10)}`
      },
      mobileVisible: false
    }
  ]

  return <Table columns={columns} data={data} rowKey={(row) => row.id} />
}
