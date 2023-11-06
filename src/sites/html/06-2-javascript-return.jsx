import { Link } from "react-router-dom"
import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"
import Video from "../../components/Video"

export default function ChapterJavascriptReturn() {
  return (
    <Chapter>
      <h2>
        Javascript Rückgabewerte (<pre>return</pre>)
      </h2>
      <section>
        Funktionen haben einen Rückgabewert, das heisst sie geben einen Wert an die Stelle zurück, wo die Funktion aufgerufen wurde. Sie haben das selber im Code schon oft verwendet.
      </section>
      <Example title="Beispiel: In Kleinbuchstaben umwandeln">
        <Code
          language="javascript"
          content={`const letterCapitalA = "A"
const letterSmallA = letterCapitalA.toLowerCase()`}
        />
        Was hier in der Zeile zwei passiert, ist dass eine Funktion ausgeführt wird, und die Kleinbuchstabenversion von einem Text zurück gibt. Diesen Rückgabewert wird dann in einer neuen Variable gespeichert.
      </Example>
      <section>
        <h3>Eigene Rückgabewerte erstellen</h3>
        In eigenen Funktionen können Sie auch selber Rückgabewerte schreiben, damit können Sie Werte aus einer Funktion an den Aufrufer zurückgeben.
      </section>
      <Example title="Beispiel: Wahr/Falsch Funktion">
        Sollten Sie eine Funktion schreiben wollen, die entscheidet ob etwas ist, oder nicht, möchten Sie einen Wahrheitswert (<pre>boolen</pre>) zurückgeben.
        <Code
          language="javascript"
          content={`function containsNumber(args) {
  const input = args
  for ( let i = 0; i < input.length; i++ ) {
    const currentElement = input[i]
    const asciiCode = currentElement.charCodeAt(0)
    if (48 <= asciiCode && asciiCode <= 57) {
      return true
    }
  }
  return false
}`}
        />
        Diese Funktion geht die Eingabe Zeichen für Zeichen durch, und sobald ein Zeichen kommt dass eine Ziffer ist, gibt die Funktion <pre>true</pre> zurück und bricht ab. Wird keine Ziffer gefunden, wird ganz am Ende <pre>false</pre> zurückgegeben. Diese Funktion kann uns also sagen ob in einem Text eine Zahl vorkommt oder nicht.
        <Code
          language="javascript"
          content={`if (containsNumber("ABCDEF 4 abcdef")) {
  alert("Enthält eine Zahl")
} else {
  alert("Enthält KEINE Zahl")
}`}
        />
        So können wir dann Funktionen die wir selber erstellt haben, verwenden um Logik in den Code zu bringen. Man kann damit die Logik in deskriptiven Code auslagern, und muss die "komplexen" <pre>if</pre>s nicht immer lesen.
      </Example>
    </Chapter>
  )
}
