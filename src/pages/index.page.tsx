import { useEffect, useState } from 'react'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Main } from '../components/main'

const RootPage = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default RootPage
