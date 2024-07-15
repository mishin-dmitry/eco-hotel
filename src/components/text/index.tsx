import React from 'react'

import styles from './styles.module.css'
import clsx from 'clsx'

interface TextProps {
  children: React.ReactNode
  className?: string
  color?: 'black' | 'white'
}

export const Text: React.FC<TextProps> = ({
  children,
  className,
  color = 'black'
}) => <p className={clsx(styles.text, styles[color], className)}>{children}</p>
