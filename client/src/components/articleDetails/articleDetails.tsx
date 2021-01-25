import { ClickAwayListener, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import WordPopper from "./wordPopper";
import { useSelector } from "react-redux";
import { articleSelector } from "../../redux/selectors/articlesSelector";

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

  function handleOnClickAway() {
    setCurrentWord(null);
    setOpen(false);
  }

  const handleClick = (i: number) => (event: any) => {
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
                      // padding: i === currentWord ? "0 5px" : "0",
                      transform: "scale(1.5)",
                    }}
                    onClick={handleClick(i)}
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
