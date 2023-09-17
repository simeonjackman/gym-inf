import { Link } from "react-router-dom"
import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"
import Tipp from "../../components/Tipp"
import Video from "../../components/Video"

export default function TippsImgNextToText() {
  return (
    <Tipp>
      <h2>Bild neben Text</h2>
      <section>
        <p>
          Bild neben Text zu haben ist relativ einfach. Das muss auch nicht
          unbedingt ein Bild sein, es sind einfach 2 Container nebeneinander.
        </p>
        <p>Verwenden Sie dafür den folgenden HTML Code:</p>
        <LCode
          content={`<div class="text-next-to-img">
  <div class="text">
    Content
  </div>
  <img
    src="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    alt="">
</div>`}></LCode>
      </section>
      <section>
        <h3>CSS</h3>
        <p>
          Damit der Code funktioniert, braucht es noch den folgenden CSS Code.
        </p>
        <LCode
          content={`/* Erstellt einen Container mit 2 Elementen nebeneinander. */
.text-next-to-img {
  display: grid;
  grid-template-columns: 70% auto; /* gibt an wie der Platz aufgeteilt wird. */
  gap: 1rem; /* Gibt an wie viel Platz zwischen den Elementen ist. */
}

/* Gibt Stiele für den Textblock an. */
.text-next-to-img > .text {
  border: 1px solid lightgray;
  padding: 1rem 2rem;
}

/* Macht dass das Bild die Breite des Containers annimmt. */
.text-next-to-img > img {
  width: 100%;
}`}></LCode>
        <p>
          Es können auch mehrere Spalten eingefügt werden. Diese müssen nur mit
          der gewünschten Breite bei <ICode>grid-template-column</ICode>{" "}
          eingefügt werden.
        </p>
      </section>
    </Tipp>
  )
}
