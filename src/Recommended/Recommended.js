import React from "react";
import "./Recommended.css";
import Buttons from "../components/Buttons";
import { Col, Container, Row } from "react-bootstrap";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <Container>
        <Row className="d-flex flex-row justify-content-center">
          <Col md={10}>
            <h2 className="recommended-title">Recommended</h2>
            <div className="recommended-flex">
              <Buttons
                onClickHandler={handleClick}
                value=""
                title="All Products"
              />
              <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
              <Buttons
                onClickHandler={handleClick}
                value="Adidas"
                title="Adidas"
              />
              <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
              <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Recommended;
