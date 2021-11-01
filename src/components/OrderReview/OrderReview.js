import React from "react";
import useCart from "../../hooks/useCart";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { clearTheCart, deleteFromDb } from "../../utilities/fakedb";
import { useHistory } from "react-router";

const OrderReview = () => {
  // const [products] = useProducts();
  const [cart, setCart] = useCart();
  const history = useHistory();

  const handelRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    deleteFromDb(key);
  };

  const handelProceedToShipping = () => {
    history.push("/shipping");
    // setCart([]);
    // clearTheCart();
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            handelRemove={handelRemove}
            product={product}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handelProceedToShipping} className="btn-regular">
            Proceed To Shipping
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
