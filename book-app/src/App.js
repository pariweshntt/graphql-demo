import React, { Component } from 'react';
import './App.css';
import AddBook from './components/AddBook';
import  {ApolloClient}  from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
const clientDetails = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  // cache:
})
function App() {
  return (
    <div className="App">
      <ApolloProvider client={clientDetails}> 
        
        <AddBook />
        </ApolloProvider>

    </div>
  );
}

export default App;
