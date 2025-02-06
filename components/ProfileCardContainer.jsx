import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { fetchUser } from '@/lib/getUser';

const ProfileCardContainer = () => {
  const [usersData, setUsersData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);




  

  useEffect(() => {
    setLoading(true);
    setError(false);

    
      fetchUser({page,limit:5})
      .then((data) => {
        // console.log(data)
        setLoading(false);
        setUsersData(data);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        console.error("Error:", error);
      });
  }, [page]);


  //handle search
  const handleSearch = (e) => {
    e.preventDefault();

    setSearchInput(e.target.value)

    const searchValue = e.target.value.toLowerCase();
    searchInput.length==1&&fetchUser({page,limit:5}).then((data)=>{
      setUsersData(data)
    })

    searchInput.length>1&&fetchUser(page,10).then((res)=>{
      setUsersData(res.filter((user)=>user.name.toLowerCase().includes(searchValue)))
    })
    .catch((err)=>{

       console.log('Error fetching users:', err);
       setError(true); 
      
    })

  };



  return (
    <div className={` text-white w-full  ${inter.className} py-4`}>
         <div className="flex  justify-between px-8">
    <h2 className=" text-2xl font-semibold m-4">

      Users Profile 
      </h2>
      <div className="w-52 py-2 flex ">
      <input
    onChange={handleSearch}
      type='text'
      className=' text-black border-slate-600 rounded-md p-2 w-full'
      placeholder='Search by name...'
      value={searchInput}
      
      />
      </div>
      </div>
    
    {/* search users */}

      <ProfileCard 
      handleSearch={handleSearch}
       searchInput={searchInput} 
       usersData={usersData}
        loading={loading}
         error={error} />

{    !searchInput&&<div className='sticky bottom-0 w-full  p-4 flex justify-around '>
            <button className=' disabled:bg-slate-600 px-4 py-2 rounded-md bg-blue-500' onClick={() => setPage(prev => prev>1&&prev - 1, 1)}
      disabled={page === 1}>Previous</button>
    <div className='text-xl my-auto'>{page}/2</div>
    <button disabled={page==2} className=' disabled:bg-slate-600 disabled:text-gray-300 px-4 py-2 rounded-md bg-purple-500' onClick={() => setPage(prev => prev + 1)}>Next</button>
    </div>}

    </div>
  );
};

export default ProfileCardContainer;
