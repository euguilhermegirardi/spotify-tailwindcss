import { ChevronLeft, ChevronRight, ArrowDownToLine, Bell } from 'lucide-react'
import Avatar from '../../../../assets/avatar.png'
import { useState, useEffect } from 'react'

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`${
        isScrolled ? 'bg-slate-950' : ''
      } sticky left-0 right-0 top-0 z-50 mb-4 mt-1 flex h-8 w-full items-center justify-between`}
    >
      <div className="flex gap-4">
        <div className="flex h-9 w-9 cursor-pointer items-center rounded-full bg-slate-900 bg-opacity-80 p-2">
          <ChevronLeft color="white" />
        </div>
        <div className="flex h-9 w-9 cursor-not-allowed items-center rounded-full bg-slate-800 bg-opacity-30 p-2">
          <ChevronRight color="white" />
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex items-center justify-center rounded-full bg-white-1 px-4 transition-transform duration-300 hover:scale-105 hover:cursor-pointer">
          <span className="text-black text-sm font-bold group-hover:transform">
            Explorer Premium
          </span>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-full bg-slate-800 bg-opacity-30 px-4 transition-transform duration-300 hover:scale-105 hover:cursor-pointer">
          <div className="flex items-center justify-center rounded-full border p-1">
            <ArrowDownToLine
              className="group-hover:transform"
              color="white"
              size={14}
            />
          </div>
          <span className="text-sm font-bold text-white-1 group-hover:transform">
            Install App
          </span>
        </div>
        <div className="group flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 bg-opacity-30 transition-transform duration-300 hover:scale-110 hover:cursor-pointer">
          <Bell className="group-hover:transform" color="white" size={16} />
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 bg-opacity-30 transition-transform duration-300 hover:scale-110 hover:cursor-pointer">
          <img
            className="h-6 w-6 group-hover:transform"
            src={Avatar}
            alt="avatar-png"
          />
        </div>
      </div>
    </div>
  )
}
