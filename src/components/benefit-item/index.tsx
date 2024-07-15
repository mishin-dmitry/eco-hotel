import React from 'react'

import { Text } from 'components/text'

import styles from './styles.module.css'
import clsx from 'clsx'

import type { ImageProps } from 'lib/images'

export interface BenefitItemProps {
  className?: string
  title: string
  description: string
  image: ImageProps
}

export const BenefitItem: React.FC<BenefitItemProps> = ({
  className,
  title,
  description,
  image
}) => (
  <div className={clsx(styles.item, className)}>
    <h4 className={styles.title}>{title}</h4>
    <Text className={styles.text}>{description}</Text>
    <img {...image} className={styles.image} />
  </div>
)
