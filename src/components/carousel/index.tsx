import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import ReactSlickCarousel from 'react-slick'
import { ArrowLeftIcon, ArrowRightIcon } from 'components/icons'

export const Carousel: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ReactSlickCarousel
    prevArrow={<ArrowLeftIcon />}
    nextArrow={<ArrowRightIcon />}>
    {children}
  </ReactSlickCarousel>
)
