import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <div className="amount_container">
      <BsCart4 className="cart_icon" />
      <span className="badge">{amount}</span>
    </div>
  );
};

export default CartIcon;
