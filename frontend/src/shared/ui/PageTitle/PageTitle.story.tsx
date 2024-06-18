import type { Meta, StoryObj } from '@storybook/react';
import { PageTitle } from './PageTitle';

const meta = {
  title: 'Components/PageTitle',
  component: PageTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    text: 'Title',
  },
};
