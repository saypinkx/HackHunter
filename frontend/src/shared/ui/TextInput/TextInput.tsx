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
      color: 'var(--text-secondary-color)',
    },
    message: {
      textStyle: 'caption',
      color: 'var(--text-secondary-color)',
    },
    inputContainer: {
      display: 'flex',
      gap: '4px',
      paddingBottom: '8px',
      borderBottom: '1px solid var(--text-tertiary-color)',
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
      color: 'var(--text-primary-color)',
      _placeholder: {
        color: 'var(--text-secondary-color)',
      },
    },
    clearBtn: { cursor: 'pointer', fill: 'var(--text-secondary-color)' },
  },
  variants: {
    type: {
      base: {},
      error: {
        inputContainer: { borderBottomColor: 'var(--text-error-color)' },
        message: { color: 'var(--text-error-color)' },
      },
      disabled: {
        label: { color: 'var(--text-disable-color)' },
        message: { color: 'var(--text-disable-color)' },
        inputContainer: { borderBottomColor: 'var(--text-disable-color)' },
        input: { color: 'var(--text-disable-color)' },
        clearBtn: { fill: 'var(--text-disable-color)' },
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
