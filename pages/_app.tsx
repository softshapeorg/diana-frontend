import { AppProps } from "next/app";
import wrapper from "../redux";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
