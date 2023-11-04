import PropTypes from "prop-types";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const CartItem = ({ id, title, price, img, amount }) => {
  return (
    <article key={id} className="cart_item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button className="cart_item__remove_btn">Remove</button>
      </div>
      <div>
        <button className="cart_item__amount_btn">
          <FaChevronUp />
        </button>
        <p className="cart_item__amount_btn_text">{amount}</p>
        <button className="cart_item__amount_btn">
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
