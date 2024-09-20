import React from "react";
import { productsData } from "../data/products";
import { Link } from "react-router-dom";

function Earbuds() {
  return (
    <div className="maindata">
      {productsData.map((e) => {
        return (
          <div className="productsdata">
            <Link to={`/earbuds/${e.id}`}>
              <img src={e.image} alt="" />
            </Link>
            <p> Brand Name : {e.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Earbuds;
