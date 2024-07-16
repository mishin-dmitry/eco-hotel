import React, { useCallback } from 'react'

import { Title } from 'components/title'
import { POLICY_URL } from 'lib/constants'

import {
  SubscribeForm,
  type SubscribeFormValues
} from 'components/subscribe-form'

import styles from './styles.module.css'
import { NavMenu } from 'components/nav-menu'
import { HEADER_LINKS } from 'components/header/links'
import { socialLinks } from 'components/social-links/links'
import clsx from 'clsx'

export const Footer: React.FC = () => {
  const onSubmit = useCallback(async (values: SubscribeFormValues) => {
    console.log(values)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.rowInner}>
          <div className={styles.section}>
            <div className={styles.logo}>LEAPRUS</div>
            <p>КБР, Эльбрусский район, с. Терскол, поляна Азау</p>
            <a href="mailto: learprus@gmail.com" className={styles.email}>
              learprus@gmail.com
            </a>
          </div>
          <div className={clsx(styles.section, styles.linksSection)}>
            <div className={styles.column}>
              <Title color="white" className={styles.title}>
                Информация
              </Title>
              <NavMenu
                links={HEADER_LINKS}
                className={styles.navMenu}
                size="small"
              />
            </div>
            <div className={styles.column}>
              <Title color="white" className={styles.title}>
                Социальные сети
              </Title>
              <div className={styles.socialLinks}>
                {socialLinks.map(link => (
                  <a
                    href={link.href}
                    target="_blank"
                    key={link.label}
                    className={styles.socialLink}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <SubscribeForm onSubmit={onSubmit} className={styles.form} />
          </div>
        </div>
      </div>
      <div className={clsx(styles.section, styles.sectionWithText)}>
        <div className={styles.boldText}>Снежные вершины - рядом!</div>
      </div>
      <div className={clsx(styles.section, styles.policySection)}>
        <div className={styles.policySectionInner}>
          <a href={POLICY_URL} className={styles.policy}>
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  )
}
