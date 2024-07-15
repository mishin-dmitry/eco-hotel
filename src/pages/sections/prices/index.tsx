import React from 'react'

import { Title } from 'components/title'
import { Bubble } from 'components/buble'
import { PriceCard } from 'components/price-card'
import { prices } from './prices'

import styles from './styles.module.css'

export const PricesSection = () => (
  <section id="prices" className={styles.section}>
    <Title>
      Стоимость
      <br />
      размещения
    </Title>
    <Bubble className={styles.bubble}>незабываемые впечатления</Bubble>
    <div className={styles.cards}>
      {prices.map(price => (
        <PriceCard {...price} key={price.variant} className={styles.card} />
      ))}
    </div>
  </section>
)
