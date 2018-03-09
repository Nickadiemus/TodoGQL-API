//main imports
import React, {Component} from 'react';

//helper imports
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

//Component imports
import Navbar from './_components/Navbar'

//style imports

const App = ({data}) => {
  if(data.loading) return null;
  else {
    const RenderedTodoObjects = data.TodoObjects.map(TodoObjects => (<li key = {TodoObjects._id}>{TodoObjects.name}</li>));
    return (
      <div>
        <Navbar />
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
