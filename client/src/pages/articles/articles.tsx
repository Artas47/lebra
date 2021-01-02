import { Box, makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import ArticleItem from '../../components/articleItem/articleItem'

const useStyles = makeStyles({
    articlesWrapper: {
        display: 'flex',
        width: '100%',
        height: 'calc(100% - 6rem)',
        flexWrap: 'wrap',
        backgroundColor: '#efeff0',
        overflowY: 'scroll'
    }
});

const Articles = () => {
    const classes = useStyles();
    return (
        <Box className={classes.articlesWrapper}>
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
        </Box>
    )
}

export default Articles
