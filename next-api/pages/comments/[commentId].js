import React from 'react'
import { comments } from '../../data/comments'

function Comment({comment}) {
  return (
    <div>
        {comment.id}. {comment.text}
    </div>
  )
}

export default Comment

export async function getStaticPaths(context){
    return{
        paths:[
            {params:{commentId:'1'}},
            {params:{commentId:'2'}},
            {params:{commentId:'3'}}
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