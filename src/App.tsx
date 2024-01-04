import Library from './components/library'
import MainSection from './components/mainSection'
import Nav from './components/nav'

export default function App() {
  return (
    <div className="text-white h-screen overflow-hidden bg-black-0 font-roboto md:flex md:p-2">
      <div className="hidden md:flex md:flex-2 md:flex-col md:gap-2">
        <Nav />
        <Library />
      </div>

      <MainSection />
    </div>
  )
}
