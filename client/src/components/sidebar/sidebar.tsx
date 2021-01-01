import { Box, colors, makeStyles } from '@material-ui/core'
import React from 'react';

const useStyles = makeStyles({
    articlesWrapper: {
        height: '100vh',
        width: '100%',
        backgroundColor: colors.blueGrey[50]
    }
});

const Sidebar = () => {
    const classes= useStyles();
    return (
        <Box className={classes.articlesWrapper}>
            
        </Box>
    )
}

export default Sidebar
