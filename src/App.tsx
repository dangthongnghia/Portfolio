import './App.css'
// import { Header } from './components/Header'
import { Projects } from './page/projects'
import Info from './page/info'
import { About } from './page/about'
import { Contact } from './page/contact'

function App() {
  return (
    <>
      <div className='w-full bg-[#060D10]'>
        {/* <Header /> */}
        <Info />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
