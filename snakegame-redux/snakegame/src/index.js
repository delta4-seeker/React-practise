import React from "react";
import { Provider } from "react-redux";
import ReactDom from "react-dom/client";
import App from "./App";
import store from './redux/store'

const root = ReactDom.createRoot(document.getElementById("root"));

class SnakeGame extends React.Component {
  render() {
    return (

        <Provider store = {store}>
          <App />
        </Provider>
    );
  }
}

root.render(<SnakeGame />);
