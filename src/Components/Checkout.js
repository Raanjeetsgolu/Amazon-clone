import React from "react";
import "./Checkout.css";
import ProductCheckout from "./ProductCheckout";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="amazon-logo"
        />
        <div className="checkout_product"></div>
        {basket.map((item) => (
          <ProductCheckout
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout_rigth">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
