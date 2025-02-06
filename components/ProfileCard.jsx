import LoadingSkeleton from "./LoadingSkeleton";
import Link from "next/link";
import UserCard from "./UserCard";
const ProfileCard = ({ usersData, loading, error  }) => {

  // console.log({usersData})




  return (
    <div className="p-2 w-full min-h-svh  text-center">
   
  
      <div className=" mx-auto  w-full  flex flex-wrap justify-evenly gap-10 py-10 px-4  overflow-auto ">
        {error && (
          <p className="text-red-500 text-xl">Error fetching users data!</p>
        )}
       
             {!loading ? (
          usersData.map(({ id, name, email,address ,company }) => (
            <Link key={id} href={`/users/${id}`}>
            {/* <div
              key={id}
              className="
              max-w-xl
              text-left
              rounded-xl 
              gap-4 
              p-4  flex flex-col
              sm:flex-row
              bg-gradient-to-br 
              from-sky-400 
              via-blue-500
              to-purple-600"
            >
              <div className="m-auto flex   p-4 w-full sm:w-auto md:h-full  rounded-lg bg-black/30 shadow-lg shadow-stone-800">
                         
                       <img
                className="min-w-32 m-auto max-h-32 origin-top  object-cover rounded-md "
                src={picture}
                alt="user-pic"
              />
              </div>
     
              
       

             
              <div className="overflow-hidden w-full  rounded-md  bg-black/30 px-4 py-2 flex flex-col justify-evenly shadow-lg shadow-stone-800">
                <p>
                  User ID : {id}
                </p>
                <p>
                  Name : {name}
                </p>
                <p >
                  Email : {email} 
                </p>
                <p >address : {formatAddress(address)}</p>
                <p>
                  Company: {company.name} </p>
              </div>
            </div> */}
            <UserCard
            id={id}
            name={name}
            email={email}
            address={address}
            company={company.name}
            />
            </Link>
          ))
        ) : (
          <LoadingSkeleton />
        )}
        
     
      </div>
    </div>
  );
};

export default ProfileCard;
