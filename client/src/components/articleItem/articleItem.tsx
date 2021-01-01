import { Box, colors, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import * as Styles from './articleItem.styles';

const useStyles = makeStyles({
    article: {
      height: '20rem',
      width: '50%'
    },
  });

const ArticleItem = () => {
    const classes = useStyles();
    return (
        <Box display='flex' className={classes.article}>
            <Styles.Image src='https://picsum.photos/200/300'/>
            <Typography style={{color: colors.blueGrey[500]}} variant="h3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </Typography>
        </Box>
    )
}

export default ArticleItem
