import { makeStyles, Fade } from "@material-ui/core";
import React, { useEffect } from "react";
import ArticleDetails from "../components/articleDetails/articleDetails";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_ARTICLE } from "../redux/types";
import { useParams } from "react-router-dom";
import { checkIfLoading } from "../redux/selectors/loadingSelector";
import Spinner from "../components/shared/spinner";

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

interface ParamTypes {
  articleId: string;
}

const ArticleDetailsPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { articleId } = useParams<ParamTypes>();
  useEffect(() => {
    dispatch({ type: FETCH_ARTICLE, articleId });
  }, []);
  const isLoading = useSelector(checkIfLoading(FETCH_ARTICLE));
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Fade in={!isLoading}>
      <div className={classes.articleWrapper}>
        <ArticleDetails />
      </div>
    </Fade>
  );
};

export default ArticleDetailsPage;
