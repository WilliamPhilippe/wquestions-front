import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Wrapper } from "./components/Wrapper";
import { UseAuditLogProvider } from "./context/useAuditLog";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Wrapper>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <UseAuditLogProvider>
          <App />
        </UseAuditLogProvider>
      </React.StrictMode>
    </ApolloProvider>
  </Wrapper>
);
