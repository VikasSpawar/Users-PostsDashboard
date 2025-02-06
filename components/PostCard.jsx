//Post Card component
 import React from 'react'
 
 const PostCard = ({...post}) => {
   return (
     <div className='shadow-md  rounded-xl p-4 space-y-2      bg-gradient-to-br 
    from-sky-400 
    via-blue-500
    to-purple-600'>
        <div className='p-2  rounded-md bg-black/30'>

        <h2 className='text-2xl truncate'>Title: {post.title}</h2>
        </div>
        <div className=' p-2 text-xl bg-black/30  rounded-md'>

        <p className=' line-clamp-4'>{post.body}</p>
        </div>

     </div>
   )
 }
 
 export default PostCard
 