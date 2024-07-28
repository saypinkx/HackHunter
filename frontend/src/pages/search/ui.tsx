import { css } from '@style/css';
import { Outlet, useLocation, useNavigate } from '@tanstack/react-router';
import { Page, PageTitle, TabsPanel } from '@shared/ui';
import { NavMenu } from '@widgets';

export function SearchPage() {
  const navigate = useNavigate();
  const tabId = useLocation({ select: ({ pathname }) => pathname.split('/').at(-1) });

  return (
    <Page header={<PageTitle text="Найти" />} footer={<NavMenu />}>
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
