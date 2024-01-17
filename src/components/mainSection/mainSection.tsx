import {
  Settings,
  ChevronLeft,
  ChevronRight,
  ArrowDownToLine,
  Bell,
} from 'lucide-react'
import { data } from '../../utils/data'
import { shuffleArray } from '../../utils/shuffleArray'
import MobileSlider from '../mobileSlider'
import MobilePlayer from '../mobilePlayer'
import MobileFooter from '../mobileFooter'
import Avatar from '../../assets/avatar.png'

export default function MainSection() {
  const shuffledData = shuffleArray([...data])

  return (
    <main className="flex w-full flex-col px-2 py-0 md:h-screen md:flex-5">
      <div className="flex flex-row-reverse justify-between">
        <div>
          <Settings
            className="md:hidden"
            size={28}
            color="white"
            strokeWidth={1.5}
          />
        </div>

        <div className="hidden md:flex md:w-full md:flex-col md:px-2 md:py-0">
          <div className="flex h-14 w-full items-center justify-between">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 cursor-pointer items-center rounded-full bg-slate-800 bg-opacity-30 p-2">
                <ChevronLeft color="white" />
              </div>
              <div className="flex h-10 w-10 cursor-pointer items-center rounded-full bg-slate-800 bg-opacity-30 p-2">
                <ChevronRight color="white" />
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex items-center justify-center rounded-full bg-white-1 px-5 py-2">
                <span className="text-black text-sm font-bold">
                  Explorer Premium
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-full bg-slate-800 bg-opacity-30 px-5 py-2">
                <div className="flex items-center justify-center rounded-full border p-1">
                  <ArrowDownToLine color="white" size={14} />
                </div>
                <span className="text-sm font-bold text-white-1">
                  Install App
                </span>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 bg-opacity-30">
                <Bell color="white" size={16} />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 bg-opacity-30">
                <img className="h-6 w-6" src={Avatar} alt="avatar-png" />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-semibold text-white-1">
              Good morning
            </h1>
            <div>
              <p>6 small cards</p>
            </div>
          </div>

          <div>
            <p>Jump back in</p>
            <div>
              <p>5 cards</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16 md:hidden">
        <MobileSlider data={data} perView={2.5} spaceBetween={15} />
      </div>

      <div className="pt-10 md:hidden">
        <p className="pb-4 text-xl font-bold">Your top mixes...</p>

        <MobileSlider data={shuffledData} perView={2.5} spaceBetween={15} />
      </div>

      <MobilePlayer />
      <MobileFooter />
    </main>
  )
}
