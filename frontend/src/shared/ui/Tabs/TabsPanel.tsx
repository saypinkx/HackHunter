import type { ReactNode } from '@tanstack/react-router';
import { Tabs } from './Tabs';
import { Tab } from './Tab';
import type { PropsWithChildren } from 'react';
import { css } from '@style/css';

interface TabsPanelProps {
  children: ReactNode;
}

const tabsPanelCls = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

const TabsPanelComponent = ({ children }: TabsPanelProps) => {
  return <div className={tabsPanelCls}>{children}</div>;
};

export const TabsPanel = Object.assign(TabsPanelComponent, {
  Tabs,
  Tab,
  Content: ({ children }: PropsWithChildren) => <div>{children}</div>,
});
