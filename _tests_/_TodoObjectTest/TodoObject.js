const fetch = require('node-fetch')
const uri = 'http://localhost:3000/graphql';
var id = "TtqWyeRJLbC67Hs7G";

module.exports = {
  //Fetches all TodoObject with node-fetch request
  FetchTodoObjects: () => {
    return fetch(uri, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: '{ TodoObjects {_id,name,completed,items{_id,parent,content,completed}} }' }),

    })
    .then(res => res.json())
    .then(data => data)
    // .catch(err => console.log("error " + err))
  },
  //Fetches a single TodoObject and unique id with node-fetch request
  FetchSingleTodoObject: (objectId) => {
    return fetch(uri,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `{ FindTodoObject(id: \"${objectId}\") { _id, name, completed, items{_id,parent,content,completed} } }`})
    })
      .then(res => res.json())
      .then(data => data)
      // .catch(err => console.log("error " + err))
  }


}
