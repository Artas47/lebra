import React from "react";
import ArticleListItem from "./articleListItem";
import { articlesSelector } from "../../redux/selectors/articlesSelector";
import { useSelector } from "react-redux";

const ArticleList = () => {
  const articles = useSelector(articlesSelector);
  return articles.map((article: { _id: string; title: string }) => {
    return (
      <ArticleListItem
        id={article._id}
        title={article.title}
        image="https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80"
      />
    );
  });
};

export default ArticleList;
