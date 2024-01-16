import {
  Heart,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat2,
  PlaySquare,
  Mic2,
  ListVideo,
  Speaker,
  Volume2,
  PictureInPicture2,
} from 'lucide-react'
import Img from '../../assets/ponto_cego.png'
import { useState } from 'react'

export default function Player() {
  const [icons, setIcons] = useState({
    skipForward: false,
    repeat: false,
    playSquare: false,
    mic2: false,
    listVideo: false,
    speaker: false,
    volume2: false,
    pictureInPicture2: false,
  })

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
                  onMouseEnter={() =>
                    setIcons((prevIcons) => ({
                      ...prevIcons,
                      skipForward: true,
                    }))
                  }
                  onMouseLeave={() =>
                    setIcons((prevIcons) => ({
                      ...prevIcons,
                      skipForward: false,
                    }))
                  }
                  color={icons.skipForward ? '#fff' : '#b3b3b3'}
                  fill={icons.skipForward ? '#fff' : '#b3b3b3'}
                  size={20}
                />
                <Repeat2
                  onMouseEnter={() =>
                    setIcons((prevIcons) => ({
                      ...prevIcons,
                      repeat: true,
                    }))
                  }
                  onMouseLeave={() =>
                    setIcons((prevIcons) => ({
                      ...prevIcons,
                      repeat: false,
                    }))
                  }
                  color={icons.repeat ? '#fff' : '#b3b3b3'}
                  size={20}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div>
              <p className="text-xs text-grey-2 hover:cursor-default">4:20</p>
            </div>

            <div className="group relative h-1.5 w-full rounded-full bg-grey-1">
              <div className="relative h-1.5 w-[68.42%] rounded-full bg-white-1 group-hover:bg-green">
                <div className="absolute right-0 top-[2px] h-3 w-3 -translate-y-1/2 translate-x-2/4 rounded-full bg-white-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            </div>

            <div>
              <p className="text-xs text-grey-2 hover:cursor-default">6:20</p>
            </div>
          </div>
        </div>

        <div className="flex w-[30%] min-w-[180px] items-center justify-end gap-2">
          <PlaySquare
            size={18}
            className="hover:cursor-pointer"
            onMouseEnter={() =>
              setIcons((prevIcons) => ({
                ...prevIcons,
                playSquare: true,
              }))
            }
            onMouseLeave={() =>
              setIcons((prevIcons) => ({
                ...prevIcons,
                playSquare: false,
              }))
            }
            color={icons.playSquare ? '#fff' : '#b3b3b3'}
          />
          <Mic2
            size={18}
            className="hover:cursor-pointer"
            onMouseEnter={() =>
              setIcons((prevIcons) => ({
                ...prevIcons,
                mic2: true,
              }))
            }
            onMouseLeave={() =>
              setIcons((prevIcons) => ({
                ...prevIcons,
                mic2: false,
              }))
            }
            color={icons.mic2 ? '#fff' : '#b3b3b3'}
          />
          <ListVideo
            size={18}
            className="hover:cursor-pointer"
            onMouseEnter={() =>
              setIcons((prevIcons) => ({
                ...prevIcons,
                listVideo: true,
              }))
            }
            onMouseLeave={() =>
              setIcons((prevIcons) => ({
                ...prevIcons,
                listVideo: false,
              }))
            }
            color={icons.listVideo ? '#fff' : '#b3b3b3'}
          />
          <Speaker
            size={18}
            onMouseEnter={() =>
              setIcons((prevIcons) => ({
                ...prevIcons,
                speaker: true,
              }))
            }
            onMouseLeave={() =>
              setIcons((prevIcons) => ({
                ...prevIcons,
                speaker: false,
              }))
            }
            color={icons.speaker ? '#fff' : '#b3b3b3'}
          />
          <Volume2
            size={18}
            onMouseEnter={() =>
              setIcons((prevIcons) => ({
                ...prevIcons,
                volume2: true,
              }))
            }
            onMouseLeave={() =>
              setIcons((prevIcons) => ({
                ...prevIcons,
                volume2: false,
              }))
            }
            color={icons.volume2 ? '#fff' : '#b3b3b3'}
          />

          <div className="group relative h-1.5 w-28 rounded-full bg-grey-1">
            <div className="relative h-1.5 w-3/4 rounded-full bg-white-1 group-hover:bg-green">
              <div className="absolute right-0 top-[2px] h-3 w-3 -translate-y-1/2 translate-x-2/4 rounded-full bg-white-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          </div>

          <PictureInPicture2
            size={18}
            onMouseEnter={() =>
              setIcons((prevIcons) => ({
                ...prevIcons,
                pictureInPicture2: true,
              }))
            }
            onMouseLeave={() =>
              setIcons((prevIcons) => ({
                ...prevIcons,
                pictureInPicture2: false,
              }))
            }
            color={icons.pictureInPicture2 ? '#fff' : '#b3b3b3'}
          />
        </div>
      </div>
    </footer>
  )
}
