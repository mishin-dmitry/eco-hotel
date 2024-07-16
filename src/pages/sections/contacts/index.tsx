import React from 'react'

import { Title } from 'components/title'
import { SocialLinks } from 'components/social-links'
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps'
import { useViewport } from 'lib/use-viewport'

import styles from './styles.module.css'
import { GEO_COORDINATES } from 'lib/constants'

export const ContactsSection: React.FC = () => {
  const { isMobile } = useViewport()

  return (
    <section className={styles.section} id="contacts">
      <div className={styles.sectionInner}>
        <div className={styles.contacts}>
          <div className={styles.logo}>LEAPRUS</div>
          <Title className={styles.mainTitle}>Контакты</Title>
          {isMobile && (
            <SocialLinks
              color="purple"
              linkClassName={styles.link}
              className={styles.links}
            />
          )}
          <div className={styles.title}>Телефон</div>
          <a href="tel:+7-800-775-6709" className={styles.contact}>
            +7 (800) 775 67 09
          </a>
          <a href="tel:+7-928-711-0260" className={styles.contact}>
            +7 (928) 711 02 60
          </a>
          <div className={styles.title}>Бронирование</div>
          <a href="tel:+7-800-775-6709" className={styles.contact}>
            +7 (928) 711 02 60
          </a>
          <div className={styles.title}>Почта</div>
          <a
            href="mailto: leaprus@elbrusadventures.ru"
            className={styles.contact}>
            leaprus@elbrusadventures.ru
          </a>
          {!isMobile && (
            <SocialLinks
              color="purple"
              linkClassName={styles.link}
              className={styles.links}
            />
          )}
        </div>
        {/* TODO map */}
        <YMaps>
          <div className={styles.map}>
            <Map
              defaultState={{ center: GEO_COORDINATES, zoom: 9 }}
              width="100%"
              height="100%">
              <Placemark geometry={GEO_COORDINATES} />
              <ZoomControl options={{ float: 'right' }} />
            </Map>
            <div className={styles.addressContainer}>
              <div className={styles.address}>
                361605, КБР,
                <br />
                Эльбрусский район,
                <br />
                с. Терскол, поляна Азау
              </div>
            </div>
          </div>
        </YMaps>
      </div>
    </section>
  )
}
