import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { css } from '@style/css';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    size: 'm',
    view: 'normal',
    disabled: false,
    children: 'Откликнуться',
  },
};

export const Gallery: Story = {
  args: {
    children: '',
  },
  render: () => {
    return (
      <div className={css({ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '16px' })}>
        {(['s', 'm'] as const).map((size) => (
          <>
            <Button view="normal" size={size}>
              normal-{size}
            </Button>
            <Button view="action" size={size}>
              action-{size}
            </Button>
            <Button view="flat" size={size}>
              flat-{size}
            </Button>
            <Button view="outlined" size={size}>
              outlined-{size}
            </Button>
            <Button disabled size={size}>
              disabled-{size}
            </Button>
          </>
        ))}
      </div>
    );
  },
};
