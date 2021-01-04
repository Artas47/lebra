import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react';
import UserAccount from './userAccount';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    articlesWrapper: {
        position: 'absolute',
        top: '0',
        right: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        width: '20%',
        backgroundColor: '#fff', 
    },
    button: {
        width: '80%',
        backgroundColor: '#70c1b3',
        color: '#fff',
        height: '5.5rem',
        '&:hover': {
            backgroundColor: '#4bae9d'
        }
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
                classes={{root: classes.button}}
                // className={classes.button}
                startIcon={<AddIcon />}
            >
                <Typography variant='h5'>Create note</Typography>
            </Button>
        </Box>
    )
}

export default Sidebar
