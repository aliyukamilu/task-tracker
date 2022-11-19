import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import { ConfigureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";

// const store = ConfigureStore({
//   reducer: {},
// });
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provnider> */}
  </React.StrictMode>
);
