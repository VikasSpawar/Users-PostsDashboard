export const fetchUser = async ({page=1,limit=10}) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`);
      if (!res.ok) throw new Error('User not found');
  
      return await res.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };

//fetch single user
  export const fetchSingleUser = async (userId) => {
    // console.log({userId})
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
     
      if (!res.ok) throw new Error('User not found');
      
      return await res.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  