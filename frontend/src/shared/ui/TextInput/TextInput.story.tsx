import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TextInput } from './TextInput';

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {},
  args: { onChange: fn() },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: 'label',
    placeholder: 'Введите текст...',
    hasClear: true,
    disabled: false,
    hasError: false,
  },
};

export const WithError: Story = {
  args: {
    label: 'label',
    message: 'error message',
    placeholder: 'Введите текст...',
    hasClear: true,
    disabled: false,
    hasError: true,
  },
};

export const WithExtraContent: Story = {
  args: {
    label: 'label',
    message: 'message',
    beforeContent: '🐈',
    afterContent: (
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    ),
    placeholder: 'Введите текст...',
    hasClear: true,
    disabled: false,
    hasError: false,
  },
};
