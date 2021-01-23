import { Box, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import ArticleItem from "../components/articleItem/articleItem";
import { useDispatch, useSelector } from "react-redux";
import { checkIfLoading } from "../redux/selectors/loadingSelector";
import { articlesSelector } from "../redux/selectors/articlesSelector";
import Fade from "@material-ui/core/Fade";
import { FETCH_ARTICLES } from "../redux/types";

const useStyles = makeStyles({
  articlesWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

const Articles = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: FETCH_ARTICLES });
  }, [dispatch]);
  const articles = useSelector(articlesSelector);
  const isLoading = useSelector(checkIfLoading(FETCH_ARTICLES));
  const classes = useStyles();
  if (isLoading) {
    return (
      <div
        style={{ position: "absolute", top: "30%", left: "50%" }}
        className="loader"
      ></div>
    );
  }
  return (
    <Fade in={!isLoading}>
      <Box className={classes.articlesWrapper}>
        {articles.map((article: any) => {
          return (
            <ArticleItem
              id={article._id}
              title={article.title}
              image="https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80"
            />
          );
        })}
      </Box>
    </Fade>
  );
};

export default Articles;
