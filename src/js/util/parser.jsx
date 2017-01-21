// import marked from 'marked';
// import highlight from "highlight.js";
import * as api from './api.jsx';


// Synchronous highlighting with highlight.js
// marked.setOptions({highlight: (code) => highlight.highlightAuto(code).value});

function parse(sentence) {
  const s = sentence;
  // for(let d of s.getElementsByClassName("link")) {
  //   console.warn(d);
  // }
  return s.children;
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
        // sentence:     marked(dom.getElementsByTagName("sentence")[0].textContent, {renderer: overideMarker()})
        sentence:     parse(dom.getElementsByTagName("sentence")[0])
      }
      resolve(resolveRes);
    })
  );
}