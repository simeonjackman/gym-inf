import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"

export default function ChapterGit() {
  return (
    <Chapter hash={"git"}>
      <h2>Versionskontrolle</h2>
      <section>
        Git ist ein Werkzeug das in der Softwareentwicklung - aber auch in
        anderen Bereichen - genutzt wird, um Versionen zu Verwalten und auch um
        gemeinsam an Projekten zu arbeiten.
      </section>
      <section>
        <h3>Commit</h3>
        <p>
          In <b>Git</b> gibt es das einfache Konzept von einem
          <ICode>commit</ICode>, der eine Version des Projektes repräsentiert.
          Ein Projekt besteht also aus einer Reihe von <ICode>commit</ICode>s, die 
          durch Änderungen miteinander verbunden sind.
        </p>
        <p>
          Jeder <ICode>commit</ICode> in <b>Git</b> muss eine Nachricht haben, die 
          die Änderung beschreibt, die seit dem letzten <ICode>commit</ICode> gemacht wurde.
          Diese Änderungsnachricht soll sehr kurz aber beschreibend sein.
        </p>
        <Example title="Beispiel: Commit-Nachricht">
          <p>
          Sie haben alle Bilder auf Ihrer Webseite zentriert und jeweils eine Beschreibung hinzugefügt.
          Das wäre eine Änderung die eine eigene Version sein kann, da die Änderung gross genug und sinnvoll ist,
          aber nicht mit anderen Dingen verflochten ist.
          </p>
          <p>
            Eine mögliche <ICode>commit</ICode>-Nachricht dafür wäre:
          </p>
          <Code>
            Alle Bilder zentriert, und Beschreibung hinzugefügt.
          </Code>
        </Example>
        <p>
          Die <ICode>commit</ICode>-Nachricht, sollte Ihnen helfen eine Änderung
          wieder zu finden, oder wenn Sie das Projekt nicht (mehr) kennen, sollten
          Sie interessante Änderungen schnell sehen.
        </p>
      </section>
      <section>
        <h3>Änderungen inspizieren</h3>
        <p>
        In einfachen Projekten wo Sie alleine Arbeiten, braucht man dies nicht so oft.
        Dennoch sollten Sie Sich damit vertraut machen, Änderungen in Dateien zu lesen.
        Die Änderungen zusammen mit der <ICode>commit</ICode>-Nachricht, ergeben eine Art
        Selbstdokumentation, Sie müssen dadurch nicht extra noch Notizen mitschreiben.
        </p>
        <Example title="Beispiel: Änderungen anschauen">
          Das folgende Video erklärt so ausführlich wie möglich, wie man in <b>Git</b>
          mit Änderungen arbeitet. Versuchen Sie dem Video so gut wie möglich zu folgen,
          und erstellen Sie sich einen für Sie praktischen Workflow, den Sie öfters anwenden werden.
          {/* TODO: Create Video and change Link */}
          <Video url="xRys4H_kTzI" />
        </Example>
      </section>
    </Chapter>
  )
}
