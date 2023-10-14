import { Link } from "react-router-dom"
import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"
import Video from "../../components/Video"

export default function ChapterTippsCenterImage() {
  return (
    <Chapter>
      <h2>Mit Bildern umgehenzen</h2>
      <section>
        <p>
          Bilder werden in HTML wie Text behandelt, oder genauer gesagt wie
          <i>inline</i> Elemente. Sie werden einfach in den Textfluss eingebaut,
          und die Zeile danach wird nicht umgebrochen. Möchten wir also ein Bild
          alleine und zentriert haben, müssen wir es in einen eigenen Container
          packen, und diesen dann gestalten.
        </p>
        <Example title="Beispiel: Bild zentrieren">
          Um ein einzelnes Bild zu zentrieren, brauchen Sie zuerst die folgende
          HTML Struktur:
          <LCode
            content={`<div class="img-center">
  <img src="" >
</div>`}></LCode>
          <p>
            Dabei ist <ICode>div.img-center</ICode> das Element welches das Bild
            zentrieren wird. Wir bezeichnen dieses Element als den Container.
          </p>
          <p>
            Mit diesem HTML Code können wir dann den CSS Code angeben, der uns
            das gewünschte Design gibt. Dafür braucht es 2 Regeln, eine für den
            Container, und eine für die Breite des Bildes selber.
          </p>
          <LCode
            content={`.img-center {
  text-align: center;
}

.img-center > img {
  width: 70%;
}`}></LCode>
          <p>
            Die zweite Regel wird nicht unbedingt gebraucht, ist aber praktisch,
            wenn die Bilder nicht ganz so breit sein sollen wie der Text.
          </p>
        </Example>
      </section>
      <section>
        <h3>Rahmen zum Bild hinzufügen</h3>
        <p>
          Sie können dem Bild auch einen Rahmen geben. Dafür können Sie den
          folgenden Code bei <pre>.img-center > img</pre> hinzufügen:
        </p>
        <LCode
          content={`border: 1px solid black;
padding: 2px;`}></LCode>
      </section>
      <section>
        <h3>Bilder abrunden</h3>
        <p>
          Bilderecken können auch abgerundet werden. Dadurch können spannende
          Bildformen erreicht werden. Mit dem folgenden Code können Sie die
          Ecken von einem Bild abrunden.
        </p>
        <LCode
          content={`.round-img {
  border-radius: 25px;
}`}></LCode>
        <p>
          Spielen Sie etwas mit dem Wert herum, versuchen Sie auch einen Wert
          wie 2% oder 50% aus.
        </p>
        <Example title="Beispiel: Abrundungseffekte aufheben">
          <p>
            Wie Animationen funktionieren, können Sie{" "}
            <Link to="/css-animations">hier</Link> nochmals nachlesen. Dort wird
            erklärt wie Sie eine Transition erstellen.
          </p>
          <p>Um den Effekt zu erreichen, brauchen Sie den folgenden Code:</p>
          <LCode
            content={`.round-img:hover {
  border-radius: 0;
  transform: scale(1.2)
}`}></LCode>
          <p>
            Es ist durchaus möglich dass Sie den CSS Selektor anpassen müssen.
            Das hängt davon ab wie direkt Sie dem Code oben gefolgt sind.
          </p>
        </Example>
      </section>
    </Chapter>
  )
}
