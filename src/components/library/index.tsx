import { ArrowRight, LibraryBig, ListMusic, Plus } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { SearchInputContext } from '../../context/searchInputContext'
import '../../index.css'
import { DataProps, data } from '../../utils/data'
import * as SearchInput from './components/SearchInput'

export default function Library() {
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  const handleOutsideClick = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setIsSearchVisible(false)
    }
  }

  const value = useMemo(
    () => ({
      isSearchVisible,
      setIsSearchVisible,
      searchRef,
    }),
    [isSearchVisible],
  )

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <SearchInputContext.Provider value={value}>
      <div className="flex flex-col overflow-hidden rounded-md bg-black-2 px-3 pt-5 text-grey-2">
        <div className="flex justify-between">
          <div className="flex cursor-pointer space-x-2 hover:text-white-1">
            <LibraryBig />
            <p>Your Library</p>
          </div>

          <div className="flex gap-4">
            <Plus className="cursor-pointer hover:text-white-1" />
            <ArrowRight className="cursor-pointer hover:text-white-1" />
          </div>
        </div>

        <div className="flex gap-2 space-x-1 pb-2 pt-4">
          <p className="cursor-pointer self-center rounded-full bg-grey-4 px-2 py-1 text-center text-sm text-grey-2 transition delay-150 ease-in-out hover:bg-black-1">
            Playlists
          </p>
          <p className="cursor-pointer self-center rounded-full bg-grey-4 px-2 py-1 text-center text-sm text-grey-2 transition delay-150 ease-in-out hover:bg-black-1">
            Artists
          </p>
        </div>

        <div className="scrollbar-gutter flex flex-col overflow-hidden py-3 hover:overflow-y-auto">
          <div className="flex items-center justify-between pb-3 pr-[0.45rem]">
            <SearchInput.Root>
              <SearchInput.Icon />
              <SearchInput.Input />
            </SearchInput.Root>

            <div className="flex cursor-pointer gap-3 transition-transform duration-300 hover:scale-105 hover:text-white-1">
              <span className="text-sm group-hover:scale-100 group-hover:transform">Recents</span>
              <ListMusic className="group-hover:scale-y-[-1] group-hover:transform" size={20} />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {data.map((each: DataProps) => (
              <div
                key={each.id}
                className="flex gap-3 p-1 hover:cursor-pointer hover:rounded-md hover:bg-grey-1"
              >
                <img className="h-12 w-12 rounded-md" src={each.image} alt={each.title} />

                <div>
                  <p className="text-white-1">{each.title}</p>
                  <span className="text-sm text-grey-2">{each.subtitle ? each.subtitle : each.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SearchInputContext.Provider>
  )
}
