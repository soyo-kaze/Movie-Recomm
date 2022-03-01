import Layout from "../components/Layout";
import "../public/styles/global.css";
import "../public/styles/Card.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
