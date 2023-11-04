import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCard } from "../../features/cart/cartSlice";

const CartFooter = () => {
  // Objeto que invoca el action en el reducer
  const dispatch = useDispatch();
  // Obtienen acceso a la variable 'total' definida en el store
  const { total } = useSelector((store) => store.cart);
  return (
    <footer className="cart_footer">
      <hr />
      <div className="cart_footer__total">
        <h4>
          Total <span>${total}</span>
        </h4>
      </div>
      <button
        className="cart_footer__btn_clear"
        onClick={() => dispatch(clearCard())}
      >
        Clear carts
      </button>
    </footer>
  );
};

export default CartFooter;
