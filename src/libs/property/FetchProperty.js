
export const FetchProperty = (Body , method = "POST") => {
  return {
    method : method,
    headers:{
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(Body)
  }
}

export const GETFetchProperty =() => {
   return {
      method : "GET",
      headers :{
        "Accept" : "*/*",
        "Content-Type" : "application/json"
      }
   }
}
export const JSONtoArray = (element) => {
  return [...Array(element.length)].map((_,i) => element[i])
}

