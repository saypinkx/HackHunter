import { createFileRoute } from '@tanstack/react-router';
import { TeamCard, type TeamCardProps } from '../widgets/TeamCard';
import { css } from '@style/css';

const mockTeams: TeamCardProps[] = [
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

export const Route = createFileRoute('/search/teams')({
  component: () => <SearchTeamPage />,
});

const teamPageCls = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

function SearchTeamPage() {
  return (
    <div className={teamPageCls}>
      {mockTeams.map((team) => (
        <TeamCard key={team.teamName} {...team} />
      ))}
    </div>
  );
}
