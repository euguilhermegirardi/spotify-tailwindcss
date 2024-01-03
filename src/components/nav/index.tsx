import { Home, Search } from 'lucide-react'

export default function Nav() {
  return (
    <nav className="flex flex-col gap-6 rounded-md bg-black-2 p-5">
      <div className="flex items-center gap-3 md:cursor-pointer">
        <Home size={23} />
        <span className="text-sm">Home</span>
      </div>
      <div className="flex items-center gap-3 text-grey-2 transition delay-150 ease-in-out hover:text-white md:cursor-pointer">
        <Search size={23} />
        <span className="text-sm">Search</span>
      </div>
    </nav>
  )
}
