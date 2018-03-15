const fetch = require('node-fetch')
const uri = 'http://localhost:3000/graphql';

module.exports = {
  //Fetches all TodoItems with node-fetch request
  FetchTodoItems: () => {
    return fetch(uri, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ query: '{ TodoItems { _id,content,parent,completed } }'})
    })
    .then( res => res.json())
    .then( data => data)
    .catch(err => console.log("error " + err ))
  },
  //Fetches a single TodoItem and unique id with node-fetch request
  FetchSingleTodoItem: (TodoItemid) => {
    return fetch(uri, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ query: `{ FindTodoItem(id: \"${TodoItemid}\") {_id, parent, content, completed} }` })
    })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log("error " + err))
  }
}
