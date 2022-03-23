/** @format */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import { ThemeProvider } from "@mui/material";
import { theme } from "./hocs/Theme";

import Layout from "./hocs/Layout";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Post from "./components/Blogs/Post";
import Dashbboard from "./components/Dashboard/Dashbboard";
import PrivateRoutes from "./utils/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Switch>
              <Route path="/login" component={Login} />
              <Route exact path="/" component={Home} />
              <Route path="/detailPost" component={Post} />
              <PrivateRoutes path="/dashboard" component={Dashbboard} />
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
