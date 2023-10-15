import { Link } from "react-router-dom"
import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"
import Video from "../../components/Video"

export default function ChapterJavascriptChangePage() {
  return (
    <Chapter>
      <h2>Seiteninhalt mit Javascript verändern</h2>
      <section></section>

      <div className="btn-container">
        <Link className="btn" to="/javascript">
          Zurück
        </Link>
        <Link className="btn" to="">
          Weiter
        </Link>
      </div>
    </Chapter>
  )
}
