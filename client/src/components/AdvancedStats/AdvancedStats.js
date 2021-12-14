import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Row, Col, Spinner } from "react-bootstrap";
import { AdvancedStatsContext } from "../../contexts/advancedStats";
import DestructureReport from "../Layout/DestructureReport";
import DestructureReportJhucsse from "../Layout/DestructureReportJhucsse";
import ChartComponent from "../ChosenCountryReport/ChartComponent";
const AdvancedStats = () => {
  const {
    advancedStats: {
      loading,
      allCountries_Provinces_Counties,
      output: { type, param, reportData },
      loadingFetching,
      historical_data: { data, name },
    },
    findReportRegardless,
    resetOuput,
    fetchHistoricalData,
    resetHistoricalData,
  } = useContext(AdvancedStatsContext);
  const [inputStates, setInputStates] = useState("");
  const [searchError, setSearchError] = useState(null);
  const [lastDays, setLastdays] = useState(6);

  const validateBeforeSubmit = (e) => {
    resetOuput();
    resetHistoricalData();
    e.preventDefault();
    const just_only_1_result = allCountries_Provinces_Counties.filter((each) =>
      each
        .toLowerCase()
        .replace(/\s/g, "")
        .trim()
        .includes(inputStates.trim().toLowerCase().replace(/\s/g, ""))
    );
    if (just_only_1_result.length == 0 || just_only_1_result > 1)
      return setSearchError(`can not find ${inputStates}`);
    setSearchError(null);
    findReportRegardless(just_only_1_result[0]);
    fetchHistoricalData(just_only_1_result[0], lastDays);
  };
  const changeHistoricalAndSubmit = (e) => {
    e.preventDefault();
    fetchHistoricalData(param, lastDays);
  };
  if (loading) return <Spinner animation="border" />;
  return (
    <div style={{ marginRight: 12, marginBottom: "250px" }}>
      <Row className="row-cols-1 row-cols-md-2" style={{ marginTop: "20px" }}>
        <Col>
          <h5>
            Search states of the USA, country's name, province of any countries
          </h5>
          <Form.Text>
            {" "}
            <span style={{ border: "red 2px solid" }}> Note</span>: Chart
            statistic only available in some data
          </Form.Text>
          <Form
            onSubmit={validateBeforeSubmit}
            style={{ display: "flex", marginTop: "10px" }}
          >
            <Form.Control
              type="text"
              placeHolder="search"
              value={inputStates}
              onChange={(e) => setInputStates(e.target.value)}
              style={{ width: "400px", marginRight: "5px" }}
            />
            <Button type="submit" variant="info">
              Search
            </Button>
          </Form>
          {searchError !== null ? (
            <>
              {" "}
              <span style={{ color: "red" }}>
                <h5>{searchError}</h5>
              </span>
            </>
          ) : loadingFetching ? null : (
            <>
              {type == "fetch_failed" ? (
                <h5>Data unavailable at moment</h5>
              ) : (
                <>
                  {type == "countryWorlddom" || type == "countyWorlddom" ? (
                    <DestructureReport output={reportData} />
                  ) : (
                    <DestructureReportJhucsse />
                  )}
                </>
              )}
            </>
          )}
        </Col>
        {data &&
          type !== null &&
          (type == "countyJhucsse" || type == "countryWorlddom") && (
            <Col>
              Only avalable for some data!
              <Form
                style={{ display: "flex", marginBottom: "20px" }}
                onSubmit={changeHistoricalAndSubmit}
              >
                <Form.Control
                  type="number"
                  placeHolder="search last days"
                  value={lastDays}
                  onChange={(e) => setLastdays(e.target.value)}
                  style={{ width: "400px" }}
                ></Form.Control>
                <Button type="submit" variant="dark">
                  Search{" "}
                </Button>
              </Form>
              <h1>here</h1>
              {data !== null && (
                <ChartComponent historicalDataInAdvancedStats={data} />
              )}
            </Col>
          )}
      </Row>
    </div>
  );
};

export default AdvancedStats;
