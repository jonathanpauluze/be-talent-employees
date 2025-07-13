// table.stories.tsx
import { Table } from './'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { TableColumn } from './table.types'

const meta: Meta<typeof Table> = {
  title: 'Design System/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    className: { control: false },
    rowKey: { control: false },
    columns: { control: false },
    data: { control: false }
  }
}

export default meta

export const Default: StoryObj<typeof Table> = {
  render: () => {
    interface Employee {
      id: number
      name: string
      role: string
      admission: string
      phone: string
      avatarUrl: string
    }

    const columns: TableColumn<Employee>[] = [
      {
        key: 'avatarUrl',
        label: 'Foto',
        render: (value) => (
          <img
            src={value as string}
            alt="avatar"
            width={32}
            height={32}
            style={{ borderRadius: '50%' }}
          />
        ),
        className: 'avatar-col',
        width: '64px'
      },
      {
        key: 'name',
        label: 'Nome',
        mobileVisible: true
      },
      {
        key: 'role',
        label: 'Cargo',
        mobileVisible: false
      },
      {
        key: 'admission',
        label: 'Data de admissão',
        mobileVisible: false
      },
      {
        key: 'phone',
        label: 'Telefone',
        mobileVisible: false
      }
    ]

    const data: Employee[] = [
      {
        id: 1,
        name: 'Rodrigo Mota',
        role: 'Front-end',
        admission: '10/04/1998',
        phone: '+55 (55) 55555-555',
        avatarUrl:
          'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg'
      },
      {
        id: 2,
        name: 'Giovana L. Arruda',
        role: 'Front-end',
        admission: '10/04/1990',
        phone: '+55 (55) 55555-555',
        avatarUrl:
          'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg'
      }
    ]

    return (
      <>
        <style>
          {`
            .avatar-col {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `}
        </style>
        <Table data={data} columns={columns} rowKey={(row) => row.id} />
      </>
    )
  }
}

export const WithoutMobileHiddenColumns: StoryObj<typeof Table> = {
  render: () => {
    interface SimpleData {
      id: number
      name: string
      age: number
    }

    const columns: TableColumn<SimpleData>[] = [
      { key: 'name', label: 'Nome' },
      { key: 'age', label: 'Idade' }
    ]

    const data: SimpleData[] = [
      { id: 1, name: 'João', age: 32 },
      { id: 2, name: 'Maria', age: 33 }
    ]

    return <Table columns={columns} data={data} rowKey={(row) => row.id} />
  }
}

export const CustomColumnRender: StoryObj<typeof Table> = {
  render: () => {
    interface User {
      id: number
      name: string
      status: 'Ativo' | 'Inativo'
    }

    const columns: TableColumn<User>[] = [
      { key: 'name', label: 'Nome' },
      {
        key: 'status',
        label: 'Status',
        render: (value) => (
          <span
            style={{
              backgroundColor: value === 'Ativo' ? '#d1fae5' : '#fee2e2',
              color: value === 'Ativo' ? '#065f46' : '#991b1b',
              padding: '0.25rem 0.5rem',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: 600
            }}
          >
            {value}
          </span>
        )
      }
    ]

    const data: User[] = [
      { id: 1, name: 'João', status: 'Ativo' },
      { id: 2, name: 'Maria', status: 'Inativo' }
    ]

    return <Table columns={columns} data={data} rowKey={(row) => row.id} />
  }
}

export const EmptyState: StoryObj<typeof Table> = {
  render: () => {
    interface Minimal {
      id: number
      label: string
    }

    const columns: TableColumn<Minimal>[] = [{ key: 'label', label: 'Label' }]

    const data: Minimal[] = [] // vazio

    return <Table columns={columns} data={data} rowKey={(row) => row.id} />
  }
}
