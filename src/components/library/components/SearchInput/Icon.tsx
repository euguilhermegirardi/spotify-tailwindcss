import { Search } from 'lucide-react'
import { useSearchInput } from '../../../../hooks/useSearchInput'

export function Icon() {
  const { isSearchVisible, setIsSearchVisible } = useSearchInput()

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible)
  }

  return (
    <div className="group inline-block" onClick={handleSearchClick}>
      <Search
        size={18}
        className={`h-9 w-9 p-2  text-grey-2 transition-all duration-300 group-hover:rounded-full group-hover:bg-black-1 group-hover:text-white-1 ${
          isSearchVisible ? 'cursor-text group-hover:bg-inherit group-hover:text-grey-2' : 'cursor-pointer'
        }`}
      />
    </div>
  )
}
