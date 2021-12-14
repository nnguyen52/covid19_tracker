import React, { useContext } from "react";
import { HomeContext } from "../../contexts/homeContext";
import { Toast } from "react-bootstrap";
const FinishSendMailToast = () => {
  const {
    emailToast: { message, show },
    setEmailToast,
  } = useContext(HomeContext);
  return (
    <Toast
      show={show}
      style={{
        position: "fixed",
        top: "10%",
        right: "10px",
        width: "fit-content",
      }}
      className={`bg-success text-white`}
      onClose={() =>
        setEmailToast({
          message: "Email sent! Admin will response ASAP! 🥰",
          show: false,
        })
      }
      delay={3000}
      autohide
    >
      <Toast.Body>
        {message}
        {/* <strong>{message}</strong> */}
      </Toast.Body>
    </Toast>
  );
};

export default FinishSendMailToast;
