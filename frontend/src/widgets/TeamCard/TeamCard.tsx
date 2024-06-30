import { css } from '@style/css';
import { Badge, Calendar, Level, PlaceMark, SearchPerson } from '@ui';

export interface TeamCardProps {
  teamName: string;
  teamLevel: number;
  needRoles: string[];
  hackName: string;
  hackPlace: string;
  hackStartDate: Date;
  hackEndDate: Date;
}

const cardCls = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '16px',
  borderRadius: '16px',
  backgroundColor: 'pastel.blue',
});

const cardHeaderCls = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const cardTitleCls = css({
  textStyle: 'header3',
});

const cardContentCls = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  textStyle: 'body2',
  color: 'text.secondary',
});

const contentRowCls = css({
  display: 'flex',
  gap: '4px',
});

const rolesContainerCls = css({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '4px',
});

const badgeCls = css({
  color: 'text.primary',
  backgroundColor: 'pastel.blue.light',
});

export const TeamCard = ({
  teamName,
  teamLevel,
  hackName,
  hackPlace,
  needRoles,
  hackStartDate,
  hackEndDate,
}: TeamCardProps) => {
  return (
    <div className={cardCls}>
      <div className={cardHeaderCls}>
        <h2 className={cardTitleCls}>{teamName}</h2>
        <Level level={teamLevel} />
      </div>

      <div className={cardContentCls}>
        <div className={contentRowCls}>
          <Calendar className={css({ marginBlock: '2px' })} />
          <div>{hackName}</div>
        </div>

        <div className={contentRowCls}>
          <PlaceMark className={css({ marginBlock: '2px' })} />
          <div>
            {hackPlace} {hackStartDate.getDay()} {hackEndDate.getDay()}
          </div>
        </div>

        <div className={contentRowCls}>
          <SearchPerson className={css({ marginBlock: '4px' })} />
          <div className={rolesContainerCls}>
            {needRoles.map((role) => (
              <Badge key={role} className={badgeCls}>
                {role}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
