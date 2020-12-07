import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GuardRoute from "./components/guardRoutes";
//import jwdecode from "jwt-decode";
import routes from "./router";
import "./App.css";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
//Importamos el token
import tokenAuth from "./config/token";

//Revisar si tenemos un token
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          {routes.map(function (route) {
            if (route.type === "public") {
              return (
                <Route
                  key={route.url}
                  exact
                  type={route.type}
                  path={route.url}
                  component={route.component}
                />
              );
            } else {
              return (
                <GuardRoute
                  key={route.url}
                  exact
                  path={route.url}
                  component={route.component}
                />
              );
            }
          })}
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
