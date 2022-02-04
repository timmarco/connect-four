function urlConstructor(history,difficulty) {
  const rootUrl = "https://connect4-serverless-fn-tony-tectonai.vercel.app/api?moves=";
  let requestUrl = rootUrl + history.join(",");
  requestUrl += "&difficulty=" + difficulty;
  return requestUrl;
}

export default urlConstructor;
