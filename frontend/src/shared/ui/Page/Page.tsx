import { css } from '@style/css';
import type { ReactNode } from 'react';

interface PageProps {
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

const pageCls = css({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
});

const contentCls = css({
  height: '100%',
  overflowY: 'auto',
});

export const Page = ({ header, children, footer }: PageProps) => {
  return (
    <div className={pageCls}>
      {header}
      <div className={contentCls}>{children}</div>
      {footer}
    </div>
  );
};
