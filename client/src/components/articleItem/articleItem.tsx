import { Box, colors, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    article: {
      height: '20rem',
      width: '45%',
      margin: '3rem'
    },
    image: {
        height: '100%',
        maxWidth: '20rem'
    }
  });

const ArticleItem = () => {
    const classes = useStyles();
    return (
        <Box display='flex' className={classes.article}>
            <img className={classes.image} src='https://picsum.photos/200/300'/>
            <Typography style={{color: colors.blueGrey[500], marginLeft: '1rem'}} variant="h4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </Typography>
        </Box>
    )
}

export default ArticleItem
