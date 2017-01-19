import marked from 'marked';
import highlight from "highlight.js";
import * as api from './api.jsx';


// Synchronous highlighting with highlight.js
marked.setOptions({
  highlight: function (code) {
    return highlight.highlightAuto(code).value;
  }
});

//
function overideMarker() {
  const renderer = new marked.Renderer();
  let idx;
  renderer.heading = (text, level) => {
    console.log(text);
    var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    return '<h' + level + '><a name="' +escapedText + '" class="anchor" href="#' + escapedText + '"><span class="header-link"></span></a>' + text + '</h' + level + '>';
  };
  renderer.html = (html) => {
    console.log(html);
    if (html.indexOf("<index>") === -1) return html;
    idx = marked(html.replace("<index>", "<div class='aaa'>").replace("</index>", "</div>"));
    return "";
  };
  return renderer;
}

/**
 * @return {Object} - 記事の要素
 *  | {string} date         - 時刻
 *  | {string} title        - タイトル
 *  | {string} description  - 概要
 *  | {string} sentence     - 本文
 */
export const getArticle = (fileName) => {
  return new Promise ((resolve, reject) => api.callApi(fileName)
    .then((res) => {
      const dom = new DOMParser().parseFromString(res.text, "text/xml");
      const resolveRes = {
        date:         dom.getElementsByTagName("date")[0].textContent,
        title:        dom.getElementsByTagName("title")[0].textContent,
        description:  dom.getElementsByTagName("description")[0].textContent,
        sentence:     marked(dom.getElementsByTagName("sentence")[0].textContent, {renderer: overideMarker()})
      }
      resolve(resolveRes);
    })
  );
}