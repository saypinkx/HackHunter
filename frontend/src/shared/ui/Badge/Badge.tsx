import { css, cx } from '@style/css';
import type { ReactNode } from 'react';

interface BadgeProps {
  className?: string;
  children: ReactNode;
}

const badgeCls = css({
  borderRadius: '8px',
  padding: '2px 8px',
  width: 'min-content',
  backgroundColor: 'silver',
  textStyle: 'body2',
});

export const Badge = ({ className, children }: BadgeProps) => {
  return <div className={cx(badgeCls, className)}>{children}</div>;
};
