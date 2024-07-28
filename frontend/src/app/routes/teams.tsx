import { createFileRoute } from '@tanstack/react-router';
import { Page, Spinner } from '@shared/ui';

export const Route = createFileRoute('/teams')({
  component: () => (
    <Page>
      <Spinner />
    </Page>
  ),
});
