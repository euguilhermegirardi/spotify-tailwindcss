import { useContext } from 'react'
import { SearchInputContext } from '../context/searchInputContext'

export const useSearchInput = () => useContext(SearchInputContext)
