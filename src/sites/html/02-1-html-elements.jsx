import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"

export default function ChapterHTMLElements() {
  return (
    <Chapter hash={"html-elements"}>
      <h2>Webseiten strukturieren</h2>
      <section>
        Webseiten sind immer in logische Abschnitte unterteilt. Mit HTML findet
        diese Unterteilung mit verschiedenen Tags statt. Welche Tags man wie
        fest einsetzen möchte, liegt dabei beim Benutzer. Sinnvoll ist es sich
        eine einfache Struktur zu überlegen, und diese so gut es geht
        beizubehalten.
        <Example title="Beispiel: Artikel mit Abschnitt">
          Ein Artikel hat in der Regel einen Titel und besteht aus verschiedenen
          Abschnitten. Dies kann mit HTML einfach dargestellt werden.
          <LCode
            content={`<article>
  <h2>Titel</h2>
  <section>
    Dies ist der erste Abschnitt.
  </section>
  <section>
    <p>Der zweite Abschnitt hat mehrere Unterabschnitte.</p>
    <p>Dies ist der zweite Unterabschnitt.</p>
  </section>
</article>`}></LCode>
          Die logische Struktur kann hier einfach vom Programmierer und auch vom
          Computer ausgelesen werden. Durch diese Art der Struktur, können
          später dann verschiedene Stiele auf die Webseite angewendet werden,
          was eine schöne und einheitliche Gestaltung ermöglicht, ohne darüber
          nachdenken zu müssen.
        </Example>
      </section>
      <section>
        <h2>Textelemente hervorheben</h2>
        <p>
          Wenn wir eine Webseite erstellen, möchten wir nicht nur die Seite
          strukturieren, sondern auch einzelne Elemente hervorheben können. Soll
          ein bestimmtes Wort im Text hervorgehoben werden, kann man dies
          entweder durch <b>Fettdruck</b> oder <i>Kursiv</i> erreichen. Es gibt
          auch noch andere Möglichkeiten Text hervorzuheben.
        </p>
        <Example title="Aufgabe: Bauen Sie die folgenden Elemente in Ihre Webseite ein.">
          <ul>
            <li>
              <Tag>b</Tag>
            </li>
            <li>
              <Tag>i</Tag>
            </li>
            <li>
              <Tag>strong</Tag>
            </li>
            <li>
              <Tag>mark</Tag>
            </li>
            <li>
              <Tag>em</Tag>
            </li>
            <li>
              <Tag>sub</Tag>
            </li>
            <li>
              <Tag>sup</Tag>
            </li>
          </ul>
          Wenn Sie noch mehr Elemente brauchen, oder mehr zu den einzelnen
          Elementen wissen möchten, finden sie{" "}
          <a href="https://www.w3schools.com/html/html_formatting.asp">hier</a>{" "}
          weitere Informationen.
        </Example>
      </section>

      <section>
        <h2>Block- und Inline-Elemente</h2>
        HTML hat im Prinzip 2 unterschiedliche Elementarten. Einmal gibt es das
        Blockelement (<Tag>h1</Tag>, <Tag>section</Tag>, <Tag>div</Tag>, ...)
        und es gibt die Inlineelemente (<Tag>b</Tag>, <Tag>strong</Tag>,{" "}
        <Tag>a</Tag>, <Tag>img</Tag>, ...). Mit diesen beiden Arten kann man das
        ganze Design einer Webseite beschreiben. Dafür gibt es eine ganz
        einfache Regel. Ein Blockelement nimmt immer die volle Breite der
        Webseite ein, und danach kommt ein Umbruch. Ein Inlineelment hingegen,
        nimmt nur so viel Platz wie es braucht, und danach geht der Text direkt
        weiter.
        <Example title="Aufgabe: Spielen mit Block- und Inline-Elementen">
          <ul>
            <li>
              Was passiert wenn Sie ein Blockelement in ein Inlineelement
              packen?
            </li>
            <li>
              Von Typ ist <Tag>img</Tag>?
            </li>
            <li>
              Wie können Sie ein Bild zentriert anzeigen, ohne Text daneben?
              (Tipp: <Tag>center</Tag>)
            </li>
          </ul>
        </Example>
      </section>
    </Chapter>
  )
}
