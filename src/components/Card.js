import { Col, Row } from "react-bootstrap";
import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <Col md={3} sm={6} className="card_col mx-4">
        <Row className="d-flex flex-row justify-content-center">
          <div className="card">
            <div className="card-img-top">
              <img src={img} alt={title} className="img-fluid" />
            </div>
            <div className="card-details">
              <h6 className="card-title">{title}</h6>
              <section className="card-reviews">
                {star} {star} {star} {star}
                <span className="total-reviews">{reviews}</span>
              </section>
              <section className="card-price">
                <div className="price">
                  <del>{prevPrice}</del> {newPrice}
                </div>
                <div className="bag">
                  <BsFillBagFill className="bag-icon" />
                </div>
              </section>
            </div>
          </div>
        </Row>
      </Col>
    </>
  );
};

export default Card;
