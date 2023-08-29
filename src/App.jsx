import { useState } from 'react'
import './App.css'
import ChapterIndex from './sites/html/00-index'
import ChapterInstallation from './sites/html/01-installation'
import ChapterHTMLElements from './sites/html/02-1-html-elements'
import ChapterHTMLAttributes from './sites/html/02-2-html-attributes'
import ChapterHTML from './sites/html/02-html'
import ChapterCSS from './sites/html/03-css'
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
    } else if ( chap === "html-elements") {
      return <ChapterHTMLElements />
    } else if ( chap === "html-attributes") {
      return <ChapterHTMLAttributes />
    } else if ( chap === "css") {
      return <ChapterCSS />
    } else {
      return <ChapterIndex />
    }
  }

  return (
    <>
      <h1>
        <a href="#index">Gym Informatik</a>
        <span className="back"><a href="#index">Home</a></span>
      </h1>
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
