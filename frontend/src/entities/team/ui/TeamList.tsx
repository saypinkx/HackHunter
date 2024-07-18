import { Skeleton } from '@shared/ui/Skeleton';
import type { Team } from '../model/types';
import { TeamCard } from './TeamCard';
import { css } from '@style/css';

interface TeamsListProps {
  teams: Team[];
  loading?: boolean;
  onClickTeam: (team: Team) => void;
}
const listCls = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

const TeamListSkeleton = [1, 2, 3].map((key) => <Skeleton key={key} className={css({ height: '180px' })} />);

export const TeamsList = ({ teams, loading, onClickTeam }: TeamsListProps) => {
  return (
    <div className={listCls}>
      {loading
        ? TeamListSkeleton
        : teams.map((team) => <TeamCard key={team.teamName} team={team} onClick={onClickTeam} />)}
    </div>
  );
};
