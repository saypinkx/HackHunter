import { CircleCross } from '@icons';
import { cx, sva } from '@style/css';
import { useState, ChangeEvent, ReactNode, useId, forwardRef } from 'react';

type TextInputProps = Omit<JSX.IntrinsicElements['input'], 'onChange'> & {
  /** Показать кнопку очистки поля */
  hasClear?: boolean;
  /** Описание поля */
  label?: string;
  /** Сообщение (об ошибке) */
  message?: string;
  /** Индикатор наличия ошибки */
  hasError?: boolean;
  /** Обработчик изменения значения */
  onChange?: (value: string) => void;
  /** Дополнительный элемент перед полем ввода */
  beforeContent?: ReactNode;
  /** Дополнительный элемент после поля ввода */
  afterContent?: ReactNode;
};

const textInput = sva({
  slots: ['container', 'label', 'message', 'inputContainer', 'inputWrapper', 'input', 'clearBtn'],
  base: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    label: {
      textStyle: 'caption',
      color: 'text.secondary',
    },
    message: {
      textStyle: 'caption',
      color: 'text.secondary',
    },
    inputContainer: {
      display: 'flex',
      gap: '4px',
      paddingBottom: '8px',
      borderBottom: '1px solid text.tertiary',
    },
    inputWrapper: {
      display: 'flex',
      flexGrow: 1,
    },
    input: {
      height: '24px',
      outline: 'none',
      textStyle: 'body2',
      flexGrow: 1,
      color: 'text.primary',
      _placeholder: {
        color: 'text.secondary',
      },
    },
    clearBtn: { cursor: 'pointer', fill: 'text.secondary' },
  },
  variants: {
    type: {
      base: {},
      error: {
        inputContainer: { borderBottomColor: 'text.error' },
        message: { color: 'text.error' },
      },
      disabled: {
        label: { color: 'text.disable' },
        message: { color: 'text.disable' },
        inputContainer: { borderBottomColor: 'text.disable' },
        input: { color: 'text.disable' },
        clearBtn: { fill: 'text.disable' },
      },
    },
  },
  defaultVariants: {
    type: 'base',
  },
});

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ hasClear, label, message, beforeContent, afterContent, ...props }, ref) => {
    const classes = textInput({ type: props.disabled ? 'disabled' : props.hasError ? 'error' : 'base' });
    const [value, setValue] = useState(props.value ?? '');
    const isControlledInput = props.value !== undefined;
    const internalId = useId();
    const id = props.id ?? internalId;

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (!isControlledInput) {
        setValue(e.target.value);
      }
      props.onChange?.(e.target.value);
    };

    const onClearInput = () => {
      if (!isControlledInput) {
        setValue('');
      }
      props.onChange?.('');
    };

    return (
      <div className={classes.container}>
        {label && (
          <label htmlFor={id} className={classes.label}>
            {label}
          </label>
        )}

        <span className={classes.inputContainer}>
          {beforeContent}

          <span className={classes.inputWrapper}>
            <input
              {...props}
              id={id}
              className={cx(classes.input, props.className)}
              value={value}
              onChange={onChange}
              ref={ref}
            />

            {hasClear && value && (
              <button onClick={onClearInput} disabled={props.disabled}>
                <CircleCross className={classes.clearBtn} />
              </button>
            )}
          </span>

          {afterContent}
        </span>

        {message && <span className={classes.message}>{message}</span>}
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';
