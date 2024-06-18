import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { css } from '@style/css';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    className: css({ height: '300px' }),
  },
};
