import type { PriceCardProps } from 'components/price-card'

export const prices: Omit<PriceCardProps, 'className'>[] = [
  {
    variant: 'Комфорт',
    image: {
      src: 'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVsYnJ1cyUyMGhvdGVsfGVufDB8fDB8fHww',
      srcSet: '',
      alt: 'Изображение комфорт отеля'
    },
    price: 8000,
    seasonDates: '01.04.2024 - 30.09.2024',
    points: [
      'Шведский стол: завтрак, обед, ужин',
      'Расслабляющий СПА',
      'Бесплатный WI-FI',
      'Домашний кинотеатр',
      'Бесплатный трансфер на снегоходе'
    ]
  },
  {
    variant: 'Эконом',
    image: {
      src: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVsYnJ1cyUyMGhvdGVsfGVufDB8fDB8fHww',
      srcSet: '',
      alt: 'Изображение эконом отеля'
    },
    price: 4500,
    seasonDates: '01.04.2024 - 30.09.2024',
    points: [
      'Шведский стол: завтрак, обед, ужин',
      'Бесплатный WI-FI',
      'Бесплатный трансфер на снегоходе'
    ]
  }
]
