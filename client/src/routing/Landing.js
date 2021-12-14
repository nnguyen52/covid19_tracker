import React from "react";
import Footer from "../components/Layout/Footer";
import { Route } from "react-router-dom";
import EmailModal from "../components/SendEmail/EmailModal";
import FinishSendMailToast from "../components/SendEmail/FinishSendMailToast";
const Landing = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Component {...rest} {...props} />
          <EmailModal />
          <FinishSendMailToast />
          <div
            style={{
              position: "fixed",
              bottom: 0,
              width: "100%",
            }}
          >
            <Footer />
          </div>
        </>
      )}
    />
  );
};

export default Landing;
