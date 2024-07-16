import React from 'react'

import { Title } from 'components/title'

import { AccentText } from 'components/accent-text'
import { Bubble } from 'components/buble'
import { Images } from 'lib/images'
import { useViewport } from 'lib/use-viewport'

import styles from './styles.module.css'

export const ComfortSection: React.FC = () => {
  const { isMobile } = useViewport()

  return (
    <section className={styles.section}>
      <div className={styles.textContent}>
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
      </div>
      <div className={styles.images}>
        <div className={styles.row}>
          <img {...Images.COMFORT_SECTION_FIRST_IMAGE} />
          <img {...Images.COMFORT_SECTION_SECOND_IMAGE} />
          {!isMobile && <img {...Images.COMFORT_SECTION_THIRD_IMAGE} />}
        </div>
        <div className={styles.row}>
          {isMobile && <img {...Images.COMFORT_SECTION_THIRD_IMAGE} />}
          <img {...Images.COMFORT_SECTION_FOURTH_IMAGE} />
          {!isMobile && <img {...Images.COMFORT_SECTION_FIFTH_IMAGE} />}
        </div>
        {isMobile && (
          <div className={styles.row}>
            <img {...Images.COMFORT_SECTION_FIFTH_IMAGE} />
          </div>
        )}
      </div>
    </section>
  )
}
