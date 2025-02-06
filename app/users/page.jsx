'use client'
import ProfileCardContainer from '@/components/ProfileCardContainer'
import React from 'react'

const page = () => {
  return (
    <div>
      <ProfileCardContainer/>
    </div>
  )
}

export default page



// import { fetchAllUsers } from '@/lib/users';
// import UserCard from '@/components/UserCard';
// import Link from 'next/link';

// const UsersPage = async () => {
//   const users = await fetchAllUsers();

//   if (!users.length) return <p>No users found.</p>;

//   return (
//     <div>
//       <h1>All Users</h1>
//       <div>
//         {users.map((user) => (
//           <Link key={user.id} href={`/users/${user.id}`}>
//             <UserCard user={user} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UsersPage;
