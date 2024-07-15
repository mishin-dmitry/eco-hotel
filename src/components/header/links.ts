import {Sections} from 'lib/sections'

export interface LinkType {
  section: string
  label: string
}

export const HEADER_LINKS: LinkType[] = [
  {
    section: Sections.MAIN,
    label: 'Главная'
  },
  {
    section: Sections.ABOUT,
    label: 'О Нас'
  },
  {
    section: Sections.PRICES,
    label: 'Стоимость'
  },
  {
    section: Sections.CONTACTS,
    label: 'Контакты'
  },
]
