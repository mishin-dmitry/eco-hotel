import React, { useCallback } from 'react'

import { Title } from 'components/title'
import { Text } from 'components/text'
import { AccentText } from 'components/accent-text'
import { Images } from 'lib/images'
import { ContactsForm, type ContactsFormValues } from 'components/contacts-form'
import { useViewport } from 'lib/use-viewport'

import styles from './styles.module.css'

export const FormSection: React.FC = () => {
  const { isMobile } = useViewport()

  const onSubmit = useCallback(async (values: ContactsFormValues) => {
    console.log('values', values)
  }, [])

  return (
    <section className={styles.section} id="form">
      <div className={styles.sectionInner}>
        <div className={styles.card}>
          <div className={styles.row}>
            <div className={styles.content}>
              <div className={styles.textContainer}>
                <Title>
                  Свяжитесь
                  <br />с нами
                </Title>
                {!isMobile && (
                  <>
                    <Text className={styles.contactText}>
                      Наши эксперты разрабатывают уникальные маршруты,
                      вдохновленные вашими мечтами и желаниями, чтобы наполнить
                      каждый день отдыха удивительными открытиями!
                    </Text>
                    <img
                      {...Images.CONTACTS_SECTION_DESKTOP_IMAGE}
                      className={styles.desktopImage}
                    />
                  </>
                )}
              </div>
              <AccentText className={styles.text}>
                <span>
                  Заполните нашу форму и наш менеджер перезвонит вам в течении{' '}
                  <span className={styles.highlighted}>15 минут</span>
                </span>
              </AccentText>
            </div>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${Images.CONTACTS_SECTION_IMAGE.src})`
              }}
            />
          </div>
          <div className={styles.bottomContent}>
            {isMobile && (
              <Text>
                Наши эксперты разрабатывают уникальные маршруты, вдохновленные
                вашими мечтами и желаниями, чтобы наполнить каждый день отдыха
                удивительными открытиями!
              </Text>
            )}
            <ContactsForm onSubmit={onSubmit} className={styles.form} />
          </div>
        </div>
      </div>
    </section>
  )
}
