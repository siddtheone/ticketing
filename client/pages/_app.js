import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/build-client";
import { Header } from "../components/header";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <div className="container">
        <Component currentUser={currentUser} {...pageProps} />
      </div>
    </div>
  );
};

AppComponent.getInitialProps = async ({ ctx, Component, currentUser }) => {
  const clinet = buildClient(ctx);
  const { data } = await clinet.get("/api/users/currentuser");
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx, clinet, data.currentUser);
  }

  return { pageProps, ...data };
};

export default AppComponent;
