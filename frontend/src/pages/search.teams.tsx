import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/search/teams')({
  component: () => <div>Hello /search/teams!</div>,
});
