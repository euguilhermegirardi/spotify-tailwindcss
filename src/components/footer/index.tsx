import { Home, Search, GalleryHorizontalEnd, Disc2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-2 right-2 z-10 flex h-20 items-center justify-between bg-gradient-to-t from-black-2 from-90% to-transparent to-100% px-8 py-1 text-grey-2">
      <div className="flex h-16 flex-col items-center justify-center gap-1 text-white">
        <Home size={24} />
        <p className="text-xs">Home</p>
      </div>
      <div className="flex h-16 flex-col items-center justify-center gap-1">
        <Search size={24} />
        <p className="text-xs">Search</p>
      </div>
      <div className="flex h-16 flex-col items-center justify-center gap-1">
        <GalleryHorizontalEnd size={24} />
        <p className="text-xs">Your Library</p>
      </div>
      <div className="flex h-16 flex-col items-center justify-center gap-1">
        <Disc2 size={24} />
        <p className="text-xs">Get App</p>
      </div>
    </footer>
  )
}
