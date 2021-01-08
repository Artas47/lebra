import { makeStyles } from '@material-ui/core';
import React from 'react'
import { useParams } from 'react-router-dom';

const useStyles = makeStyles({
    word: {
        cursor: 'pointer',
        transition: 'all .2s',
        '&:hover': {
            // backgroundColor: 'red',
            transform: 'scale(1.5)',
            color: '#70c1b3'
        }
    }
});

interface ParamTypes {
    articleId: string
}



const e = 'siema elo czesc a elo ha ha halo monitor komputer ksiazka grzejnik'.split(' ');
console.log('e', e)

const ArticleDetails = () => {
    const classes = useStyles();
    const {articleId} = useParams<ParamTypes>();
    return (
        <div style={{margin: '2rem', fontSize: '3rem', textAlign: 'center'}}>
            <img src='https://picsum.photos/200/300' />
            <p style={{color: '#25554d', wordSpacing: '1rem', margin: '0 4rem'}}>
                {e.map(q => {
                    return <p className={classes.word} style={{display: 'inline'}} onClick={() => console.log(q)}> {q + ' '} </p>
                })}
            </p>

        </div>
    )
}

export default ArticleDetails
