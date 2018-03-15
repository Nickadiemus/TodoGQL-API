# TodoGQL-API

This application is a **Fullstack TodoList** that utilizes the power of **Meteor** paired with **Apollo** **React** for the client, the powerful **GraphQL** for the API and **Mongo** as the Database. The main technologies that were used to build the architecture and a brief description of why I chose them are listed below.

## Packages Used
#### Dependencies
  * @babel/runtime
  * apollo-client
  * apollo-client-preset
  * express
  * graphql
  * graphql-server-express
  * graphql-tag
  * graphql-tools
  * lodash/merge
  * meteor-node-stubs
  * react
  * react-apollo
  * react-dom
  * react-router-dom

#### Dev Dependencies  
  * babel-plugin-inline-import
  * jest
  * node-fetch

## Overview
The architecture I built this test off of is GraphQL connected to a Mongo database. This was driven by the help of [Meteor](https://www.meteor.com/) which is a open-sourced, isomorphic JavaScript framework written in node. I used this platform to help rapidly create a working demo for the purpose of client-side testing and the ease of Replication of my 2nd attempt of this test back in November. ([As Seen Here](https://github.com/Nickadiemus/TodoAPI)) Apollo was used to build over the client to allow easier GraphQL queries, ensure the results of the data are being updated and in sync with each other, and provides a easy way to update the cache of the browser with the results sent from the server.

#### How to start

Install **Meteor**
```
curl https://install.meteor.com/ | sh
```

Download the Repository
```
git clone https://github.com/Nickadiemus/TodoGQL-API.git

```

After the repo is cloned, cd into the directory path and install Packages with npm
```
npm install
```

Then you can start the Meteor server just by simply
```
meteor
```

---


## GraphQL
I chose GraphQL to build my API over a generic REST API because it offers much more flexibility. Rather than having multiple endpoints for requesting and posting data, with GraphQL I can create described data through schemas and custom functions either querying to get that data or mutating to create/update/delete specific data. What is also a great functionality is that it does this all from one endpoint. Also with using GraphQL is I can define specific request to get data that would result in multiple different requests and different endpoints with a REST API. This allowed me to make one query request in my home layout to then go and populate the data needed.

---

## React with Apollo
React-Apollo was used to pair with React. This allows an instance of the Apollo Client to wrap around the whole react application to provide an easy use to data management. The Apollo client takes care of the request cycle from start to finish. This including tracking loading and error states for you. It also helps easily define GraphQL requests inside respective components to fetch or manipulate data. It provides and easy way to get your application running and connected with your GraphQL server and start serving content to your application.

---

## Jest

Jest was used for Unit testing with the API. I chose this technology because it integrates very well with React and is quite simple to set up and use. This allows me isolate parts of the API and test their functionality and responses.

***

## Client Preview

![alt text](https://i.imgur.com/mPtUUvr.png)

![alt text](https://i.imgur.com/x9so525.png)
