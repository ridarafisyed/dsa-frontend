/** @format */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import { theme } from "./hocs/Theme";

import Layout from "./hocs/Layout";
import Home from "./containers/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
