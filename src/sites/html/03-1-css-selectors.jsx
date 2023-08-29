import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"

export default function ChapterCSSSelectors() {
  return (
    <Chapter hash={"css-selectors"}>
      <h2>CSS Selektoren</h2>
      <section>
        <p>
          CSS ist von der Syntax her eine sehr einfache Sprache. CSS hat Regeln, die immer im gleichen Style aufgebaut
          sind.
        </p>
        <LCode
          content={`selector {
  property: value;
}`}
        ></LCode>
        <p>
          Die Teile in dem Block, sind selbsterklärend. Mit
          <ICode>property</ICode> sagt man welche <b>Eigenschaft</b> man verändern möchte, und <ICode>value</ICode> ist
          der <b>Wert</b>
          für diese Eigenschaft. Eine grüne Schriftfarbe erreicht man zum Beispiel mit
          <ICode>color: green;</ICode>.
        </p>
        <p>
          Mit dem <ICode>selector</ICode> kann man sagen für welche Elemente die Regeln gelten sollen. Da haben wir
          bereits gesehen das man Tags verwenden kann (<Tag>h1</Tag>, <Tag>body</Tag>, ...). Man kann aber auch Klassen
          und IDs verwenden.
        </p>
      </section>
      <section>
        <h3>CSS Klassen</h3>
        Klassen werden vermutlich am häufigsten verwendet in CSS. Klassen werden als Attribut in HTML (z.B.{" "}
        <ICode>
          <p class="important">Sehr wichtig</p>
        </ICode>
        ). In CSS gibt uns das die Möglichkeit andere Stile für <Tag>p</Tag>-Tags anzugeben, die ebenfalls die Klasse{" "}
        <ICode>wichtig</ICode> haben.
        <Example title="Aufgabe: Klassenselektor verwenden">
          Erstellen Sie eine neue Regel in Ihrem CSS, die einen Klassenselektor verwendet. Sie können Sich dabei an dem
          folgenden Beispiel orientieren.
          <LCode
            content={`.important {
  border: 5px solid orange;
}`}
          ></LCode>
        </Example>
        Um in CSS zu sagen dass es sich um eine Klasse handelt, müssen Sie einfach einen Punkt vor den Klassennamen
        schreiben.
      </section>
      <section>
        <h3>CSS IDs</h3>
        <p>
          Es können nicht nur Klassen sondern auch IDs verwendet werden. Dies wird oftmals gemacht wenn es sich um ein
          eindeutiges Element handelt, wie zum Beispiel eine Navigationsliste.
        </p>
        <p>
          Ähnlich wie bei Klassen, muss auch nur ein spezielles Zeichen vor den Namen gestellt werden. Bei IDs wird das
          Zeichen <ICode>#</ICode> verwendet.
        </p>
        <Example title="Aufgabe: IDs verwenden">
          Geben Sie einem Element auf Ihrer Webseite eine ID, und erstellen Sie eine Regel für dieses Element.
        </Example>
      </section>
      <section>
        <h3>Pseudo-Klassen</h3>
        <p>
          In CSS gibt es bestimmte bereits vordefinierte Pseudo-Klassen. Diese können eine Element auswählen das zur
          Zeit gerade den Cursor auf sich hat.
        </p>
        <Example title="Beispiel: Elemente vergrössern">
          Um einen Link besser hervorzuheben, können Sie die Schriftgrösse anpassen wenn der Mauszeiger über dem Link
          ist.
          <LCode
            content={`a:hover {
  font-size: 1.4rem;
}`}
          ></LCode>
          Sie können das <ICode>:hover</ICode> zu jedem Element dass Sie hervorheben möchten hinzufügen.
        </Example>
        <p>Pseudo-Klassen beginnen jeweils mit einem <ICode>:</ICode>, wie zum Beispiel <LCode>:visited</LCode>.</p>
        <Example title="Aufgabe: Besuchte Links verstecken">
          Normalerweise sind Links die Sie bereits besucht haben einfach violet. Versuchen Sie 
          mit der Pseudo-Klasse <ICode>:visited</ICode> einen Link zu verstecken.
        </Example>
      </section>
    </Chapter>
  )
}
