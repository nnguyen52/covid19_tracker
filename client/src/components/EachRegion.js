import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import DestructureReport from "./Layout/DestructureReport";
import { HomeContext } from "../contexts/homeContext";
import ContriesInRegion from "./CoutriesInRegion";
const EachRegion = () => {
  const {
    homeState: { loadRegionReport, regionReport },
  } = useContext(HomeContext);
  if (loadRegionReport) return <Spinner animation="border" className="mt-3" />;
  return (
    <div style={{ marginTop: "20px" }}>
      <DestructureReport output={regionReport} />
      <ContriesInRegion />
    </div>
  );
};

export default EachRegion;
