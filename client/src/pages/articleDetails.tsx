import { Box, Button, ClickAwayListener, colors, Fade, makeStyles, Popper } from '@material-ui/core';
import React from 'react'
import { useParams } from 'react-router-dom';

const useStyles = makeStyles({
    word: {
        cursor: 'pointer',
        transition: 'all .2s',
        width: '100%',
        height: '1rem',
        fontWeight: 300,
        '&:hover': {
            transform: 'scale(1.5)',
            color: '#70c1b3',
        },
    },
    popperBox: {
        backgroundColor: '#fff',
        display: 'flex',
    },
    button: {
        fontSize: '1.3rem', 
        fontWeight: 400,
        color: colors.grey[700],
        padding: '1rem',
        '&:hover': {
            backgroundColor: colors.grey[300],
        }
    }
});

interface ParamTypes {
    articleId: string
}

const e = 'siema elo czesc a elo ha ha halo monitor komputer ksiazka grzejnik'.split(' ');

const ArticleDetails = () => {
    const classes = useStyles();
    const {articleId} = useParams<ParamTypes>();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const id = open ? 'legend-popover' : undefined;

    function handleClose() {
        setOpen(false);
    }

    const handleClick = () => (event: any) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <div style={{margin: '2rem', fontSize: '3rem', textAlign: 'center'}}>
                <img src='https://picsum.photos/200/300' />
                <Popper
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Box className={classes.popperBox} boxShadow={1}>
                                <Button className={classes.button}>
                                    Check meaning
                                </Button>
                                <Button className={classes.button}>
                                    Check synonyms
                                </Button>
                            </Box>
                        </Fade>
                    )}
                </Popper>
                <p style={{color: '#25554d', wordSpacing: '1rem', margin: '0 4rem'}}>
                    {e.map(q => {
                        return <> <p className={classes.word} style={{display: 'inline'}} onClick={handleClick()}>{q}</p> </>
                    })}
                </p>

            </div>
        </ClickAwayListener>
    )
}

export default ArticleDetails
