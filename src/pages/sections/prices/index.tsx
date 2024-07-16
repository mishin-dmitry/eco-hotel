import React from 'react'

import { Title } from 'components/title'
import { Bubble } from 'components/buble'
import { PriceCard } from 'components/price-card'
import { prices } from './prices'
import { useViewport } from 'lib/use-viewport'

import styles from './styles.module.css'

export const PricesSection = () => {
  const { isMobile } = useViewport()

  return (
    <section id="prices" className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.row}>
          <Title>
            Стоимость
            <br />
            размещения
          </Title>
          {!isMobile && (
            <Bubble className={styles.bubble}>незабываемые впечатления</Bubble>
          )}
        </div>
        {isMobile && (
          <Bubble className={styles.bubble}>незабываемые впечатления</Bubble>
        )}
        <div className={styles.cards}>
          {prices.map(price => (
            <PriceCard {...price} key={price.variant} className={styles.card} />
          ))}
        </div>
      </div>
    </section>
  )
}
