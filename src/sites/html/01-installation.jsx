import Video from "../../components/Video"

export default function ChapterInstallation() {

  window.location.hash = "#installation"

  return (
    <>
      <h2>Installation</h2>
      <section>
        <p>
          In der Informatik arbeiten wir direkt auf dem eigenen Gerät auf lokalen Dateien. Dabei Arbeiten wir in kleinen
          Projekten, die jeweils in einem Ordner enthalten sind. Für diese Arbeitsweise brauchen wir 3 Programme:
        </p>
        <ol>
          <li>
            <a href="https://code.visualstudio.com/Download">VS Code</a> (Texteditor)
          </li>
          <li>
            <a href="https://git-scm.com/downloads">Git</a> (Versionierungs-Werkzeug)
          </li>
          <li>
            <a href="https://www.google.com/chrome/">Chrome</a> (Webbrowser)
          </li>
        </ol>
        <p className="auftrag">Installieren Sie die Programme über die jeweiligen Links.</p>
      </section>

      <section>
        <h3>VS Code Plugins</h3>
        <p>
          Wenn Sie VS Code heruntergeladen haben, müssen Sie noch einige Plugins installieren. Öffnen Sie VS Code und
          drücken Sie <pre>CTRL + P</pre> und geben den folgenden Code, jeweils Zeile für Zeile ein:
          <code>
            <pre>ext install ritwickdey.LiveServer</pre>
            <pre>ext install mhutchie.git-graph</pre>
            <pre>ext install esbenp.prettier-vscode</pre>
          </code>
        </p>
      </section>

      <section>
        <h3>Neues Projekt</h3>
        <p>
          Ein Projekt sollte immer unter Versionskontrolle sein. Oftmals ist es auch möglich von einem bestehenden
          Projekt zu starten, und dann neue Versionen hinzuzufügen. Das geht viel einfacher als es klingt. Sie müssen
          nur ein neues Projekt mit <pre>Git</pre> klonen. Drücken Sie dazu <pre>SHIFT + CTRL + P</pre> und geben Sie{" "}
          <pre>klonen</pre> ein.
        </p>
        <p>
          Klonen Sie das folgende Projekt (
          <pre>
            <a href="https://github.com/gymmu/01-intro-websites">https://github.com/gymmu/01-intro-websites</a>
          </pre>
          ) in einen neuen Ordner, am besten auf Ihrem Desktop.
        </p>
        <p>Folgen Sie dabei am besten dem Video. Bei Unklarheiten bitte direkt fragen.</p>
        <Video url="pZ9NPGK90YA" />

        <p>
          Falls Sie in <pre>Git</pre> keinen commit machen können, folgen Sie der Anleitung in diesem Video.
        <Video url="xRys4H_kTzI" />
        </p>
      </section>

      <section>
        <h3>Auftrag: Eigene Webseite erstellen</h3>
        <p>
          Wenn Ihr Setup funktioniert, erweitern Sie das Projekt so, das Sie eine eigene Webseite erstellen. Erstellen Sie jedes mal eine neue Version/Commit, wenn Sie eine Änderung gemacht haben, mit der Sie zufrieden sind.
        </p>
        <p>
          Was Sie alles in Webseiten einbinden können, finden Sie hier: <a href="#html">Webseiten</a>.
        </p>
      </section>
    </>
  )
}