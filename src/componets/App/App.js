import React from "react";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import reducer from "../../reducers/reducers";
import FlashCardsPage from "../FlashCardsPage/FlashCardsPage";
import Nav from "./Nav";

const appStyle = {
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white"
};

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={appStyle}>
        <Nav></Nav>
        <FlashCardsPage></FlashCardsPage>
      </div>
    </Provider>
  );
}

export default App;
