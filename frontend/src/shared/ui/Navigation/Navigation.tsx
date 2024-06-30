import { css } from '@style/css';
import { Link } from '@tanstack/react-router';
import type { ReactNode } from 'react';

export interface NavigationProps {
  links: { href: string; content: ReactNode }[];
}

const containerCls = css({
  display: 'grid',
  gridTemplateColumns: '4',
  columnGap: '20px',
  paddingBlock: '12px',
});

const itemCls = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  textAlign: 'center',
  color: 'var(--text-tertiary-color)',
  cursor: 'pointer',
  textStyle: 'buttonMini',
});

const activeItemCls = css({
  color: 'var(--text-primary-color)',
});

export const Navigation = ({ links }: NavigationProps) => {
  return (
    <div className={containerCls}>
      {links.map(({ href, content }) => (
        <Link key={href} to={href} className={itemCls} activeProps={{ className: activeItemCls }}>
          {content}
        </Link>
      ))}
    </div>
  );
};
