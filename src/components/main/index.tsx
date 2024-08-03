import React from 'react'

import { AboutCompanySection } from 'pages/sections/about-company'
import { ComfortSection } from 'pages/sections/comfort'
import { AboutShelterSection } from 'pages/sections/about-shelter'
import { PricesSection } from 'pages/sections/prices'
import { BenefitsSection } from 'pages/sections/benefits'
import { FormSection } from 'pages/sections/form'
import { ContactsSection } from 'pages/sections/contacts'
import { AccomodationSection } from 'pages/sections/accommodation'

import styles from './styles.module.css'

export const Main: React.FC = () => (
  <main className={styles.main}>
    <AboutCompanySection />
    <ComfortSection />
    <AboutShelterSection />
    <PricesSection />
    <AccomodationSection />
    <BenefitsSection />
    <FormSection />
    <ContactsSection />
  </main>
)
