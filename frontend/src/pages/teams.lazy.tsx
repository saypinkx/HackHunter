import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/teams')({
  component: () => <div>Hello /teams!</div>,
});
