import Chapter from "../../components/Chapter";
import Code from "../../components/Code";
import Example from "../../components/Example";
import ICode from "../../components/ICode";
import LCode from "../../components/LCode";
import Tag from "../../components/Tag";
import Video from "../../components/Video";

export default function ChapterGitMerges() {
  return (
    <Chapter>
      <h2>Versionen zusammenführen</h2>
      <section>
        <p>
          Wenn man verschiedene Versionen von einem Projekt hat, möchte man
          diese wieder zusammenführen. Diese Operation nennt man in <b>Git</b>{" "}
          einen
          <ICode>merge</ICode>.
        </p>
      </section>
    </Chapter>
  );
}
