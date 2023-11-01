import { BsCart4 } from "react-icons/bs";

const NavBar = () => {
  return (
    <header>
      <h1>My store</h1>
      <div className="amount_container">
        <BsCart4 className="cart_icon" />
        <span className="badge">4</span>
      </div>
    </header>
  );
};

export default NavBar;
