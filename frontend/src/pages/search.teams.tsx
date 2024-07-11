import { createFileRoute } from '@tanstack/react-router';
import { TeamCard, type TeamCardProps } from '../widgets/TeamCard';
import { SearchBar } from '@widgets';
import { css } from '@style/css';
import { Chip, Filter } from '@ui';
import { useState } from 'react';

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

const filterCls = css({
  display: 'flex',
  gap: '8px',
});

const chipCls = css({
  backgroundColor: 'button.secondary',
});

function SearchTeamPage() {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onReset = () => {
    setValue('');
  };

  return (
    <div className={teamPageCls}>
      <SearchBar placeholder="Название, роль или хакатон" value={value} onChange={onChange} onReset={onReset} />

      <div className={filterCls}>
        <Chip className={chipCls}>
          <Filter />
        </Chip>
        <Chip className={chipCls}>подходят мне</Chip>
      </div>
      {mockTeams.map((team) => (
        <TeamCard key={team.teamName} {...team} />
      ))}
    </div>
  );
}
