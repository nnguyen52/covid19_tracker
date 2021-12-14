import React, { useContext, useState } from "react";
import { Modal, Form, Button, Spinner } from "react-bootstrap";
import { HomeContext } from "../../contexts/homeContext";
import emailjs from "emailjs-com";
import Recaptcha from "react-recaptcha";

const EmailModal = () => {
  const [emailForm, setEmailForm] = useState({
    senderName: "",
    senderEmail: "",
    subject: "",
    htmlMessage: "",
  });
  const {
    //email modal

    showEmailModal,
    setShowEmailModal,
    //mail toast
    setEmailToast,
    //captcha
    delayShowCaptcha,
    setDelayShowCaptcha,
  } = useContext(HomeContext);
  let recaptchaInstance;
  const closeModal = (e) => {
    setShowEmailModal(false);
    setDelayShowCaptcha(false);
    resetRecaptcha();
  };
  const cancelModal = (e) => {
    setEmailForm({
      from_name: "",
      from_email: "",
      subject: "",
      html_message: "",
    });
    setShowEmailModal(false);
    setDelayShowCaptcha(false);
    resetRecaptcha();
  };
  const resetRecaptcha = (response) => {
    verifyCallBack(!response);
    recaptchaInstance.reset();
  };
  const onChangeInputForm = (e) => {
    setEmailForm({ ...emailForm, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const { from_email, from_name, subject, html_message } = emailForm;

  const sendEmail = (e) => {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
    if (!verified) return alert("please remember to answwer Captcha box too!");
    emailjs.sendForm(
      "gmail",
      "template_qch820q",
      e.target,
      "user_BzU9d0T1ZLCN9Iaj0D0ES"
    );
    setEmailToast({
      message: "Email sent! Admin will response ASAP! 🥰",
      show: true,
    });
    closeModal();
  };
  //reCaptcha
  const [verified, setVerified] = useState(false);

  const verifyCallBack = (response) => {
    if (response) return setVerified(true);
    else return setVerified(false);
  };
  return (
    <Modal show={showEmailModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h5>you are sending an email to Admin (coh.jr11@gmail.com) </h5>
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={sendEmail}>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Subject"
              name="subject"
              required
              aria-describedby="title-help"
              value={subject}
              onChange={onChangeInputForm}
            />
            <Form.Text id="title-help" muted>
              Message's subject required
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Your name"
              name="from_name"
              required
              aria-describedby="title-help"
              value={from_name}
              onChange={onChangeInputForm}
            />
            <Form.Text id="title-help" muted>
              Requester's name required
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Your email"
              name="from_email"
              required
              aria-describedby="title-help"
              value={from_email}
              onChange={onChangeInputForm}
            />
            <Form.Text id="title-help" muted>
              Email required
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Message"
              name="html_message"
              value={html_message}
              onChange={onChangeInputForm}
            />
          </Form.Group>
          {delayShowCaptcha == false ? (
            <Spinner animation="border" />
          ) : (
            <div style={{ marginTop: "10px" }}>
              <Recaptcha
                ref={(e) => (recaptchaInstance = e)}
                sitekey="6LeV5tcaAAAAAGqrUz-fJmzvi4_pKRcJtO3C-3HH"
                render="explicit"
                onloadCallback={verifyCallBack}
                verifyCallback={verifyCallBack}
              />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={cancelModal}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Send
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default EmailModal;
