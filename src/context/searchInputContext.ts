import { createContext } from 'react'

type SearchInputType = {
  isSearchVisible: boolean
  setIsSearchVisible: React.Dispatch<React.SetStateAction<boolean>>
  searchRef: React.RefObject<HTMLDivElement>
}

export const SearchInputContext = createContext({} as SearchInputType)
