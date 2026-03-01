import { createContext, useContext, type ReactNode } from 'react'
import type Lenis from 'lenis'

const LenisContext = createContext<React.MutableRefObject<Lenis | null> | null>(null)

export function useLenisRef() {
  return useContext(LenisContext)
}

export function LenisProvider({ lenisRef, children }: { lenisRef: React.MutableRefObject<Lenis | null>; children: ReactNode }) {
  return <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
}
