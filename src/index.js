import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
const App = lazy(() => import("./App"));

const renderLoader = () => <p className="loading-text">Loading...</p>;
const client = new ApolloClient({
  uri: "https://api.blocktap.io/graphql",
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={renderLoader()}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
