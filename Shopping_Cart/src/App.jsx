import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Store
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";

// Componentes
import CartContainer from "./components/cart/CartContainer";
import Modal from "./components/Modal";
import NavBar from "./components/navbar/NavBar";
import Loading from "./components/Loading";

const App = () => {
  // Obtiene los datos de store del cart
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  // Obtiene los datos de store del modal
  const { isOpen } = useSelector((store) => store.modal);
  // Ejecuta un action para modificar el state
  const dispatch = useDispatch();

  // useEffect se ejecuta cada vez que cambia cartItems
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  // useEffect se ejecuta al iniciar la aplicacion
  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  if (isLoading) return <Loading />;

  return (
    <>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </>
  );
};

export default App;
