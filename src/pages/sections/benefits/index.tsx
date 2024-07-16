import React from 'react'

import { Title } from 'components/title'
import { Bubble } from 'components/buble'
import { Carousel } from 'components/carousel'
import { BenefitItem } from 'components/benefit-item'

import { benefits } from './benefits'
import { Images } from 'lib/images'

import styles from './styles.module.css'
import { useViewport } from 'lib/use-viewport'

export const BenefitsSection: React.FC = () => {
  const { isMobile } = useViewport()

  return (
    <section id="benefits" className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.row}>
          <Title>Путешественники выбирают нас</Title>
          <Bubble className={styles.bubble}>влюбляться</Bubble>
        </div>
        <div className={styles.carousel}>
          {isMobile ? (
            <Carousel>
              {benefits.map(benefit => (
                <BenefitItem {...benefit} key={benefit.title} />
              ))}
            </Carousel>
          ) : (
            benefits.map(benefit => (
              <BenefitItem
                {...benefit}
                key={benefit.title}
                className={styles.benefit}
              />
            ))
          )}
        </div>
      </div>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${Images.BENEFITS_SECTION_IMAGE.src})` }}
      />
    </section>
  )
}
