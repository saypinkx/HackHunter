import { SearchTeamPage } from '@pages/teams';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/search/teams')({
  component: () => <SearchTeamPage />,
});
