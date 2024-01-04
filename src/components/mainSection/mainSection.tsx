import { Settings } from 'lucide-react'
import { data } from '../../utils/data'
import { shuffleArray } from '../../utils/shuffleArray'
import MobileSlider from '../mobileSlider'
import MobilePlayer from '../mobilePlayer'
import MobileFooter from '../mobileFooter'

export default function MainSection() {
  const shuffledData = shuffleArray([...data])

  return (
    <main className="flex w-full flex-col px-2 py-6 md:h-screen md:flex-5">
      <div className="flex flex-row-reverse justify-between">
        <div>
          <Settings size={28} strokeWidth={1.5} />
        </div>

        <div>
          <h1 className="text-2xl font-semibold">Good morning</h1>
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
