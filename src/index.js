import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import App from './App';
import {BrowserRouter as Router}  from 'react-router-dom';
import { ApolloProvider } from "@apollo/react-hooks";
import {ProductProvider} from './context'


const client = new ApolloClient({
  uri: "https://pangaea-interviews.now.sh/api/graphql",
});

ReactDOM.render(
  <ApolloProvider client={client}>
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>
  </ApolloProvider>,
   
document.getElementById('root'));