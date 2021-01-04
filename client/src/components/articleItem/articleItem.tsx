import { Box, colors, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    article: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // flexWrap: 'wrap',
      height: '50rem',
      width: '30rem',
      margin: '3rem'
    },
    image: {
        height: '60%',
        width: '100%'
    }
  });

const ArticleItem = () => {
    const classes = useStyles();
    return (
        <Box className={classes.article}>
            <img className={classes.image} src='https://picsum.photos/200/300'/>
            <Typography style={{color: colors.blueGrey[500], height: '100%'}} variant="h4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </Typography>
        </Box>
    )
}

export default ArticleItem
