import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/users')({
  component: () => <div>Hello /users!</div>,
});
