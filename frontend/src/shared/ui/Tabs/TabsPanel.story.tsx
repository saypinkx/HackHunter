import type { Meta, StoryFn } from '@storybook/react';
import { TabsPanel } from './TabsPanel';
import { useState } from 'react';

const meta = {
  title: 'Components/TabsPanel',
  component: TabsPanel,
  parameters: {},
} satisfies Meta<typeof TabsPanel>;

export default meta;
export const Base: StoryFn = () => {
  const [activeTab, setActiveTab] = useState('1');

  return (
    <TabsPanel>
      <TabsPanel.Tabs activeTab={activeTab} onClick={setActiveTab}>
        <TabsPanel.Tab id="1" title="Tab 1" />
        <TabsPanel.Tab id="2" title="Tab 2" />
        <TabsPanel.Tab id="3" title="Tab 3" />
      </TabsPanel.Tabs>
      <TabsPanel.Content>
        {activeTab === '1' && <div>tab 1 content</div>}
        {activeTab === '2' && <div>tab 2 content</div>}
        {activeTab === '3' && <div>tab 3 content</div>}
      </TabsPanel.Content>
    </TabsPanel>
  );
};
