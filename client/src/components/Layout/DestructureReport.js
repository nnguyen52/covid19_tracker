import React from "react";

const DestructureReport = ({ output }) => {
  return (
    <>
      <h4>
        <ul>
          {Object.entries(output).map((e) =>
            e[0] === "cases" ||
            e[0] === "todayCases" ||
            e[0] === "todayDeaths" ||
            e[0] === "active" ||
            e[0] === "critical" ||
            e[0] === "deaths" ||
            e[0] === "recovered" ||
            e[0] === "todayRecovered" ||
            e[0] === "tests" ||
            e[0] === "population" ||
            e[0] === "activePerOneMillion" ||
            e[0] === "recoveredPerOneMillion" ? (
              <li key={e[0]}>
                <h5 style={{ textTransform: "capitalize" }}>
                  {e[0].match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g).join(" ")} :{" "}
                  <span style={{ color: "red" }}>
                    {" "}
                    {parseFloat(e[1]).toLocaleString("en")}
                  </span>
                </h5>
              </li>
            ) : null
          )}
        </ul>
      </h4>
    </>
  );
};

export default DestructureReport;
