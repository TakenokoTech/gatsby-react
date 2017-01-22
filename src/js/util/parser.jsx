// import marked from 'marked';
// import highlight from "highlight.js";
import * as api from './api.jsx';
import moment from 'moment';


// Synchronous highlighting with highlight.js
// marked.setOptions({highlight: (code) => highlight.highlightAuto(code).value});

function date(date){
  return moment(date).format('YYYY-MM-DD');
}

function parse(sentence) {
  const s = sentence;
  return s.children;
}

/**
 * @return {Object} - 記事の要素
 *  | {string} date         - 時刻
 *  | {string} title        - タイトル
 *  | {string} category     - カテゴリ
 *  | {string} description  - 概要
 *  | {string} sentence     - 本文
 */
export const getArticle = (fileName) => {
  return new Promise ((resolve, reject) => api.callApi(fileName)
    .then((res) => {
      const dom = new DOMParser().parseFromString(res.text, "text/xml");
      const resolveRes = {
        date:         date(dom.getElementsByTagName("date")[0].textContent),
        title:        dom.getElementsByTagName("title")[0].textContent,
        category:     dom.getElementsByTagName("category")[0].textContent,
        description:  parse(dom.getElementsByTagName("description")[0]),
        // sentence:     marked(dom.getElementsByTagName("sentence")[0].textContent, {renderer: overideMarker()})
        sentence:     parse(dom.getElementsByTagName("sentence")[0])
      }
      resolve(resolveRes);
    })
  );
}