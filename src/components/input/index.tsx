import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

interface InputProps {
  id?: string
  className?: string
  style?: React.CSSProperties
  // status?: string
  placeholder?: string
  value?: string
  disabled?: boolean
  type?: 'filled' | 'underlined'
  onFocus?: () => void
  onBlur?: () => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({
  id,
  className,
  style,
  // status,
  placeholder,
  value = '',
  disabled,
  onFocus,
  onBlur,
  onChange,
  type = 'underlined',
  ...rest
}) => {
  return (
    <div
      className={clsx(
        styles.root,
        // s[status],
        // !!value && s.done,
        // disabled && s.disabled,
        className
      )}
      style={style}>
      <input
        {...rest}
        id={id}
        className={clsx(styles.input, styles[type])}
        type="text"
        value={String(value)}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />
    </div>
  )
}
