import { css, cva } from '@style/css';
import { Link, useLocation } from '@tanstack/react-router';
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

const linksCls = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    textAlign: 'center',
    cursor: 'pointer',
    textStyle: 'buttonMini',
  },
  variants: {
    type: {
      base: { color: 'text.tertiary' },
      active: { color: 'text.primary' },
    },
  },
});

export const Navigation = ({ links }: NavigationProps) => {
  const pathname = useLocation({ select: (state) => state.pathname });

  return (
    <div className={containerCls}>
      {links.map(({ href, content }) => (
        <Link key={href} to={href} className={linksCls({ type: pathname.startsWith(href) ? 'active' : 'base' })}>
          {content}
        </Link>
      ))}
    </div>
  );
};
