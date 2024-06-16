import { css } from '@style/css';
import SpinnerImg from './Spinner.svg?react';

interface SpinnerProps {
  size?: number;
}

const containerCls = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

const spinnerCls = css({
  animation: 'spin',
});

export const Spinner = ({ size = 36 }: SpinnerProps) => {
  return (
    <div className={containerCls}>
      <SpinnerImg width={size} height={size} className={spinnerCls} />
    </div>
  );
};
