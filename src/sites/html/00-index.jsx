export default function ChapterIndex() {

  window.location.hash = "#index"

  return (
    <>
      <ol>
        <li>Einführung
          <ol>
            <li><a href="#installation">Installation</a></li>
          </ol>
        </li>
        <li>
          HTML
          <ol>
            <li><a href="#html">Webseiten</a></li>
            <li><a href="#html-elements">Webseiten strukturieren</a></li>
            <li><a href="#html-attributes">HTML Attribute</a></li>
          </ol>
        </li>
        <li>
          CSS
          <ol>
            <li><a href="#css">Elemente gestalten</a></li>
            <li><a href="#css-selectors">CSS Selektoren</a></li>
            <li><a href="#css-box-model">CSS Box Modell</a></li>
            <li><a href="#css-animations">CSS Animationen</a></li>
          </ol>
        </li>
        <li>
          Git
          <ol>
            <li><a href="#git">Versionskontrolle</a></li>
          </ol>
        </li>
      </ol>
    </>
  )
}