import { Link } from "react-router-dom"
import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"
import Video from "../../components/Video"

export default function ChapterJavascriptTextToNumbers() {
  return (
    <Chapter>
      <h2>Datentypen in Javascript</h2>
      <section>
        In Javascript gibt es verschiedene Datentypen. Die beiden wichtigsten
        für uns sind im Moment <pre>Text</pre> und <pre>Zahlen</pre>. Es gibt
        noch eine genauere Unterscheidung, für uns reicht es aber zu wissen dass
        diese Beiden nicht gleich sind.
      </section>
      <section>
        <h3>Rechnen in Javascript</h3>
        Javascript kann mit verschiedenen Datentypen rechnen, und verwendet
        dabei ganz normal das <pre>+</pre>-Zeichen. Wir können also ganz einfach{" "}
        <pre>3 + 6</pre> in Javascript ausrechnen lassen. Wir können auch mit
        den Werten von Variablen rechnen (<pre>let a = 10; a + 19</pre>).
      </section>
      <section>
        <h3>Text addieren</h3>
        In Javascript können wir auch Text addieren{" "}
        <pre>"Hello" + " " + "World"</pre>. Das <pre>+</pre>-Zeichen, wird also
        für Text und Zahlen verwendet. Das heisst wir müssen aufpassen wenn wir
        in Javascript addieren. Ist ein Teil davon ein <pre>Text</pre>, dann
        wird einfach alles zusammen gehängt und es git keine normale Addition.
      </section>
      <section>
        Es ergibt daher Sinn, wenn wir Text zuerst in eine Zahl umwandeln
        lassen. Das ist immer dann nötig wenn wir ein Element aus dem HTML
        auslesen, denn alles was aus HTML kommt, wird als Text angesehen.
      </section>
      <Example title="Beispiel: Text in Zahl umwandeln">
        Wir haben ein HTML-Element mit der ID <pre>zahl</pre>, darin steht eine
        7. Möchten wir nun diese 7 auslesen und 3 dazu addieren, können wir das
        mit dem folgenden Code machen.
        <LCode
          content={`function plusThree() {
  const numberElement = document.querySelector("#zahl")
  let num = parseInt(numberElement.textContent)
  num = num + 3
  numberElement.textContent = num
}`}></LCode>
        Mit <pre>parseInt()</pre> wird der Text als Zahl gelesen, und man kann
        dann damit ganz normal rechnen. Testen Sie mal was passiert wenn Sie
        diese Funktion weglassen.
      </Example>

      <div className="btn-container">
        <Link className="btn" to="/javascript">
          Zurück
        </Link>
        <span></span>
      </div>
    </Chapter>
  )
}
