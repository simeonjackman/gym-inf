import Chapter from "../../components/Chapter";
import Code from "../../components/Code";
import Example from "../../components/Example";
import ICode from "../../components/ICode";
import LCode from "../../components/LCode";
import Tag from "../../components/Tag";

export default function ChapterHTMLAttributes() {
  return (
    <Chapter hash={"html-attributes"}>
      <h2>HTML Attribute</h2>
      <section>
        Einige HTML Elemente sind speziell und brauchen zusätzliche Informationen. Diese Zusatzinformationen nennt man Attribute.

        <Example title="Beispiel: Links">
          Ein Link (oder auch Anchor-Tag) ist ein Element das zusätzliche Informationen braucht. Das Element selbst bekommt den Text, der auf der Webseite angezeigt wird, zusätzlich muss man dem Tag aber noch sagen auf welche Webseite verlinkt werden soll.
          <Code>
            <a href="https://www.gym-muttenz.ch">Gym Muttenz</a>
          </Code>
          in diesem Fall ist das <ICode>href=</ICode> das Attribut, und sagt auf welche Webseite verlinkt wird.
        </Example>
      </section>
      <section>
        <h3>Weitere Elemente mit Attributen</h3>
        Auch Bilder brauchen ein Attribut welches sagt wo sich das Bild befindet. Hier können auch weitere Attribute wie die Höhe oder Breite des Bildes angegeben werden.
        <Example title="Aufgabe: Bilder hinzufügen">
          <a href="https://www.w3schools.com/html/html_images.asp">Hier</a> finden Sie alles was Sie über Bilder wissen müssen. Testen Sie es aus, indem Sie Bilder von verschiedener Grösse in Ihre Webseite einfügen.
        </Example>
      </section>

      <section>
        <h3>IDs</h3>
        <p>
        <b>IDs</b> sind praktische Attribute die Sie an jedes Element zuweisen können. Wichtig dabei ist das IDs beschreibend für das Element sind, und eindeutig auf der Webseite vergeben sind.
        </p>
        <Example title="Beispiel: Abschnitt mit einer ID">
          Sie können einem Abschnitt eine <b>ID</b> zuweisen, damit wir später darauf verlinken können.
          <Code>
            <section id="very-important-section">Dies ist ein Abschnitt mit einer ID.</section>
          </Code>
        </Example>

        <p>
          <b>IDs</b> werden verwendet um spezielle Elemente zu kennzeichnen. Diese können dann speziell gestaltet werden, oder man kann darauf verlinken innerhalb einer Webseite. Die Webseite scrollt dann direkt zu dem Element das Sie verlinkt haben.
        </p>

        <Example title="Aufgabe: Link auf ein Element erstellen">
          Um auf ein Element mit einer ID zu verlinken, können Sie den folgenden Code verwenden.
          <Code>
            <a href="#very-important-section">Sehr wichtiger Abschnitt</a>
          </Code>
          Um auf <b>IDs</b> zu verlinken, stellen Sie einfach das Zeichen <pre>#</pre> vor die <b>ID</b>.
        </Example>
      </section>

      <section>
        <h3>Klassen</h3>
        <p>
        <b>Klassen</b> werden später gebraucht um Elemente zu gestalten. Im Moment bringen Sie uns noch nicht so viel, ausser das wir <i>ähnliche</i> Elemente gruppieren können.
        </p>
        <Example title="Beispiel: Sehr wichtige Elemente">
          Mit <Tag>strong</Tag> können Sie ein wichtiges Element hervorheben. Aber auch <Tag>em</Tag> hebt wichtige Elemente hervor. Wir können aber auch noch ein sehr wichtiges Element haben.

          <Code>
            <strong class="very-important">Super wichtig</strong>
          </Code>
          <p>und</p>
          <Code>
            <em class="very-important">Super wichtig, aber anders</em>
          </Code>
          <p>
            Sind jeweils super wichtige Elemente, werden aber anders dargestellt.
          </p>
        </Example>
      </section>

      <section>
        <h3>Elemente gestalten</h3>
        <p>
          Mit dem <Tag>style</Tag>-Tag, können wir die Elemente gestalten. Damit können wir zusätzliche Styles für Klassen angeben.
        </p>
        <Example title="Beispiel: Rote Schrift">
          Wir können sehr wichtige Elemente mit roter Schrift zusätzlich hervorheben.
          <LCode content={
`<style>
.very-important {
  color: red;
}
</style>`}></LCode>
        </Example>
      </section>
      
    </Chapter>
  )
}