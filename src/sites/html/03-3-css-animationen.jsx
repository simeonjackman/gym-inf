import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"

export default function ChapterCSSAnimations() {
  return (
    <Chapter hash={"css-animations"}>
      <h2>CSS Animationen</h2>
      <section>

      <p>
      Moderne Webseiten sind voll mit Animationen. Viele davon können mit CSS einfach erstellt werden. Die einfachste Art einer Animation ist ein Übergang (<ICode>transition</ICode>). Damit können Effekte die mit <ICode>:hover</ICode> erzeugt werden, angenehmer gestaltet werden.
      </p>
      <Example title="Beispiel: Buchstaben auseinander ziehen">
        Der folgende Code zieht Ihnen die Buchstaben von einem Element auseinander, wenn Sie mit der Maus darüber fahren.
        <LCode content={`.spread {
  transition: all 1s ease-in-out;
}
.spread:hover {
  letter-spacing: 1rem;
}`}></LCode>
      </Example>
      Für eine <ICode>transition</ICode> brauchen Sie 2 Regeln. Die erste ist jeweils für die Klasse, und gibt das Timing der <ICode>transition an</ICode>. Die zweite Regel gibt dann nur den Stil an, wie das Element aussehen soll, wenn zum Beispiel der Cursor auf dem Element ist.
      <Example title="Aufgabe: Erstellen Sie einen eigenen Übergang">
        Erstellen Sie eine <ICode>transition</ICode>, die ein Element rotieren lässt. Eine Rotation können Sie mit <ICode>transform: rotate(90deg)</ICode> erreichen.
      </Example>
      </section>
      
    </Chapter>
  )
}
