import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  article: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "30rem",
    margin: "3rem",
    transition: "all .2s",
    borderBottom: `3px solid transparent`,
    cursor: "pointer",
    "&:hover": {
      borderBottom: `3px solid ${theme.palette.primary.dark}`,
    },
  },
  image: {
    height: "30rem",
    width: "100%",
  },
  text: {
    color: "#25554d",
    height: "100%",
    marginTop: "1rem",
    fontSize: "2rem",
    textAlign: "center",
    lineHeight: "1.5",
    letterSpacing: "1px",
    fontWeight: 400,
  },
}));

type ArticleItemProps = {
  image: string;
  title: string;
  id: string;
};

const ArticleItem = ({ image, title, id }: ArticleItemProps) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box
      className={classes.article}
      onClick={() => history.push(`/article/${id}`)}
    >
      <img alt="article" className={classes.image} src={image} />
      <Typography className={classes.text} variant="h4">
        {title}
      </Typography>
    </Box>
  );
};

export default ArticleItem;
