import React from "react";

const About = () => {
  return (
    <div style={{ marginTop: "10px" }}>
      <h5>
        This website is purposely created to apply the practices of React in
        practical demands
      </h5>

      <h6>
        {" "}
        <span style={{ border: "solid red 2px" }}>Note</span>: The project uses
        APIs, it doesnt guarantee the sustainability of fetching data in the
        future (if APIs' json structure dramatically modified)
      </h6>
      <h5 style={{ color: "red" }}>Documentation</h5>
      <ul>
        <li>
          <h6>
            Live Covid data (update every 10 minute) from{" "}
            <a
              href="https://www.worldometers.info/"
              style={{ textDecoration: "none" }}
            >
              Worldometers
            </a>
          </h6>
        </li>
        <li>
          <h6>
            Countries list data from{" "}
            <a
              href="https://restcountries.eu/"
              style={{ textDecoration: "none" }}
            >
              Rest Countries
            </a>
          </h6>
        </li>
        <li>
          <h6>
            Countries flag images from{" "}
            <a
              href="https://www.countryflags.io/"
              style={{ textDecoration: "none" }}
            >
              CountryFlagIO
            </a>
          </h6>
        </li>
      </ul>
    </div>
  );
};

export default About;
