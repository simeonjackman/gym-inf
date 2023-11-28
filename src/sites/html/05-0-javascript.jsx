import { Link } from "react-router-dom"
import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"
import Video from "../../components/Video"

export default function ChapterJavascriptIntroduction() {
  return (
    <Chapter>
      <h2>Einführung in Javascript</h2>
      <section>
        Javascript ist eine von sehr vielen Programmiersprachen. Javascript wird
        in der Webentwicklung verwendet, und ist dafür auch optimiert.
        Javascript kann in jedem modernen Webbrowser ausgeführt werden, es muss
        also nicht zusätzliches installiert werden, man kann es direkt so
        verwenden.
      </section>
      <section>
        Javascript wird verwendet um Webseiten interaktiv zu machen. Man kann es
        aber auch verwenden um die Logik auf einer Webseite zu steuern, man kann
        Daten von einer externen Quelle laden und analysieren, oder sogar ganze
        Spiele als Webseite entwickeln.
      </section>
      <section>
        <h3>Javascript einbinden</h3>
        Wie bereits bei <pre>CSS</pre> müssen wir auch das Javascript separat
        einbinden. Dafür fügen wir den folgenden Code im <Tag>head</Tag> von
        unserem <pre>HTML</pre> ein.
        <Code
          language="html"
          content={`<script src="script.js" defer></script>`}></Code>
        Damit können wir den Code in der Datei <pre>script.js</pre> in der
        Webseite verwenden.
      </section>
      <section>
        <h3>Funktionen</h3>
        <p>
          <b>Funktionen</b> sind die Basisbausteine für ein Programm. In
          Javascript werden Funktionen zur Verfügung gestellt, die dann von der
          Webseite aufgerufen werden können.
        </p>
        <p>
          Funktionen können auch von anderen Funktionen aufgerufen werden,
          dadurch kann man Code einmal schreiben, und mehrfach verwenden.
        </p>
        <p>
          Wir erstellen eine erste Funktion die den Benutzer ganz einfach
          Grüssen soll. Dafür fügen wir den folgenden Code in der Datei{" "}
          <pre>script.js</pre> ein:
        </p>
        <Code
          language="javascript"
          content={`function sayHello() {
    alert("Hello World")
}`}></Code>
        <p>
          Dies stellt der Webseite diese Funktion zur Verfügung, wir müssen die
          Funktion aber noch aufrufen, damit sie auch ausgeführt wird. Das
          machen wir mit dem folgenden <pre>HTML</pre> Code.
        </p>
        <Code
          language="html"
          content={`<button onclick="sayHello()">Begrüssung ausführen</button>`}></Code>
        <p>
          So funktionieren alle Codes die wir erstellen. Wir erstellen eine
          Funktion, und rufen diese dann aus dem <pre>HTML</pre> auf.
        </p>
      </section>
      <Example title="Aufgabe: Andere Begrüssung">
        Erstellen Sie eine weitere Funktion um den Benutzer zu begrüssen.
        Erstellen Sie auch für diese Funktion einen Button, um die Funktion
        auszuführen.
      </Example>

      <div className="btn-container right">
        <Link className="btn" to="/javascript-change-page">
          Weiter
        </Link>
      </div>
    </Chapter>
  )
}
