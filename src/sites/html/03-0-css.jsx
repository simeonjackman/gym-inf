import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"

export default function ChapterCSS() {
  return (
    <Chapter hash={"css"}>
      <h2>Webseiten gestalten</h2>
      <section>
        Bisher haben wir uns mit der Struktur von Webseiten beschäftigt. Nun
        möchten wir diese Strukturen auch verwenden um die Webseiten zu
        gestalten. Dies wird mit <b>CSS</b> (Cascading Style Sheets) gemacht.
      </section>
      <section>
        <h3>Stylesheet einbinden</h3>
        Um eine saubere Trennung von Struktur und Gestaltung zu erreichen,
        können Stylesheets in Webseiten eingebunden werden. Damit können Styles
        auch auf mehreren Webseiten verwendet werden, und müssen nicht immer
        wiederholt werden.
      </section>
      <Example title="Aufgabe: Stylesheet verlinken">
        Fügen Sie den folgenden Code im <Tag>head</Tag> von Ihrem HTML Dokument
        ein.
        <Code
          language="html"
          content='<link rel="stylesheet" href="style.css">'></Code>
        Erstellen Sie dann eine neue Datei mit dem Namen{" "}
        <ICode>style.css</ICode>
      </Example>
      <section>
        <h3>Stylesheet verwenden</h3>
        Haben Sie das Stylesheet eingebunden, möchten wir als erstes
        ausprobieren ob es funktioniert hat. Am einfachsten geht das wenn Sie
        eine direkt sichtbare Änderung machen. Zum Beispiel können Sie die
        Hintergrundfarbe der Webseite ändern.
      </section>
      <Example title="Aufgabe: Neue Hintergrundfarbe">
        Öffnen Sie <ICode>style.css</ICode> und geben Sie den folgenden Code
        ein:
        <Code
          language="css"
          content={`body {
  background-color: red;
}`}></Code>
        Der Hintergrund Ihrer ganzen Seite, sollte nun rot sein.
      </Example>
      <section>
        <h3>Weitere Elemente</h3>
        Sie können in CSS einzelne Elemente unterschiedlich gestalten, dafür
        brauchen Sie einfach weitere Regeln. Diese werden in der gleichen Datei
        eingefügt.
      </section>
      <Example title="Aufgabe: Schriftfarbe des Titels ändern">
        Um den Titel besser hervorzuheben, möchten wir gerne die Farbe des
        Titels ändern, aber den Rest der Seite so lassen. Verwenden Sie dafür
        diese neue Regel.
        <Code
          language="css"
          content={`h1 {
  color: whitesmoke;
  text-decoration: underline;
  text-align: center;
}`}
        />
        Sie sollten nun einen zentrierten Titel haben der unterstrichen ist.
      </Example>
      <section>
        <h3>Mit CSS Regeln experimentieren</h3>
        Wie Sie gesehen haben, kann man verschiedene Regeln auf unterschiedliche
        Elemente anwenden. Versuchen Sie mithilfe des Editors eine weitere Regel
        für ein <Tag>p</Tag>-Tag zu erstellen, und diese anders zu gestalten.
      </section>
      <Example title="Aufgabe: Webseite gestalten">
        Testen Sie verschiedene Stile für Ihre Webseite aus. Erstellen Sie
        jeweils einen neuen Commit, wenn Sie mit einem Stil zufrieden sind.
        Verändern Sie Ihren Stil mindestens 3 mal, um die History von Ihrem
        Projekt zu vergrössern.
      </Example>
    </Chapter>
  )
}
