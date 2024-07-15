import React from 'react'

import { Images } from 'lib/images'
import { useViewport } from 'lib/use-viewport'

import { MobileMenu } from './mobile-menu'

import styles from './styles.module.css'
import { HEADER_LINKS, type LinkType } from './links'
import { Logo } from './logo'
import { ArrowDownIcon } from '../icons'
import { AccentText } from 'components/accent-text'

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
      <div className={styles.topline}>
        <Logo />
        {isMobile ? <MobileMenu links={HEADER_LINKS} /> : null}
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
          Эльбрусе
        </p>
      </div>
      <ArrowDownIcon className={styles.arrow} />
    </header>
  )
}
