import { Button, Switch } from "@material-ui/core";
import React from "react";
import "./ProductCheckout.css";
import { useStateValue } from "./StateProvider";

const ProductCheckout = ({ id, title, rating, image, price, hide }) => {
  const [{ basket }, dispatch] = useStateValue();
  const Removefromcart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="productCheckout">
      <div className="productCheckout_list">
        <img src={image} />
        <div className="productCheckout_listinfo">
          <h3>{title}</h3>
          <div className="productCheckout_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>

          <Button onClick={Removefromcart}>Remove from cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCheckout;
