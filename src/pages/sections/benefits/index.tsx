import React from 'react'

import { Title } from 'components/title'
import { Bubble } from 'components/buble'
import { Carousel } from 'components/carousel'
import { BenefitItem } from 'components/benefit-item'

import { benefits } from './benefits'
import { Images } from 'lib/images'

import styles from './styles.module.css'

export const BenefitsSection: React.FC = () => (
  <section id="benefits" className={styles.section}>
    <div className={styles.sectionInner}>
      <Title>Путешественники выбирают нас</Title>
      <Bubble className={styles.bubble}>влюбляться</Bubble>
      <div className={styles.carousel}>
        <Carousel>
          {benefits.map(benefit => (
            <BenefitItem {...benefit} key={benefit.title} />
          ))}
        </Carousel>
      </div>
    </div>
    <div
      className={styles.background}
      style={{ backgroundImage: `url(${Images.BENEFITS_SECTION_IMAGE.src})` }}
    />
  </section>
)
