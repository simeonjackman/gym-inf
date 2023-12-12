import { Routes, Route, Link, Outlet } from "react-router-dom"
import { useEffect, useRef } from "react"
import ICode from "./components/ICode"

import ChapterPres from "./sites/md/00-pres.mdx"
import ChapterInstallation from "./sites/md/01-installation.mdx"
import ChapterHTML from "./sites/md/02-0-html.mdx"
import ChapterHTMLElements from "./sites/md/02-1-html-elements.mdx"
import ChapterHTMLAttributes from "./sites/md/02-2-html-attributes.mdx"
import ChapterCSS from "./sites/md/03-0-css.mdx"
import ChapterCSSSelectors from "./sites/md/03-1-css-selectors.mdx"
import ChapterCSSBoxModel from "./sites/md/03-2-css-box-model.mdx"
import ChapterCSSAnimations from "./sites/md/03-3-css-animationen.mdx"
import ChapterGit from "./sites/md/04-0-git.mdx"
import ChapterGitBranches from "./sites/md/04-1-git-branches.mdx"
import ChapterGitMerges from "./sites/md/04-2-git-merges.mdx"
import ChapterGitMergeConflicts from "./sites/md/04-3-git-merge-conflicts.mdx"
import ChapterCSSCenterImage from "./sites/md/03-4-css-img.mdx"
import ChapterCSSLayout from "./sites/md/03-5-css-layout.mdx"
import ChapterCSSImgBackground from "./sites/md/03-6-css-img-background.mdx"
import ChapterCSSImgNextToText from "./sites/md/03-7-css-img-next-to-text.mdx"
import ChapterJavascriptIntroduction from "./sites/md/05-0-javascript.mdx"
import ChapterJavascriptChangePage from "./sites/md/05-1-javascript-change-page.mdx"
import ChapterJavascriptTextToNumbers from "./sites/md/05-2-javascript-text-to-numbers.mdx"
import ChapterJavascriptIf from "./sites/md/06-0-javascript-if.mdx"
import ChapterJavascriptFor from "./sites/md/06-1-javascript-for.mdx"
import ChapterJavascriptReturn from "./sites/md/06-2-javascript-return.mdx"
import ChapterJavascriptLists from "./sites/md/06-3-javascript-lists.mdx"
import ChapterJavascriptASCII from "./sites/md/06-4-javascript-ascii.mdx"
import ChapterJavascriptSwitches from "./sites/md/06-5-javascript-switches.mdx"
import ChapterAIIntro from "./sites/md/07-0-ai-intro.mdx"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ChapterIndex />} />
          <Route path="pres" element={<ChapterPres />} />
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
          <Route
            path="git-merge-conflicts"
            element={<ChapterGitMergeConflicts />}
          />
          <Route path="tipp-images" element={<ChapterCSSCenterImage />} />
          <Route path="tipp-flexbox" element={<ChapterCSSLayout />} />
          <Route path="img-background" element={<ChapterCSSImgBackground />} />
          <Route
            path="img-next-to-text"
            element={<ChapterCSSImgNextToText />}
          />
          <Route
            path="javascript"
            element={<ChapterJavascriptIntroduction />}
          />
          <Route
            path="javascript-change-page"
            element={<ChapterJavascriptChangePage />}
          />
          <Route
            path="javascript-text-to-numbers"
            element={<ChapterJavascriptTextToNumbers />}
          />
          <Route path="javascript-if" element={<ChapterJavascriptIf />} />
          <Route path="javascript-for" element={<ChapterJavascriptFor />} />
          <Route
            path="javascript-return"
            element={<ChapterJavascriptReturn />}
          />
          <Route path="javascript-lists" element={<ChapterJavascriptLists />} />
          <Route path="javascript-ascii" element={<ChapterJavascriptASCII />} />
          <Route
            path="javascript-switches"
            element={<ChapterJavascriptSwitches />}
          />
          <Route path="ai-intro" element={<ChapterAIIntro />} />
        </Route>
      </Routes>
    </>
  )
}

function Layout() {
  const dialogRef = useRef(null)
  useEffect(() => {
    window.addEventListener("keydown", (ev) => {
      if (ev.shiftKey && ev.key === " ") {
        dialogRef.current.textContent = window.location
        dialogRef.current.showModal()
      }
    })
  }, [])
  return (
    <>
      <header>
        <h1>
          <Link to="/">Gym Informatik</Link>
          <span className="back">
            <Link to="/">Home</Link>
          </span>
        </h1>
      </header>
      <main>
        <Outlet />
        <dialog
          style={{
            padding: "4rem 2rem",
            fontSize: "2.5rem",
            fontWeight: "bold",
            fontFamily: "monospace",
          }}
          ref={dialogRef}>{`${window.location}`}</dialog>
      </main>
      <footer>Informatik Gymnasium Muttenz</footer>
    </>
  )
}

function ChapterIndex() {
  return (
    <>
      <ol className="nav">
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
            <li>
              <Link to="git-merge-conflicts">
                <ICode>merge</ICode>-Konflikte
              </Link>
            </li>
          </ol>
        </li>
        <li>
          Tipps und Tricks für HTML und CSS
          <ol>
            <li>
              <Link to="tipp-images">Bilder zentrieren</Link>
            </li>
            <li>
              <Link to="tipp-flexbox">Layouts</Link>
            </li>
            <li>
              <Link to="img-background">Bild als Hintergrund</Link>
            </li>
            <li>
              <Link to="img-next-to-text">Bild neben Text</Link>
            </li>
          </ol>
        </li>
        <li>
          Javascript
          <ol>
            <li>
              <Link to="javascript">Einführung in Javascript</Link>
            </li>
            <li>
              <Link to="javascript-change-page">
                Seiteninhalte mit Javascript anpassen
              </Link>
            </li>
            <li>
              <Link to="javascript-text-to-numbers">
                Datentypen in Javascript
              </Link>
            </li>
          </ol>
        </li>
        <li>
          Javascript: Logik
          <ol>
            <li>
              <Link to="javascript-if">
                Bedingungen (<pre>if</pre>)
              </Link>
            </li>
            <li>
              <Link to="javascript-for">
                Javascript Schleifen (<pre>for</pre>)
              </Link>
            </li>
            <li>
              <Link to="javascript-return">
                Rückgabewerte in Javascript (<pre>return</pre>)
              </Link>
            </li>
            <li>
              <Link to="javascript-lists">Listen in Javascript</Link>
            </li>
            <li>
              <Link to="javascript-ascii">ASCII-Codes in Javascript</Link>
            </li>
            <li>
              <Link to="javascript-switches">Schalter in Javascript</Link>
            </li>
          </ol>
        </li>
        <li>
          Künstliche Intelligenz
          <ol>
            <li>
              <Link to="ai-intro">Arbeiten mit küstlicher Intelligenz</Link>
            </li>
          </ol>
        </li>
      </ol>
    </>
  )
}
