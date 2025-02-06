import React from 'react'

const formatAddress = ({ street, suite, city, zipcode }) => {
    return `${street}${suite ? `, ${suite}` : ''}, ${city}, ${zipcode}`;
  };
const UserCard = ({
id,
name='user',
email,
company,
address,
picture='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwgEJf3figiiLmSgtwKnEgEkRw1qUf2ke1Bg&s'
}) => {
  return (
    <div
  
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
    <div 
    className="m-auto flex
       p-4 w-full sm:w-auto
       md:h-full  rounded-lg
       bg-black/30 shadow-lg shadow-stone-800">
        <img
        className="min-w-32 m-auto max-h-32 origin-top  object-cover rounded-md "
        src={picture}
        alt="user-pic"
    />
    </div>

    {/* <div className="overflow-hidden w-full max-h-40   rounded-md  bg-black/30 px-4 py-2 flex flex-col justify-evenly shadow-lg shadow-stone-800"> */}
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
  </div>
  )
}

export default UserCard
