import React from 'react'

import styles from './styles.module.css'
import clsx from 'clsx'

interface TitleProps {
  children: React.ReactNode
  className?: string
  color?: 'white' | 'black'
}

export const Title: React.FC<TitleProps> = ({
  children,
  className,
  color = 'black'
}) => (
  <h2 className={clsx(styles.title, styles[color], className)}>{children}</h2>
)
