import React from 'react'

import { Title } from 'components/title'
import { Text } from 'components/text'
import { Bubble } from 'components/buble'
import { StatsCard } from 'components/stats-card'

import styles from './styles.module.css'

export const AboutShelterSection: React.FC = () => (
  <section id="about" className={styles.section}>
    <Title color="white">О приюте</Title>
    <Text color="white" className={styles.text}>
      Высокогорный приют расположен на южном склоне горы Эльбрус на высоте 3912
      метров над уровнем моря между Гарабаши и Приютом 11
    </Text>
    <Bubble color="white">покорять вершины</Bubble>
    <div className={styles.cards}>
      <StatsCard count={24} label="спальных места" />
      <StatsCard count={2} label="жилых модуля" />
      <StatsCard count={12} label="спальных мест" />
    </div>
  </section>
)
