import { Icon, type IconName } from './icon'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Icon> = {
  title: 'Design System/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ['search', 'chevron-up', 'chevron-down']
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg']
    },
    className: {
      control: 'text'
    }
  },
  args: {
    name: 'search',
    size: 'md'
  }
}

export default meta
type Story = StoryObj<typeof Icon>

export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      {['search', 'chevron-up', 'chevron-down'].map((name) => (
        <div key={name} style={{ textAlign: 'center' }}>
          <Icon name={name as IconName} size="lg" />
          <div style={{ marginTop: 8 }}>{name}</div>
        </div>
      ))}
    </div>
  )
}

export const IconSmall: Story = {
  args: {
    size: 'sm'
  }
}

export const IconMedium: Story = {
  args: {
    size: 'md'
  }
}

export const IconLarge: Story = {
  args: {
    size: 'lg'
  }
}

export const IconWithCustomClass = () => (
  <>
    <style>
      {`
        .custom {
          color: green;
        }
      `}
    </style>
    <Icon name="search" size="lg" className="custom" />
  </>
)
