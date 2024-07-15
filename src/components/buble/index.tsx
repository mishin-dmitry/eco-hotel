import React from 'react'

import { StarIcon } from 'components/icons'

import clsx from 'clsx'
import styles from './styles.module.css'

interface BubbleProps {
  children: React.ReactNode
  color?: 'white' | 'purple'
  isRotated?: boolean
  className?: string
}

export const Bubble: React.FC<BubbleProps> = ({
  children,
  color = 'purple',
  isRotated,
  className
}) => (
  <div
    className={clsx(
      styles.bubble,
      styles[color],
      isRotated && styles.rotated,
      className
    )}>
    <StarIcon />
    {children}
    <StarIcon />
  </div>
)
