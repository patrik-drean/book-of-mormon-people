import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import reducer from "../../reducers/reducers";
import FlashCardsPage from "../FlashCardsPage/FlashCardsPage";
import LearnPage from "../LearnPage/LearnPage";
import Nav from "./Nav";

const appStyle = {
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  fontSize: "calc(10px + 2vmin)",
  color: "white"
};

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App" style={appStyle}>
          <Nav />
          <Switch key={Math.random()}>
            <Route
              path="/book-of-mormon-people/learn"
              component={LearnPage}
            ></Route>
            <Route
              path="/book-of-mormon-people/quiz"
              component={FlashCardsPage}
            ></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
