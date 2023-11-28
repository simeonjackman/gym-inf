import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"
import Video from "../../components/Video"

export default function ChapterGitMerges() {
  return (
    <Chapter>
      <h2>Versionen zusammenführen</h2>
      <section>
        Wenn man verschiedene Versionen von einem Projekt hat, möchte man diese
        wieder zusammenführen. Diese Operation nennt man in <b>Git</b> einen{" "}
        <ICode>merge</ICode>.
      </section>
      <section>
        <ICode>Merges</ICode> werden oft gebraucht wenn man mit anderen Personen
        an einem Projekt arbeitet. Man kann es aber auch sehr gut alleine
        verwenden. Die Idee dabei ist, das man bei einer funktionierenden
        Version beginnt, und dann auf einem <ICode>branch</ICode> alle
        Änderungen macht, die zu einem Thema gehören. Ist eine solche
        Entwicklung abgeschlossen, kann der <ICode>branch</ICode> zurück geführt
        werden, und die Änderungen sind im neuen Projekt vorhanden.
      </section>
      <section>
        Arbeitet man alleine, klingt das nach unnötigem Aufwand. Der Vorteil
        dabei ist jedoch, dass man einfach mal eine Änderung ausprobieren kann,
        und dann einfach wieder zurück zu einer funktionierenden Version kommt.
      </section>
      <Example title="Beispiel: Dem Gedankenfluss folgen">
        <section>
          Nehmen Sie an Sie arbeiten an Ihrem Projekt, und plötzlich kommt Ihnen
          eine Idee, die nichts mit der aktuellen Arbeit an dem Projekt zu tun
          hat. Damit Sie Dinge nicht vermischen, können Sie einfach einen{" "}
          <ICode>commit</ICode> von der aktuellen Arbeit machen, und dann in
          einem neuen <ICode>branch</ICode> Ihrer Idee folgen.
        </section>
        <section>
          Das folgende Video zeigt wie man so etwas machen würde.
        </section>
        <Video url="TmWNWbXpfzs" />
      </Example>
    </Chapter>
  )
}
