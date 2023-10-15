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
      <section>
        Eine der häufigsten Aktionen die man in Javascript macht, ist das
        verändern der Webseite. Sollten sich Daten verändert haben, dann möchte
        man das auf der Webseite neu so anzeigen, ohne diese neu laden zu
        müssen. Mit Javascript können wir dafür das einfache Muster verwenden,
        das Sie im letzte Kapitel bereits gesehen haben.
      </section>
      <section>
        <h3>Werte laden, verändern und zurückschreiben</h3>
        Es gibt verschiedene Werte die man verändern kann, jeder Wert kommt
        jedoch von einem HTML-Element. Damit wir diesen auch verwenden können,
        speichern wir das HTML-Element zuerst in einer Variable, diese können
        wir dann im Code weiter verwenden.
      </section>
      <Example title="Beispiel: Text anpassen">
        Wir betrachten die folgende Funktion in Javascript, sie soll den Text
        von einem Element mit dem Text <pre>"Dieser Text wurde gelöscht!"</pre>{" "}
        ersetzen.
        <LCode
          content={`function deleteText() {
  const elemToDeleteText = document.querySelector("#to-delete")
  elemToDeleteText.textContent = "Dieser Text wurde gelöscht!"
}`}></LCode>
        Die Funktion existiert nun, und wir müssen sie nur noch ausführen. Wir
        brauchen aber auch noch das Element auf dem der Text gelöscht werden
        soll, das macht der folgende HTML-Code.
        <LCode
          content={`<p id="to-delete">Hier steht Text der später gelöscht werden soll.</p>
<button onclick="deleteText()">Text löschen</button>`}></LCode>
      </Example>

      <div className="btn-container">
        <Link className="btn" to="/javascript">
          Zurück
        </Link>
        <Link className="btn" to="/javascript-text-to-numbers">
          Weiter
        </Link>
      </div>
    </Chapter>
  )
}
