import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const axiosInit = axios.create({
  baseURL: "https://pure-mountain-26163.herokuapp.com/",
});

const SignUp = () => {
  const [user, setUser] = useState({});
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

  useEffect(() => {
    let footer = document.querySelector("footer");
    footer.style.scrollSnapAlign = "none";
  }, []);

  const handleSignUp = async (e, user) => {
    e.preventDefault();
    // let signUp = document.querySelector("#signup");
    // signUp.className += " animate-fadeOut";
    try {
      const {
        data: { data: isAdded },
      } = await axiosInit.post("/user/add-user", {
        name: user.name,
        _id: user.username,
        password: user.pass,
      });
      if (isAdded.success) {
        console.log(isAdded);
        toast.success(isAdded.message, toastOptions);
        setTimeout(() => router.push("/"), 2000);
      } else {
        toast.warn(isAdded.message, toastOptions);
        // console.log(`Not Successful. Message: ${isAdded.message}`);
      }
      console.log(isAdded);
    } catch (e) {
      toast.error(e.message, toastOptions);
    }
  };

  return (
    <>
      <div className="fadeOut"></div>
      <Head>
        <title>SignUp</title>
      </Head>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="h-[5vh]"></div>
      <div className="h-[100vh] flex justify-center items-center p-4">
        <div
          className="p-6 max-w-md flex-col animate-fadeIn  space-y-10 w-full border-2 h-[400px] rounded-md shadow-lg border-gray-300 flex justify-center items-center"
          id="signup"
        >
          <p className="text-[40px] font-bold">Sign Up</p>
          <form
            className=" flex justify-center flex-col space-y-6 items-center w-full"
            onSubmit={(e) => handleSignUp(e, user)}
          >
            <input
              type="text"
              value={user.name}
              name="name"
              placeholder="Name"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="border-[1px] p-2 w-[80%] rounded-md"
              required
            />
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
              Next
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
