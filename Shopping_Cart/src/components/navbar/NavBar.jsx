import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";

const NavBar = () => {
  // Obtiene un valor del state
  const { amount } = useSelector((store) => store.cart);

  return (
    <header>
      <h1>My store</h1>
      <div className="amount_container">
        <BsCart4 className="cart_icon" />
        <span className="badge">{amount}</span>
      </div>
    </header>
  );
};

export default NavBar;
