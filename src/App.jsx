import { useState } from 'react'
import './App.css'
import ChapterIndex from './sites/html/00-index'
import ChapterInstallation from './sites/html/01-installation'
import ChapterHTML from './sites/html/02-html'
// import index from './sites/old-gym-inf/docs/index.html'

function App() {

  const [location, setLocation] = useState(window.location.hash.slice(1))

  //window.removeEventListener('hashchange', false)
  window.addEventListener('hashchange', (ev) => {
    setLocation(window.location.hash.slice(1))
  })

  function getChapter(chap) {
    if(chap === "installation") {
      return <ChapterInstallation />
    } else if ( chap === "html") {
      return <ChapterHTML />
    } else {
      return <ChapterIndex />
    }
  }

  return (
    <>
      <h1>Gym Informatik</h1>
      <main>
        { getChapter(location) }
      </main>
      {/* <iframe style={{
        width: '100%',
        height: '100%',
        overflowY: 'scroll'
      }} src={index}></iframe> */}
    </>
  )
}

export default App
