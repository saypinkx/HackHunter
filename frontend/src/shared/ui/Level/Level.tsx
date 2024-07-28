import { css } from '@style/css';
import LevelImage from './level.svg?react';
import { token } from '@style/tokens';

export interface LevelProps {
  level: number;
}

const containerCls = css({
  position: 'relative',
});

const textCls = css({
  position: 'absolute',
  inset: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  fontFamily: '"JetBrains mono", mono',
});

export const Level = ({ level }: LevelProps) => {
  return (
    <div className={containerCls}>
      <div className={textCls}>{level}</div>
      <LevelImage fill={token('colors.pastel.blue.dark')} stroke={token('colors.black')} />
    </div>
  );
};
