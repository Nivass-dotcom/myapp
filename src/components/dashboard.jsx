import React from "react";
import Sidenav from "./sidenav";
import { Col, Row } from "react-bootstrap";
import { productsData } from "../data/products";
import { Link } from "react-router-dom";

const Dashboard = ({ data }) => {
  // Ensuring that `data` is defined before using it.
  const safeData = data && Array.isArray(data) ? data.slice(0, 10) : [];
  const NewData = productsData.slice(0, 3); // Slice to get first 3 items from productsData

  return (
    <div>
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10} style={{ padding: "5%" }}>
          <div className="dash maindata">
            {/* Rendering product data */}
            {NewData.map((product) => {
              return (
                <div className="productdata" key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <p>{product.id}</p>
                  <p>{product.name}</p>
                  <p>{product.Price}</p>
                </div>
              );
            })}
            {/* Link to another route */}
            <Link to="/mobile">
              <p>View More</p>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
