/* eslint-disable react/no-unescaped-entities */
import { PlayCircle, Heart, Pause } from 'lucide-react'
import ToolSmallImg from '../../assets/tool-small.png'

export default function MobilePlayer() {
  return (
    <div className="bg-grey-3 w-1full absolute bottom-20 left-2 right-2 z-10 flex flex-col rounded-md px-4 pt-1 md:hidden">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img
            className="h-12 w-12 rounded-md"
            src={ToolSmallImg}
            alt="tool-album"
          />

          <div className="item-center flex flex-col justify-center">
            <p className="text-sm font-bold">The Pot - Tool</p>
            <span className="flex items-center justify-items-center gap-1 text-sm font-light text-green">
              <PlayCircle size={15} /> GUILHERME'S MACBOOK PRO
            </span>
          </div>
        </div>

        <div className="flex-2 flex items-center justify-end gap-3">
          <Heart />
          <Pause />
        </div>
      </div>

      <div className="h-0.5 rounded-full bg-grey-1">
        <div className="h-0.5 w-3/5 rounded-full bg-white" />
      </div>
    </div>
  )
}
