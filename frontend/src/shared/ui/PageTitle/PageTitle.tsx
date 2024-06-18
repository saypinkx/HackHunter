import { css } from '@style/css';

interface PageTitleProps {
  text: string;
}

const cls = css({
  paddingBlock: '24px',
  textAlign: 'center',
  textStyle: 'header1',
});

export const PageTitle = ({ text }: PageTitleProps) => {
  return <h1 className={cls}>{text}</h1>;
};
