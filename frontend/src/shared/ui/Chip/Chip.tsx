import { css, cx } from '@style/css';
import type { ReactNode } from 'react';

interface ChipProps {
  className?: string;
  children: ReactNode;
}

const chipCls = css({
  width: 'min-content',
  borderRadius: '16px',
  padding: '8px 12px',
  textStyle: 'body2',
  whiteSpace: 'nowrap',
  display: 'flex',
  alignItems: 'center',
});

export const Chip = ({ className, children }: ChipProps) => {
  return <div className={cx(chipCls, className)}>{children}</div>;
};
