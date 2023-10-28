import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import ICode from "../../components/ICode"
import Tag from "../../components/Tag"

export default function ChapterHTML() {
  return (
    <Chapter hash={"html"}>
      <h2>Webseiten</h2>
      <section>
        Eine Webseite ist ein Dokument das von Ihrem Webbrowser dargestellt
        wird. Die Strukturierung des Dokuments wird mit <b>HTML</b> gemacht.
        Dies ist eine einfache Art dem Computer zu sagen welche Teile zusammen
        gehören, und von welchem Typ diese Teile sind.
      </section>
      <section>
        <h3>Titel</h3>
        <p>
          Möchten wir einen Text als <b>Titel</b> festlegen, machen wir das in{" "}
          <b>HTML</b> mit der folgenden Syntax:
        </p>
        <Code language="html" content={`<h1>Titel</h1>`}></Code>
        <p>
          Mit <Tag>h1</Tag> sagen Sie dem Computer dass nun ein Titel folgt.
          Dann wird all der Text bis <Tag>/h1</Tag> als Titel interpretiert.
        </p>
        <p>
          Neben <Tag>h1</Tag> gibt es auch kleinere Titel <Tag>h2</Tag>,{" "}
          <Tag>h3</Tag>, ..., <Tag>h6</Tag>. Versuchen Sie auch diese in Ihr
          Dokument zu integrieren.
        </p>
      </section>
      <section>
        Neben dem Titel, gibt es noch viele andere <b>Tags</b>. Einige wichtige
        werden hier besprochen, eine ausführlichere Liste kann auf{" "}
        <a href="https://www.w3schools.com/html/default.asp">w3schools</a>{" "}
        gefunden werden.
      </section>
      <section>
        <h3>Abschnitt</h3>
        Um in <b>HTML</b> einen Abschnitt zu machen, brauchen Sie das{" "}
        <Tag>p</Tag>-Tag. Alles was darin ist, wird als Abschnitt betrachtet.{" "}
        <b>HTML</b> ignoriert Zeilenumbrüche und mehrfache Leerzeichen um
        Dokumente konsistent anzuzeigen. Damit Sie Abschnitte verwenden können,
        brauchen Sie also <Tag>p</Tag>.
      </section>
      <section>
        <h3>Listen</h3>
        <p>
          In <b>HTML</b> gibt es zwei Arten von Listen. Ungeordnete Listen{" "}
          <Tag>ul</Tag> und geordnete Listen <Tag>ol</Tag>. Innerhalb einer
          Liste ist jedes Element ein Listeneintrag. Der folgende Code erstellt
          Ihnen eine Liste.
        </p>
        <Code
          language="html"
          content={`<ul>
  <li>Eintrag eins</li>
  <li>Eintrag zwei</li>
</ul>`}
        />
        <p>
          Versuchen Sie neue Einträge hinzuzufügen, und ändern Sie die Liste in
          eine geordnete Liste.
        </p>
      </section>
      <section>
        <h3>Bilder</h3>
        <p>
          Bilder können sie mit dem <Tag>img</Tag>-Tag einfügen. Dazu ein
          einfaches Beispiel.
        </p>
        <Code
          language="html"
          content={`<img
  src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
  width="500px" />`}></Code>
      </section>
    </Chapter>
  )
}
