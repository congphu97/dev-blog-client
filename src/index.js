import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Create an instance of Apollo Client
const client = new ApolloClient({
  uri: 'https://dev-blog-server-rgnj.onrender.com/graphql',  // Replace with your GraphQL API endpoint
  cache: new InMemoryCache(), // Apollo cache for storing query results
  fetchOptions: {
    mode: 'no-cors',
  },
  headers: {
    'Content-Type': 'application/json',
    'x-apollo-operation-name': 'YourOperationName',
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />  {/* Your main app component */}
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
