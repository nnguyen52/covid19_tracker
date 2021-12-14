import React, { useContext, useEffect, useState } from "react";
import queryString from "query-string";
import { Redirect } from "react-router-dom";
import { HomeContext } from "../../contexts/homeContext";
import { Spinner, Row, Col, Form, Button } from "react-bootstrap";
import DestructureReport from "../Layout/DestructureReport";
import LineChart from "./ChartComponent";

const ChosenCountry = ({ location }) => {
  const {
    homeState: { idvReport, loadingIdvReport, formattedHistoricalData },
    closeSearchResult,
    fetchIndividualReport,
    fetchHistoricalCountry,
    resetHistoricalData,
  } = useContext(HomeContext);
  const { name } = queryString.parse(location.search);
  useEffect(() => {
    if (!name) return;
    resetHistoricalData();
  }, [name]);
  //historical
  const [historical, setHistorical] = useState(6);
  const onchangeHistorical = (e) => {
    if (isNaN(e.target.value)) return alert("Please input only numbers");
    setHistorical(e.target.value);
  };
  const onSubmitHistorical = (e) => {
    e.preventDefault();
    if (historical < 3) return alert("please input days from 3");
    fetchHistoricalCountry(name, historical);
  };

  useEffect(() => {
    closeSearchResult();
  }, [name]);
  useEffect(() => {
    if (!name) return;
    fetchIndividualReport(name);
  }, [name]);
  if (!name) return <Redirect to="/" />;
  if (loadingIdvReport) return <Spinner animation="border" />;

  return (
    <div>
      <h5>
        <span style={{ color: "blue" }}> {name}</span> covid statistic
      </h5>
      <Row className="row-cols-1 row-cols-md-2 g-4 mx-auto ">
        <Col>
          <h5>Today's Statistic</h5>
          <DestructureReport output={idvReport} />
        </Col>
        {name === "USA" ? (
          <>
            <h5>
              to search States in the USA, please visit Advanced Statistics!
            </h5>
          </>
        ) : (
          <>
            <Col>
              You can search the last days of {name} (default is 6-days ago
              period) <br />
              <Form style={{ display: "flex" }} onSubmit={onSubmitHistorical}>
                <Form.Control
                  type="number"
                  name="historical"
                  value={historical}
                  onChange={onchangeHistorical}
                  style={{ width: "300px" }}
                />
                <Button
                  type="submit"
                  variant="dark"
                  style={{ marginBottom: "20px" }}
                >
                  Search
                </Button>
              </Form>
              {formattedHistoricalData.name !==
              name ? null : formattedHistoricalData?.data == null ? (
                <Spinner animation="border" />
              ) : (
                <LineChart />
              )}
            </Col>
          </>
        )}
      </Row>
      <div style={{ marginBottom: "250px" }}></div>
    </div>
  );
};

export default ChosenCountry;
