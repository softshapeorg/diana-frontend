import { AppProps } from "next/app";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import wrapper from "../redux";
import { cookies as cookiesFns } from "../utils";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    if (pageProps.shouldSetCookies) {
      cookiesFns.setAuthCookies(pageProps.user.tokens);
    }
  }, []);

  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
