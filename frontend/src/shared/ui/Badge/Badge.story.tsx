import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { css } from '@style/css';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    className: css({ backgroundColor: 'blue' }),
    children: 'badge',
  },
};
