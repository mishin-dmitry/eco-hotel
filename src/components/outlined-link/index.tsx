import React from 'react'

import styles from './styles.module.css'
import clsx from 'clsx'

interface OutlinedLinkProps {
  children: React.ReactNode
  href: string
  className?: string
}

export const OutlinedLink: React.FC<OutlinedLinkProps> = ({
  children,
  href,
  className
}) => (
  <a className={clsx(styles.link, className)} href={href}>
    {children}
  </a>
)
