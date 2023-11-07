import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import CartContainer from "./components/cart/CartContainer";
import NavBar from "./components/navbar/NavBar";
import { calculateTotals } from "./features/cart/cartSlice";

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
    </>
  );
};

export default App;
