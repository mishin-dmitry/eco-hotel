import React, { useCallback } from 'react'

import { Title } from 'components/title'
import { Text } from 'components/text'
import { AccentText } from 'components/accent-text'
import { Images } from 'lib/images'

import styles from './styles.module.css'
import { ContactsForm, type ContactsFormValues } from 'components/contacts-form'

export const FormSection: React.FC = () => {
  const onSubmit = useCallback(async (values: ContactsFormValues) => {
    console.log('values', values)
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.content}>
          <Title>
            Свяжитесь
            <br />с нами
          </Title>
          <AccentText className={styles.text}>
            Заполните нашу форму и наш менеджер перезвонит вам в течении{' '}
            <span>15 минут</span>
          </AccentText>
        </div>
        <img {...Images.CONTACTS_SECTION_IMAGE} className={styles.image} />
        <div className={styles.bottomContent}>
          <Text>
            Наши эксперты разрабатывают уникальные маршруты, вдохновленные
            вашими мечтами и желаниями, чтобы наполнить каждый день отдыха
            удивительными открытиями!
          </Text>
          <ContactsForm onSubmit={onSubmit} className={styles.form} />
        </div>
      </div>
    </section>
  )
}
