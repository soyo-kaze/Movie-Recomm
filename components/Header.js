import Link from "next/link";
import { InfoProvider } from "./dataContext";

const Header = () => {
  const [state, dispatch] = InfoProvider();
  const handleSignOut = () => {
    dispatch({ type: "USER_LOGOUT" });
  };
  return (
    <>
      <div className="p-6 w-full bg-white fixed top-0 z-20 flex items-center justify-between border-b-[1px] border-gray-400">
        <Link href="/">
          <span className=" font-sams font-bold cursor-pointer">
            {" "}
            Movie-Recom
          </span>
        </Link>
        <span className=" flex justify-center items-center space-x-4">
          <Link href="/sign-up">
            <button
              className="p-2 border-[1px] rounded-md border-red-600 hover:border-white hover:bg-red-600 hover:text-white  duration-300"
              disabled={state.user == null ? false : true}
            >
              {!state.user ? "Sign Up" : state.user.name}
            </button>
          </Link>

          <Link href={!state.user ? "/login" : ""}>
            <button
              className="p-2  rounded-md bg-red-600 text-white font-google hover:bg-red-700 duration-300"
              onClick={handleSignOut}
            >
              {!state.user ? "Login" : "Logout"}
            </button>
          </Link>
        </span>
      </div>
    </>
  );
};

export default Header;
