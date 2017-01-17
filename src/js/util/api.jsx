import superagent from 'superagent';

// function successPromise(){
//   return new Promise((resolve) => {

//   });
// }

// function errorPromise(){
//   return new Promise((resolve) => {

//   });
// }

function apiGet(apiName){
  return new Promise(
    (resolve, reject) => {
      superagent.get(apiName)
        .set("Accept", "text/html")
        .end((err, res) => err ? reject(err) : resolve(res));
    }
  );
}

export const callApi = (apiName) => {
  return new Promise(
    (resolve, reject) => apiGet(apiName)
      .then((response) => {
        resolve(response);
      }
    )
  );
}