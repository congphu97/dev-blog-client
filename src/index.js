import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

// Create an instance of Apollo Client
const client = new ApolloClient({
  uri: process.env.REACT_APP_DEV_BLOG_API_GRAPHQL,  // Replace with your GraphQL API endpoint
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
  <BrowserRouter> {/* Wrap your App with BrowserRouter */}
    <ApolloProvider client={client}>
      <App />  {/* Your main app component */}
    </ApolloProvider>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
