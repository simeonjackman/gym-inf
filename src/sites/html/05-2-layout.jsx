import { Link } from "react-router-dom"
import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"
import Video from "../../components/Video"

export default function ChapterTippsLayout() {
  return (
    <Chapter>
      <h2>Einfache Layouts</h2>
      <section>
        Oftmals möchten Sie gerne mehrere Elemente in einer Zeile haben, welche
        dann alle gleich breit sind, und die Abstände dazwischen automatisch
        angepasst werden. Das kann einfach mit dem <b>Flexbox</b> Modell von CSS
        erreicht werden.
        <Example title="Beispiel: Navbar">
          <p>
            Auf vielen Webseiten wird eine Navbar am oberen Rand verwendet. In
            diesem Beispiel versuchen wir so eine Navbar nach zubauen, und zu
            verstehen wie das funktioniert.
          </p>
          <p>Erstellen Sie zuerst eine Liste mit 3 Links darin.</p>
          <LCode
            content={`<ul class="navbar">
  <li><a href="/">Home</a></li>
  <li><a href="#section-1">Abschnitt 1</a></li>
  <li><a href="#section-2">Abschnitt 2</a></li>
</ul>`}></LCode>
          <p>
            Diese Liste sieht noch schrecklich aus, und überhaupt nicht so wie
            wir das brauchen. Mit dem folgenden CSS Code kann das aber einfach
            geändert werden.
          </p>
          <p>
            Zuerst sagen wir dass die Liste horizontal angezeigt werden soll,
            und dass alle Elemente gleichmässig verteilt werden.
          </p>
          <LCode
            content={`.navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 20px 0;
}`}></LCode>
          <p>
            Das <ICode>display: flex;</ICode> mit dem restlichen Code, sorgt
            dafür dass die Elemente entsprechend automatisch angeordnet werden.
            Wir müssen keine Breite dafür angeben, müssen aber aufpassen wenn
            die Liste zu gross wird, oder die Elemente zu breit werden. Das kann
            auch schlecht aussehen wenn es auf dem Smartphone angeschaut wird.
          </p>
          <p>
            Wir müssen dann noch die Stiele für die Links angeben. Das passen
            Sie am besten in dem folgenden Selektor an:{" "}
            <pre>.navbar > li > a</pre>
          </p>
        </Example>
      </section>
    </Chapter>
  )
}
