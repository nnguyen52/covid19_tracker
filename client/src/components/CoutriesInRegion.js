import React, { useContext, useEffect } from "react";
import { HomeContext } from "../contexts/homeContext";
import { Spinner, Accordion, Card, Row, Col, Badge } from "react-bootstrap";
import DestructureReport from "./Layout/DestructureReport";
const CoutriesInRegion = () => {
  const {
    homeState: { countries, countriesAndCode, allcountriesReports },
  } = useContext(HomeContext);

  if (countriesAndCode.length === 0 || countries.length === 0)
    return <Spinner animation="border" />;

  return (
    <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-3">
      {countries.map((e) => {
        return (
          <Col key={e}>
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={e}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h5 style={{ marginRight: "30px" }}>{e}</h5>
                    <Badge>
                      <img
                        src={`https://www.countryflags.io/${
                          e === "DRC"
                            ? "CD"
                            : e === "UK"
                            ? "GB"
                            : e === "Czechia"
                            ? "CZ"
                            : e === "UAE"
                            ? "AE"
                            : e === "Vietnam"
                            ? "VN"
                            : e === "S. Korea"
                            ? "KR"
                            : countriesAndCode.find((ea) => e.includes(ea.name))
                            ? countriesAndCode.find((ea) => e.includes(ea.name))
                                ?.flag
                            : e === "British Virgin Islands"
                            ? countriesAndCode.find(
                                (ea) => ea.name === "Virgin Islands (British)"
                              )?.flag
                            : e === "St. Barth"
                            ? countriesAndCode.find(
                                (ea) => ea.name === "Saint Barthélemy"
                              )?.flag
                            : e === "Saint Pierre Miquelon"
                            ? countriesAndCode.find(
                                (ea) => ea.name === "Saint Pierre and Miquelon"
                              )?.flag
                            : countriesAndCode.find((ea) => ea.name.includes(e))
                            ? countriesAndCode.find((ea) => ea.name.includes(e))
                                ?.flag
                            : e === "USA"
                            ? "US"
                            : countriesAndCode.find((ea) => ea.name === e)?.flag
                            ? countriesAndCode.find((ea) => ea.name === e)?.flag
                            : "no flag"
                        }/flat/64.png`}
                        alt={`${e}`}
                      />
                    </Badge>
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={e}>
                  <Card.Body>
                    {allcountriesReports.length == 0 ? (
                      <h3>Server error! :( </h3>
                    ) : (
                      <DestructureReport
                        output={allcountriesReports.find(
                          (each) => each.country === e
                        )}
                      />
                    )}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        );
      })}
    </Row>
  );
};

export default CoutriesInRegion;
