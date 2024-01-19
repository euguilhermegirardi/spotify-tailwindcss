import { Home, Search } from 'lucide-react'

export default function Nav() {
  return (
    <nav className="flex flex-col gap-6 rounded-md bg-black-2 p-5">
      <div className="flex cursor-pointer items-center gap-3">
        <Home size={23} className="text-white-1" />
        <span className="text-sm text-white-1">Home</span>
      </div>
      <div className="flex cursor-pointer items-center gap-3 text-grey-2 transition delay-150 ease-in-out hover:text-white-1">
        <Search size={23} />
        <span className="text-sm">Search</span>
      </div>
    </nav>
  )
}
