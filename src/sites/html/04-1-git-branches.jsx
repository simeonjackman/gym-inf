import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"
import Video from "../../components/Video"

export default function ChapterGitBranches() {
  return (
    <Chapter hash={"git-branches"}>
      <h2>
        Versionsverzweigungen (<ICode>branches</ICode>)
      </h2>
      <section>
        <p>
          <b>Git</b> operiert auf sogenannten <ICode>branch</ICode>es. Ein
          <ICode>branch</ICode> ist ein Zweig im Versionsverlauf, was nichts
          anderes bedeutet als dass alle <ICode>commit</ICode>s auf diesem Zweig
          angeordnet sind.
        </p>
        <p>
          Man kann in <b>Git</b> mehr wie nur einen <ICode>branch</ICode> haben,
          dadurch können mehrere Personen an einem Projekt arbeiten, oder man
          kann verschiedene Entwicklungen zur gleichen Zeit erproben. Dies kann
          praktisch sein, wenn man verschiedene Designs testen möchte.
        </p>
        <Example title="Beispiel: 2 unterschiedliche Designs entwickeln und vergleichen">
          <p>
            Ein einfacher Einstieg in <ICode>branch</ICode>es, ist es 2
            unterschiedliche Versionen von einem Projekt zu erstellen, und diese
            zu vergleichen. Am einfachsten geht das mit dem Design.
          </p>
          <p>
            Das folgende Video zeigt wie man 2 <ICode>branch</ICode>es erstellt,
            und diese dann vergleicht.
          </p>
          <Video url="ZGymWLlR6VE" />
        </Example>
      </section>
    </Chapter>
  )
}
