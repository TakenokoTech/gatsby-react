import superagent from 'superagent';

const DEBUG = false;

// function successPromise(){
//   return new Promise((resolve) => {

//   });
// }

// function errorPromise(){
//   return new Promise((resolve) => {

//   });
// }

function apiGet(apiName, accept){
  return new Promise(
    (resolve, reject) => {
      if(DEBUG) console.log("call API:" + apiName);
      superagent.get(apiName)
        .set("Accept", accept)
        .end((err, res) => err ? reject(err) : resolve(res));
    }
  );
}

export const callApiGetXml = (apiName) => {
  return new Promise(
    (resolve, reject) => apiGet(apiName, "text/xml")
      .then((response) => {
        resolve(response);
      }
    )
  );
}

export const callApiGetJson = (apiName) => {
  return new Promise(
    (resolve, reject) => apiGet(apiName, "application/json")
      .then((response) => {
        resolve(response.text);
      }
    )
  );
}