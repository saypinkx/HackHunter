import { css } from '@style/css';
import { Chip, Filter } from '@shared/ui';
import { TeamsList, loadTeams } from '@entities/team';
import { $teams, loadTeamsFx } from '@entities/team';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { SearchBar } from '../../widgets/SearchBar';
import { useNavigate } from '@tanstack/react-router';
import { $searchField, updateSearch } from '@entities/team/model/model';

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
  const navigate = useNavigate();
  const search = useUnit($searchField);
  const [teams, loading] = useUnit([$teams, loadTeamsFx.pending]);

  useEffect(loadTeams, []);

  return (
    <div className={teamPageCls}>
      <SearchBar
        placeholder="Название, роль или хакатон"
        value={search}
        onChange={(e) => updateSearch(e.target.value)}
        onReset={() => updateSearch('')}
      />

      <div className={filterCls}>
        <Chip className={chipCls}>
          <Filter />
        </Chip>
        <Chip className={chipCls}>подходят мне</Chip>
      </div>

      <TeamsList
        teams={teams}
        loading={loading}
        onClickTeam={({ teamName }) => navigate({ to: `/teams/${teamName}` })}
      />
    </div>
  );
}
