export default function ChapterIndex() {

  window.location.hash = "#index"

  return (
    <>
      <ol>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#html">Webseiten</a></li>
        <li><a href="#html-elements">Webseiten strukturieren</a></li>
        <li><a href="#html-attributes">HTML Attribute</a></li>
      </ol>
    </>
  )
}