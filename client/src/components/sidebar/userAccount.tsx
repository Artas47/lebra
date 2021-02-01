import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  Box,
  colors,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  accountWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "25rem",
    backgroundColor: "#ebeef0",
    color: "#8d9699",
    marginBottom: "7rem",
  },
  accountIcon: {
    width: "13rem",
    height: "13rem",
    fill: "#fff",
    margin: "0 1.5rem 2rem 1.5rem",
  },
  iconsWrapper: {
    display: "flex",
    alignItems: "center",
  },
  sideIcon: {
    width: "4.5rem",
    height: "4.5rem",
    fill: colors.blueGrey[300],
  },
});

const UserAccount = () => {
  const classes = useStyles();
  return (
    <Box className={classes.accountWrapper}>
      <div className={classes.iconsWrapper}>
        <IconButton>
          <SettingsIcon className={classes.sideIcon} />
        </IconButton>
        <AccountCircleIcon className={classes.accountIcon} />
        <IconButton>
          <ExitToAppIcon className={classes.sideIcon} />
        </IconButton>
      </div>
      <Typography variant="h3">John Smith</Typography>
    </Box>
  );
};

export default UserAccount;
