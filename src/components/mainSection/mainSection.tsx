import { useState } from 'react'
import { Settings, Play } from 'lucide-react'
import { DataProps, data, recentlyData } from '../../utils/data'
import { shuffleArray } from '../../utils/shuffleArray'
import MobileSlider from '../mobileSlider'
import MobilePlayer from '../mobilePlayer'
import MobileFooter from '../mobileFooter'
import StickyHeader from './components/stickyHeader'
import { MainCardsSection } from './components/mainCardsSection'
import '../../index.css'

export default function MainSection() {
  const [currentHoveredIndex, setCurrentHoveredIndex] = useState<number | null>(
    null,
  )

  const shuffledData = shuffleArray([...data])

  const getGradientClass = () => {
    if (window.innerWidth >= 768) {
      switch (currentHoveredIndex) {
        case 1:
          return 'bg-gradient-to-b from-red-800 via-slate-950 to-slate-950'
        case 2:
          return 'bg-gradient-to-b from-yellow-500 via-slate-950 to-slate-950'
        case 3:
          return 'bg-gradient-to-b from-orange-800 via-slate-950 to-slate-950'
        case 4:
          return 'bg-gradient-to-b from-emerald-800 via-slate-950 to-slate-950'
        case 5:
          return 'bg-gradient-to-b from-violet-800 via-slate-950 to-slate-950'
        case 6:
          return 'bg-gradient-to-b from-fuchsia-800 via-slate-950 to-slate-950'
        default:
          return 'bg-gradient-to-b from-pink-800 via-slate-950 to-slate-950'
      }
    }
  }

  const handleHover = (index: number) => {
    setCurrentHoveredIndex(index)
  }

  return (
    <main
      className={`relative flex h-screen w-full flex-col rounded-md ${getGradientClass()} p-4 md:flex-5 md:py-0 md:pt-4`}
    >
      <div className="scrollbar-gutter flex h-screen flex-col overflow-hidden pb-32 hover:overflow-y-auto">
        <div className="flex flex-col justify-between">
          <div className="flex w-full items-center justify-between md:hidden">
            <h1 className="text-3xl font-semibold text-white-1">
              Good morning
            </h1>

            <Settings
              className="md:hidden"
              size={28}
              color="white"
              strokeWidth={1.5}
            />
          </div>

          <StickyHeader />

          <div className="hidden md:flex md:w-full md:flex-col md:gap-2 md:px-2 md:py-0">
            <div className="mt-3 flex flex-col">
              <h1 className="text-3xl font-semibold text-white-1">
                Good morning
              </h1>

              <div className="mt-2 grid grid-cols-3 grid-rows-2 gap-2">
                {recentlyData.map((album: DataProps) => (
                  <div
                    key={album.id}
                    className="group flex h-14 cursor-pointer items-center justify-between gap-2 rounded-md bg-slate-400 bg-opacity-20 transition-all hover:bg-white-1 hover:bg-opacity-30 hover:duration-500"
                    onMouseEnter={() => handleHover(album.id)}
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-14 w-14 items-center">
                        <img
                          className="h-full rounded-l rounded-tl"
                          src={album.image}
                          alt={album.title}
                        />
                      </div>
                      <small className="text-base text-white-1">
                        {album.title}
                      </small>
                    </div>

                    <div className="mr-2 hidden transform rounded-full bg-green p-2 transition-transform hover:scale-110 group-hover:block group-hover:shadow-3xl">
                      <Play fill="black" size={20} className="pl-[3px] " />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <MainCardsSection title={'Your top mixes'} />
            <MainCardsSection title={'Jump back in'} />
            <MainCardsSection title={'Recently played'} />
            <MainCardsSection title={'Trowback'} />
          </div>
        </div>

        <div className="pt-16 md:hidden">
          <MobileSlider data={data} perView={2.5} spaceBetween={15} />
        </div>

        <div className="pt-10 md:hidden">
          <p className="pb-4 text-xl font-bold text-white-1">
            Your top mixes...
          </p>
          <MobileSlider data={shuffledData} perView={2.5} spaceBetween={15} />
        </div>

        <div className="pt-10 md:hidden">
          <p className="pb-4 text-xl font-bold text-white-1">
            Your top mixes...
          </p>
          <MobileSlider data={shuffledData} perView={2.5} spaceBetween={15} />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 flex w-full flex-col">
        <MobilePlayer />
        <MobileFooter />
      </div>
    </main>
  )
}
