import React, { useContext, useState, useEffect } from "react";
import { HomeContext } from "../contexts/homeContext";
import { Accordion, Card, Button, Spinner, Tab, Tabs } from "react-bootstrap";
import EachRegion from "./EachRegion";
import DestructureReport from "./Layout/DestructureReport";
const Reports = () => {
  const handleSelect = (e) => {
    funcRegionReport(e);
  };

  const {
    homeState: { outputAll, regions },
    loadRegions,
    funcRegionReport,
  } = useContext(HomeContext);
  return (
    <>
      <div>
        <Accordion>
          <Card bg="dark" style={{ color: "white" }}>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              World reports
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body style={{ backgroundColor: "white", color: "black" }}>
                <DestructureReport output={outputAll} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card bg="dark" style={{ color: "white", marginBottom: "250px" }}>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="1"
              onClick={loadRegions}
            >
              Individual countries reports
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body style={{ backgroundColor: "white", color: "black" }}>
                {regions.length == 0 ? (
                  <Spinner animation="border" />
                ) : (
                  <>
                    <Tabs
                      defaultActiveKey="North America"
                      onSelect={handleSelect}
                    >
                      {regions.map((e) => {
                        return (
                          <Tab eventKey={e} title={e} key={e}>
                            <EachRegion />
                          </Tab>
                        );
                      })}
                    </Tabs>
                  </>
                )}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </>
  );
};

export default Reports;
