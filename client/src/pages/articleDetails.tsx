import React from 'react'
import { useParams } from 'react-router-dom';

interface ParamTypes {
    articleId: string
}

const ArticleDetails = () => {
    const {articleId} = useParams<ParamTypes>();
    return (
        <div>
            Details {articleId}
        </div>
    )
}

export default ArticleDetails
