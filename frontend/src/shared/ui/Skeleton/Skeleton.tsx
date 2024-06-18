import { css, cx } from '@style/css';

interface SkeletonProps {
  className?: string;
}

const skeletonCls = css({
  display: 'inline-block',
  position: 'relative',
  zIndex: 0,
  width: '100%',
  height: '100%',
  borderRadius: '8px',
  overflow: 'hidden',
  backgroundColor: 'var(--background-skeleton-color)',

  _after: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'linear-gradient(calc(90deg),transparent,var(--background-skeleton-color))',
    animation: 'skeleton 1.2s ease-out infinite',
    content: '""',
  },
});

export const Skeleton = ({ className }: SkeletonProps) => {
  return <div className={cx(skeletonCls, className)} />;
};
