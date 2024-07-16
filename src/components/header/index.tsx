import React from 'react'

import { Images } from 'lib/images'
import { useViewport } from 'lib/use-viewport'

import { MobileMenu } from './mobile-menu'
import { HEADER_LINKS, type LinkType } from './links'
import { Logo } from './logo'
import { ArrowDownIcon } from '../icons'
import { AccentText } from 'components/accent-text'
import { DesktopMenu } from './desktop-menu'

import styles from './styles.module.css'

export interface MenuProps {
  links: LinkType[]
}

export const Header: React.FC = () => {
  const { isMobile } = useViewport()

  return (
    <header
      style={{ backgroundImage: `url(${Images.HEADER_SECTION.src})` }}
      className={styles.header}
      id="main">
      <div className={styles.headerInner}>
        <div className={styles.topline}>
          <Logo />
          {isMobile ? (
            <MobileMenu links={HEADER_LINKS} />
          ) : (
            <DesktopMenu links={HEADER_LINKS} />
          )}
        </div>
        <div className={styles.textContainer}>
          <AccentText className={styles.topText} color="white">
            <span>3912 метров</span>
            <span>&</span>
            <span>Над уровнем моря</span>
          </AccentText>
          <p className={styles.description}>
            Высокогорный
            <br />
            приют на Южном
            <br />
            склоне горы
            <br />
            Эльбрус
          </p>
        </div>
        <ArrowDownIcon className={styles.arrow} />
      </div>
    </header>
  )
}
