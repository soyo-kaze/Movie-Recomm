const Header = () => {
  return (
    <>
      <div className="p-6 w-full bg-white fixed top-0 z-20 flex items-center justify-between border-b-[1px] border-gray-400">
        <span className=" font-sams font-bold"> Movie-Recom</span>
        <span className=" flex justify-center items-center space-x-4">
          <button className="p-2 border-[1px] rounded-md border-red-600 hover:border-white hover:bg-red-600 hover:text-white  duration-300">
            Sign Up
          </button>
          <button className="p-2  rounded-md bg-red-600 text-white font-google hover:bg-red-700 duration-300">
            Login
          </button>
        </span>
      </div>
    </>
  );
};

export default Header;
