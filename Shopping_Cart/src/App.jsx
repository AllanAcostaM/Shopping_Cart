import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Store
import { calculateTotals } from "./features/cart/cartSlice";

// Componentes
import CartContainer from "./components/cart/CartContainer";
import Modal from "./components/Modal";
import NavBar from "./components/navbar/NavBar";

const App = () => {
  // Obtiene los datos de store
  const cartItems = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  // useEffect se ejecuta cada vez que cambia cartItems
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <>
      <NavBar />
      <CartContainer />
      <Modal />
    </>
  );
};

export default App;
