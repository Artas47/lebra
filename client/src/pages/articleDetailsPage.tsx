import { makeStyles } from "@material-ui/core";
import React from "react";
import ArticleDetails from "../components/articleDetails/articleDetails";

const useStyles = makeStyles({
  articleWrapper: {
    margin: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "2.3rem",
    lineHeight: "2.6rem",
    wordWrap: "break-word",
    overflowWrap: "break-word",
    hyphens: "auto",
  },
});

const ArticleDetailsPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.articleWrapper}>
      <ArticleDetails />
    </div>
  );
};

export default ArticleDetailsPage;
