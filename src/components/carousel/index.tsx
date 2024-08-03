import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import ReactSlickCarousel, { type Settings } from 'react-slick'
import { ArrowLeftIcon, ArrowRightIcon } from 'components/icons'

export const Carousel: React.FC<React.PropsWithChildren & Settings> = ({
  children,
  ...restProps
}) => (
  <ReactSlickCarousel
    {...restProps}
    prevArrow={<ArrowLeftIcon />}
    nextArrow={<ArrowRightIcon />}>
    {children}
  </ReactSlickCarousel>
)
