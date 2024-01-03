import Library from './components/library'
import MainSection from './components/mainSection'
import Nav from './components/nav'

export default function App() {
  return (
    <div className="bg-black-0 h-screen overflow-auto font-roboto text-white md:flex md:p-2">
      <div className="md:flex-2 ">
        <Nav />
        <Library />
      </div>

      <MainSection />
    </div>
  )
}
