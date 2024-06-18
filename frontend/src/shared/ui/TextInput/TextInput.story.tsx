import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TextInput } from './TextInput';

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {},
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: 'label',
    message: 'message',
    beforeContent: <span>before</span>,
    afterContent: <span>after</span>,
    placeholder: 'Введите текст...',
    hasClear: true,
    disabled: false,
    hasError: false,
  },
};
