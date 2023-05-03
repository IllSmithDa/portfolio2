import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./reduxStore/store.ts";
import App from "./App.tsx";
import "./base.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
 <Provider store={store}>
   <React.StrictMode>
    <App />
  </React.StrictMode>
 </Provider>,
)
