import { Handshake, Heart, Magnifier, Navigation, Person, type NavigationProps } from '@ui';

const links: NavigationProps['links'] = [
  {
    href: '/search',
    content: (
      <>
        <Magnifier /> Найти
      </>
    ),
  },
  {
    href: '/teams',
    content: (
      <>
        <Heart /> Мои команды
      </>
    ),
  },
  {
    href: '/requests',
    content: (
      <>
        <Handshake /> Мои отклики
      </>
    ),
  },

  {
    href: '/profile',
    content: (
      <>
        <Person /> Профиль
      </>
    ),
  },
];

export const NavMenu = () => {
  return <Navigation links={links} />;
};
