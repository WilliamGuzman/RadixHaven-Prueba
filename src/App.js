import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./router";
import "./App.css";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.url}
              exact
              type={route.type}
              path={route.url}
              component={route.component}
            />
          ))}
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
