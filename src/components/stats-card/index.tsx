import React from 'react'

import styles from './styles.module.css'
import { Text } from 'components/text'

interface StatsCardProps {
  count: number
  label: string
}

export const StatsCard: React.FC<StatsCardProps> = ({ count, label }) => (
  <div className={styles.card}>
    <div className={styles.count}>{count}</div>
    <Text color="white" className={styles.label}>
      {label}
    </Text>
  </div>
)
