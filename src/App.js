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
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoutes from "./utils/PrivateRoute";
import PhotoGallery from "./components/Gallery/PhotoGallery";
import BlogList from "./components/Blogs/BlogList";
import CreatePost from "./components/Dashboard/CreatePost";
import { DashboardLayout } from "./components/Dashboard/Dashboard";
import Appointment from "./components/Dashboard/Appointment";
import Messages from "./components/Dashboard/Messages";
import Blogs from "./components/Dashboard/Blogs";

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
              <Route path="/gallery" component={PhotoGallery} />
              <Route path="/blogs-list" component={BlogList} />
              <Route exact path="/create-post" component={CreatePost} />
              <DashboardLayout>
                <PrivateRoutes path="/dashboard" component={Dashboard} />
                <PrivateRoutes path="/appointments" component={Appointment} />
                <PrivateRoutes path="/messages" component={Messages} />
                <PrivateRoutes path="/blogs" component={Blogs} />
              </DashboardLayout>
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
