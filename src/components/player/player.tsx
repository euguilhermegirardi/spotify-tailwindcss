import { Heart } from 'lucide-react'
import Img from '../../assets/ponto_cego.png'

export default function Player() {
  return (
    <footer className="hidden p-2 md:flex md:h-auto md:min-w-[620px]">
      <div className="flex h-[72px] items-center justify-between md:w-full">
        <div className="items-items-center flex w-[30%] min-w-44 px-2">
          <img className="h-14 w-14 rounded-md" src={Img} alt="img-png" />
          <div className="ml-3 flex flex-col items-start justify-center">
            <span className="text-sm text-white-1">Sombra das Cavernas</span>
            <small className="text-grey-2">Dead Fish</small>
          </div>
          <div className="ml-5 flex items-center justify-center">
            <Heart className="text-grey-2" size={18} strokeWidth={2.5} />
          </div>
        </div>
        <div className="w-[40%] max-w-[722px] bg-slate-600">2</div>
        <div className="flex w-[30%] min-w-[180px] justify-end bg-teal-700">
          3
        </div>
      </div>
    </footer>
  )
}
