import React from 'react'
import { comments } from '../../data/comments'

function Comment({comment}) {
  return (
    <div>
        {comments.id}. {comments.text}
    </div>
  )
}

export default Comment

export async function getStaticPaths(context){
    return{
        paths:[
            {params:{ommentId:'1'}},
            {params:{ommentId:'2'}},
            {params:{ommentId:'3'}}
        ],
        fallback:false
    }
}

export async function getStaticProps(context){
    const {params} = context
    const {commentId} = params

    // dont call a api-route in the pre-rendering function!
    const comment = comments.find(comment=>comment.id===parseInt(commentId))
    console.log(comment)

    return{
        props:{
            comment
        }
    }
}