import { Settings } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode } from 'swiper/modules'
import { DataProps, data } from '../../utils/data'
import { shuffleArray } from '../../utils/shuffleArray'

export default function MainSection() {
  const shuffledData = shuffleArray([...data])

  return (
    <main className="flex w-full flex-col  px-4 py-6">
      <div className="flex flex-row-reverse justify-between">
        <div>
          <Settings size={28} strokeWidth={1.5} />
        </div>

        <div>
          <h1 className="text-2xl font-semibold">Good morning</h1>
        </div>
      </div>

      <div className="pt-16">
        <Swiper
          slidesPerView={2.5}
          spaceBetween={15}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {data.map((each: DataProps) => (
            <SwiperSlide key={each.id}>
              <img
                className="h-35 w-35 rounded-md"
                src={each.image}
                alt="asd"
              />
              <p>{each.title}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="pt-2">
        <p>Your top mixes...</p>

        <Swiper
          slidesPerView={2.5}
          spaceBetween={15}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {shuffledData.map((each: DataProps) => (
            <SwiperSlide key={each.id}>
              <img
                className="h-35 w-35 rounded-md"
                src={each.image}
                alt="asd"
              />
              <p>{each.title}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  )
}
