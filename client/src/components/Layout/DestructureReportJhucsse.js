import React, { useContext } from "react";
import { AdvancedStatsContext } from "../../contexts/advancedStats";
import { Spinner } from "react-bootstrap";
const DestructureReportJhucsse = () => {
  const {
    advancedStats: {
      output: { reportData },
      loadingFetching,
    },
  } = useContext(AdvancedStatsContext);

  //output is an object

  if (loadingFetching == false && reportData != null)
    return <h5> Data unavailable</h5>;
  if (loadingFetching == false && reportData == null) return <h5> Loading</h5>;
  return (
    <div style={{ marginTop: "10px" }}>
      <h5>
        <ul>
          {reportData.map((each) =>
            each[0] === "coordinates" ? null : each[0] === "stats" ? (
              Object.entries(each[1]).map((stat) => {
                return (
                  <li>
                    {" "}
                    {`${stat[0]}: `}{" "}
                    <span style={{ color: "red" }}>
                      {stat[1] == null ? "unavailable" : stat[1]}
                    </span>
                  </li>
                );
              })
            ) : (
              <li>
                {`${each[0]}: `} <span style={{ color: "red" }}>{each[1]}</span>
              </li>
            )
          )}
        </ul>
      </h5>
    </div>
  );
};

export default DestructureReportJhucsse;
