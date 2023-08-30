import "./App.css"
import { Routes, Route, Link, Outlet } from "react-router-dom"
import ChapterInstallation from "./sites/html/01-installation"
import ChapterHTMLElements from "./sites/html/02-1-html-elements"
import ChapterHTMLAttributes from "./sites/html/02-2-html-attributes"
import ChapterHTML from "./sites/html/02-0-html"
import ChapterCSS from "./sites/html/03-0-css"
import ChapterCSSSelectors from "./sites/html/03-1-css-selectors"
import ChapterCSSBoxModel from "./sites/html/03-2-css-box-model"
import ChapterCSSAnimations from "./sites/html/03-3-css-animationen"
import ChapterGit from "./sites/html/04-0-git"
import ChapterGitBranches from "./sites/html/04-1-git-branches"
import ICode from "./components/ICode"
import ChapterGitMerges from "./sites/html/04-2-git-merges"

export default function App() {
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
          <Route path="git-branches" element={<ChapterGitBranches />} />
          <Route path="git-merges" element={<ChapterGitMerges />} />
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
        <span className="back">
          <Link to="/">Home</Link>
        </span>
      </h1>
      <main>
        <Outlet />
      </main>
    </>
  )
}

function ChapterIndex() {
  return (
    <>
      <ol>
        <li>
          Einführung
          <ol>
            <li>
              <Link to="install">Installation</Link>
            </li>
          </ol>
        </li>
        <li>
          HTML
          <ol>
            <li>
              <Link to="html">Webseiten</Link>
            </li>
            <li>
              <Link to="html-elements">Webseiten strukturieren</Link>
            </li>
            <li>
              <Link to="html-attributes">HTML Attribute</Link>
            </li>
          </ol>
        </li>
        <li>
          CSS
          <ol>
            <li>
              <Link to="css">Elemente gestalten</Link>
            </li>
            <li>
              <Link to="css-selectors">CSS Selektoren</Link>
            </li>
            <li>
              <Link to="css-box-model">CSS Box Modell</Link>
            </li>
            <li>
              <Link to="css-animations">CSS Animationen</Link>
            </li>
          </ol>
        </li>
        <li>
          Git
          <ol>
            <li>
              <Link to="git">Versionskontrolle</Link>
            </li>
            <li>
              <Link to="git-branches">
                Versionszweige (<ICode>branch</ICode>es)
              </Link>
            </li>
            <li>
              <Link to="git-merges">
                Versionen zusammenführen (<ICode>merge</ICode>)
              </Link>
            </li>
          </ol>
        </li>
      </ol>
    </>
  )
}
