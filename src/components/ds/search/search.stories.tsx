import { useState } from 'react'
import { Search } from './search'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Search> = {
  title: 'Design System/Search',
  component: Search,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Search>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <div style={{ padding: 16 }}>
        <Search {...args} value={value} onChange={setValue} />
        <p style={{ marginTop: 8 }}>Valor: {value}</p>
      </div>
    )
  }
}

export const WithDebounce: Story = {
  args: {
    debounceTime: 1500
  },
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <div style={{ padding: 16 }}>
        <Search {...args} value={value} onChange={setValue} />
        <p style={{ marginTop: 8 }}>Valor com debounce: {value}</p>
      </div>
    )
  }
}
