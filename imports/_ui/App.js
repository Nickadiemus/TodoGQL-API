//main imports
import React, {Component} from 'react';

//helper imports
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';


//style imports

const App = ({data}) => {
  if(data.loading) return null;
  else {
    const RenderedTodoObjects = data.TodoObjects.map(TodoObjects => (<li key = {TodoObjects._id}>{TodoObjects.name}</li>));
    return (
      <div>
        <h1>{data.TodoObject}</h1>
        <ul>
          {RenderedTodoObjects}
        </ul>
      </div>
    );
  }
}

const testQuery = gql`
{
  TodoObject,
  TodoObjects{
    _id
    name
  }
}
`;

export default graphql(
  testQuery
)(App);
