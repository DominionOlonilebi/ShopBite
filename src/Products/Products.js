import { Card, Col, Container, Row } from "react-bootstrap";
import "./Products.css";

const Products = ({ result }) => {
  return (
    <>
      <div className="card-container">{result}</div>
    </>
  );
};

export default Products;
