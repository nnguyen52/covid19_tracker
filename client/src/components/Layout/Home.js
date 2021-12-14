import React, { useContext } from "react";
import { HomeContext } from "../../contexts/homeContext";
import { Spinner, Card } from "react-bootstrap";
import Reports from "../AllCaseReport";
const Home = () => {
  const {
    homeState: { loading },
  } = useContext(HomeContext);
  if (loading) return <Spinner animation="border" variant="dark" />;
  return (
    <div>
      <Card>
        <Card.Header>
          {" "}
          <h4>Welcome to Covid Tracker</h4>
        </Card.Header>
        <Card.Body>
          <Card.Subtitle style={{ marginBottom: "10px" }}>
            <span
              style={{
                border: "solid 2px red",
              }}
            >
              {" "}
              Note:
            </span>{" "}
            to search States in the USA, please visit{" "}
            <a href="/advancedStats" style={{ textDecoration: "none" }}>
              Advanced Search
            </a>
          </Card.Subtitle>
          <Reports />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
