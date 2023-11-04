import { useSelector } from "react-redux";

const CartFooter = () => {
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
      <button className="cart_footer__btn_clear">Clear cart</button>
    </footer>
  );
};

export default CartFooter;
