import React from 'react'

import { Title } from 'components/title'
import { Text } from 'components/text'
import { Bubble } from 'components/buble'
import { StatsCard } from 'components/stats-card'

import styles from './styles.module.css'
import { useViewport } from 'lib/use-viewport'

export const AboutShelterSection: React.FC = () => {
  const { isMobile } = useViewport()

  return (
    <section id="about" className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.row}>
          <Title color="white">О приюте</Title>
          {!isMobile && <Bubble color="white">покорять вершины</Bubble>}
        </div>
        <Text color="white" className={styles.aboutText}>
          Высокогорный приют расположен на южном склоне горы Эльбрус на высоте
          3912 метров над уровнем моря между Гарабаши и Приютом 11
        </Text>
        {isMobile && <Bubble color="white">покорять вершины</Bubble>}
        <div className={styles.cards}>
          <StatsCard count={24} label="спальных места" />
          <StatsCard count={2} label="жилых модуля" />
          <StatsCard count={12} label="спальных мест" />
        </div>
      </div>
    </section>
  )
}
