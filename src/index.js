import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router/AppRouter";
import { Provider } from 'react-redux';

import { PersistGate } from "redux-persist/integration/react";
import { store,persistor} from './Redux';

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>,

  document.getElementById("root")
);
