import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InfoProvider } from "../components/dataContext";
import { useRouter } from "next/router";

const axiosInit = axios.create({
  baseURL: "https://pure-mountain-26163.herokuapp.com/",
});

const Login = () => {
  const [user, setUser] = useState({});
  const [state, dispatch] = InfoProvider();
  const router = useRouter();
  const toastOptions = {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const handleLogin = async (e, user) => {
    e.preventDefault();
    try {
      const { data: loginData } = await axiosInit.post("/user/login", {
        userId: user.username,
        password: user.pass,
      });
      //TODO: Implement useReducer and add data to the data-layer
      loginData.isPass
        ? (async () => {
            const { data: userStuff } = await axiosInit.post(
              "/user/user-data",
              {
                userId: user.username,
              }
            );
            dispatch({ type: "USER_LOGIN", user: { ...userStuff.data[0] } });
            toast.success(loginData.message, toastOptions);
            setTimeout(() => router.push("/"), 2500);
            // router.push("/");
          })()
        : (() => {
            setUser({ username: "", pass: "" });
            toast.warn(loginData.message, toastOptions);
            // setHead("Error");
          })();
    } catch (e) {
      //TODO: Implement toastify
      // setHead("Error");
      toast.error(e.message, toastOptions);
      // console.error(`Error: ${e}`);
    }
    console.log(user);
  };

  useEffect(() => {
    let footer = document.querySelector("footer");
    footer.style.scrollSnapAlign = "none";
  }, []);
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <ToastContainer />
      <div className="h-[5vh]"></div>
      <div className="h-[100vh] flex justify-center items-center p-4">
        <div className="p-6 max-w-md flex-col animate-fadeIn  space-y-10 w-full border-2 h-[400px] rounded-md shadow-lg border-gray-300 flex justify-center items-center">
          <p className="text-[40px] font-bold">Login</p>
          <form
            className=" flex justify-center flex-col space-y-6 items-center w-full"
            onSubmit={(e) => handleLogin(e, user)}
          >
            <input
              type="text"
              value={user.username}
              placeholder="Username"
              className="border-[1px] p-2 w-[80%] rounded-md"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              required
            />
            <input
              type="password"
              value={user.pass}
              placeholder="Password"
              onChange={(e) => setUser({ ...user, pass: e.target.value })}
              className="border-[1px] p-2 w-[80%] rounded-md"
              required
            />
            <button className="bg-red-500 text-white font-semibold w-[80%] p-2 rounded-md shadow-lg hover:bg-red-600 hover:shadow-xl transition duration-200">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
