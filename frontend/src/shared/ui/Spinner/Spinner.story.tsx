import type { Meta, StoryFn } from '@storybook/react';
import { Spinner } from './Spinner';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {},
} satisfies Meta<typeof Spinner>;

export default meta;

export const Base: StoryFn = () => <Spinner />;
