import { Link } from "react-router-dom"
import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"
import Video from "../../components/Video"

export default function ChapterJavascriptLists() {
  return (
    <Chapter>
      <h2>Listen in Javascript</h2>
      <section>
        Listen in Javascript sind eine Sammlung von Daten. Text kann als eine
        Liste von Zeichen agesehen werden, was es ermöglicht einfach mit Text zu
        arbeiten.
      </section>
      <section>
        Wir haben bis jetzt in allen Aufgaben so getan als ob der Text eine
        Liste ist. Wir sind dabei jedes Element der Liste durchgegangen, und
        haben geprüft was die einzelnen Elemente sind. Meistens haben wir diese
        Elemente dann an eine weitere Liste angehängt. Diesen Workflow werden
        wir auch weiterhin verwenden, aber wir erweitern das Konzept noch ein
        wenig.
      </section>
      <section>
        <h3>Mehrere Rückgabewerte</h3>
        Eine Funktion kann nur einen Wert auf einmal zurückgeben. Wenn wir
        mehrere Werte zurückgeben möchten, dann können wir eine Liste von den
        Werten zurückgeben. Das wird beim Programmieren sehr oft so gemacht,
        deshalb ist es wichtig dies zu können.
      </section>
      <Example title="Beispiel: Text bis zum ersten '.' zurückgeben">
        Wir möchten nur den Teil vom Text bis zum ersten Punkt zurückgeben,
        zusätzlich möchten wir noch sagen ob dannach noch mehr Text kommt. Der
        Code dazu könnte also wie folgt aussehen:
        <Code
          language="javascript"
          content={`const text = "Hier ist Text. Und hier noch mehr."
const result = []
for (let i = 0; i < text.length; i++) {
  result.push(text[i])
  if (text[i] === '.') {
    if (text.length-1 === i) {
      return [result.join(""), false]
    } else {
      return [result.join(""), true]
    }
  }
return [result.join(""), false]
`}
        />
      </Example>
    </Chapter>
  )
}
