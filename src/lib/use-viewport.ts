import { useState, useEffect } from 'react'
import { isSSR } from './ssr'

import throttle from 'raf-throttle'

export interface Viewport {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

const BREAKPOINTS: [number, number] = [1021, 1361]

export function useViewport(
  breakpoints: [number, number] = BREAKPOINTS
): Viewport {
  const [mobile, desktop] = breakpoints
  const [width, setWidth] = useState(isSSR ? 0 : window.innerWidth)
  const [isMounted, setIsMounted] = useState(false)

  // https://www.joshwcomeau.com/react/the-perils-of-rehydration/
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const updateWidth = throttle(() => {
      setWidth(window.innerWidth)
    })

    window.addEventListener('resize', updateWidth)

    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  return {
    isMobile: isMounted && width < mobile,
    isTablet: isMounted && width >= mobile && width < desktop,
    isDesktop: isMounted && width >= desktop
  }
}
