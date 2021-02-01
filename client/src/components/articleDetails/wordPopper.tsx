import React from "react";
import {
  Box,
  Fade,
  makeStyles,
  Popper,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

const useStyles = makeStyles({
  popperBox: {
    backgroundColor: "#fff",
    maxWidth: "50rem",
  },
});

type ArticleListItemProps = {
  open: boolean;
  anchorEl: any;
};

const WordPopper = ({ open, anchorEl }: ArticleListItemProps) => {
  const classes = useStyles();
  const id = open ? "legend-popover" : undefined;
  return (
    <Popper id={id} open={open} anchorEl={anchorEl} transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Box className={classes.popperBox} boxShadow={1}>
            <Table aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell
                    style={{ wordBreak: "keep-all" }}
                    component="th"
                    scope="row"
                  >
                    <Typography
                      style={{
                        fontSize: "1.8rem",
                      }}
                      variant="h4"
                    >
                      Translation
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      style={{ fontWeight: 300, fontSize: "2rem" }}
                      variant="h3"
                    >
                      Siema ja przetlumaczony
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography
                      style={{
                        fontSize: "1.8rem",
                      }}
                      variant="h4"
                    >
                      Meaning
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      style={{ fontWeight: 300, fontSize: "2rem" }}
                      variant="h3"
                    >
                      to be accussed of smthgsdfgfds gsdf dfgs dfsgsdfg dsfg dfs
                      sdfsfdsdf;
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography
                      style={{
                        fontSize: "1.8rem",
                      }}
                      variant="h4"
                    >
                      Synonyms
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      style={{ fontWeight: 300, fontSize: "2rem" }}
                      variant="h3"
                    >
                      siema, ka, synonim, elowka
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Fade>
      )}
    </Popper>
  );
};

export default WordPopper;
