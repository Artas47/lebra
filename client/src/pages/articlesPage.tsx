import { Box, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkIfLoading } from "../redux/selectors/loadingSelector";
import Fade from "@material-ui/core/Fade";
import { FETCH_ARTICLES } from "../redux/types";
import ArticleList from "../components/articles/articleList";
import Spinner from "../components/shared/spinner";

const useStyles = makeStyles({
  articlesWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

const ArticlesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: FETCH_ARTICLES });
  }, [dispatch]);
  const isLoading = useSelector(checkIfLoading(FETCH_ARTICLES));
  const classes = useStyles();
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Fade in={!isLoading}>
      <Box className={classes.articlesWrapper}>
        <ArticleList />
      </Box>
    </Fade>
  );
};

export default ArticlesPage;
