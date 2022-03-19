/** @format */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import { ThemeProvider } from "@mui/material";
import { theme } from "./hocs/Theme";

import Layout from "./hocs/Layout";
import Home from "./containers/Home";
import Login from "./containers/Login";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route exact path="/" element={<Home />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
