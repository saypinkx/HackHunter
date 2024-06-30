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
  color: 'text.tertiary',
  cursor: 'pointer',
  textStyle: 'buttonMini',
});

const activeItemCls = css({
  color: 'text.primary',
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
