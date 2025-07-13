import type { Meta, StoryObj } from '@storybook/react-vite'
import { Logo } from './logo'

const meta: Meta<typeof Logo> = {
  title: 'Design System/Logo',
  component: Logo,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Logo>

export const Default: Story = {
  render: () => <Logo />
}

export const WithWidthAndHeight: Story = {
  render: () => <Logo width={180} height={80} />
}

export const WithCustomClass: Story = {
  render: () => (
    <>
      <style>
        {`
        .custom {
          width: auto!important;
          height: auto!important;
          border: 4px solid #dc82ff;
          border-radius: 1rem;
          padding: 1rem;
          background-color: #ffffff;
        }
      `}
      </style>

      <Logo className="custom" />
    </>
  )
}
