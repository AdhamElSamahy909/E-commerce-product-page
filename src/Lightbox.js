import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
import { useState } from "react";

function Lightbox({
  show,
  onClose,
  //   onIncrementIndex,
  //   onDecrementIndex,
  //   index,
}) {
  const [index, setIndex] = useState(0);

  function handleIncrementIndex() {
    setIndex((i) => (i === 3 ? 0 : i + 1));
  }

  function handleDecrementIndex() {
    setIndex((i) => (i === 0 ? 3 : i - 1));
  }

  const imagesIndexes = Array.from({ length: 4 }, (_, i) => i);
  if (!show) return null;

  return (
    <>
      <Backdrop onClose={onClose} />
      {createPortal(
        <div className="lightbox">
          <button className="lightbox__close" onClick={onClose}>
            <img src="images/icon-close.svg" alt="close button" />
          </button>

          <div className="lightbox__container">
            <img
              src={`images/image-product-${index + 1}.jpg`}
              alt={`product 1`}
              className="lightbox__img"
            />
            <button
              className="lightbox__btn lightbox__btn--prev"
              onClick={handleDecrementIndex}
            >
              <img src="images/icon-previous.svg" alt="previous button" />
            </button>
            <button
              className="lightbox__btn lightbox__btn--next"
              onClick={handleIncrementIndex}
            >
              <img src="images/icon-next.svg" alt="next button" />
            </button>
          </div>

          <div className="lightbox__thumbnails">
            {imagesIndexes.map((imageIndex) => (
              <div
                className={`lightbox__carousel ${
                  index === imageIndex ? "lightbox__carousel--active" : ""
                }`}
                key={imageIndex}
              >
                <img
                  src={`images/image-product-${imageIndex + 1}-thumbnail.jpg`}
                  alt="thumbnail"
                  className={`lightbox__thumbnail ${
                    index === imageIndex ? "lightbox__thumbnail--active" : ""
                  }`}
                  onClick={() => setIndex(imageIndex)}
                />
              </div>
            ))}
          </div>
        </div>,
        document.getElementById("lightbox")
      )}
    </>
  );
}

export default Lightbox;
