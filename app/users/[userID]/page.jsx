'use client'
import { useParams } from "next/navigation";

import PostCard from "@/components/PostCard";
import UserCard from "@/components/UserCard";
import { fetchSingleUser } from "@/lib/getUser";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";



const PostModal = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 flex justify-center items-center">
      <div className=" p-6 rounded-lg shadow-lg max-w-lg w-full">
      <div className='shadow-md  rounded-xl p-4 space-y-2      bg-gradient-to-br 
    from-sky-400 
    via-blue-500
    to-purple-600'>
        <div className='p-2  rounded-md bg-black/30'>

        <h2 className='text-2xl '>Title: {post.title}</h2>
        </div>
        <div className=' p-2 text-xl bg-black/30  rounded-md'>

        <p className=' '>{post.body}</p>
        </div>
      <div className="w-full flex justify-end">
               <button
          onClick={onClose}
          className="mt-4  px-4 py-2 bg-red-600 text-white rounded-lg"
        >
          Close
        </button>
      </div>
 
     </div>
      </div>
    </div>
  );
};


const UserProfile = () => {
  const [user , setUser]=useState({})
  const [posts, setPosts]=useState([])
  const [page, setPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading]=useState(true)
  const { userID } = useParams();

  // console.log(userID)
  
  useEffect(()=>{
    setLoading(true)
      fetchSingleUser(userID).then((res)=>{
        setUser(res)
       
      
        setLoading(false)
      }).catch((err)=>{
        setLoading(false)
      })
  fetchPosts()
  },[])



  const fetchPosts = async () => {
 
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userID}&_page=${page}&_limit=4`
      );
      const data = await response.json();
      if (data.length === 0) {
        setHasMore(false);
      } else {
       
          setPosts((prevPosts) => [...prevPosts, ...data]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };



  return (
    <div>
      {/* User Profile Section */}
      <div className="w-full  justify-center flex py-4">
        {    user.name&&<UserCard
        id={user.id}
        name={user.name}
        email={user.email}
        address={user.address}
        company={user.company.name}
       />}
      </div>

  {    posts.length?<div className="border rounded-lg mx-12 flex justify-between px-4 my-2">
        <h2 className="text-4xl py-4 font-semibold ">Posts by {user.name}</h2>
        
    
      </div> : null}

    
      <InfiniteScroll
      className=" flex flex-wrap gap-8 justify-center md:justify-between px-12 py-6  "
        dataLength={posts.length}
        next={fetchPosts}
        hasMore={hasMore}
        loader={<h4 className="m-auto">Loading...</h4>}
        endMessage={<p className="m-auto">No more posts to display.</p>}
      >
         {posts.length > 0 ? (
        posts.map((post,i) => <div 
          onClick={() => setSelectedPost(post)} key={i} className="cursor-pointer rounded-md overflow-hidden max-w-sm  "><PostCard  {...post} /></div> )
      ) : (
        !loading&&<p>No posts yet.</p>
      )}
      </InfiniteScroll>
      
      <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </div>
  );
};

export default UserProfile;
