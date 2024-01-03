import { LibraryBig, Plus, ArrowRight } from 'lucide-react'

export default function Library() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="flex">
          <LibraryBig />
          <p>Your Library</p>
        </div>

        <div className="flex">
          <Plus />
          <ArrowRight />
        </div>
      </div>

      <div className="">
        <p>Playlists</p>
        <p>Artists</p>
      </div>

      <div className="">
        <small>search</small>
        <small>Recents icon</small>
      </div>

      <ul className="">
        <li className="">List...</li>
        <li className="">List...</li>
        <li className="">List...</li>
        <li className="">List...</li>
        <li className="">List...</li>
        <li className="">List...</li>
        <li className="">List...</li>
      </ul>
    </div>
  )
}
