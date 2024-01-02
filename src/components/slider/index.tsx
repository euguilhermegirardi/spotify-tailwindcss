import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { DataProps } from '../../utils/data'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

export default function Slider({
  data,
  perView,
  spaceBetween,
}: {
  data: DataProps[]
  perView: number
  spaceBetween: number
}) {
  return (
    <Swiper
      slidesPerView={perView}
      spaceBetween={spaceBetween}
      freeMode={true}
      modules={[FreeMode]}
      className="mySwiper"
    >
      {data.map((each: DataProps) => (
        <SwiperSlide key={each.id}>
          <img
            className="h-38 w-38 rounded-md"
            src={each.image}
            alt={each.title}
          />
          <p>{each.title}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
