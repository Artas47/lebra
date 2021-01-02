import { Box, Button, colors, makeStyles, Typography } from '@material-ui/core'
import React from 'react';
import UserAccount from './userAccount';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    articlesWrapper: {
        // position: 'absolute',
        // top: '0',
        // right: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: '#e4e6da'
    },
    button: {
        width: '80%',
        backgroundColor: colors.blueGrey[500],
        color: '#fff',
        height: '5.5rem',
    }
});

const Sidebar = () => {
    const classes= useStyles();
    return (
        <Box className={classes.articlesWrapper}>
            <UserAccount />
            <Button
                variant="contained"
                size="large"
                color='default'
                className={classes.button}
                startIcon={<AddIcon />}
            >
                <Typography variant='h5'>Create note</Typography>
            </Button>
        </Box>
    )
}

export default Sidebar
