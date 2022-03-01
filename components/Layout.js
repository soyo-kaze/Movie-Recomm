import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className=" h-screen scroll__container">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
