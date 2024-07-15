import React, { useCallback, useEffect, useRef, useState } from 'react'

import { CloseIcon, BurgerIcon } from '../icons'

import clsx from 'clsx'
import styles from './styles.module.css'

import type { MenuProps } from '.'
import { Logo } from './logo'
import { SubscribeForm, type SubscribeFormValues } from '../subscribe-form'
import { SocialLinks } from '../social-links'
import { NavMenu } from 'components/nav-menu'

export const MobileMenu: React.FC<MenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false)

  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const onSubmit = useCallback(async (values: SubscribeFormValues) => {
    console.log(values)
  }, [])

  return (
    <>
      <button
        className={styles.burgerButton}
        aria-label="Открыть навигационное меню"
        onClick={() => setIsOpen(true)}>
        <BurgerIcon />
      </button>
      <div
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-hidden={isOpen ? 'false' : 'true'}
        className={clsx(styles.menu, isOpen && styles.open)}>
        <div className={styles.menuInner}>
          <div className={styles.topline}>
            <Logo />
            <button
              aria-label="Закрыть навигационное меню"
              onClick={() => setIsOpen(false)}
              className={styles.close}>
              <CloseIcon />
            </button>
          </div>
          <NavMenu links={links} onClick={() => setIsOpen(false)} />
          <div className={styles.contacts}>
            <SubscribeForm onSubmit={onSubmit} />
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  )
}
