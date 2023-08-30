import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"

export default function ChapterCSSBoxModel() {
  return (
    <Chapter hash={"css-box-model"}>
      <h2>CSS Box Modell</h2>
      <section>
        <p>
          Das Box Modell in CSS beschreibt wie die Elemente Platz auf einer
          Webseite einnehmen. Alle Elemente in sind in 4 Bereiche eingeteilt.
          <ul>
            <li>
              <ICode>margin</ICode>: Der äussere Rand, also der Abstand zu
              anderen Elementen.
            </li>
            <li>
              <ICode>border</ICode>: Der Rand von einem Element. Dieser ist
              normalerweise nicht sichtbar, kann aber verwendet werden um
              Elemente zu umranden.
            </li>
            <li>
              <ICode>padding</ICode>: Der innere Rand, also der Abstand vom
              Inhalt zur <ICode>border</ICode>.
            </li>
            <li>
              <ICode>content</ICode>: Der Inhalt des Elements. Dies wird
              normalerweise in <ICode>width</ICode> und <ICode>height</ICode>{" "}
              angegeben.
            </li>
          </ul>
        </p>
        <p>
          Damit das Box Modell möglichst einfach angewendet werden kann, sollten
          Sie immer die folgende CSS-Regel einfügen.
          <LCode
            content={`* {
  box-sizing: border-box;
}`}></LCode>
        </p>
        <Example title="Aufgabe: Spielen mit dem Box-Modell">
          Erstellen Sie ein Element mit der ID <ICode>box</ICode>. Spielen Sie
          dann mit dem folgenden CSS Code herum, bis Sie verstehen was die
          einzelnen Teile machen.
          <LCode
            content={`#box {
  background-color: cyan;
  border: 2px solid black;
  margin: 50px;
  padding: 10px;
  width: 300px;
  height: 70px;
          }`}></LCode>
        </Example>
      </section>
      <section>
        <h3>Spezifische Ränder</h3>
        <p>
          Sie können die Randteile auch direkt ansprechen und müssen nicht für
          alle die gleichen Abstände verwenden.
          <Example title="Aufgabe: Farbiger Rand auf der linken Seite">
            Mit <ICode>border-left</ICode> können Sie nur den linken Rand
            ansprechen. Erstellen Sie eine Klasse <ICode>danger</ICode> die auf
            der linken Seite einen roten Rand von 5 Pixeln hat.
          </Example>
        </p>
        <p>
          Die einzelnen Teile des <ICode>margin</ICode>s können Sie wie folgt
          ansprechen, die anderen sind analog dazu.
          <ul>
            <li>
              <ICode>margin-left</ICode>
            </li>
            <li>
              <ICode>margin-right</ICode>
            </li>
            <li>
              <ICode>margin-top</ICode>
            </li>
            <li>
              <ICode>margin-bottom</ICode>
            </li>
          </ul>
        </p>
      </section>
    </Chapter>
  )
}
