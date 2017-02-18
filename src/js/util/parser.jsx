import * as api from './api.jsx';
import moment from 'moment';

/**
 * 日付表記の変換
 */
function date(date){
  return moment(date).format('YYYY-MM-DD');
}

/**
 * 本文のタグを変換
 */
function parse(sentence) {
  const s = sentence;
  return s.children;
}

export const getNormarlXml = (fileName)=> {
  return new Promise ((resolve, reject) => api.callApiGetXml(fileName)
    .then((res) => {
      const dom = new DOMParser().parseFromString(res.text, "text/xml");
      resolve(parse(dom.getElementsByTagName("root")[0])[0].innerHTML);
    })
  );
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
  return new Promise ((resolve, reject) => api.callApiGetXml(fileName)
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

/**
 * @returns {Array} - カテゴリ一覧
 *  | {Object} - 親階層
 *  |  | {Integer} count - 記事数
 *  |  | {String} id - カテゴリ
 *  |  | {String} name - カテゴリ名
 *  |  | {Object} children - 子階層
 */
export const getCategory = () => {
  return new Promise ((resolve, reject) => api.callApiGetJson("server.php/category")
    .then((res) => {
      resolve(JSON.parse(res));
    })
  );
}

/**
 * 親カテゴリの取得
 */
export const getParentsCategory = (category) => {
  category = category || [];
  let formattedCategory = [];
  for(let c of category) {
    if(c.parent_id === "") formattedCategory.push(c);
  }
  return formattedCategory;
}

/**
 * 子カテゴリの取得
 */
export const getChildrenCategory = (category, ParentsCategoryId) => {
  if(!ParentsCategoryId) return [];
  let formattedCategory = [];
  for(let c of category) {
    if(c.parent_id === ParentsCategoryId) formattedCategory.push(c);
  }
  return formattedCategory;
}

/**
 * @returns {Array} - 人気記事一覧
 *  | {Object} 
 */
export const getFavorArticl = () => {
  return new Promise ((resolve, reject) => api.callApiGetJson("server.php/favor")
    .then((res) => {
      resolve(JSON.parse(res));
    })
  );
}

/**
 * @returns {Array} - 記事一覧
 *  | {Object} 
 */
export const getArticlList = (param) => {
  const query = param ? ("/" + param) : "";
  return new Promise ((resolve, reject) => api.callApiGetJson("server.php/article" + query)
    .then((res) => {
      resolve(JSON.parse(res));
    })
  );
}

/**
 * @returns {Array} - 記事カテゴリ一覧
 *  | {Object} 
 */
export const getCategoryList = (param) => {
  const query = param ? ("/" + param) : "";
  return new Promise ((resolve, reject) => api.callApiGetJson("server.php/catlist" + query)
    .then((res) => {
      resolve(JSON.parse(res));
    })
  );
}