import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";

const CartContainer = () => {
  // Obtiene el estado centralizado en redux (useSelector trae la informacion del slice)
  const { cartItems } = useSelector((store) => store.cart);

  return (
    <section className="cart_container">
      <div className="cart_container__header">
        <h2>Your Cart</h2>
      </div>
      <div className="cart_container__articles">
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <CartFooter />
    </section>
  );
};

export default CartContainer;
