import { Link } from "react-router-dom"
import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"
import Video from "../../components/Video"

export default function ChapterJavascriptIf() {
  return (
    <Chapter>
      <h2>
        Bedingungen in Javascript (<pre>if</pre>)
      </h2>
      <section>
        Bedingungen bieten die Möglichkeit Code nur dann auszuführen wenn
        gewisse "Bedingungen" erfüllt sind. Dadurch können wir Logik in unser
        Programm bringen, und besser auf Eingaben vom Benutzer reagieren.
      </section>
      <Example title="Beispiel: Einfache Bedingung">
        In Javascript können <pre>Expressions</pre> auf ihren Wahrheitswert
        überprüft werden. Wir können also überprüfen ob eine Variable einen
        bestimmten Wert hat.
        <Code
          language="javascript"
          content={`const value = 7
if (value === 0) {
  alert("Hat den Wert Null")
} else {
  alert("Hat NICHT den Wert Null")
}`}
        />
        Das Beispiel zeigt dass nur der Code ausgeführt wird, der im
        entsprechenden Block steht, so können wir die Logik von einem Programm
        steuern.
      </Example>
      <section>
        <h3>Wert einlesen und Logik anwenden</h3>
        Wir können einen ganze einfachen Passwortschutz erstellen. Im Prinzip
        müssen wir nur wissen ob der Benutzer ein bestimmtes Wort eingegeben
        hat, wenn 'Ja' zeigen wir das Geheimnis an.
      </section>
      <Example title="Beispiel: Passwort geschützt">
        Wir haben den folgenden HTML-Code, der uns ein Element versteckt:
        <Code
          language="html"
          content={`<div>
  <p id="secret" style="display: none">Dieser Text ist streng geheim</p>
  <input type="password" id="password" />
  <button onclick="showSecret()">Geheimnis anzeigen</button>
</div>`}
        />
        Und die folgende Javascript-Funktion dazu:
        <Code
          language="javascript"
          content={`function showSecret() {
  const secretElem = document.querySelector("#secret")
  const passwordElem = document.querySelector("#password")
  if (passwordElem.value === "Geheim") {
    secretElem.style.display = block
  } else {
    alert("Das Passwort ist leider falsch...")
  }
}`}
        />
        So kann man auf einfach Art und Weise gewisse Teile einer Webseite
        auslassen, wenn jemand diese nicht sehen soll. In der Praxis ist das
        natürlich viel aufwendiger, denn hier kann sowohl das Passwort wie auch
        das Geheimnis im Code gelesen werden.
      </Example>
    </Chapter>
  )
}
