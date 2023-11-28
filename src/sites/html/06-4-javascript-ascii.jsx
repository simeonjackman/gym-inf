import { Link } from "react-router-dom"
import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"
import Video from "../../components/Video"

export default function ChapterJavascriptASCII() {
  return (
    <Chapter>
      <h2>ASCII-Codes in Javascript</h2>
      <section>
        Der ASCII-Code ist ein Code der jedem Zeichen eine Zahl zuweist. Das
        braucht der Cumputer da er wissen muss welches Zeichen er darstellen
        soll, denn der Computer kann selber nur mit Zahlen umgehen.
      </section>
      <section>
        In dieser Tabelle ist festgehalten welche Zahl im ASCII-Code welchem
        Zeichen entspricht:
        <div style={{ textAlign: "center" }}>
          <img
            src="https://www.asciitable.com/asciifull.gif"
            alt="ascii-table"
            style={{ width: "min(100%, 860px)" }}
          />
        </div>
        In dieser Tabelle können wir zum Beispiel ablesen dass alle Buchstaben
        am Stück vorkommen. Es ist also einfach zu prüfen ob es sich um einen
        Kleinbuchstaben handelt.
      </section>
      <Example title="Beispiel: Kleinbuchstaben erkennen">
        Wenn wir einen Kleinbuchstaben erkennen möchten, können wir einfach
        überprüfen ob dessen ASCII-Wert in einem bestimmten Bereich liegt.
        <Code
          language="javascript"
          content={`const singleCharacter = 'd'
const ascii = singleCharacter.charCodeAt(0)
if (97 <= ascii && ascii <= 122) {
  console.log("Es ist ein Kleinbuchstabe.")
} else {
  console.log("Es ist sicher kein Kleinbuchstabe.")
}`}
        />
        Wir könnten nun noch weitere Fälle einbauen, um komplexere Überprüfungen
        zu erstellen.
      </Example>
      <section>
        <h3>Sortieren mit dem ASCII-Code</h3>
        Wenn Sie die Tabelle genau anschauen, dann sehen Sie das die Buchstaben
        im ASCII-Code bereits schön sortiert sind. Das macht es sehr praktisch
        wenn wir einen vergleichsbasierten Sortieralgorithmus schreiben möchten.
      </section>
      <Example title="Beispiel: Text sortieren">
        Wenn wir einen einfachen Text sortieren möchten, können wir das mithilfe
        vom ASCII-Code machen, dann sind auch direkt die Klein- und
        Grossbuchstaben sortiert.
        <Code
          language="javascript"
          content={`const text = "Bitte sortiere mich!"
const list = text.split("")  // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
for (let i = 0; i < list.length - 1; i++) {
  const currentElement = list[i]
  const nextElement = list[i+1]
  if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
    // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
    const tmp = list[i+1]
    list[i+1] = list[i]
    list[i] = tmp
    i = -1 // starte von vorne wenn etwas vertauscht wurde.
  }
}
const result = list.join("")
console.log(result)`}
        />
        Am eine ist <ICode>result</ICode> der sortierte Text.
      </Example>
    </Chapter>
  )
}
