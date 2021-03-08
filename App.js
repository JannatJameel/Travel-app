import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import RootNavigator from "./components/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
