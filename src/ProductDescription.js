function ProductDescription({ count, incCount, decCount, onToCart }) {
  return (
    <div className="description">
      <h1 className="heading-primary">Sneaker Company</h1>
      <h2 className="description__heading">Fall Limited Edition Sneakers</h2>
      <p className="description__paragraph">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="price">
        <div className="price__current">
          <p className="price__current--price">$125.00</p>
          <span className="price__current--discount">50%</span>
        </div>
        <div className="price__old">$250.00</div>
      </div>

      <div className="cart-operations">
        <div className="cart-operations__count">
          <button
            className="cart-operations__btn cart-operations__btn--dec"
            onClick={decCount}
          >
            <img src="images/icon-minus.svg" alt="minus button" />
          </button>
          <span className="cart-operations__current">{count}</span>
          <button
            className="cart-operations__btn cart-operations__btn--inc"
            onClick={incCount}
          >
            <img src="images/icon-plus.svg" alt="plus button" />
          </button>
        </div>

        <button className="cart-operations__add" onClick={onToCart}>
          <img src="images/icon-cart-white.svg" alt="cart button" />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}

export default ProductDescription;
