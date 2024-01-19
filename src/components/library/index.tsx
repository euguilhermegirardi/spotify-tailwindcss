import { useEffect, useRef, useState } from 'react'
import { LibraryBig, Plus, ArrowRight, Search, ListMusic } from 'lucide-react'
import { motion } from 'framer-motion'
import { DataProps, data } from '../../utils/data'

export default function Library() {
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible)
  }

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setIsSearchVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <div className="flex flex-col overflow-hidden rounded-md bg-black-2 px-3 py-5 text-grey-2">
      <div className="flex w-[360px] justify-between">
        <div className="flex cursor-pointer space-x-2 hover:text-white-1">
          <LibraryBig />
          <p>Your Library</p>
        </div>

        <div className="flex gap-4">
          <Plus className="cursor-pointer hover:text-white-1" />
          <ArrowRight className="cursor-pointer hover:text-white-1" />
        </div>
      </div>

      <div className="flex w-[360px] gap-2 space-x-1 pb-2 pt-4">
        <p className="cursor-pointer self-center rounded-full bg-grey-4 px-2 py-1 text-center text-sm text-grey-2 transition delay-150 ease-in-out hover:bg-black-1">
          Playlists
        </p>
        <p className="cursor-pointer self-center rounded-full bg-grey-4 px-2 py-1 text-center text-sm text-grey-2 transition delay-150 ease-in-out hover:bg-black-1">
          Artists
        </p>
      </div>

      <div className="flex flex-col py-3 hover:overflow-y-auto hover:overflow-x-hidden">
        <div className="flex w-[360px] items-center justify-between pb-3">
          <div
            ref={searchRef}
            className={`relative h-10 ${
              isSearchVisible ? 'rounded-l-lg bg-grey-1' : ''
            }`}
          >
            <div className="group inline-block" onClick={handleSearchClick}>
              <Search
                size={18}
                className={`h-9 w-9 p-2  text-grey-2 transition-all duration-300 group-hover:rounded-full group-hover:bg-black-1 group-hover:text-white-1 ${
                  isSearchVisible
                    ? 'cursor-text group-hover:bg-inherit group-hover:text-grey-2'
                    : 'cursor-pointer'
                }`}
              />
            </div>

            {isSearchVisible && (
              <motion.div
                className="absolute right-0 top-0 translate-x-full transform rounded-r-lg bg-grey-1 p-2 transition-all group-hover:translate-x-0"
                initial={{ opacity: 0, marginLeft: '-32px' }}
                animate={{ opacity: 1, marginLeft: '0px' }}
                transition={{ duration: 0.7 }}
              >
                <input
                  type="text"
                  placeholder="Search in Your Library"
                  className="bg-grey-1  text-sm text-white-1 placeholder-grey-2 focus:outline-none"
                />
              </motion.div>
            )}
          </div>

          <div className="flex cursor-pointer gap-3 transition-transform duration-300 hover:scale-105 hover:text-white-1">
            <span className="group-hover:scale-100 group-hover:transform">
              Recents
            </span>
            <ListMusic className="group-hover:scale-y-[-1] group-hover:transform" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {data.map((each: DataProps) => (
            <div
              key={each.id}
              className="flex gap-3 p-1 hover:cursor-pointer hover:rounded-md hover:bg-grey-1"
            >
              <img
                className="h-12 w-12 rounded-md"
                src={each.image}
                alt={each.title}
              />

              <div>
                <p className="text-white-1">{each.title}</p>
                <span className="text-sm text-grey-2">
                  {each.subtitle ? each.subtitle : each.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
