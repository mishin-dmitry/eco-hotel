import React from 'react'

import { Images } from 'lib/images'
import { Title } from 'components/title'
import { ArrowIcon } from 'components/icons'
import { AccentText } from 'components/accent-text'
import { OutlinedLink } from 'components/outlined-link'
import { Text } from 'components/text'

import styles from './styles.module.css'

export const AboutCompanySection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <Title>LEAPRUS</Title>
        <AccentText className={styles.description}>
          С 2018 года, наша компания предлагает не только услуги, но и
          уверенность
          <br /> на каждом этапе
        </AccentText>
        <OutlinedLink href="#form" className={styles.book}>
          Забронировать место
        </OutlinedLink>
        <div className={styles.innerCard}>
          <div className={styles.content}>
            <AccentText>
              Компания из <span>35</span> экспертов
            </AccentText>
            <AccentText>Для организации незабываемого отдыха</AccentText>
            <Text>
              Мы предоставляем высочайший
              <br />
              сервис и ответственность
            </Text>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.bubble}>О нас</div>
            <div className={styles.bottomRow}>
              <AccentText href="#about" color="white">
                Подробнее
              </AccentText>
              <ArrowIcon />
            </div>
            <img {...Images.ABOUT_COMPANY_SECTION} />
          </div>
        </div>
      </div>
    </section>
  )
}
