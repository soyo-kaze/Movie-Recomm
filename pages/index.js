import Head from "next/head";
import Card from "../components/Card";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { SearchOutlined } from "@material-ui/icons";
import MouseIcon from "@material-ui/icons/Mouse";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="scroll__child home__hero h-screen flex justify-center items-center">
        <div className=" relative z-10 black__overlay h-screen w-full flex pl-4 md:pl-[10%] items-center ">
          <span className="  p-4 rounded-l-3xl bg-red-500 w-full md:p-0  font-semibold font-google ">
            <p className="text-[2rem] pt-4 pl-6 pr-4 font-medium">Welcome To</p>
            <p className="text-[5rem] leading-[4.5rem] pl-4 pb-6 pr-4">
              Movie-Recom
            </p>
          </span>
        </div>
      </div>
      <div className="scroll__child min-h-screen flex flex-col justify-evenly pb-24 items-center">
        <p className=" text-[40px] mt-24 mb-10 md:text-[70px] font-bold">
          How it{" "}
          <span className="pl-2 pr-2 rounded-2xl bg-cyan-600 text-white">
            Works
          </span>
        </p>
        <div className="flex w-full pl-2 md:pl-[10%] md:pr-[10%] flex-col md:flex-row  justify-evenly items-center space-y-4 md:space-y-0 md:space-x-3">
          <Card
            num="1"
            next=""
            heading="1. Sign Up"
            text="To get started click on the sign-up button and fill out the info."
          >
            <AssignmentTurnedInIcon style={{ fontSize: 35 }} />
          </Card>
          <Card
            num="2"
            next="second__card"
            heading="2. Login"
            text="To get movies recommendation based on the info you provide login."
          >
            <MouseIcon style={{ fontSize: 35 }} />
          </Card>
          <Card
            num="3"
            next="third__card"
            heading="3. Search"
            text="You can also search movies beside the recommended ones."
          >
            <SearchOutlined style={{ fontSize: 35 }} />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
