import React from 'react'

import { socialLinks } from './links'

import styles from './styles.module.css'
import clsx from 'clsx'

interface SocialLinksProps {
  color?: 'white' | 'purple'
  linkClassName?: string
  className?: string
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  color = 'white',
  linkClassName,
  className
}) => (
  <div className={clsx(styles.socialLinks, className)}>
    {socialLinks.map(({ href, icon }) => (
      <a
        key={href}
        href={href}
        className={clsx(styles.socialLink, styles[color], linkClassName)}
        target="_blank">
        {icon}
      </a>
    ))}
  </div>
)
