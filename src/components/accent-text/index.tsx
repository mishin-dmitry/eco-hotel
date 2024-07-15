import React from 'react'

import clsx from 'clsx'
import styles from './styles.module.css'

interface AccentTextProps extends React.AllHTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  color?: 'white' | 'black'
  tagName?: 'a' | 'p'
}

export const AccentText: React.FC<AccentTextProps> = ({
  children,
  className,
  color = 'black',
  tagName = 'p',
  ...rest
}) => {
  const Tag = tagName

  return (
    <Tag className={clsx(styles.text, styles[color], className)} {...rest}>
      {children}
    </Tag>
  )
}
