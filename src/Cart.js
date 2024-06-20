function Cart({ cartItems, closeLightBox, emptyCart }) {
  const total = cartItems * 125;

  function handleDelete() {
    emptyCart();
    closeLightBox();
  }

  return (
    <div className="cart">
      <h2 className="cart__heading">Cart</h2>

      <div className="cart__content">
        {cartItems > 0 ? (
          <>
            <div className="cart__details">
              <img
                src="images/image-product-1-thumbnail.jpg"
                alt=""
                className="cart__img"
              />
              <div className="cart__items">
                <h3 className="cart__item">Fall Limited Edition Sneakers</h3>
                <p className="cart__price">
                  $125.00 x {cartItems}{" "}
                  <span className="cart__price--total">${total}</span>
                </p>
              </div>
              <button className="cart__delete" onClick={handleDelete}>
                <img src="images/icon-delete.svg" alt="delete button" />
              </button>
            </div>

            <button className="cart__checkout">Checkout</button>
          </>
        ) : (
          <p className="cart__empty">Your Cart is empty</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
