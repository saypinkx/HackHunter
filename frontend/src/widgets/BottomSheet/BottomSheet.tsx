import { CircleCrossWithoutStroke } from '@icons';
import { css } from '@style/css';
import { ReactNode } from 'react';

interface BottomSheetProps {
  active: boolean;
  setActive: (active: boolean) => void;
  titleText: string;
  children: ReactNode;
}

const bottomSheetCls = css({
  height: '100vh',
  width: '100vw',
  backgroundColor: 'bg.popup',
  position: 'fixed',
  display: 'flex',
  alignItems: 'end',
});

const modalWindowCls = css({
  padding: '20px',
  borderRadius: '20px 20px 0px 0px',
  backgroundColor: 'white',
  minHeight: '30%',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  gap: '6',
});

const titleCls = css({
  display: 'flex',
  justifyContent: 'space-between',
  height: '39px',
  alignItems: 'baseline',
});

const titleTextCls = css({
  textStyle: 'header2',
  alignSelf: 'flex-end',
});

const titleCrossCls = css({
  cursor: 'pointer',
});

export const BottomSheet = ({ children, titleText, active, setActive }: BottomSheetProps) => {
  const onCloseBottomSheet = () => {
    setActive(!active);
  };
  return (
    active && (
      <div className={bottomSheetCls}>
        <div className={modalWindowCls}>
          <div className={titleCls}>
            <div className={titleTextCls}>{titleText}</div>

            <button className={titleCrossCls} onClick={onCloseBottomSheet}>
              <CircleCrossWithoutStroke />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
};
