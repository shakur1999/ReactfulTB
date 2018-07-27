// from Lyrical index.js

import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Router, Route, hashHistory, IndexRoute } from "react-router"
import Songlist from "./components/SongList";
import App from "./components/App";
import SongCreate from "./components/SongCreate";
import gql from "graphql-tag";

const cache = new InMemoryCache();
const client = new ApolloClient({});


const Root = () => {
  return (
    <ApolloProvider client={client}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Songlist}/>
            <Route path="song/new" component={SongCreate} />
          </Route>
        </Router>
    </ApolloProvider>
  );
}

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);