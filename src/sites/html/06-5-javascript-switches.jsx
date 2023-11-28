import { Link } from "react-router-dom"
import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"
import Video from "../../components/Video"

export default function ChapterJavascriptSwitches() {
  return (
    <Chapter>
      <h2>Schalter in Javascript</h2>
      <section>
        Schalter sind verschiedene Fälle die in Javascript auftretten können.
        Mit Schalter, oder auch Switches genannt, können wir die Logik im Code
        recht einfach steuern.
      </section>
      <Example title="Beispiel: In 2 Listen aufteilen">
        Oftmals kann es sein das Sie einen Text in 2 Teile unterteilen möchten,
        dann können wir das mit dem Code ganz einfach in 2 verschiedene Fälle
        aufteilen. Angenommen Sie möchten alles bis zum Zeichen <ICode>|</ICode>{" "}
        in einen ersten Teil lesen, und alles dannach in einen zweiten Teil,
        dann können wir das mit Switches machen.
        <Code
          language="javascript"
          content={`const text = 'das ist im ersten Teil|und das hier im zweiten'
let switchFirst = true
const listFirst = []
const listSecond = []
for (let i = 0; i < text.length; i++) {
  if (text[i] === "|") {
    switchFirst = false
  } else {
    if (switchFirst === true) {
      listFirst.push(text[i])
    } else {
      listSecond.push(text[i])
    }
  }
}
const result = [listFirst.join(""), listSecond.join("")]`}
        />
        Solange wir nur 2 Fälle haben, ist der Code sehr einfach. Mit mehr
        Fällen kann es komplexer werden, aber nicht unbedingt schwieriger.
      </Example>
    </Chapter>
  )
}
