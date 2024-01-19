import { Play } from 'lucide-react'
import { jumpBackInData, DataProps } from '../../../../utils/data'
import { shuffleArray } from '../../../../utils/shuffleArray'

export function MainCardsSection({ title }: { title: string }) {
  const shuffledData = shuffleArray([...jumpBackInData])

  return (
    <div className="mt-4 flex w-full flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold text-white-1">{title}</p>
        <small className="font-semibold text-gray-300 hover:cursor-pointer hover:underline">
          Show all
        </small>
      </div>
      <div className="flex w-full items-center justify-between gap-2">
        {shuffledData.map((each: DataProps) => (
          <div
            className="group relative flex h-[252px] w-[170px] flex-col justify-start rounded-md bg-slate-800 bg-opacity-30 p-3 transition-all duration-500 hover:cursor-pointer hover:bg-opacity-70"
            key={each.id}
          >
            <img
              className="h-36 w-36 self-center rounded-md"
              src={each.image}
              alt={each.title}
            />

            <div className="absolute right-3 top-28 mr-2 hidden transform rounded-full bg-green p-2 transition-transform hover:scale-110 hover:cursor-pointer group-hover:block group-hover:shadow-3xl">
              <Play fill="black" size={20} className="pl-[3px] " />
            </div>

            <span className="mt-3 text-start font-bold text-white-1">
              {each.title}
            </span>
            <small className="mt-1 line-clamp-2 overflow-hidden text-start font-semibold text-gray-500">
              {each.subtitle}
            </small>
          </div>
        ))}
      </div>
    </div>
  )
}
