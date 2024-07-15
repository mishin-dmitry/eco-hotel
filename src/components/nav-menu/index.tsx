import clsx from 'clsx'
import type { LinkType } from 'components/header/links'
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'
import smoothScrollTo from 'smoothscroll'

interface NavMenuProps {
  links: LinkType[]
  className?: string
  size?: 'small' | 'default'
  onClick?: () => void
}

export const NavMenu: React.FC<NavMenuProps> = ({
  links,
  className,
  size = 'default',
  onClick
}) => {
  const onLinkClick = (event: React.SyntheticEvent, section: string) => {
    event.preventDefault()

    const selector = `#${section}`
    const target = document.querySelector(selector)

    if (target) {
      smoothScrollTo(target, 500)
    }

    onClick?.()
  }

  return (
    <nav
      className={clsx(styles.navMenu, styles.mobile, styles[size], className)}>
      {links.map(({ section, label }) => (
        <Link
          href={`#${section}`}
          key={label}
          passHref
          onClick={event => onLinkClick(event, section)}>
          {label}
        </Link>
      ))}
    </nav>
  )
}
