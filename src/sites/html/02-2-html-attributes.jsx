import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"

export default function ChapterHTMLAttributes() {
  return (
    <Chapter hash={"html-attributes"}>
      <h2>HTML Attribute</h2>
      <section>
        Einige HTML Elemente sind speziell und brauchen zusätzliche
        Informationen. Diese Zusatzinformationen nennt man Attribute.
      </section>
      <Example title="Beispiel: Links">
        Ein Link (oder auch Anchor-Tag) ist ein Element das zusätzliche
        Informationen braucht. Das Element selbst bekommt den Text, der auf der
        Webseite angezeigt wird, zusätzlich muss man dem Tag aber noch sagen auf
        welche Webseite verlinkt werden soll.
        <Code
          language="html"
          content={`<a href="https://www.gym-muttenz.ch">Gym Muttenz</a>
          `}
        />
        in diesem Fall ist das <ICode>href=</ICode> das Attribut, und sagt auf
        welche Webseite verlinkt wird.
      </Example>
      <section>
        <h3>Weitere Elemente mit Attributen</h3>
        Auch Bilder brauchen ein Attribut welches sagt wo sich das Bild
        befindet. Hier können auch weitere Attribute wie die Höhe oder Breite
        des Bildes angegeben werden.
      </section>
      <Example title="Aufgabe: Bilder hinzufügen">
        <a href="https://www.w3schools.com/html/html_images.asp">Hier</a> finden
        Sie alles was Sie über Bilder wissen müssen. Testen Sie es aus, indem
        Sie Bilder von verschiedener Grösse in Ihre Webseite einfügen.
      </Example>

      <section>
        <h3>IDs</h3>
        <b>IDs</b> sind praktische Attribute die Sie an jedes Element zuweisen
        können. Wichtig dabei ist das IDs beschreibend für das Element sind, und
        eindeutig auf der Webseite vergeben sind.
      </section>
      <Example title="Beispiel: Abschnitt mit einer ID">
        Sie können einem Abschnitt eine <b>ID</b> zuweisen, damit wir später
        darauf verlinken können.
        <Code
          language="html"
          content={`<section id="very-important-section">
  Dies ist ein Abschnitt mit einer ID.
</section>`}
        />
      </Example>
      <section>
        <b>IDs</b> werden verwendet um spezielle Elemente zu kennzeichnen. Diese
        können dann speziell gestaltet werden, oder man kann darauf verlinken
        innerhalb einer Webseite. Die Webseite scrollt dann direkt zu dem
        Element das Sie verlinkt haben.
      </section>
      <Example title="Aufgabe: Link auf ein Element erstellen">
        Um auf ein Element mit einer ID zu verlinken, können Sie den folgenden
        Code verwenden.
        <Code
          language="html"
          content={`<a href="#very-important-section">Sehr wichtiger Abschnitt</a>`}
        />
        Um auf <b>IDs</b> zu verlinken, stellen Sie einfach das Zeichen{" "}
        <pre>#</pre> vor die <b>ID</b>.
      </Example>

      <section>
        <h3>Klassen</h3>
        <p>
          <b>Klassen</b> werden später gebraucht um Elemente zu gestalten. Im
          Moment bringen Sie uns noch nicht so viel, ausser das wir{" "}
          <i>ähnliche</i> Elemente gruppieren können.
        </p>
      </section>
      <Example title="Beispiel: Sehr wichtige Elemente">
        Mit <Tag>strong</Tag> können Sie ein wichtiges Element hervorheben. Aber
        auch <Tag>em</Tag> hebt wichtige Elemente hervor. Wir können aber auch
        noch ein sehr wichtiges Element haben.
        <Code
          language="html"
          content={`<strong class="very-important">Super wichtig</strong>`}
        />
        <p>und</p>
        <Code
          language="html"
          content={`<em class="very-important">Super wichtig, aber anders</em>`}
        />
        <p>
          Sind jeweils super wichtige Elemente, werden aber anders dargestellt.
        </p>
      </Example>

      <section>
        <h3>Elemente gestalten</h3>
        Mit dem <Tag>style</Tag>-Tag, können wir die Elemente gestalten. Damit
        können wir zusätzliche Styles für Klassen angeben.
      </section>
      <Example title="Beispiel: Rote Schrift">
        Wir können sehr wichtige Elemente mit roter Schrift zusätzlich
        hervorheben.
        <Code
          language="html"
          content={`<style>
.very-important {
  color: red;
}
</style>`}></Code>
      </Example>
    </Chapter>
  )
}
