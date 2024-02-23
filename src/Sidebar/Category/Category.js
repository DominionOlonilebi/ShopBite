import "./Category.css";
import Input from "../../components/Input";
import { Col, Container, Row } from "react-bootstrap";

function Category({ handleChange }) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2 className="sidebar-title">Category</h2>

            <div>
              <label className="sidebar-label-container">
                <input
                  onChange={handleChange}
                  type="radio"
                  value=""
                  name="test"
                />
                <span className="checkmark"></span>All
              </label>
              <Input
                handleChange={handleChange}
                value="sneakers"
                title="Sneakers"
                name="test"
              />
              <Input
                handleChange={handleChange}
                value="flats"
                title="Flats"
                name="test"
              />
              <Input
                handleChange={handleChange}
                value="sandals"
                title="Sandals"
                name="test"
              />
              <Input
                handleChange={handleChange}
                value="heels"
                title="Heels"
                name="test"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Category;
