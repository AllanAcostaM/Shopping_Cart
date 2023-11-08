import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { clearCard } from "../features/cart/cartSlice";

const Modal = () => {
  const dispatch = useDispatch();

  const clearCartAndCloseModal = () => {
    dispatch(clearCard(), dispatch(closeModal()));
  };

  return (
    <aside className="modal_container">
      <div className="modal">
        <h4>Are you sure to clear the cart?</h4>
        <div className="btn_container">
          <button
            type="button"
            className="btn btn_confirm"
            onClick={() => dispatch(clearCartAndCloseModal())}
          >
            Confirm
          </button>
          <button
            type="button"
            className="btn btn_cancel"
            onClick={() => dispatch(closeModal())}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
