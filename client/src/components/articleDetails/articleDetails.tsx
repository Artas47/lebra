import { ClickAwayListener, colors, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import WordPopper from "./wordPopper";

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
  },
});

const e = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere eaque commodi officiis recusandae labore? Dolore fugiat illum nesciunt ipsa officia incidunt cupiditate ea cum possimus ducimus facere architecto perspiciatis eveniet dolorem nihil magni quam aspernatur debitis molestias, accusantium sapiente ab doloribus cumque. Asperiores fuga fugiat aspernatur. Quas maxime rem est impedit tenetur maiores. Ab ipsa blanditiis eaque quo, debitis laborum error. Aspernatur soluta facilis excepturi sit dolore numquam repellendus quas nemo. Officia neque eius dolor amet accusamus quaerat aperiam voluptates modi doloremque. Ipsum, dicta natus! Voluptas dolores molestiae, natus molestias earum nobis fugit maiores labore a doloribus porro provident laudantium amet aspernatur commodi nam quae veritatis unde exercitationem ab modi error nisi iure? Exercitationem dignissimos esse impedit aut fuga rem cupiditate ea sed facilis cumque ratione, beatae praesentium voluptas iure incidunt tempora ut commodi asperiores quo, iste necessitatibus harum. Alias quibusdam id voluptate consequatur illo odit ratione. Sit, necessitatibus? Quo, perferendis. Reiciendis itaque, ut sed asperiores rerum porro. Aspernatur unde odio inventore! Sit, nulla necessitatibus magni iusto nisi fugiat. Voluptas commodi sed blanditiis dicta, quis suscipit, possimus magnam iusto, dolores repudiandae sequi eaque beatae harum quos minima! Corporis mollitia nam impedit obcaecati suscipit. Totam officiis enim optio iure reprehenderit, quibusdam tempore architecto minus temporibus molestiae nobis libero aspernatur, suscipit, error earum ea deleniti blanditiis. Ipsa placeat tempore natus corrupti excepturi ipsam laborum ad odio perspiciatis corporis, molestias, odit provident! Voluptate soluta ullam, magni ab magnam laborum itaque sit, delectus, quasi vitae consectetur reprehenderit incidunt maiores? Eveniet rerum consectetur fuga modi.".split(
  " "
);

const ArticleDetails = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [currentWord, setCurrentWord] = useState<Number | null>(null);
  const [anchorEl, setAnchorEl] = useState<Number | null>(null);
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
          <p style={{ color: "#25554d", wordSpacing: "0.2rem" }}>
            {e.map((q, i) => {
              return (
                <>
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
                </>
              );
            })}
          </p>
        </div>
      </ClickAwayListener>
    </>
  );
};

export default ArticleDetails;
