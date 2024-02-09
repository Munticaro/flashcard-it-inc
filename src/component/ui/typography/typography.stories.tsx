import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'body1',
        'body2',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'link1',
        'link2',
        'overline',
        'subtitle1',
        'subtitle2',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Body1: Story = {
  args: {
    children: 'Body',
    variant: 'body1',
  },
}

export const Body2: Story = {
  args: {
    children: 'Body',
    variant: 'body2',
  },
}

export const Caption: Story = {
  args: {
    children: 'Caption',
    variant: 'caption',
  },
}
export const H1: Story = {
  args: {
    children: 'Header',
    variant: 'h1',
  },
}
export const H2: Story = {
  args: {
    children: 'Header',
    variant: 'h2',
  },
}
export const H3: Story = {
  args: {
    children: 'Header',
    variant: 'h3',
  },
}
export const H4: Story = {
  args: {
    children: 'Header',
    variant: 'h1',
  },
}
export const Link1: Story = {
  args: {
    children: 'Link',
    variant: 'link1',
  },
}
export const Link2: Story = {
  args: {
    children: 'Link',
    variant: 'link2',
  },
}
export const Overline: Story = {
  args: {
    children: 'Overline',
    variant: 'overline',
  },
}
export const Subtitle1: Story = {
  args: {
    children: 'Subtitle',
    variant: 'subtitle1',
  },
}
export const Subtitle2: Story = {
  args: {
    children: 'Subtitle',
    variant: 'subtitle2',
  },
}
