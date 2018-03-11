import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter } from 'react-router-dom';

import App from '../../_ui/App';

const httpLink = new HttpLink({
  //grabs baseUrl
  uri: Meteor.absoluteUrl('graphql')
});

//apollo's caching system
const cache = new InMemoryCache();

//apollo client that connects to server
const client = new ApolloClient({
  link: httpLink,
  cache
})

//runs and renders to the Element id provided
Meteor.startup( () => {
  render(
    <ApolloProvider client = {client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
    , document.getElementById("a"));
});
