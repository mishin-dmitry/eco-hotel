import React from 'react'

import { Title } from 'components/title'

import { AccentText } from 'components/accent-text'
import { Bubble } from 'components/buble'
import { Images } from 'lib/images'

import styles from './styles.module.css'

export const ComfortSection: React.FC = () => (
  <section className={styles.section}>
    <Title className={styles.title}>
      Комфорт
      <br />
      на высоте
      <br /> 3912 метров
      <Bubble color="purple" className={styles.bubble} isRotated>
        слушать тишину
      </Bubble>
    </Title>
    <AccentText className={styles.text}>
      Все, что нужно для полноценного отдыха
    </AccentText>
    <div className={styles.images}>
      <div className={styles.row}>
        <img {...Images.COMFORT_SECTION_FIRST_IMAGE} />
        <img {...Images.COMFORT_SECTION_SECOND_IMAGE} />
      </div>
      <div className={styles.row}>
        <img {...Images.COMFORT_SECTION_THIRD_IMAGE} />
        <img {...Images.COMFORT_SECTION_FOURTH_IMAGE} />
      </div>
      <div className={styles.row}>
        <img {...Images.COMFORT_SECTION_FIFTH_IMAGE} />
      </div>
    </div>
  </section>
)
