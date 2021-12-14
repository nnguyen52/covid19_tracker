import React, { useContext, useState } from "react";
import { HomeContext } from "../../contexts/homeContext";
import { Link } from "react-router-dom";
import "./searchbox.css";
import {
  Spinner,
  Form,
  FormControl,
  Button,
  Overlay,
  Popover,
} from "react-bootstrap";

const SearchBoxCountry = () => {
  const {
    homeState: { allcountriesReports, searchCountriesResult, show, target },
    findSearchedCountry,
    closeSearchResult,
  } = useContext(HomeContext);
  if (allcountriesReports.length == 0) return <Spinner animation="border" />;
  return (
    <>
      <Form onSubmit={(e) => findSearchedCountry(e, e.target.value)}>
        <div style={{ display: "flex" }}>
          <FormControl
            type="text"
            placeholder="Search country"
            onChange={(e) => findSearchedCountry(e, e.target.value)}
          />
          <Button type="submit" variant="outline-success">
            Search
          </Button>
        </div>
      </Form>
      {target != null && (
        <Overlay show={show} target={target} placement="bottom">
          {searchCountriesResult.length == 0 ? (
            <Popover style={{ backgroundColor: "black", color: "white" }}>
              <Popover.Content style={{ color: "white" }}>
                <h5>No result</h5>
              </Popover.Content>
              <Button
                variant="outline-primary"
                style={{ float: "right" }}
                onClick={closeSearchResult}
              >
                Close
              </Button>
            </Popover>
          ) : (
            <Popover style={{ backgroundColor: "black" }}>
              <div
                style={{
                  width: "300px",
                  height: `${
                    searchCountriesResult.length < 5
                      ? `${(searchCountriesResult.length + 1) * 64}px`
                      : `${5 * 64}px`
                  }`,
                  overflow: "auto",
                }}
              >
                {searchCountriesResult.map((each) => {
                  return (
                    <>
                      <Popover.Content className="hoverLink">
                        <Link
                          style={{
                            textDecoration: "none",
                            fontSize: "20px",
                          }}
                          to={`/country?name=${each.country}`}
                          className="hoverLink"
                        >
                          {each.country}
                        </Link>
                      </Popover.Content>
                    </>
                  );
                })}
                <Button
                  variant="outline-primary"
                  style={{ float: "right", marginRight: "30px" }}
                  onClick={closeSearchResult}
                >
                  Close
                </Button>
              </div>
            </Popover>
          )}
        </Overlay>
      )}
    </>
  );
};

export default SearchBoxCountry;
