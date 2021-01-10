import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import ArticleItem from "../components/articleItem/articleItem";

const useStyles = makeStyles({
  articlesWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

const Articles = () => {
  const classes = useStyles();
  return (
    <Box className={classes.articlesWrapper}>
      <ArticleItem
        id="1"
        title="simple title 123 123 i am a very simple title"
        image="https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80"
      />
      <ArticleItem
        id="2"
        title="simple title 123 123 i afasdfa sdfam a very simple title"
        image="https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80"
      />
      <ArticleItem
        id="13"
        title="simple title 123 123 i am a very simple title"
        image="https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80"
      />
      <ArticleItem
        id="14"
        title="simple title 123 12fsdfas fasdfasdfsa dfasdfasd3 i am a very simple title"
        image="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
      <ArticleItem
        id="15"
        title="simple title 123 123 i am a very simple title"
        image="https://picsum.photos/200/300"
      />
      <ArticleItem
        id="16"
        title="simple title 123 123 i asdfs fsdf afasddf sASDF ASDFDF ASADFSA DFASDFm a very simple title"
        image="https://picsum.photos/200/300"
      />
      <ArticleItem
        id="16"
        title="simple title 123 123 isdfasdfa sd am a very simple title"
        image="https://picsum.photos/200/300"
      />
      <ArticleItem
        id="71"
        title="simple title 123 123 i am a very simple title"
        image="https://picsum.photos/200/300"
      />
      <ArticleItem
        id="18"
        title="simple title 123 123 ifasdfa sdfasdf am a very simple title"
        image="https://picsum.photos/200/300"
      />
    </Box>
  );
};

export default Articles;
