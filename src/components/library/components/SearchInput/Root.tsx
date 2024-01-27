import { ReactNode } from 'react'
import { useSearchInput } from '../../../../hooks/useSearchInput'

export function Root({ children }: { children: ReactNode }) {
  const { isSearchVisible, searchRef } = useSearchInput()

  return (
    <div ref={searchRef} className={`relative h-10 ${isSearchVisible ? 'rounded-l-lg bg-grey-1' : ''}`}>
      {children}
    </div>
  )
}
