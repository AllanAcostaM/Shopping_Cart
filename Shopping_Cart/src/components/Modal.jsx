const Modal = () => {
  return (
    <aside className="modal_container">
      <div className="modal">
        <h4>Are you sure to clear the cart?</h4>
        <div className="btn_container">
          <button type="button" className="btn btn_confirm">
            Confirm
          </button>
          <button type="button" className="btn btn_cancel">
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
