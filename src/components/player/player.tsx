import {
  Heart,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat2,
} from 'lucide-react'
import Img from '../../assets/ponto_cego.png'
import { useState } from 'react'

export default function Player() {
  const [isSkipForwardHovered, setIsSkipForwardHovered] = useState(false)
  const [isRepeatHovered, setIsRepeatHovered] = useState(false)

  return (
    <footer className="hidden p-2 md:flex md:h-auto md:min-w-[620px]">
      <div className="flex h-[72px] items-center justify-between md:w-full">
        <div className="items-items-center flex w-[30%] min-w-44 px-2">
          <img className="h-14 w-14 rounded-md" src={Img} alt="img-png" />
          <div className="ml-3 flex flex-col items-start justify-center">
            <span className="text-sm text-white-1 hover:cursor-pointer hover:underline">
              Sombra das Cavernas
            </span>
            <small className="text-grey-2 hover:cursor-pointer hover:text-white-1 hover:underline">
              Dead Fish
            </small>
          </div>
          <div className="ml-5 flex items-center justify-center">
            <Heart
              className="text-grey-2 hover:cursor-pointer hover:text-white-1"
              size={18}
              strokeWidth={2.5}
            />
          </div>
        </div>

        <div className="w-[40%] max-w-[722px]">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-2 flex w-full flex-nowrap gap-6">
              <div className="flex flex-1 items-center justify-end gap-5">
                <Shuffle color="#1db954" className="opacity-50" size={20} />
                <SkipBack color="#535353" fill="#535353" size={20} />
              </div>

              <div className="flex scale-100 transform items-center justify-center rounded-full bg-white-1 p-2 transition-transform hover:scale-110">
                <Play color="#000" fill="#000" size={18} />
              </div>

              <div className="flex flex-1 items-center gap-5 hover:text-white-1">
                <SkipForward
                  onMouseEnter={() => setIsSkipForwardHovered(true)}
                  onMouseLeave={() => setIsSkipForwardHovered(false)}
                  color={isSkipForwardHovered ? '#ffffff' : '#b3b3b3'}
                  fill={isSkipForwardHovered ? '#ffffff' : '#b3b3b3'}
                  size={20}
                />
                <Repeat2
                  onMouseEnter={() => setIsRepeatHovered(true)}
                  onMouseLeave={() => setIsRepeatHovered(false)}
                  color={isRepeatHovered ? '#ffffff' : '#b3b3b3'}
                  size={20}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div>
              <p className="text-xs text-grey-2">4:20</p>
            </div>

            <div className="group relative h-0.5 w-full rounded-full bg-grey-1">
              <div className="relative h-0.5 w-[68.42%] rounded-full bg-white-1 group-hover:bg-green">
                <div className="absolute right-0 h-3 w-3 -translate-y-1/2 translate-x-2/4 rounded-full bg-white-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            </div>

            <div>
              <p className="text-xs text-grey-2">6:20</p>
            </div>
          </div>
        </div>

        <div className="flex w-[30%] min-w-[180px] justify-end bg-teal-700">
          3
        </div>
      </div>
    </footer>
  )
}
