import Footer from "./Footer";
import Header from "./Header";
import { DataProvider } from "./dataContext";

const Layout = ({ children }) => {
  return (
    <>
      <DataProvider>
        <div className=" h-screen scroll__container">
          <Header />
          {children}
          <Footer />
        </div>
      </DataProvider>
    </>
  );
};

export default Layout;
