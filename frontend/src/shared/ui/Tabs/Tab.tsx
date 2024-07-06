import { useContext } from 'react';
import { TabsContext } from './context';
import { cva } from '@style/css';

interface TabsItemProps {
  id: string;
  title: string;
  active?: boolean;
  onClick?: (tabId: string) => void;
}

const tabCls = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textStyle: 'header2',
    cursor: 'pointer',
  },
  variants: {
    type: {
      base: { color: 'text.tertiary' },
      active: { color: 'text.primary' },
    },
  },
});

export const Tab = ({ id, title, active, onClick }: TabsItemProps) => {
  const context = useContext(TabsContext);
  const isActive = active ?? context.activeTab === id;
  const onTabClick = onClick ?? context.onClick;

  return (
    <div className={tabCls({ type: isActive ? 'active' : 'base' })} onClick={() => onTabClick?.(id)}>
      {title}
    </div>
  );
};
