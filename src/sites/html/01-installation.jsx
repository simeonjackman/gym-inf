export default function ChapterInstallation() {

  window.location.hash = "#installation"

  return (
    <>
      <h2>Installation</h2>
      <section>

      <p>
        In der Informatik arbeiten wir direkt auf dem eigenen Gerät auf lokalen Dateien. Dabei Arbeiten wir in kleinen Projekten, die jeweils in einem Ordner enthalten sind. Für diese Arbeitsweise brauchen wir 3 Programme:
      </p>
      <ol>
        <li><a href="">VS Code</a> (Texteditor)</li>
        <li><a href="">Git</a> (Versionierungs-Werkzeug)</li>
        <li><a href="">Chrome</a> (Webbrowser)</li>
      </ol>
      <p className="auftrag">
        Installieren Sie die Programme über die jeweiligen Links.
      </p>
      </section>
    </>
  )
}