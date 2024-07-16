import React from 'react'

import { OutlinedLink } from 'components/outlined-link'
import { Text } from 'components/text'
import { ArrowIcon } from 'components/icons'
import { Sections } from 'lib/sections'

import smoothScrollTo from 'smoothscroll'

import styles from './styles.module.css'
import clsx from 'clsx'

export interface PriceCardProps {
  image: {
    src: string
    srcSet: string
    alt: string
  }
  price: number
  seasonDates: string
  points: string[]
  variant: string
  className?: string
}

export const PriceCard: React.FC<PriceCardProps> = ({
  image,
  price,
  seasonDates,
  points,
  variant,
  className
}) => {
  const onLinkClick = (event: React.SyntheticEvent, section: string) => {
    event.preventDefault()

    const selector = `#${section}`
    const target = document.querySelector(selector)

    if (target) {
      smoothScrollTo(target, 500)
    }
  }

  return (
    <div className={clsx(styles.card, className)}>
      <div className={styles.cardInner}>
        <div>
          <h3 className={styles.title}>
            Размещение <br />
            {variant}
          </h3>
          <div className={styles.price}>
            <span>{price} &#8381;</span> (спальное место)
          </div>
          <div className={styles.season}>
            <Text className={styles.seasonTitle}>Альпинистский сезон:</Text>
            <Text className={styles.seasonDates}>{seasonDates}</Text>
          </div>
        </div>
        <div className={styles.bottom}>
          <ul className={styles.points}>
            {points.map(point => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <OutlinedLink
            href="#form"
            onClick={event => onLinkClick(event, Sections.FORM)}>
            Консультация
          </OutlinedLink>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img {...image} />
        <div className={styles.arrowContainer}>
          <div className={styles.arrowContainerInner}>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
