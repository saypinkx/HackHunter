import { css } from '@style/css';
import { Chip, Filter } from '@shared/ui';
import { SearchBar, TeamCard } from '@widgets';
import { useState } from 'react';
import { mockTeams } from './api';

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

export function SearchTeamPage() {
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
