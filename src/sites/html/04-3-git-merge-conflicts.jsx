import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"
import Video from "../../components/Video"

export default function ChapterGitMergeConflicts() {
  return (
    <Chapter>
      <h2>Merge Konflikte</h2>
      <section>
        <p>
          Merge Konflikte passieren wenn <b>Git</b> zwei <ICode>branches</ICode>{" "}
          nicht einfach zusammenführen kann. Das ist der Fall wenn in beiden{" "}
          <ICode>branches</ICode> Änderungen an den gleichen Codestellen
          (Zeilen) gemacht wurden. Diese müssen dann von Hand gelöst werden.
        </p>
        <p>
          <b>Git</b> schreibt bei einem <ICode>merge</ICode>-Konflikt die beiden
          Stellen in die Datei. Diese kann dann von Hand oder mit Hilfe des
          Editors gelöst werden. Meist reicht es aus wenn eine der beiden
          Versionen akzeptiert wird. Manchmal müssen aber noch Anpassungen
          gemacht werden.
        </p>
        <Example title="Beispiel: Merge Konflikt im CSS">
          <p>
            Nehmen wir an Sie haben 2 unterschiedliche Designs entwickelt und
            möchten nun Änderungen von beiden nehmen.
          </p>
          <p>
            <ICode>design-A</ICode> gibt Boxen eine leicht andere
            Hintergrundfarbe, einen Rand und einen Schatten.{" "}
            <ICode>design-B</ICode> verwendet abgerundete Ecken und einen
            dickeren Rand links und rechts.
          </p>
          <p>
            Die <ICode>style.css</ICode> Datei kann dann nach dem{" "}
            <ICode>merge</ICode>-Konflikt so aussehen.
          </p>
          <LCode content={``}></LCode>
          <p>
            Sie müssen dann von Hand den Code anpassen, so das er am Ende so
            aussieht.
          </p>
          <LCode content={``}></LCode>
          <p>
            Danach müssen Sie die Datei nur noch speichern und die Änderungen
            wieder zum neuen <ICode>commit</ICode> hinzufügen.
          </p>
        </Example>
        <p>
          Das folgende Video zeigt nochmals wie man einen solchen{" "}
          <ICode>merge</ICode>-Konflikt bearbeiten kann.
        </p>
        {/* TODO: Video zu merge konflikten */}
        <Video url="" />
        <Example title="Aufgabe: Lösen Sie einen Merge-Konflikt">
          Erstellen Sie 2 <ICode>branches</ICode> mit unterschiedlichen Designs.
          Fügen Sie die <ICode>branches</ICode> zusammen und lösen Sie den{" "}
          <ICode>merge</ICode>-Konflikt.
        </Example>
        <Example title="Aufgabe: Merge-Konflikte an mehreren Stellen">
          Erstellen Sie wieder 2 unterschiedliche <ICode>branches</ICode> und
          führen Sie diese zusammen. Machen Sie Ihre Änderungen so, dass{" "}
          <ICode>merge</ICode>-Konflikte an mehreren Stellen erscheinen.
        </Example>
      </section>
    </Chapter>
  )
}
