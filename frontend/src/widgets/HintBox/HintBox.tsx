import { css } from '@style/css';

export const HintBox = () => {
  const HintBoxCls = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '8',
  });

  const textCls = css({
    textStyle: 'header3',
  });

  return (
    <div className={HintBoxCls}>
      <p className={textCls}>Уровень участника — это количество хакатонов, в которых он соревновался</p>

      <p className={textCls}>Уровень команды — это среднее арифметическое уровней всех ее участников</p>
    </div>
  );
};
