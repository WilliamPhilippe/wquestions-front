import { Router } from "./routes/routes";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./App.css";

function App() {
  const client = new ApolloClient({
    uri: process.env.API_URL,
    cache: new InMemoryCache(),
  });

  console.info(process.env.API_URL);

  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
