import React from 'react';
import Comment from './Comment'

const comments = [
    {
        id:1,
        name:'차은우',
        comment:'안녕하세요 친구합시다.'
    },
    {
        id:2,
        name:'카리나',
        comment:'안녕하세요 형동생합시다.'
    },
    {
        id:3,
        name:'Hazard',
        comment:'안녕하세요 축구합시다.'
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} key={comment.id}/>
                )
            })}
            
        </div>
    )
}

export default CommentList;