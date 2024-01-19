import Library from './components/library'
import MainSection from './components/mainSection'
import Nav from './components/nav'
import Player from './components/player'

export default function App() {
  return (
    <div className="text-white h-screen bg-black-0 font-roboto md:flex md:flex-col md:p-2">
      <div className="flex gap-2 overflow-hidden">
        <div className="hidden md:flex md:min-w-[371.71px] md:flex-2 md:flex-col md:gap-2">
          <Nav />
          <Library />
        </div>

        <MainSection />
      </div>

      <Player />
    </div>
  )
}
