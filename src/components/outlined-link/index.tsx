import React from 'react'

import styles from './styles.module.css'
import clsx from 'clsx'

interface OutlinedLinkProps {
  children: React.ReactNode
  href: string
  className?: string
  onClick?: (event: React.SyntheticEvent) => void
}

export const OutlinedLink: React.FC<OutlinedLinkProps> = ({
  children,
  href,
  className,
  onClick
}) => (
  <a className={clsx(styles.link, className)} href={href} onClick={onClick}>
    {children}
  </a>
)
