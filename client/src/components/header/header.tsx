import { makeStyles, Typography } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    boxShadow: "none",
  },
  tabs: {
    backgroundColor: theme.palette.primary.main,
  },
  tab: {
    color: theme.palette.primary.main,
    fontSize: "1.6rem",
    height: "6rem",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("/");
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setValue(location.pathname);
  }, [location]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    history.push(newValue);
  };
  return (
    <AppBar position="sticky" classes={{ root: classes.headerWrapper }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 2rem",
        }}
      >
        <Typography style={{ color: "#70c1b3", fontWeight: 500 }} variant="h3">
          Lebra_
        </Typography>
        <Tabs
          classes={{ indicator: classes.tabs }}
          value={value}
          onChange={handleChange}
          aria-label="header-tabs"
        >
          <Tab classes={{ root: classes.tab }} label="Articles" value="/" />
          <Tab classes={{ root: classes.tab }} label="Notes" value="/notes" />
          <Tab classes={{ root: classes.tab }} label="Learn" value="/learn" />
        </Tabs>
      </div>
    </AppBar>
  );
};

export default Header;
