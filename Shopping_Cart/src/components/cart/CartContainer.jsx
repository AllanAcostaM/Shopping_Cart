import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartContainer = () => {
  // Obtiene el estado centralizado en redux (useSelector trae la informacion del slice)
  const { cartItems } = useSelector((store) => store.cart);

  return (
    <section className="cart_container">
      <div className="cart_container__header">
        <h2>Your Cart</h2>
      </div>
      <div className="cart_container__articles">
        <ul>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default CartContainer;
