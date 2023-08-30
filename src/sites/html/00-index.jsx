import {Link} from "react-router-dom"
import ICode from "../../components/ICode"

export default function ChapterIndex() {

  return (
    <>
      <ol>
        <li>Einführung
          <ol>
            <li><Link to="install">Installation</Link></li>
          </ol>
        </li>
        <li>
          HTML
          <ol>
            <li><Link to="html">Webseiten</Link></li>
            <li><Link to="html-elements">Webseiten strukturieren</Link></li>
            <li><Link to="html-attributes">HTML Attribute</Link></li>
          </ol>
        </li>
        <li>
          CSS
          <ol>
            <li><Link to="css">Elemente gestalten</Link></li>
            <li><Link to="css-selectors">CSS Selektoren</Link></li>
            <li><Link to="css-box-model">CSS Box Modell</Link></li>
            <li><Link to="css-animations">CSS Animationen</Link></li>
          </ol>
        </li>
        <li>
          Git
          <ol>
            <li><Link to="git">Versionskontrolle</Link></li>
            <li><Link to="git-branches">Versionszweige (<ICode>branch</ICode>es)</Link></li>
          </ol>
        </li>
      </ol>
    </>
  )
}