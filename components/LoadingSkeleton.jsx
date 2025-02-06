const Skeleton = ({ className, children }) => {
  return (
    <div className={`animate-pulse bg-gray-300 rounded ${className}`}>
      {children}
    </div>
  );
};

const LoadingSkeleton = () => {
  return (
    <div className="  w-full flex flex-wrap justify-evenly gap-8">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="
           rounded-xl 
           bg-gray-600
          
      from-sky-400 
      via-blue-500
      to-purple-600
          space-x-4
           p-4  flex  
     "
        >
          <Skeleton className="p-4  rounded-lg min-w-60 min-h-40 bg-black/20" />

          <div className=" min-w-64  rounded-md  bg-black/20 p-4  flex flex-col justify-evenly">
            <Skeleton className={"w-36 h-7"}/>
            <Skeleton className={"w-32 h-7"}/>
            <Skeleton className={" w-52 h-7 "}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
