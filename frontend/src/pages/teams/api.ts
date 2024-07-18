import type { TeamCardProps } from '@widgets';

export const mockTeams: TeamCardProps[] = [
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
