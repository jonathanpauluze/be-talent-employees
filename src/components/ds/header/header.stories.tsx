import type { Meta, StoryObj } from '@storybook/react-vite'
import { Header } from './header'

const meta: Meta<typeof Header> = {
  title: 'Design System/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
  render: () => <Header />
}
