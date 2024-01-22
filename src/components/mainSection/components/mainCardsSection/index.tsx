import { useMediaQuery } from 'react-responsive'
import { Play } from 'lucide-react'
import { jumpBackInData, DataProps } from '../../../../utils/data'

export function MainCardsSection({ title }: { title: string }) {
  const isLargeScreen = useMediaQuery({ minWidth: 1344 })
  const isMediumScreen = useMediaQuery({ minWidth: 1030, maxWidth: 1343 })
  const isSmallerScreen = useMediaQuery({ minWidth: 800, maxWidth: 1029 })
  const itemsToShow = isLargeScreen
    ? 5
    : isMediumScreen
      ? 4
      : isSmallerScreen
        ? 3
        : jumpBackInData.length

  return (
    <div className="mx-[1.8rem] mt-4 flex w-auto flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold text-white-1">{title}</p>
        <small className="font-semibold text-gray-300 hover:cursor-pointer hover:underline">
          Show all
        </small>
      </div>

      <div className="flex w-full items-center justify-between gap-2">
        {jumpBackInData.slice(0, itemsToShow).map((each: DataProps) => (
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
