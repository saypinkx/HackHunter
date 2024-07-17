import { css } from '@style/css';
import { Magnifier, CircleCross } from '@icons';

type SearchBarProps = JSX.IntrinsicElements['input'] & {
  /** Обработчик сброса значения*/
  onReset: () => void;
};

const searchBarCls = css({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'bg.secondary',
  borderRadius: '16px',
  _focusWithin: {
    backgroundColor: 'bg.tertiary',
  },
});

const magnifierButtonCls = css({
  padding: '10px 12px',
  cursor: 'pointer',
});

const searchBarInputCls = css({
  width: '100%',
  outline: 'none',
});

const closeCrossButtonCls = css({
  padding: '10px 12px',
  cursor: 'pointer',
});

const circleCrossCls = css({
  fill: 'text.secondary',
});

export const SearchBar = ({ onReset, ...props }: SearchBarProps) => {
  return (
    <div className={searchBarCls}>
      <button className={magnifierButtonCls}>
        <Magnifier />
      </button>

      <input className={searchBarInputCls} type="text" value={props.value} onChange={props.onChange} {...props} />

      {props.value && (
        <button onClick={onReset} className={closeCrossButtonCls}>
          <CircleCross className={circleCrossCls} />
        </button>
      )}
    </div>
  );
};
