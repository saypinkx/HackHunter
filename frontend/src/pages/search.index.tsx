import { createFileRoute, Navigate } from '@tanstack/react-router';

export const Route = createFileRoute('/search/')({
  component: () => <Navigate to="/search/teams" replace />,
});
