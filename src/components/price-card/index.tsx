import React from 'react'

import { OutlinedLink } from 'components/outlined-link'
import { Text } from 'components/text'

import styles from './styles.module.css'
import clsx from 'clsx'
import { ArrowIcon } from 'components/icons'

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
}) => (
  <div className={clsx(styles.card, className)}>
    <div className={styles.cardInner}>
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
      <ul className={styles.points}>
        {points.map(point => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <OutlinedLink href="#form">Консультация</OutlinedLink>
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
