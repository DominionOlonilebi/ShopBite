import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";
import { Col, Container, Row } from "react-bootstrap";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <div className="sidebar">
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <Col>
              <div className="logo-container">
                <h1>🛒</h1>
              </div>
              <Category handleChange={handleChange} />
              <Price handleChange={handleChange} />
              <Colors handleChange={handleChange} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Sidebar;
