import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../features/modal/modalSlice";

const CartFooter = () => {
  // Objeto que invoca el action en el reducer
  const dispatch = useDispatch();

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
        onClick={() => dispatch(openModal())}
      >
        Clear cart
      </button>
    </footer>
  );
};

export default CartFooter;
