import React, { useContext } from "react";
import { Row, Col, Form } from "react-bootstrap";
import {
  GeoAltFill,
  Telephone,
  Envelope,
  House,
  Search,
  FileText,
} from "react-bootstrap-icons";
import { HomeContext } from "../../contexts/homeContext";

const Footer = () => {
  const { setShowEmailModal, setDelayShowCaptcha } = useContext(HomeContext);
  const openModal = () => {
    setShowEmailModal(true);
    setTimeout(() => {
      setDelayShowCaptcha(true);
    }, 1000);
  };
  return (
    <>
      <Row className="row-cols-3 row-cols-md-3 g-4 mx-auto mt-3 bg-dark text-light">
        <Col>
          <h6 style={{ color: "#efaa4f" }}>Contact</h6>
          <Form inline>
            <GeoAltFill /> Vancouver, British Columbia, CA <br />
            <Telephone /> Please send me an e-mail <br />
            <div style={{ color: "red" }} onClick={openModal}>
              <Envelope color="red" /> Coh.jr11@gmail.com
            </div>
            <br />
          </Form>
        </Col>
        <Col>
          <h6 style={{ color: "#efaa4f" }}>Information</h6>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Form inline>
                <a style={{ textDecoration: "none" }} href="/">
                  <House /> Home
                </a>
              </Form>
            </li>
            <li>
              <Form inline>
                <a style={{ textDecoration: "none" }} href="/advancedStats">
                  <Search /> Advanced Search
                </a>
              </Form>
            </li>
            <li>
              <Form inline>
                <a style={{ textDecoration: "none" }} href="/documentation">
                  <FileText /> Documentaion
                </a>
              </Form>
            </li>
          </ul>
        </Col>
        <Col>
          <h6 style={{ color: "#efaa4f" }}>Copyright</h6>
          Copyright © 2021 Covid Tracker by Jer Ng. All rights reserved
          <div style={{ marginBottom: "30px" }}></div>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
