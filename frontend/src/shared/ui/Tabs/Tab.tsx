import { useContext } from 'react';
import { TabsContext } from './context';
import { css, cx } from '@style/css';

interface TabsItemProps {
  id: string;
  title: string;
  active?: boolean;
  onClick?: (tabId: string) => void;
}

const tabCls = css({
  display: 'flex',
  color: 'var(--text-tertiary-color)',
  alignItems: 'center',
  justifyContent: 'center',
  textStyle: 'header2',
  cursor: 'pointer',
});

const activeTabCls = css({
  color: 'var(--text-primary-color)',
});

export const Tab = ({ id, title, active, onClick }: TabsItemProps) => {
  const context = useContext(TabsContext);
  const isActive = active ?? context.activeTab === id;
  const onTabClick = onClick ?? context.onClick;

  return (
    <div className={cx(tabCls, isActive && activeTabCls)} onClick={() => onTabClick?.(id)}>
      {title}
    </div>
  );
};
