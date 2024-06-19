import { css } from '@style/css';
import { Outlet, createFileRoute, useNavigate, useLocation } from '@tanstack/react-router';
import { Navigation, Page, PageTitle, TabsPanel } from '@ui';

export const Route = createFileRoute('/search')({
  component: () => <SearchPage />,
});

function SearchPage() {
  const navigate = useNavigate();
  const tabId = useLocation({ select: ({ pathname }) => pathname.split('/').at(-1) });

  return (
    <Page header={<PageTitle text="Найти" />} footer={<Navigation />}>
      <div className={css({ paddingInline: '16px' })}>
        <TabsPanel>
          <TabsPanel.Tabs activeTab={tabId}>
            <TabsPanel.Tab id="teams" title="Команды" onClick={() => navigate({ to: `/search/teams` })} />
            <TabsPanel.Tab id="members" title="Люди" onClick={() => navigate({ to: `/search/members` })} />
          </TabsPanel.Tabs>

          <TabsPanel.Content>
            <Outlet />
          </TabsPanel.Content>
        </TabsPanel>
      </div>
    </Page>
  );
}
