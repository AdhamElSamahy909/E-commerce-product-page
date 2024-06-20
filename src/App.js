import { useState } from "react";
import Header from "./Header";
import ImageGallery from "./ImageGallery";
import ProductDescription from "./ProductDescription";
import Lightbox from "./Lightbox";

function App() {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  const [showLightBox, setShowLightBox] = useState();
  const [index, setIndex] = useState(0);

  function handleIncrementIndex() {
    setIndex((i) => (i === 3 ? 0 : i + 1));
  }

  function handleDecrementIndex() {
    setIndex((i) => (i === 0 ? 3 : i - 1));
  }

  function handleIncrementCount() {
    setCount((c) => c + 1);
  }

  function handleDecrementCount() {
    setCount((c) => (c - 1 < 0 ? 0 : c - 1));
  }

  function handleAddToCart() {
    setCartItems((c) => c + count);
    setCount(0);
  }

  function emptyCart() {
    setCartItems(0);
  }

  return (
    <>
      <Header cartItems={cartItems} emptyCart={emptyCart} />
      <main className="main">
        <ImageGallery
          onShowLightBox={() => setShowLightBox(true)}
          onIncrementIndex={handleIncrementIndex}
          onDecrementIndex={handleDecrementIndex}
          setIndex={setIndex}
          index={index}
        />
        <ProductDescription
          count={count}
          decCount={handleDecrementCount}
          incCount={handleIncrementCount}
          onToCart={handleAddToCart}
        />

        <Lightbox
          show={showLightBox}
          onClose={() => setShowLightBox(false)}
          onIncrementIndex={handleIncrementIndex}
          onDecrementIndex={handleDecrementIndex}
          index={index}
        />
      </main>
    </>
  );
}

export default App;
