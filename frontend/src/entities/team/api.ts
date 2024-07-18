import type { Team } from './model/types';

export const mockTeams: Team[] = [
  {
    teamName: 'Цифровые маги',
    teamLevel: 10,
    hackPlace: 'Онлайн',
    hackStartDate: new Date('2024-03-23'),
    hackEndDate: new Date('2024-03-25'),
    hackName: 'AI Product Hackaton',
    needRoles: ['front'],
  },
  {
    teamName: 'Те самые ребята из Краснодарского края',
    teamLevel: 3,
    hackPlace: 'Краснодар',
    hackStartDate: new Date('2024-03-23'),
    hackEndDate: new Date('2024-03-25'),
    hackName: 'AI Product Hackaton',
    needRoles: ['front', 'back', 'analyst', 'ML', 'sys admin', 'scrum'],
  },
];

export const getTeams = async () => {
  await new Promise((res) => setTimeout(res, 1000));
  return Promise.resolve(mockTeams);
};

export const getTeamsByName = async (name: string) => {
  const allTeams = await getTeams();

  return name ? allTeams.filter((team) => team.teamName.includes(name)) : allTeams;
};
