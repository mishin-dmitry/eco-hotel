import React from 'react'

import { Title } from 'components/title'
import { Bubble } from 'components/buble'
import { Text } from 'components/text'
import { ArrowIcon } from 'components/icons'
import { Sections } from 'lib/sections'
import { prices } from '../prices/prices'
import { ImageCarousel } from 'components/image-carousel'
import { images } from './images'
import { PriceCard } from 'components/price-card'
import { useViewport } from 'lib/use-viewport'

import smoothScrollTo from 'smoothscroll'

import styles from './styles.module.css'
import clsx from 'clsx'

export const AccomodationSection: React.FC = () => {
  const { isMobile } = useViewport()

  const onLinkClick = (event: React.SyntheticEvent, section: string) => {
    event.preventDefault()

    const selector = `#${section}`
    const target = document.querySelector(selector)

    if (target) {
      smoothScrollTo(target, 500)
    }
  }

  return (
    <>
      <section id="about" className={styles.section}>
        <div className={styles.sectionBackground}>
          <div className={styles.sectionInner}>
            <div className={styles.row}>
              <Title color="white">Стоимость</Title>
              <Bubble color="white" className={styles.bubble}>
                низкие цены
              </Bubble>
            </div>
            <div className={styles.info}>
              <div className={styles.card}>
                <div className={styles.price}>8000 руб.</div>
                <div>(спальное место)</div>
              </div>
              <div className={styles.right}>
                <div className={styles.season}>
                  <Text>Альпинистский сезон:</Text>
                  <Text>{prices[0].seasonDates}</Text>
                </div>
                <div className={styles.buttonRow}>
                  <a
                    className={styles.button}
                    onClick={event => onLinkClick(event, Sections.FORM)}>
                    Забронировать
                  </a>
                  <div className={styles.arrowContainer}>
                    <ArrowIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!isMobile && <ImageCarousel images={images} />}
        {isMobile && (
          <div className={clsx(styles.sectionInner, styles.noVerticalPadding)}>
            <ImageCarousel images={images} />
          </div>
        )}
        <div className={clsx(styles.sectionInner, styles.noBottomPadding)}>
          <Title>
            Вам также может
            <br />
            быть интересно
          </Title>
          <PriceCard {...prices[1]} className={styles.priceCard} />
        </div>
      </section>
    </>
  )
}
