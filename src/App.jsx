import './App.css'
import { Routes, Route, Link, Outlet } from "react-router-dom"
import ChapterIndex from './sites/html/00-index'
import ChapterInstallation from './sites/html/01-installation'
import ChapterHTMLElements from './sites/html/02-1-html-elements'
import ChapterHTMLAttributes from './sites/html/02-2-html-attributes'
import ChapterHTML from './sites/html/02-html'
import ChapterCSS from './sites/html/03-css'
import ChapterCSSSelectors from './sites/html/03-1-css-selectors'
import ChapterCSSBoxModel from './sites/html/03-2-css-box-model'
import ChapterCSSAnimations from './sites/html/03-3-css-animationen'
import ChapterGit from './sites/html/04-git'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ChapterIndex />} />
          <Route path="install" element={<ChapterInstallation />} />
          <Route path="html" element={<ChapterHTML />} />
          <Route path="html-elements" element={<ChapterHTMLElements />} />
          <Route path="html-attributes" element={<ChapterHTMLAttributes />} />
          <Route path="css" element={<ChapterCSS />} />
          <Route path="css-selectors" element={<ChapterCSSSelectors />} />
          <Route path="css-box-model" element={<ChapterCSSBoxModel />} />
          <Route path="css-animations" element={<ChapterCSSAnimations />} />
          <Route path="git" element={<ChapterGit />} />
        </Route>
      </Routes>
    </>
  )
}

function Layout() {
  return (
    <>
    <h1>
        <Link to="/">Gym Informatik</Link>
        <span className="back"><Link to="/">Home</Link></span>
      </h1>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
