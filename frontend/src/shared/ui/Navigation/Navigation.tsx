import { Handshake, Heart, Magnifier, Person } from '@icons';
import { css } from '@style/css';
import { Link } from '@tanstack/react-router';

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

export const Navigation = () => {
  return (
    <div className={containerCls}>
      <Link to="/search/teams" className={itemCls} activeProps={{ className: activeItemCls }}>
        <Magnifier /> Найти
      </Link>
      <Link to="/teams" className={itemCls} activeProps={{ className: activeItemCls }}>
        <Heart /> Мои команды
      </Link>
      <Link to="/search" className={itemCls} activeProps={{ className: activeItemCls }}>
        <Handshake /> Мои отклики
      </Link>
      <Link to="/search" className={itemCls} activeProps={{ className: activeItemCls }}>
        <Person /> Профиль
      </Link>
    </div>
  );
};
