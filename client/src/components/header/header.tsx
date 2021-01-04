import { Box, colors, makeStyles, Typography } from '@material-ui/core'
import React from 'react';

const useStyles = makeStyles({
    headerWrapper: {
        display: 'flex',
        width: '100%',
        backgroundColor: '#fff', 
        height: '6rem',
        alignItems: 'center',
        padding: '0 2rem'
    }
});

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.headerWrapper}>
            <Typography style={{color: '#70c1b3', fontWeight: 500}} variant='h3'>Lebra_</Typography>
        </Box>
    )
}

export default Header
