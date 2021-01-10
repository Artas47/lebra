import React from "react";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Articles from "./pages/articles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArticleDetails from "./pages/articleDetails";
import "./css/loader.css";
import { makeStyles } from "@material-ui/core";
import classes from "*.module.css";

const useStyles = makeStyles({
  mainWrapper: {
    width: "80%",
    position: "relative",
    height: "calc(100% - 6rem)",
    overflowY: "scroll",
    backgroundColor: "#efeff0",
  },
});

function App() {
  const classes = useStyles();
  return (
    <main style={{ height: "100vh" }}>
      <Router>
        <Header />
        <Sidebar />
        <div className={classes.mainWrapper}>
          <Switch>
            <Route path="/article/:articleId">
              <ArticleDetails />
            </Route>
            <Route path="/notes" exact>
              NOTES
              <div
                style={{ position: "absolute", top: "30%", left: "50%" }}
                className="loader"
              ></div>
            </Route>
            <Route path="/" exact>
              <Articles />
            </Route>
          </Switch>
        </div>
      </Router>
    </main>
  );
}

export default App;
