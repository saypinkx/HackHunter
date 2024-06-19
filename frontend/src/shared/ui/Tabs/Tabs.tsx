import { css } from '@style/css';
import { useMemo, type ReactNode } from 'react';
import { TabsContext } from './context';

interface TabsProps {
  activeTab?: string;
  onClick?: (tabId: string) => void;
  children: ReactNode;
}

const containerCls = css({
  display: 'flex',
  flexDirection: 'row',
  gap: '24px',
});

export const Tabs = ({ activeTab, onClick, children }: TabsProps) => {
  const tabsContextValue = useMemo(() => ({ activeTab, onClick }), [activeTab, onClick]);

  return (
    <div className={containerCls}>
      <TabsContext.Provider value={tabsContextValue}>{children}</TabsContext.Provider>
    </div>
  );
};
