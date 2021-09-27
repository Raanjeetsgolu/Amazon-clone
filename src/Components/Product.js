import React from "react";
import "./Product.css";
import { Button } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

const Product = ({ price, title, rating, image, id }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
  return (
    <div className="product">
      <h3 className="product_title">{title}</h3>
      <div className="product_info">
        <img src={image} alt={title} />
        <h5 className="product_price_rating">
          <span className="product_price">₹ {price}</span>
          <span className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>
                  <StarIcon />{" "}
                </p>
              ))}
          </span>
        </h5>
        {/*  */}
        <div>
          <span>
            <Button className="product_addtocart" onClick={addToBasket}>
              Add to Cart
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
