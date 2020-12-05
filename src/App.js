import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwdecode from 'jwt-decode';
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
  const jwt = jwdecode(token);
  console.log(jwt);
}

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
