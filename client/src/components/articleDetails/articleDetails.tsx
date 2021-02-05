import { ClickAwayListener, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import WordPopper from "./wordPopper";
import { useSelector, useDispatch } from "react-redux";
import { articleSelector } from "../../redux/selectors/articlesSelector";
import { FETCH_WORD } from "../../redux/types";

const useStyles = makeStyles({
  word: {
    cursor: "pointer",
    transition: "all .2s",
    "&:hover": {
      color: "#70c1b3 !important",
    },
  },
  textWrapper: {
    width: "60%",
    margin: "3rem auto",
    color: "#25554d",
    wordSpacing: "0.2rem",
  },
});

const ArticleDetails = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [currentWord, setCurrentWord] = useState<Number | null>(null);
  const [anchorEl, setAnchorEl] = useState<Number | null>(null);
  const article = useSelector(articleSelector);
  const articleContent = article?.content.split(" ");
  const dispatch = useDispatch();

  function handleOnClickAway() {
    setCurrentWord(null);
    setOpen(false);
  }

  const handleClick = (i: number, word: string) => (event: any) => {
    dispatch({ type: FETCH_WORD, word });
    setCurrentWord(i);
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  return (
    <>
      {" "}
      <img alt="Article description" src="https://picsum.photos/200/300" />
      <WordPopper anchorEl={anchorEl} open={open} />
      <ClickAwayListener onClickAway={handleOnClickAway}>
        <div className={classes.textWrapper}>
          {articleContent &&
            articleContent.map((q: string, i: number) => {
              return (
                <span key={q + i}>
                  <p
                    className={classes.word}
                    style={{
                      display: "inline",
                      color: i === currentWord ? "#70c1b3" : "currentColor",
                      backgroundColor:
                        i === currentWord ? "#fff" : "transparent",
                      borderRadius: "5px",
                      transform: "scale(1.5)",
                    }}
                    onClick={handleClick(i, q)}
                  >
                    {q}
                  </p>{" "}
                </span>
              );
            })}
        </div>
      </ClickAwayListener>
    </>
  );
};

export default ArticleDetails;
