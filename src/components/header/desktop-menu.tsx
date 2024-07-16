import React from 'react'

import styles from './styles.module.css'

import type { MenuProps } from '.'

import { NavMenu } from 'components/nav-menu'

export const DesktopMenu: React.FC<MenuProps> = ({ links }) => (
  <NavMenu links={links} className={styles.navMenu} />
)
