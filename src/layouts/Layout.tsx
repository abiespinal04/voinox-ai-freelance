import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SmoothScroll } from '@/components/SmoothScroll'
import { useLenisRef } from '@/contexts/LenisContext'

function LayoutInner() {
  const location = useLocation()
  const lenisRef = useLenisRef()

  useEffect(() => {
    lenisRef?.current?.scrollTo(0, { immediate: true })
  }, [location.pathname, lenisRef])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export function Layout() {
  return (
    <SmoothScroll>
      <LayoutInner />
    </SmoothScroll>
  )
}
