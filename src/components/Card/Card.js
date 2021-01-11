import React from "react";
import { Link } from "react-router-dom";
import notAvailable from "../../utils/img/not-available.jpg";

const Card = ({ products }) => {
  return products.map(({ _id, image, product_name, category, price }, i) => (
    <div key={i} className="col-sm-3">
      <Link style={{ textDecoration: "none" }} to={`/product/${_id}`}>
        <div className="mb-4 __card__container">
          <picture className="__card_image_container"><img
            className="card-img-top"
            src={image || notAvailable}
            alt={product_name}
          />
          </picture>
          <div className="__card_body">
            <h4 className="__card__title">{product_name}</h4>
            <p>
             $ {price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  ));
};

export default Card;
