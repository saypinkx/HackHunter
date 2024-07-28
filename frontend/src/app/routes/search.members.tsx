import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/search/members')({
  component: () => <div>Hello /search/members!</div>,
});
