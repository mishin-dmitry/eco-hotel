import React, { useState } from 'react'

import { Text } from 'components/text'
import { Carousel } from 'components/carousel'

import styles from './styles.module.css'
import clsx from 'clsx'
import { useViewport } from 'lib/use-viewport'

interface ImageCarouselProps {
  images: { src: string; label: string }[]
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const { isMobile } = useViewport()

  return (
    <Carousel
      infinite
      slidesToShow={isMobile ? 1 : 4}
      className={styles.carousel}
      centerMode={isMobile}
      centerPadding="10px"
      beforeChange={(_, next) => setCurrentImageIndex(next)}>
      {images.map(({ src, label }, index) => {
        return (
          <div key={label} className={styles.item}>
            <div
              className={clsx(
                styles.background,
                index === currentImageIndex && styles.active
              )}
            />
            <div
              className={styles.image}
              style={{ backgroundImage: `url("${src}")` }}>
              <Text className={styles.text}>{label}</Text>
            </div>
          </div>
        )
      })}
    </Carousel>
  )
}
