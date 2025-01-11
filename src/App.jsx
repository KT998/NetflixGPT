import React from "react";
import Body from "./components/Common/Body";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const App = () => { 
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
};

export default App;