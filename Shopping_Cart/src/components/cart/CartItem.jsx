import PropTypes from "prop-types";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { removeItem } from "../../features/cart/cartSlice";
import { increaseItemAmount } from "../../features/cart/cartSlice";
import { decreaseItemAmount } from "../../features/cart/cartSlice";

const CartItem = ({ id, title, price, img, amount }) => {
  // Obtiene el dispatch
  const dispatch = useDispatch();

  const decreaseItem = () => {
    if (amount === 1) {
      // Elimina el item del carrito
      dispatch(removeItem(id));

      return;
    }

    // Reduce la cantidad del item del carrito
    dispatch(decreaseItemAmount(id));
  };

  return (
    <article key={id} className="cart_item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button
          className="cart_item__remove_btn"
          onClick={() => dispatch(removeItem(id))}
        >
          Remove
        </button>
      </div>
      <div>
        <button
          className="cart_item__amount_btn"
          onClick={() => dispatch(increaseItemAmount(id))}
        >
          <FaChevronUp />
        </button>
        <p className="cart_item__amount_btn_text">{amount}</p>
        <button
          className="cart_item__amount_btn"
          onClick={() => decreaseItem()}
        >
          <FaChevronDown />
        </button>
      </div>
    </article>
  );
};

CartItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
  amount: PropTypes.number,
};

export default CartItem;
