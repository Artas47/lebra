import { Box, colors, makeStyles, Typography } from '@material-ui/core'
import React from 'react';

const useStyles = makeStyles({
    headerWrapper: {
        display: 'flex',
        width: '100%',
        backgroundColor: '#788a91', 
        height: '6rem',
        alignItems: 'center',
        padding: '0 2rem'
    }
});

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.headerWrapper}>
            <Typography style={{color: '#fff'}} variant='h3'>Lebra_</Typography>
        </Box>
    )
}

export default Header
