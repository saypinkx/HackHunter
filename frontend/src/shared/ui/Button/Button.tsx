import { cva } from '@style/css';
import type { ReactNode } from '@tanstack/react-router';

interface ButtonProps {
  children: ReactNode;
  view?: 'normal' | 'action' | 'flat' | 'outlined';
  size?: 'm' | 's';
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
}

const buttonCls = cva({
  base: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    textStyle: 'button',
    borderRadius: '12px',
    minWidth: '100px',
  },
  variants: {
    type: {
      normal: { color: 'text.contrast', backgroundColor: 'text.primary' },
      action: { color: 'text.primary', backgroundColor: 'pastel.blue.dark' },
      flat: { color: 'text.link', backgroundColor: 'transparent' },
      outlined: {
        color: 'text.primary',
        backgroundColor: 'transparent',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: 'text.primary',
      },
      disabled: {
        cursor: 'default',
        color: 'text.disable',
        backgroundColor: 'button.disabledSkeleton',
      },
    },
    size: {
      m: { padding: '16px' },
      s: { padding: '12px 16px' },
    },
  },
});

export const Button = ({
  children,
  view = 'normal',
  size = 'm',
  disabled,
  startIcon,
  endIcon,
  onClick,
}: ButtonProps) => {
  const cls = buttonCls({ type: disabled ? 'disabled' : view, size });

  return (
    <button className={cls} onClick={onClick} disabled>
      {startIcon && <div>{startIcon}</div>}

      <span>{children}</span>

      {endIcon && <div>{endIcon}</div>}
    </button>
  );
};
